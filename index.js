const quotes =[{
    id:1,
    name:'Albert Camus',
    quote:'Freedom is nothing else but a chance to be better'
},
{   id:2,
    name:'Aung San Suu Kyi',
    quote:'The only real prison is fear, and the only real freedom is freedom from fear.'
},
{   id:3,
    name:'Malcolm X',
    quote:'A man who believes in freedom will do anything under the sun to acquire, or preserve his freedom.'
},
{   id:4,
    name:'George Washington',
    quote:'Liberty, when it begins to take root, is a plant of rapid growth'
},
]


const quoteBtn = document.querySelector('.btn-next');
const quoteAuthor = document.querySelector('.quote-author');
const quote = document.querySelector('.quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML=quotes[number].name;
    quote.innerHTML=quotes[number].quote;
}
