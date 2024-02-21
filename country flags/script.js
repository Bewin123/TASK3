document.addEventListener("DOMContentLoaded", function () {
  const flagsContainer = document.getElementById("flags-container");

  // Fetch data from the REST Countries API
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      // Extract flags information from the response
      const flags = data.map((country) => {
        const countryCode = country.cca2 || country.cca3;
        const flagURL = `https://restcountries.com/v3.1/flag/${countryCode}.png`;
        return `<img src="${flagURL}" alt="${country.name.common} flag" class="flag-img">`;
      });

      // Display flags in the container
      flagsContainer.innerHTML = flags.join("");
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      flagsContainer.innerHTML = "Failed to fetch data.";
    });
});
