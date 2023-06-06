// Using XMLHttpRequest

// const showCountries = function () {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://restcountries.com/v3.1/all", true);

//   xhr.onload = function () {
//     if (xhr.status !== 200)
//       alert("Attention required: status not 200, check response status!");
//     else {
//       let countries = JSON.parse(this.response);

//       countries.forEach((country) => {
//         const countryCard = document.createElement("div");
//         const countryCardImage = document.createElement("img");

//         countryCard.innerHTML = country.name.common;
//         countryCardImage.src = country.flags.svg;
//         countryCard.appendChild(countryCardImage);

//         document.getElementById("parentDiv").appendChild(countryCard);
//       });
//     }
//   };

//   xhr.send();
// };

// Using Fetch API

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => console.log(data));
