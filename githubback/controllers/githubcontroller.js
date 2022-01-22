const fetch = require('node-fetch');
const redis = require('redis');

const client = redis.createClient(6379);
client.connect();

class GithubController {
  /**
   * @swagger
   * components:
   *   schemas:
   *     GitHub:
   *       type: object
   *       required:
   *         - name
   *         - type
   *       properties:
   *         name:
   *           type: string
   *           description: The name of the user or repo title
   *         type:
   *           type: string
   *           description: choose between user or repo
   *       example:
   *         name: rahhalali
   *         type: users or repositories
   */

  /**
   * @swagger
   * tags:
   *   name: Users Repositories
   *   description: The users or repositories search API
   */

  /**
   * @swagger
   * /fetching/searches:
   *   post:
   *     summary: Get users or repos details
   *     tags: [users,repositories]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/GitHub'
   *     responses:
   *       201:
   *         description: Fetch has been Successfully fetched
   *       404:
   *         description: No Data to Show right Now
   *       403:
   *         description: User not Found
   */
  // eslint-disable-next-line class-methods-use-this
  post(req, res, next) {
    const q = req.body;
    const types = q.type;
    const get = q.q;
    (async () => {
      try {
        const response = await fetch(`https://api.github.com/search/${types}?q=${get}&per_page=60`);
        const result = await response.json();
        const list = [];
        let counter = 0;
        if (types === 'users') {
          if (result.items.length !== 0) {
            while (counter < result.items.length) {
              // eslint-disable-next-line no-await-in-loop
              const fetchedProduct = await fetch(result.items[counter].url, {
                method: 'GET'
              },);
              // eslint-disable-next-line no-await-in-loop
              const final = await fetchedProduct.json();
              if (typeof final.message !== 'undefined') {
                res.send({ messages: 'No Data to Show right Now', status: 404 });
              }
              list.push(final);
              // eslint-disable-next-line no-plusplus
              counter++;
            }
            await client.setEx(get + types, 7200, JSON.stringify(list));
            res.send({ messages: list, status: 201 });
          } else {
            res.send({ messages: 'User Not Found', status: 405 });
          }
        } else {
          await client.setEx(get + types, 7200, JSON.stringify(result));
          res.send({ messages: result, status: 201 });
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err.message);
      }
    })();
  }

  /**
   * @swagger
   * /fetching/clear:
   *   post:
   *     summary: Clear Caching
   *     tags: [Clear]
   *     responses:
   *       200:
   *         description: The Cache has been cleared successfully
   */
  // eslint-disable-next-line class-methods-use-this
  async clear(req, res) {
    await client.flushAll();
    res.send({ messages: 'Caching Cleared', status: 200 });
  }
}
const githubController = new GithubController();
module.exports = githubController;
