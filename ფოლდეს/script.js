// მარტივი ძიება
const searchInput = document.getElementById("searchInput");
const books = document.querySelectorAll(".book-card");

searchInput.addEventListener("input", function() {
  const value = this.value.toLowerCase();
  books.forEach(book => {
    const text = book.textContent.toLowerCase();
    book.style.display = text.includes(value) ? "flex" : "none";
  });
});
