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
    // Eventlistener for modal
    nameTitle.addEventListener("click", () => {
      displayEffect(element);
    });
  });
}

function displayEffect(data) {
  const modal = document.createElement("dialog");
  modal.classList.add("modal");
  const nameTitle = document.createElement("h2");
  nameTitle.textContent = data.name;
  console.log(data.name);

  const displayEffect = document.createElement("p");
  displayEffect.textContent = data.effect;
  console.log(data.effect);

  modal.append(nameTitle, displayEffect);
  document.body.append(modal);
  // Built-in function
  modal.showModal();
  // When we click somewhere on the page the modal closes
  modal.addEventListener("click", () => closeModal(modal));
}
// Close modal
const closeModal = (modal) => {
  modal.close();
  document.body.removeEventListener("click", closeModal);
};
