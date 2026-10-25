
async function deleteBook() {
    const response = await fetch("http://localhost:3000/books/1", {
        method: "DELETE"
    });

    const result = await response.json();

    console.log("DELETE BOOK:", response.status);
    console.log(JSON.stringify(result, null, 2));
}

deleteBook().catch(console.error);
