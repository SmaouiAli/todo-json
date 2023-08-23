# todo-json
Todo API Documentation
Base URL:
http://localhost:3000

Endpoints:
GET /todos

Description: Fetches all todos.
Response: An array of todos.
Example Response:
json
Copy code
[
  { "id": 1, "task": "Sample Task 1", "completed": false },
  { "id": 2, "task": "Sample Task 2", "completed": true }
]
GET /todos/:id

Description: Fetches a specific todo by its ID.
Parameters:
id: The ID of the todo.
Response: The requested todo or a 404 error if not found.
Example Response:
json
Copy code
{ "id": 1, "task": "Sample Task 1", "completed": false }
POST /todos

Description: Adds a new todo.
Body:
task (required): The task description.
completed (optional, default is false): Whether the task is completed or not.
Response: The created todo with its ID.
Example Request Body:
json
Copy code
{ "task": "New Task", "completed": true }
Example Response:
json
Copy code
{ "id": 3, "task": "New Task", "completed": true }
PUT /todos/:id

Description: Updates an existing todo by its ID.
Parameters:
id: The ID of the todo.
Body:
task (optional): The updated task description.
completed (optional): The updated completion status.
Response: The updated todo or a 404 error if not found.
Example Request Body:
json
Copy code
{ "task": "Updated Task" }
Example Response:
json
Copy code
{ "id": 1, "task": "Updated Task", "completed": false }
DELETE /todos/:id

Description: Deletes a specific todo by its ID.
Parameters:
id: The ID of the todo.
Response: A success message or a 404 error if not found.
Example Response:
json
Copy code
{ "message": "Todo deleted successfully" }
Notes:
All endpoints support CORS, so they can be accessed from any domain.
The server uses JSON for both request and response bodies.
Ensure that the Content-Type header is set to application/json when sending requests with a body.