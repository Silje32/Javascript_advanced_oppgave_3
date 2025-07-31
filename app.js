// Define constants
const displayInfo = document.querySelector("#display");

const apiEndpoint = "https://wizard-world-api.herokuapp.com/elixirs";

// Handles API data
async function getData(url) {
  try {
    const result = await fetch(url);
    console.log(url);
    renderInfo(data);

    if (!result.ok) {
      throw new Error(`status code: ${result.status}`);
    }
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log("failed to fetch, error:", error);
  }
}

getData(apiEndpoint);

// Renders element to page
function renderInfo(data) {
  data.name.forEach((element) => {
    const nameTitle = document.createElement("p");
    nameTitle.textContent = element.name;
    display.append(nameTitle);
  });
}

// Eventlisteners
