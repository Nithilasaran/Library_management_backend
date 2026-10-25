
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Temporary book storage
let books = [];
let nextId = 1;

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Library Management API is running",
        endpoints: [
            "POST /books",
            "GET /books",
            "GET /books/:id",
            "PUT /books/:id",
            "DELETE /books/:id"
        ]
    });
});

// Add a book
app.post("/books", (req, res) => {
    const { title, author, category, year } = req.body;

    if (!title || !author || !category || !year) {
        return res.status(400).json({
            error: "Title, author, category, and year are required"
        });
    }

    const book = {
        id: nextId++,
        title,
        author,
        category,
        year
    };

    books.push(book);

    res.status(201).json({
        message: "Book added successfully",
        book
    });
});

// View all books
app.get("/books", (req, res) => {
    res.json({ books });
});

// Search for a book by ID
app.get("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(item => item.id === id);

    if (!book) {
        return res.status(404).json({
            error: "Book not found"
        });
    }

    res.json({ book });
});

// Update a book
app.put("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(item => item.id === id);

    if (!book) {
        return res.status(404).json({
            error: "Book not found"
        });
    }

    const { title, author, category, year } = req.body;

    if (!title || !author || !category || !year) {
        return res.status(400).json({
            error: "Title, author, category, and year are required"
        });
    }

    book.title = title;
    book.author = author;
    book.category = category;
    book.year = year;

    res.json({
        message: "Book updated successfully",
        book
    });
});

// Delete a book
app.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = books.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Book not found"
        });
    }

    books.splice(index, 1);

    res.json({
        message: "Book deleted successfully",
        id
    });
});

// Start server
app.listen(PORT, () => {
    console.log(
        `Library Management API running at http://localhost:${PORT}`
    );
});
