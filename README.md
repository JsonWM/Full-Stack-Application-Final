"# MyEcoBill Full Stack Application" 

- Link: https://fronted-final-project.vercel.app/ 

MyEcoBill is an application designed to help users calculate their energy consumption, identify ways to efficiently reduce their current energy use, and understand how their energy efficiency efforts benefit the environment. The application is very interactive and adapts to different locations, allowing users to receive more approximate results. Created for educational purposes.

# Frontend deployed on Vercel

Key Features:
- Smart review: Calculate costs for active plugs, lightbulbs, televisions, and Air Conditioning (9,000 to 36,000 BTU).
- Savings History: Keep track of your calculations
- Dark-Light Mode theme
- Dynamic Visualizations
- responsive web application

Tech Stack:
- Fronted: React
- Styling: Tailwind CSS v4

# Backend deployed on Render, communicating with the Neon PostgreSQL database in the cloud.

REST API for the MyEcoBill application

Tech Stack:
- Server:   
- Database: PostgreSQL

Endpoints:

Energy Rates:

(READ): Returns the list of available US states and their current kWh costs.
- GET /api/energy/rates 

Savings Calculations (CRUD):

(CREATE): Receives device data, calculates spending/savings, and stores the result in the DB.
- POST /api/energy/calculate

(READ): Returns all saved audit reports.
- GET /api/energy/history

(UPDATE): Allows modifying specific parameters of an existing report.
- PUT /api/energy/history/:id 

(DELETE): Permanently removes a report from the database.
- DELETE /api/energy/history/:id


Note: This project was a lot of fun and very rewarding to build. Although I already had some experience with backend and frontend frameworks such as Django, Spring Boot, Angular, and currently React, using AI as a tool allowed me to build the application much more quickly. Most importantly, I learned how to deploy my first full-stack application. 

# Installation

- Clone repository

git clone https://github.com/JsonWM/Full-Stack-Application-Final.git
cd Full-Stack-Application-Final

- Backend Configuration 

cd Backend-final-project
npm install

Create .env inside Backend-final-project
PORT=5000
DATABASE_URL=your_neon_connection_url OR DATABASE_URL=postgres://owner:password@localhost:5432/database

node index.js

- Frontend Configuration

cd Frontend-final-project
npm install

Create .env inside Frontend-final-project
VITE_API_URL=http://localhost:5000 //If in production, this variable must be the Render URL

npm run dev
