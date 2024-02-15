document.addEventListener('DOMContentLoaded', () => {
    fetch('minbooks.json')
        .then(response => response.json())
        .then(books => renderBooks(books))
        .catch(error => console.error('Fetching error:', error));
});

function renderBooks(books) {
    const booksContainer = document.getElementById('books');
    booksContainer.innerHTML = ''; 
    books.forEach(book => {
        const bookHtml = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.description}</p>
                        <p class="card-text"><small class="text-muted">${book.author}</small></p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        booksContainer.innerHTML += bookHtml;
    });
}
