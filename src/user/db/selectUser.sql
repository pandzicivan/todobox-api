USE todoer;

SELECT
  u.first_name,
  u.last_name,
  u.email,
  u.password
FROM 
  user u
WHERE 
  u.email = ?;
