CREATE TABLE commits (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  message TEXT,
  success BOOLEAN
);

CREATE INDEX idx_user_id_on_commits ON commits(user_id);

CREATE TABLE builds (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  duration INT, -- Duration in seconds
  success BOOLEAN
);

CREATE INDEX idx_user_id_on_builds ON builds(user_id);

CREATE TABLE tests (
  id SERIAL PRIMARY KEY,
  build_id INT NOT NULL,
  passed INT,
  total_tests INT,
  FOREIGN KEY (build_id) REFERENCES builds(id)
);

CREATE INDEX idx_build_id_on_tests ON tests(build_id);

