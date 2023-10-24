DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(user_id) NOT NULL,
  community_id INT REFERENCES communities(community_id) NOT NULL,
  title VARCHAR NOT NULL,
  context TEXT,
  timestamp TIMESTAMP
);
