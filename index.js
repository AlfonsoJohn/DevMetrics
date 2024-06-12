const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

const server = new ApolloServer({ typeDefs, resolvers });

// Start the Apollo server before applying middleware
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();

// Define POST endpoints
const validateCommitData = (req, res, next) => {
  const { user_id, message, success } = req.body;
  if (typeof user_id !== 'number' || typeof message !== 'string' || typeof success !== 'boolean') {
    return res.status(400).json({ error: 'Invalid data format' });
  }
  next();
};

app.post('/api/commit', validateCommitData, async (req, res) => {
  const { user_id, message, success } = req.body;
  const result = await pool.query(
    'INSERT INTO commits(user_id, message, success) VALUES($1, $2, $3) RETURNING *',
    [user_id, message, success]
  );
  res.json(result.rows[0]);
});

app.post('/api/build', async (req, res) => {
  const { user_id, duration, success } = req.body;
  const result = await pool.query(
    'INSERT INTO builds(user_id, duration, success) VALUES($1, $2, $3) RETURNING *',
    [user_id, duration, success]
  );
  res.json(result.rows[0]);
});

app.post('/api/test', async (req, res) => {
  const { build_id, passed, total_tests } = req.body;
  const result = await pool.query(
    'INSERT INTO tests(build_id, passed, total_tests) VALUES($1, $2, $3) RETURNING *',
    [build_id, passed, total_tests]
  );
  res.json(result.rows[0]);
});

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DevMetrics API',
      version: '1.0.0',
    },
  },
  apis: ['./index.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));