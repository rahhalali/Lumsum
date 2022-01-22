const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const httpErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');

// swagger steps 1
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
// swagger steps 1

// steps.8 - start

const bodyParser = require('body-parser');
// steps.8 - start
const indexRouter = require('./routes/index');
const githubsRouter = require('./routes/github');

// swagger step 2
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Github API',
      version: '1.0.0',
      description: 'Getting Repos and Users info From Github API'
    },
    servers: [{

      url: 'http://localhost:5000'
    }]
  },
  apis: ['../githubback/controllers/*.js']
};

const spacs = swaggerJsDoc(options);
// swagger step 2

const app = express();

// swagger step 3

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(spacs));

// swagger step 3

// view engine setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// steps.9 - start
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// steps.9 - end

app.use('/', indexRouter);
app.use('/fetching', githubsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
