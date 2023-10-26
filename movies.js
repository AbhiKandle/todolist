// data coming from the home page
let moviesData = JSON.parse(localStorage.getItem("movieslist")) || [];
// data string of my movies
let tomy = JSON.parse(localStorage.getItem("mymovies")) || [];
Table(moviesData);
// movies count
document.querySelector("h2>span").innerText = moviesData.length;

// select category

let SELECT = document.querySelector("#category");
SELECT.addEventListener("change", Category);

function Category() {
  let Filter = moviesData.filter(function (el) {
    return el.movie_category === SELECT.value;
  });

  Table(Filter);
}

// responsible for making table
function Table(res) {
  document.querySelector("tbody").innerHTML = "";
  res.forEach(function (el, i) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = el.movie_name;

    let td2 = document.createElement("td");
    td2.innerText = el.actor_name;

    let td3 = document.createElement("td");
    td3.innerText = el.movie_description;

    let td4 = document.createElement("td");
    td4.innerText = el.movie_date;

    let td5 = document.createElement("td");
    td5.innerText = el.movie_category;

    let td6 = document.createElement("td");
    td6.innerText = el.movie_price;

    let td7 = document.createElement("td");
    td7.innerText = "buy";
    td7.style.backgroundColor = "green";
    td7.addEventListener("click", function () {
      buy(el, i);
      window.location.reload();
    });
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
}
function buy(el, i) {
  // data pusing to the my movies
  tomy.push(el);
  localStorage.setItem("mymovies", JSON.stringify(tomy));

  // deleting the row
  moviesData.splice(i, 1);
  localStorage.setItem("movieslist", JSON.stringify(moviesData));
}
