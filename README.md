# In-Memory Item API

A simple RESTful API built with Node.js, Express, and TypeScript for managing an in-memory collection of items.
-------------------------------------------------------------------------------------------------------------
## Features

- Built with **TypeScript**
- Uses **Express** framework
- **In-memory** storage of items (no database)
- REST API endpoints:
  - `GET /items` - Get all items
  - `GET /items/:id` - Get an item by ID
  - `POST /items` - Create a new item
  - `PUT /items/:id` - Update an existing item
  - `DELETE /items/:id` - Delete an item
- Request **validation** and **error handling** middleware
-------------------------------------------------------------------------------------------------------------------
## Setup Instructions

1. **Install dependencies**
npm install 


3. **Start the production server**
npm start
------------------------------------------------------------------------------
## Example Request

**POST /items**
JSON:
{
  "name": "Sample Item"
}

-----------------------------------------------------------------------------------
## Notes
- This app stores data only in memory. All data will be lost when the server restarts.
- Ensure Node.js and npm are installed on your machine.
-----------------------------------------------------------------------------------------
## Scripts

- `npm run build` - Compile TypeScript into JavaScript
- `npm start` - Start the compiled app from `dist`

--------------------------------------------------------------------

Made with ❤️ using Node.js + TypeScript