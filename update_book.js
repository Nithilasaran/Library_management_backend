
async function updateBook() {
    const response = await fetch("http://localhost:3000/books/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Advanced Cybersecurity",
            author: "John Smith",
            category: "Cybersecurity",
            year: 2025
        })
    });

    const result = await response.json();

    console.log("UPDATE BOOK:", response.status);
    console.log(JSON.stringify(result, null, 2));
}

updateBook().catch(console.error);
