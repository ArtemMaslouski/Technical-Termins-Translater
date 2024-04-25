let translateButton = document.querySelector("#Translate");
translateButton.addEventListener("click", function () {
  let russianField = document.querySelector("#RussianWord");
  let englishField = document.querySelector("#EnglishWord");

  if (!englishField.value) {
    let value = russianField.value;
    fetch(`http://localhost:3000/Russian?RussianWord=${value}`)
      .then((response) => response.json())
      .then((response) => {
        let { russiantermin, englishtermin } = response[0];
        russianField.value = russiantermin;
        englishField.value = englishtermin;
      });
  } else {
    let value = englishField.value;
    fetch(`http://localhost:3000/English?EnglishWord=${value}`)
      .then((response) => response.json())
      .then((response) => {
        let { russiantermin, englishtermin } = response[0];
        russianField.value = russiantermin;
        englishField.value = englishtermin;
      });
  }
});

let russianField = document.querySelector("#RussianWord");
russianField.addEventListener("click", function () {
  let englishField = document.querySelector("#EnglishWord");

  englishField.value = "";
  russianField.value = "";
});

let englishField = document.querySelector("#EnglishWord");
englishField.addEventListener("click", function () {
  let russianField = document.querySelector("#RussianWord");

  englishField.value = "";
  russianField.value = "";
});
