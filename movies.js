let moviesData = JSON.parse(localStorage.getItem("movieslist"));

let tomy = JSON.parse(localStorage.getItem("mymovies")) || [];
B(moviesData);

function B(res) {
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
  tomy.push(el);
  localStorage.setItem("mymovies", JSON.stringify(tomy));
  moviesData.splice(i, 1);
  localStorage.setItem("movieslist", JSON.stringify(moviesData));
}
