const books = [
    {
        id: 1,
        name: 'Harry Potter',
        pages: 300,
        price: 160
    },
    {
        id: 2,
        name: 'war and peace',
        pages: 2500,
        price: 400
    },
    {
        id: 3,
        name: 'Bible',
        pages: 1500,
        price: 1000
    },
    {
        id: 4,
        name: 'Persey Jackson',
        pages: 500,
        price: 1500
    },
    {
        id: 40,
        name: 'Bible original',
        pages: 4000,
        price: 1500
    },
    {
        id: 5,
        name: 'Beginning after the end',
        pages: 1400,
        price: 800
    },
];

function getData() {
    return books;
}

function renderTotalAmount(totalAmount) {
    const mainElement = document.getElementById('totalAmount');
    mainElement.innerText = totalAmount;
}

function renderData(data) {
    let htmlData = '';
    const mainElement = document.getElementById('books');

    if (!data.length) {
        mainElement.innerHTML = '<h2>No such result available</h2>';
    } else {
        data.forEach(function (item) {
            htmlData += `<div class="book"><div>${item.name}</div><div>${item.pages}</div><div>${item.price}</div></div><hr>`
        })
        mainElement.innerHTML = htmlData
    }
}

function getTotalAmount(data) {
    return data.reduce(function(previousValue, currentValue){
        return previousValue + currentValue.price;
    },0)
}

function search(event) {
    event.preventDefault();
    const searchText = document.getElementById('search').value;

    if (!searchText.length) return;

    const data = getData();
    const results = data.filter(function (item) {
        const itemName = item.name.toLowerCase();
        return itemName.includes(searchText.toLowerCase());
    });

    renderData(results);
    renderTotalAmount(getTotalAmount(results))
}

function comparator(field = 'pages') {
    return function (a, b) {
        if ( a[field] < b[field] ){
            return -1;
        }
        if ( a[field] > b[field] ){
            return 1;
        }
        return 0;
    }
}

function sortBy(event) {
    event.preventDefault();
    const data = getData();

    const sortedData = data.sort(comparator());

    renderData(sortedData);
    renderTotalAmount(getTotalAmount(sortedData))
}

//------------------------------------

const data = getData();
console.log(getTotalAmount(data));
renderData(data);
renderTotalAmount(getTotalAmount(data))

const searchForm = document.getElementById("searchForm");
const sortForm = document.getElementById("sortForm");
searchForm.addEventListener('submit', search);
sortForm.addEventListener('submit', sortBy);
