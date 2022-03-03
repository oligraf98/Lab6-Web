export const run = (changeMode) => {
  changeMode.onClick(() => {

    var element = document.body;
    element.classList.toggle("dark-mode");

  })
}
