// წიგნების მონაცემები
const books = [
    {title: "საიდუმლო ბაღი", author: "ფრენსის ჰოჯსონი", category: "სასკოლო"},
    {title: "ჩარლის შოკოლადის ფაბრიკა", author: "როლდ დალი", category: "საბავშო"},
    {title: "დიდი ბესტსელერი", author: "ჯონ სმიტი", category: "ბესტსელერები"},
    {title: "ლექსების კრებული", author: "შოთა რუსთაველი", category: "პოემები/ლექსები"},
    {title: "სხვადასხვა წიგნი", author: "მარიამ ჯანელიძე", category: "სასკოლო"},
];

const booksGrid = document.getElementById("booksGrid");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");

// ჩვენება ფუნქცია
function displayBooks(filterCategory = "ყველა", searchTerm = "") {
    booksGrid.innerHTML = "";
    const filtered = books.filter(book => {
        const matchCat = filterCategory === "ყველა" || book.category === filterCategory;
        const matchSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCat && matchSearch;
    });
    filtered.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("book-card","fade-in");
        div.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p><p>${book.category}</p>`;
        booksGrid.appendChild(div);
    });
}

displayBooks();

// ფილტრაცია
categoryFilter?.addEventListener("change", (e) => {
    displayBooks(e.target.value, searchInput.value);
});

// ძებნა
searchInput?.addEventListener("input", (e) => {
    displayBooks(categoryFilter.value, e.target.value);
});

// Local Storage რეგისტრაცია (register.html)
const registerForm = document.getElementById("registerForm");
registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = registerForm.querySelector("input[type=text]").value;
    const email = registerForm.querySelector("input[type=email]").value;
    const pass = registerForm.querySelector("input[type=password]").value;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({name,email,pass});
    localStorage.setItem("users", JSON.stringify(users));
    alert("რეგისტრაცია წარმატებულია!");
    registerForm.reset();
});

// Contact form Local Storage
const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector("input[type=text]").value;
    const email = contactForm.querySelector("input[type=email]").value;
    const message = contactForm.querySelector("textarea").value;
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    contacts.push({name,email,message});
    localStorage.setItem("contacts", JSON.stringify(contacts));
    alert("შეტყობინება გაგზავნილია!");
    contactForm.reset();
});
