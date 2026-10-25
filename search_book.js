
async function searchBook() {
    const response = await fetch("http://localhost:3000/books/1");
    const result = await response.json();

    console.log("SEARCH BOOK:", response.status);
    console.log(JSON.stringify(result, null, 2));
}

searchBook().catch(console.error);
