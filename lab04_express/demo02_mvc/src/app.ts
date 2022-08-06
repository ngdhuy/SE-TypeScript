import express from 'express';


const app = express();

// define routers

// config routers

// define catch error
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // response error to client
  res.status(err.status || 500);
  res.end();
});

export default app;
