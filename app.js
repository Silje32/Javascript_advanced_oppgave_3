// Define constants
const displayInfo = document.querySelector("#display");

const apiEndpoint = "https://wizard-world-api.herokuapp.com/elixirs";

// Handles API data
async function getData(url) {
  try {
    const result = await fetch(url);
    console.log(url);
    const data = await result.json();
    console.log(data);

    renderInfo(data);

    if (!result.ok) {
      throw new Error(`status code: ${result.status}`);
    }
  } catch (error) {
    console.log("failed to fetch, error:", error);
  }
}

getData(apiEndpoint);

// Renders element to page
function renderInfo(data) {
  data.forEach((element) => {
    const nameTitle = document.createElement("p");
    nameTitle.textContent = element.name;
    displayInfo.append(nameTitle);
    nameTitle.addEventListener("click", () => {
      console.log(element.id);
    });
  });
}

// Eventlisteners
