# Library Management Backend API

## Project Overview

The Library Management Backend API is a RESTful application developed using Node.js and Express.js. It provides API endpoints to add, view, search, update, and delete book records.

The project demonstrates CRUD operations, HTTP methods, JSON communication, and backend request handling.

## Objectives

- Create and manage library book records.
- Retrieve all books from the API.
- Search for a book using its unique ID.
- Update book details.
- Delete book records.

## Technology Stack

- **Runtime:** Node.js
- **Backend Framework:** Express.js
- **Language:** JavaScript
- **Data Format:** JSON
- **Testing:** Node.js built-in Fetch API
- **Development Environment:** Visual Studio Code

## Features

- Add a book with its title, author, category, and publication year.
- View all stored books.
- Search for a book by ID.
- Update an existing book's details.
- Delete a book by ID.
- Validate required fields.
- Return appropriate success and error responses.

## Project Structure

```text
library_management_backend/
├── app.js
├── add_book.js
├── view_books.js
├── search_book.js
├── update_book.js
├── delete_book.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

### 1. Install Node.js

Download Node.js from:

https://nodejs.org/

Verify the installation:

```bash
node --version
npm --version
```

### 2. Install dependencies

Open the project folder in Visual Studio Code and run:

```bash
npm install
```

### 3. Start the server

```bash
node app.js
```

Expected startup message:

```text
Library Management API running at http://localhost:3000
```

### 4. Open the API

Visit the following URL in a browser:

http://localhost:3000/

The server returns a JSON message confirming that the Library Management API is running.

## API Endpoints

| HTTP Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check API status |
| POST | `/books` | Add a book |
| GET | `/books` | View all books |
| GET | `/books/:id` | Search for a book by ID |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## Testing

Keep the server running in one terminal. Execute these commands in a second terminal.

Add a book:

```bash
node add_book.js
```

View all books:

```bash
node view_books.js
```

Search for a book:

```bash
node search_book.js
```

Update a book:

```bash
node update_book.js
```

Delete a book:

```bash
node delete_book.js
```

Successful operations return HTTP `201` for adding a book and HTTP `200` for viewing, searching, updating, and deleting records.

## Data Storage

**Current implementation:** Book records are stored temporarily in memory. They are cleared when the server restarts. A database can be integrated to support permanent book storage.

## Future Enhancements

- Integrate a persistent database.
- Add book issue and return operations.
- Track book availability.
- Add search by title, author, or category.
- Create a frontend for library staff and users.
- Add authentication and authorization.

## Author

Developed as a Web Development Technologies Lab project.
