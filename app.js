// Define constants

const apiEndpoint = "https://wizard-world-api.herokuapp.com/elixirs";

// Handles API data
async function getData(url) {
  try {
    const result = await fetch(url);
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

// Eventlisteners
