let bookId = localStorage.getItem('id');
let bookName = document.querySelector('#nameField');
let bookNumberOfPages = document.querySelector('#numberOfPagesField');
let bookPrice = document.querySelector('#priceField');
let bookImage = document.querySelector('#imgField');

function toMainPage() {
    window.location.href = 'index.html';
}

function showAlert() {
    document.querySelector('.alert').style.width = '25vw';
}

function hideAlert() {
    document.querySelector('.alert').style.width = '0vw';
}

async function getBook(id) {
    fetch(`https://632b56441090510116d71181.mockapi.io/tours/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            bookName.value = data.name;
            bookNumberOfPages.value = data.numberOfPages;
            bookPrice.value = data.price;
            bookImage.value = data.image;
        })
        .catch((err) => {
            document.querySelector('.alert').textContent = `${err}`;
            showAlert();
        });
}

async function updateBook() {
    if (bookName.value && bookNumberOfPages.value && bookPrice.value && bookImage.value >= 1) {
        fetch(`https://632b56441090510116d71181.mockapi.io/tours/${tourId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'name': bookName.value,
                'numberOfPages': bookNumberOfPages.value,
                'price': parseInt(bookPrice.value),
                'image': bookImage.value
            })
        })
            .then(res => {
                if (res.ok) {
                    bookName.value = '';
                    bookNumberOfPages.value = '';
                    bookPrice.value = '';
                    bookImage.value = '';
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

getTour(bookId);