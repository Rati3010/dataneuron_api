# DataNeuron Backend API
## Getting Started
- Clone the repository.
  ##
      https://github.com/Rati3010/dataneuron_api.git
- Install dependencies:
  ##
      npm install.
- Configure the MongoDB connection string in index.js.

## Overview
This is the backend API for the DataNeuron application. It provides functionalities to add, update, and retrieve data entries, along with keeping track of the number of times these operations are performed.

## Features
1. CRUD operations for data entries:
2. Create new data entries.
3. Update existing data entries.
4. API call counts:
5. Tracks the number of times data is added and updated.
## Technologies Used
- Node.js
- Express.js
- Mongoose (ODM for MongoDB)
- Cors
## API Endpoints
### POST /api/collection/add (createData)
- Creates a new data entry.
- Requires authentication (middleware).
- Request body should contain the data to be added.
1. Response:
- Status: 201 Created on success.
- Body: The newly created data entry.
- Execution time: Included in the response headers.
### PUT /api/collection/update/:updateId (updateData)
- Updates an existing data entry.
- Path parameter:id specifies the ID of the data entry to update.
- The request body should contain the updated data.
1. Response:
- Status: 200 OK on success.
- Body: The updated data entry.
- Execution time: Included in the response headers.
### GET /api/collection (getDataCount and getCollectionData)
- Retrieves the count of data addition and update operations.
1. Response:
- Status: 200 OK on success.
- Body: An object containing the count of 'add' and 'update' operations.
- Execution time: Included in the response headers.



