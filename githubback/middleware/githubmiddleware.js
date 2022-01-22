const redis = require('redis');

const client = redis.createClient(6379);
client.connect();
class MiddleWare {
  // eslint-disable-next-line class-methods-use-this
  async caches(req, res, next) {
    console.log('hello');
    const q = req.body;
    const get = q.q;
    const types = q.type;
    const data = await client.GET(get + types);
    if (data !== null) {
      console.log('data');
      res.send({ messages: JSON.parse(data), status: 201 });
    } else {
      next();
    }
  }
}

const middlewares = new MiddleWare();
module.exports = middlewares;
