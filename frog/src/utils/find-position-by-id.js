export const findAbsolutePosition = (htmlElement) => {
  let x = htmlElement.offsetLeft;
  let y = htmlElement.offsetTop;
  for (let x = 0, y = 0, el = htmlElement; el != null; el = el.offsetParent) {
    x += el.offsetLeft;
    y += el.offsetTop;
  }
  return {
    x,
    y,
  };
};

export const getPositionById = (elementId) => {
  const element = document.getElementById(elementId);
  const { x, y } = findAbsolutePosition(element);
  return {
    x: x + element.offsetWidth / 2,
    y: y + element.offsetHeight / 2,
  };
};
