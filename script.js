const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

fetchJoke();

jokeBtn.addEventListener('click', fetchJoke);

async function fetchJoke() {
  const header = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', header);
  const data = await res.json();
  joke.innerHTML = data.joke;
}
