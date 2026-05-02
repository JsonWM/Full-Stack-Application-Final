REST API for the MyEcoBill application

Tech Stack:
- Server: Node.js with Express.js
- Database: PostgreSQL

Endpoints:

Energy Rates:

(READ): Returns the list of available US states and their current kWh costs.
GET /api/energy/rates 

Savings Calculations (CRUD):

(CREATE): Receives device data, calculates spending/savings, and stores the result in the DB.
POST /api/energy/calculate

(READ): Returns all saved audit reports.
GET /api/energy/history

(UPDATE): Allows modifying specific parameters of an existing report
PUT /api/energy/history/:id 

(DELETE): Permanently removes a report from the database.
DELETE /api/energy/history/:id