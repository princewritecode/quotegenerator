const dataFull = fetch('https://jacintodesign.github.io/quotes-api/data/quotes.json');
const quote = document.getElementById('quote');
const buttonNext = document.getElementById('new-quote');
const author = document.getElementById('author');
let currentIndex = 0;
dataFull.then(data => data.json())
    .then(data => {
        console.log(data);
        buttonNext.addEventListener('click', () => {
            quote.innerText = data[currentIndex].text;
            author.innerText = data[currentIndex].author;
            currentIndex = (currentIndex + 1) % data.length;
        });
    });
