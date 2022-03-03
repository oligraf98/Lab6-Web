
export class ChangeMode {

  constructor(){
    this.changeButton = document.getElementById("boton");
  }

  getMode() {
    return this.changeButton.value;
  }

  setMode(str) {
    this.changeButton.value = str;
  }

  onClick(cb) {
    this.changeButton.addEventListener("click", cb);
  }
}
