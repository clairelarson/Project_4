/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/***
 * `quotes` array
 added 10 quotes
***/
const quotes = [
  {
    quote: `I took a deep breath and listened to the old brag of my heart: I am, I am, I am.`,
    source: `Sylvia Plath`,
    citation: 'The Bell Jar',
    year: 1961,
    occupation: 'author',
  },
  {
    quote: `I have not failed. I’ve just found 10,000 ways that won’t work.`,
    source: `Thomas Edison`,
    occupation: 'inventor',
  },
  {
    quote: `The secret of getting ahead is getting started.`,
    source: `Mark Twain`,
    occupation: 'author',
  },
  {
    quote: `Yesterday is history. Tomorrow is a mystery. Today is a gift. That’s why we call it ‘The Present.'`,
    source: `Eleanor Roosevelt`,
    occupation: 'first lady and activist',
  },
  {
    quote: `Beware; for I am fearless, and therefore powerful.`,
    source: `Mary Shelley`,
    citation: 'Frankenstein',
    year: 1818,
    occupation: 'author',
  },
  {
    quote: `If my mind can conceive it, if my heart can believe it, then I can achieve it.`,
    source: `Muhammed Ali`,
    occupation: 'boxer',
  },
  {
    quote: `People will forget what you said. People will forget what you did. But people will never forget how you made them feel.`,
    source: `Maya Angelou`,
    occupation: 'author',
  },
  {
    quote: `Only surround yourself with people who will lift you higher.`,
    source: `Oprah Winfrey`,
    occupation: 'talk show host',
  },
  {
    quote: `Always be a first-rate version of yourself, instead of a second-rate version of somebody else.`,
    source: `Judy Garland`,
    occupation: 'actress',
  },
  {
    quote: `Let us remember: One book, one pen, one child and one teacher can change the world.`,
    source: `Malala Yousafzai`,
    occupation: 'author and activist',
  },
]

/***
 * `getRandomQuote` function
    number = generate random index number for quotes array
***/

function getRandomQuote() {
  let number = Math.floor( Math.random() * quotes.length);
  return quotes[number];
};

/***
 * `printQuote` function
 Create a function named printQuote.
 create html that is printed
 value = stores getRandomQuote value
***/
function printQuote(object) {
  let value = getRandomQuote();
  let html = `<p class="quote">${value.quote}</p>
              <p class="source">${value.source}<span class="occupation">${value.occupation}</span>`;
  if (value.citation) {
    html += `<span class="citation"> ${value.citation}</span>`;
  }
  if (value.year) {
    html += `<span class="year"> ${value.year}</span>`;
  }
  html += `</p>`
  randomColor();
  document.querySelector("#quote-box").innerHTML = html;
};

/***
 Change background color function
***/

function getColorNumber() {
  let colorNumber = Math.floor(Math.random() * 255) + 1;
  return colorNumber;
}

function randomColor() {
  const red = getColorNumber();
  const blue = getColorNumber();
  const yellow = getColorNumber();
  let background = `rgb(${red}, ${blue}, ${yellow})`;
  document.body.style.background = background;
};

/** timer every 15 seconds */

setInterval(printQuote, 15000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//
document.getElementById('load-quote').addEventListener("click", printQuote, false);
