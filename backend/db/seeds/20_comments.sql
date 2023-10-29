-- CREATE TABLE comments (
--   comment_id serial PRIMARY KEY NOT NULL,
--   post_id int REFERENCES posts(post_id),
--   user_id int REFERENCES users(userID),
--   comment TEXT,
--   timestamp time
-- );

INSERT INTO comments (post_id, user_id, comment, timestamp)
VALUES
  (1, 1, 'Comment for Community', '2023-01-30 12:00:00'),
  (1, 2, 'Comment for Community', '2023-02-28 14:30:00'),
  (1, 3, 'Comment for Community', '2023-02-28 14:30:00'),
  (2, 1, 'Comment for Community', '2023-02-28 14:30:00'),
  (2, 2, 'Comment for Community', '2023-02-28 14:30:00'),
  (2, 3, 'Comment for Community', '2023-02-28 14:30:00'),
  (3, 1, 'Comment for Community', '2023-02-28 14:30:00'),
  (3, 2, 'Comment for Community', '2023-02-28 14:30:00'),
  (3, 2, 'Comment for Community', '2023-02-28 14:30:00');