const pool = require('./db');

const cache = {};

const resolvers = {
  Query: {
    getMetrics: async () => {
      const metrics = await pool.query('SELECT * FROM metrics');
      return metrics.rows.map(({ id, type, value, timestamp }) => ({
        id,
        type,
        value,
        timestamp
      }));
    },
    getCommitSuccessRate: async () => {
      const cacheKey = 'commitSuccessRate';
      if (cache[cacheKey]) {
        return cache[cacheKey]; // Return cached data if available
      }
      const result = await pool.query(
        'SELECT AVG(success::int) AS success_rate FROM commits'
      );
      const successRate = parseFloat(result.rows[0].success_rate);
      cache[cacheKey] = successRate; // Store result in cache
      return successRate;
    },
    getAverageBuildDuration: async () => {
      const cacheKey = 'averageBuildDuration';
      if (cache[cacheKey]) {
        return cache[cacheKey]; // Return cached data if available
      }
      const result = await pool.query(
        'SELECT AVG(duration) AS average_duration FROM builds WHERE success = true'
      );
      const averageDuration = result.rows[0].average_duration;
      cache[cacheKey] = averageDuration; // Store result in cache
      return averageDuration;
    },
    getTestPassRate: async () => {
      const cacheKey = 'testPassRate';
      if (cache[cacheKey]) {
        return cache[cacheKey]; // Return cached data if available
      }
      const result = await pool.query(
        'SELECT AVG(passed::float / total_tests) AS pass_rate FROM tests'
      );
      const passRate = result.rows[0].pass_rate;
      cache[cacheKey] = passRate; // Store result in cache
      return passRate;
    }
  }
};

module.exports = resolvers;
