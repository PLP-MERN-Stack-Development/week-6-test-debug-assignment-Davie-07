// errorHandler.js - Global error handler middleware
module.exports = (err, req, res, next) => {
  console.error('Global Error Handler:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
}; 