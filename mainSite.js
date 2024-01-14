/*const switchButton = document.getElementById("SwitchSite");
const contentElm = document.getElementById("content");

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
    contentElm.innerHtml = entry.content;
  }
};*/
console.log("Transferring to the better site cuz this page is goofy and doesnt work");
setTimeout(300, function() {
  location.href = "fixed/frontend/index.html";
});
