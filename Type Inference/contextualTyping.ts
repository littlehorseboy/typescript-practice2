window.onmousedown = (mouseEvent) => {
  console.log(mouseEvent.button);
  console.log(mouseEvent.buttonA);
};

window.onscroll = (uiEvent) => {
  console.log(uiEvent.button);
};

window.onscroll = (uiEvent: any) => {
  console.log(uiEvent.button);
};
