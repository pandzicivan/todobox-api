## Run locally

Execute commands in order:

`npm install`

Then create the file `.env` and copy the placeholders from `.env.example`. Replace the placeholders with proper values.

`docker-compose up`

## Run DB migrations

Changes of DB schea are executed inside container. Command for DB shema change is:

`docker exec todoer_node npm run migrate -- -f=${migration_name}`

All migrations should be added inside `/migrations` folder. Preferred naming is:

`${date}-name.sql`

##### Setting up the DB schema

Initial migration is required for setting up the basic DB stucture neccesarry to use the app.

`docker exec todoer_node npm run migrate -- -f=create_db.sql`

