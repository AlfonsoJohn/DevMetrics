const { gql } = require('apollo-server-express');

// Define GraphQL type definitions
const typeDefs = gql`
  # Root type for all read-only fetch operations
  type Query {
    # Fetches an array of Metric types
    getMetrics: [Metric]
    getCommitSuccessRate: Float
    getAverageBuildDuration: Float
    getTestPassRate: Float
  }

  # Represents a single metric data point
  type Metric {
    id: ID          # Unique identifier for the metric
    type: String    # Type of the metric, e.g., 'CPU', 'Memory'
    value: Float    # Numeric value of the metric
    timestamp: String  # ISO timestamp when the metric was recorded
  }

  type CommitMetric {
    id: ID
    userId: Int
    timestamp: String
    message: String
    success: Boolean
  }

  type BuildMetric {
    id: ID
    userId: Int
    timestamp: String
    duration: Int
    success: Boolean
  }

  type TestMetric {
    id: ID
    buildId: Int
    passed: Int
    totalTests: Int
  }
`;

// Export the type definitions to be used by Apollo Server
module.exports = typeDefs;

