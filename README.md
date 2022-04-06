# Deal Quest
1. Create a .env file at `/backend/.env` using the template provided in the  `/backend/.env.example`
2. Create database user
3. initialize DB: `npx sequelize-cli db:create`
4. run pending migrations `npx sequelize-cli db:migrate`
5. run pending seeds `npx sequelize-cli db:seed:all`


╰─ heroku run npm run sequelize db:seed:undo:all && heroku run npm run sequelize db:migrate:undo:all && heroku run npm run sequelize db:migrate && heroku run npm run sequelize db:seed:all
