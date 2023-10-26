document.querySelector("form").addEventListener("submit", Submit);

let toMovies = JSON.parse(localStorage.getItem("movieslist")) || [];

function Submit(event) {
  event.preventDefault();

  let obj = {
    movie_name: document.querySelector("#name").value,
    actor_name: document.querySelector("#main").value,
    movie_description: document.querySelector("#description").value,
    movie_date: document.querySelector("#date").value,
    movie_category: document.querySelector("#category").value,
    movie_price: document.querySelector("#price").value,
  };

  if (
    (obj.movie_name == "",
    obj.actor_name == "",
    obj.movie_description == "",
    obj.movie_date == "",
    obj.movie_category == "",
    obj.movie_price == "")
  ) {
    alert("Please fill the info");
  } else {
    toMovies.push(obj);

    localStorage.setItem("movieslist", JSON.stringify(toMovies));

    window.location.reload();
  }
}
