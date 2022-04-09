# GameCom

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

GameCom is a social media application created for the gaming community to connect and share information. It creates an environment for people who are passionate about games to come together. While in GameCom, users not only can see the latest news related to gaming world, but they can also see registered users posts, comments and how helpful a post is.
GameCom users can also create an account to be able to post their own articles, review games, talk about deals, tricks or basically anything they find interesting. Registered users can also mark another user's post as helpful or unhelpful and even add comments to it.

A working Express.js API was configured to use Sequelize to interact with a MySQL database created using models and associations. It handles user authentication and provides password encryption. To create the visual structure of this application handlebars were used. Additionally, this application uses a third party API (Gaming-News ) to provide news related to the gaming world. RESTful CRUD operations were tested using Insomnia


## Installation

1. Clone the repository from GitHub. 
2. Run `npm i`  To install the neccesary dependencies:
   - dotenv: to use environment variables to store sensitive data, like your MySQL username, password, and database name.
   - express, mysql2 and sequelize: to connect to the database.
   - bcrypt: to handle password encryyption
   - connect-session-sequelize and express-session: to create and manage user sessions
   - express-handlebars and handlebars: to render web pages from templates.
3. Run `mysql -u root -p` and enter your mysql password to connect to the database
4. Use the schema.sql file in the db folder to create your database using MySQL shell commands
5. Run `npm run seed` to seed data to the database
6. Run `npm start` to connect to the server 

## Programming Languages

  * JavaScript
  * HTML
  * CSS

## License

  This project is licensed under MIT license. 

## Contributing
  
  If you like to contribute to this application, please refer to the following guidelines:

  Please refer to the Contributor Covenant v2.1 in the following  website: https://www.contributor-covenant.org for guidelines details on how to contribute

## Creators

You can find us on Github:

* Celia Dona : [cdona0908](https://github.com/cdona0908) <br>
* Ajaypal Ghuman: [AjaypalGhuman](https://github.com/AjaypalGhuman) <br>
* CyresCooper: [CyresCooper](https://github.com/CyresCooper) <br>

