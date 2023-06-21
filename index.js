// Write your code here!
function modifyingelement() {
  let mainNode = document.querySelector("main#main");
  mainNode.parentNode.removeChild(mainNode);

  let newHeader = document.createElement("h1");
  newHeader.id = "victory";
  newHeader.innerHTML = "Noelle Maingi is the champion";
  document.body.appendChild(newHeader);

  return newHeader;
}

modifyingelement();
