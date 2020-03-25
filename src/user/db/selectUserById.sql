SELECT
  u.id,
  u.first_name,
  u.last_name,
  u.email,
  u.password
FROM 
  user u
WHERE 
  u.id = ?;
