let translateButton = document.querySelector("#Translate");
translateButton.addEventListener("click", function () {
  let russianField = document.querySelector("#RussianWord");
  let englishField = document.querySelector("#EnglishWord");
  let explonationField = document.querySelector("#Explonation");

  if (!englishField.value && !russianField.value) {
    alert("Перевод невозможен! Заполните поля!");
  } else if (!englishField.value) {
    let value = russianField.value;
    fetch(`http://localhost:3000/Russian?RussianWord=${value}`)
      .then((response) => response.json())
      .then((response) => {
        let { russiantermin, englishtermin, explonation } = response[0];
        russianField.value = russiantermin;
        englishField.value = englishtermin;
        explonationField.value = explonation;
      });
  } else {
    let value = englishField.value;
    fetch(`http://localhost:3000/English?EnglishWord=${value}`)
      .then((response) => response.json())
      .then((response) => {
        let { russiantermin, englishtermin, explonation } = response[0];
        russianField.value = russiantermin;
        englishField.value = englishtermin;
        explonationField.value = explonation;
      });
  }
});

let russianField = document.querySelector("#RussianWord");
russianField.addEventListener("click", function () {
  let englishField = document.querySelector("#EnglishWord");
  let explonationField = document.querySelector("#Explonation");

  englishField.value = "";
  russianField.value = "";
  explonationField.value = "";
});

let englishField = document.querySelector("#EnglishWord");
englishField.addEventListener("click", function () {
  let russianField = document.querySelector("#RussianWord");
  let explonationField = document.querySelector("#Explonation");

  englishField.value = "";
  russianField.value = "";
  explonationField.value = "";
});
