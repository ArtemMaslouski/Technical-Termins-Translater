document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/content")
    .then((response) => response.json())
    .then((response) => {
      createTable(response);
    });
});

function createTable(response) {
  let body = document.querySelector("#body");

  for (person in response) {
    let newRow = document.createElement("tr");

    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    cell1.innerHTML = `${response[person].russiantermin}`;
    cell2.innerHTML = `${response[person].englishtermin}`;
    cell3.innerHTML = `${response[person].explonation}`;

    newRow.append(cell1);
    newRow.append(cell2);
    newRow.append(cell3);

    body.append(newRow);
  }
}
