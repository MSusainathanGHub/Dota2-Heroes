//Variables
let mainDiv = document.querySelector(".mainDiv");
let searchButton = document.querySelector(".search-btn");
let search = document.querySelector(".search");
console.log("Main" + mainDiv);

function searchfn() {
  let text = search.value;
  let searchText, i;
  let filter = text.toUpperCase();
  let titles = document.querySelectorAll("h6");
  let parents = document.querySelectorAll(".parent");
  for (i = 0; i < titles.length; i++) {
    searchText = titles[i].textContent;
    if (searchText.toUpperCase().indexOf(filter) > -1) {
      parents[i].style.display = "block";
    } else {
      parents[i].style.display = "none";
    }
  }
}

//Dota 2 Function
async function dota2() {
  const response = await fetch("heroes.json");
  const data = await response.json();
  // console.log(data);
  const heroes = data.heroes;

  for (hero of heroes) {
    const parent = document.createElement("div");
    const title = document.createElement("h6");
    const heroImg = document.createElement("img");
    parent.classList.add("card");
    parent.classList.add("parent");
    heroImg.classList.add("card-img-top");
    heroImg.classList.add("heroImage");
    title.classList.add("card-text");
    title.textContent = hero.localized_name;
    heroImg.src = hero.url_full_portrait;
    // console.log(title, heroImg, parent);
    parent.appendChild(heroImg);
    parent.appendChild(title);
    mainDiv.appendChild(parent);
  }
}

//Call the function
dota2();
