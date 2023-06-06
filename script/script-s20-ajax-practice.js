function showCountries() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v3.1/all", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      let countries = JSON.parse(this.response);
      console.log(countries);
      countries.forEach((country) => {
        const countryCard = document.createElement("div");
        const countryCardImage = document.createElement("img");

        countryCard.innerHTML = country.name.common;

        countryCardImage.src = country.flags.svg;
        countryCard.appendChild(countryCardImage);

        document.getElementById("parentDiv").appendChild(countryCard);
      });
    }
  };

  xhr.send();
}
