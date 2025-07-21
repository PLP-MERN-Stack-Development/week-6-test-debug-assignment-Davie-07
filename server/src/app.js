const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use(logger);

app.use('/api/posts', postRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Global error handler
app.use(errorHandler);

module.exports = app; 