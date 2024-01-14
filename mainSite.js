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
