let books = [];
let filterArr = [];

function toCreatePage() {
    window.location.href = 'create.html';
}

function toEditPage(id) {
    localStorage.setItem('id', id);
    window.location.href = 'edit.html';
}

function showAlert() {
    document.querySelector('.alert').style.width = '25vw';
}

function hideAlert() {
    document.querySelector('.alert').style.width = '0vw';
}

function createBookElem(arr) {
    let index = 0;
    arr.forEach(element => {
        document.querySelector('.content').innerHTML += `
        <div class="item">
            <img src="${element.image}" alt="">
            <h2>${element.name}</h2>
            <p>${element.price}$</p>
            <p>${element.numberOfPages}$</p>
            <div class="actions">  
                <button class="edit" onclick="toEditPage(${element.id})">Edit</button>
                <button class="delete" onclick="deleteTour(${element.id}, ${index++})">Delete</button>
            </div>
        </div>
        `;
    });
} 

async function getBooks() {
    fetch('https://632b56441090510116d71181.mockapi.io/books')
        .then(res => res.json())
        .then(data => { 
            books = data;
            document.querySelector('.content').replaceChildren();
            createBookElem(books);
            getTotalPrice(books);
        })
        .catch(err => console.log(err));
}

function searchBook() {
    document.querySelector('#price').checked = false;
    let search = document.querySelector('#search').value;
    if (search) {
        let reg = new RegExp(`${search}`);
        filterArr = books.filter(element => reg.test(element.name) === true);
        document.querySelector('.content').replaceChildren();
        createBookElem(filterArr);
        getTotalPrice(filterArr);
    } else {
        getBooks();
    }
}



function sortPriceAl(arr) {
    arr.sort((a, b) => {
        return a.price - b.price;
    });
    document.querySelector('.content').replaceChildren();
    createBookElem(arr);
}

function sortByPrice() {
    if (document.querySelector('#price').checked) {
        if (document.querySelector('#search').value) {
            sortPriceAl(filterArr);
        } else {
            sortPriceAl(books);
        }
    } else if (!document.querySelector('#search').value) {
        document.querySelector('.content').replaceChildren();
        getBooks();
    }
}

function getTotalPrice(arr) {
    let total = 0;
    console.log(arr);
    arr.forEach(element => {
        total += element.price;
    });
    document.querySelector('#totalPrice').textContent = `${total}$`;
}

async function deleteBook(id, index) {
    fetch(`https://632b56441090510116d71181.mockapi.io/books${id}`,{
        method: 'DELETE'
    })  
    .then(res => {
        if(res.ok) {
            books.splice(index, 1);
            document.querySelector('.content').replaceChildren();
            createBookElem(books);
            getTotalPrice(books);
        }
    }) 
} 

getBooks();