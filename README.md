# TodoApi
This is a simple task management API built with Node.js and Express. It allows you to manage tasks, including creating, fetching, updating, and deleting tasks. It uses in-memory storage to store tasks, which can be replaced with a database for production environments.


Setup
Extract the file to unzip.
******

bash:

cd <directory-name>
Install dependencies

bash:

npm install
********

The API is ready to run on your local machine.
***********

API Endpoints

 POST /tasks: Create a New Task
   Create a new task with a title and description.

    Request Body:

    json:
    
    {
      "title": "Task Title",
      "description": "Task Description"
    }
***********
Response:

Status: 201 Created
Body:
json:

    {
      "id": 1,
      "title": "Task Title",
      "description": "Task Description",
      "status": "pending"
    }
*************

Running the Server

To run the server locally, execute the following command:

    bash:

    npm start
    This will start the server on http://localhost:3000. 
    You can now access the API via your browser or Postman.
***********************************************************************************************************************************
