const searchInput = document.getElementById("search");
const searchIcon = document.getElementById("search icon");
const main = document.querySelector("main");
const videoCards = Array.from(main.querySelectorAll(".video-card"));

const noResults = document.createElement("p");
noResults.id = "no-results";
noResults.textContent = "No videos found for that search.";
main.appendChild(noResults);

function filterVideos() {
  const query = searchInput.value.trim().toLowerCase();
  let matchCount = 0;

  videoCards.forEach((card) => {
    const title = card.querySelector("h6")?.textContent.trim().toLowerCase() || "";
    const matches = query === "" || title.includes(query);

    card.classList.toggle("hidden", !matches);
    if (matches) {
      matchCount += 1;
    }
  });

  noResults.classList.toggle("visible", query !== "" && matchCount === 0);
}

searchInput.addEventListener("input", filterVideos);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    filterVideos();
  }
});

if (searchIcon) {
  searchIcon.addEventListener("click", filterVideos);
}
