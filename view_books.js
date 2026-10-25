
async function viewBooks() {
    const response = await fetch("http://localhost:3000/books");
    const result = await response.json();

    console.log("VIEW BOOKS:", response.status);
    console.log(JSON.stringify(result, null, 2));
}

viewBooks().catch(console.error);
