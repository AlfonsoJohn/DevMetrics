# DevMetrics: Developer Productivity Analytics Tool
Work in progress.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technology Stack](#technology-stack)
4. [Getting Started](#getting-started)
5. [Using the GraphQL API](#using-the-graphql-api)
    - [Queries](#queries)
    - [Example Query](#example-query)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview
DevMetrics is a tool designed to collect, analyze, and display metrics that measure the efficiency and productivity of engineering teams. By providing insights into commit frequency, build times, and test pass rates, DevMetrics helps identify trends and potential areas of improvement within the team.

## Key Features
- **Data Collection:** DevMetrics collects data on commit frequency, build times, and test pass rates to gain a comprehensive understanding of the team's performance.
- **Data Analysis:** The collected data is analyzed to identify trends, patterns, and areas of improvement, providing actionable insights for the engineering team.
- **GraphQL API:** A GraphQL API is provided to access the collected and analyzed metrics, allowing for easy integration with other tools and platforms.
- **Dashboard:** A simple dashboard is available to visualize the collected metrics, providing a quick overview of the team's performance.

## Technology Stack
- **Backend:** Developed using Node.js, with Apollo Server for GraphQL.
- **Database:** PostgreSQL is used as the primary database for storing collected and analyzed metrics.
- **Frontend:** A simple Next.js dashboard is provided for displaying metrics, though this can be customized or replaced according to your needs.
- **Infrastructure:** Docker containerization is supported (if needed) to ensure seamless deployment and scalability.

## Getting Started
To get started with DevMetrics, follow these steps:
1. **Clone the repository:** `git clone https://github.com/your-username/devmetrics.git`
2. **Install dependencies:** `npm install`
3. **Set up the database:** Create a PostgreSQL instance and configure the connection details in the `config/database.js` file.
4. **Set up the GraphQL API:** Run `npm run build` to build the API, then `npm run start` to start the server.
5. **(Optional) Set up the frontend:** Configure the `config/frontend.js` file according to your Next.js setup, then run `npm run build-frontend` to build the dashboard.
6. **Explore the API:** Use a GraphQL client like Apollo Client to query the API and retrieve metrics.
7. **Visualize the metrics:** Access the dashboard at `http://localhost:3000` (or the configured frontend URL) to view the collected metrics.

## Using the GraphQL API
The GraphQL API provided by DevMetrics allows you to fetch and interact with the data related to software development activities. Below are the available queries and their descriptions:

### Queries
- **getMetrics:** Fetches an array of all metrics collected, including commit frequency, build times, and test pass rates.
- **getCommitSuccessRate:** Calculates and returns the average success rate of commits.
- **getAverageBuildDuration:** Calculates and returns the average duration of successful builds.
- **getTestPassRate:** Calculates and returns the pass rate of tests.

### Example Query
To fetch all metrics:


### Contributing
DevMetrics is an open-source project, and we welcome contributions from the community. If you'd like to contribute, please create a new branch and submit a pull request for review.

### License
DevMetrics is licensed under the MIT License. See LICENSE for details.
