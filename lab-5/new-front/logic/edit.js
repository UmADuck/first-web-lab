let bookId = localStorage.getItem('id');
let bookName = document.querySelector('#nameField');
let bookPages = document.querySelector('#pagesField');
let bookPrice = document.querySelector('#priceField');
let bookImg = document.querySelector('#imgField');

function toMainPage() {
    window.location.href = 'index.html';
}

function showAlert() {
    document.querySelector('.alert').style.width = '25vw';
}

function hideAlert() {
    document.querySelector('.alert').style.width = '0vw';
}

async function getbook(id) {
    fetch(`http://localhost:1337/api/book/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            bookName.value = data.name;
            bookPages.value = data.Pages;
            bookPrice.value = data.price;
            bookImg.value = data.img;
        })
        .catch((err) => {
            document.querySelector('.alert').textContent = `${err}`;
            showAlert();
        });
}

async function updatebook() {
    if (bookName.value && bookPages.value && bookImg.value && bookPrice.value >= 1) {
        fetch(`http://localhost:1337/api/book/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'name': bookName.value,
                'Pages': paseInt(bookPages.value),
                'price': parseInt(bookPrice.value),
                'img': bookImg.value
            })
        })
            .then(res => {
                if (res.ok) {
                    bookName.value = '';
                    bookPages.value = '';
                    bookPrice.value = '';
                    bookImg.value = '';
                    localStorage.removeItem('id');
                    window.location.href = 'index.html';
                } else {
                    showAlert();
                }
            })
            .catch(() => {
                document.querySelector('.alert').textContent = 'Form is invalid, check your info';
                showAlert();
            })
    }
}

getbook(bookId);