// Retrieve the movies list from local storage or initialize it as an empty array
let toMovies = JSON.parse(localStorage.getItem("movieslist")) || [];

// Select the form and add an event listener for the submit event
document.querySelector("form").addEventListener("submit", Submit);

function Submit(event) {
  event.preventDefault();

  // Create an object to store the form data
  let obj = {
    movie_name: document.querySelector("#name").value,
    actor_name: document.querySelector("#main").value,
    movie_description: document.querySelector("#description").value,
    movie_date: document.querySelector("#date").value,
    movie_category: document.querySelector("#category").value,
    movie_price: document.querySelector("#price").value,
  };

  // Push the object into the toMovies array
  toMovies.push(obj);
  // Store the updated toMovies array in local storage
  localStorage.setItem("movieslist", JSON.stringify(toMovies));
}
