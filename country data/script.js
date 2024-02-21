document.addEventListener("DOMContentLoaded", function () {
  const countryInfoContainer = document.getElementById(
    "country-info-container"
  );

  // Fetch data from the REST Countries API
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      // Extract and format information for each country
      const countryInfo = data.map((country) => {
        const name = country.name.common;
        const region = country.region || "N/A";
        const subregion = country.subregion || "N/A";
        const population = country.population || "N/A";

        return `
                    <div class="country-info">
                        <h3>${name}</h3>
                        <p><strong>Region:</strong> ${region}</p>
                        <p><strong>Subregion:</strong> ${subregion}</p>
                        <p><strong>Population:</strong> ${population}</p>
                    </div>
                `;
      });

      // Display country information in the container
      countryInfoContainer.innerHTML = countryInfo.join("");
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      countryInfoContainer.innerHTML = "Failed to fetch data.";
    });
});
