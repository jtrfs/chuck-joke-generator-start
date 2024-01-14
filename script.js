const jokeBtn = document.querySelector('#joke-btn');
const jokeDiv = document.getElementById('joke');

// click event handler
function bringNewJoke(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('get', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.response);
        console.log(this.readyState);
        jokeDiv.textContent = data.value;
      } else {
        jokeDiv.innerHTML = 'something went wrong!';
        console.log(this.readyState);
      }
    }
  };

  xhr.send();
}

// event listener
jokeBtn.addEventListener('click', bringNewJoke);
document.addEventListener('DOMContentLoaded', bringNewJoke);
