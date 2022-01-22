const express = require('express');

const router = express.Router();

const githubController = require('../controllers/githubcontroller');
const Middleware = require('../middleware/githubmiddleware');

/* GET Employees listing. */

router.post('/searches', Middleware.caches, githubController.post);
router.post('/clear', githubController.clear);

module.exports = router;
