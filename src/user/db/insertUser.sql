USE todoer;

INSERT INTO user(
  first_name,
  last_name,
  email,
  username,
  password
) VALUES (
  ?,
  ?,
  ?,
  ?,
  ?
);
