import { useQuery, gql } from '@apollo/client';
import styles from '../styles/Home.module.css';

const GET_METRICS_QUERY = gql`
  query GetMetrics {
    getMetrics {
      id
      type
      value
      timestamp
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_METRICS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          DevMetrics Dashboard
        </h1>

        <div className={styles.grid}>
          {data.getMetrics.map((metric) => (
            <div key={metric.id} className={styles.card}>
              <h3>{metric.type}</h3>
              <p>{metric.value}</p>
              <small>{new Date(metric.timestamp).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}