import "./hello-world-button.scss";

class HelloWorldButton {
  buttonCssClass = "hello-world-button"; // CSS class for the button
  render() {
    const button = document.createElement("button");
    const body = document.querySelector("body");
    button.innerText = "Hello World";
    button.classList.add("hello-world-button");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerText = "Hello World";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    button.classList.add(this.buttonCssClass); //Class property and not supported by many browsers
    body.appendChild(button);
  }
}
export default HelloWorldButton;
