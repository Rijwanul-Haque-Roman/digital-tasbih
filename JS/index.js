function increment(containerID) {
  const resultArea = document.getElementById(containerID);
  let counter = parseInt(resultArea.innerText);
  counter++;
  resultArea.innerText = counter;
}

function reset(containerID) {
  const resultArea = document.getElementById(containerID);
  resultArea.innerText = "0";
}

function resetAll(container1, container2, container3, container4) {
  const resultArea1 = document.getElementById(container1);
  const resultArea2 = document.getElementById(container2);
  const resultArea3 = document.getElementById(container3);
  const resultArea4 = document.getElementById(container4);
  resultArea1.innerText = "0";
  resultArea2.innerText = "0";
  resultArea3.innerText = "0";
  resultArea4.innerText = "0";
}
