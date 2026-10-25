
async function addBook() {
    const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Introduction to Cybersecurity",
            author: "John Smith",
            category: "Technology",
            year: 2024
        })
    });

    const result = await response.json();

    console.log("ADD BOOK:", response.status);
    console.log(JSON.stringify(result, null, 2));
}

addBook().catch(console.error);
