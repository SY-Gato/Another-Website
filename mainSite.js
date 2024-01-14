const switchButton = document.getElementById("SwitchSite");

const data = new Map([
  [
    "SwitchSite",
    {
      url: "index.html#site2",
      content: "Second Page!",
    },
  ],
]);
switchButton.addEventListener("click", function (event) {
  if (!event.target.id) return;
  update(event.target.id);
});

const update = (tabId) => {
  const currentTab = document.querySelector(".active");
  if (currentTab.id != tabId) {
    currentTab.classList.remove("active");
  }
  const selectTab = document.getElementById(tabId);
  selectTab.classList.add("active");
  const entry = data.get(tabId);
  if (entry) {
    history.pushState(null, "", entry.url);
    contenr.innerHtml = entry.content;
  }
};
