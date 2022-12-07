function toMainPage() {
    window.location.href = 'index.html';
}

function showAlert() {
    document.querySelector('.alert').style.width = '25vw';
}

function hideAlert() {
    document.querySelector('.alert').style.width = '0vw';
}

async function createBook() {
    let name = document.querySelector('#nameField').value;
    let country = document.querySelector('#countryField').value;
    let price = parseInt(document.querySelector('#priceField').value);
    let img = parseInt(document.querySelector('#imgField').value);
    console.log(typeof(price));
    if (name && country && price && img >= 1) {
        fetch('http://localhost:1337/api/book/', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                'name': name,
                'pages': pages,
                'price': price,
                'img': img
            })
        })
            .then(res => {
                if (res.ok) {
                    name = '';
                    pages = '';
                    price = 1;
                    img = '';
                    window.location.href = 'index.html';
                }
            })
            .catch(() => {
                document.querySelector('.alert').textContent = 'Form is invalid, check your info';
                showAlert();
            });
    }
}