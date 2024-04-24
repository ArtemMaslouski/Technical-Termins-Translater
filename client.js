let translateButton = document.querySelector("#Translate");
translateButton.addEventListener("click", function () {
  let russianField = document.querySelector("#RussianWord");
  let englishField = document.querySelector("#EnglishWord");

  let value = russianField.value;
  fetch(`http://localhost:3000/Russian?RussianWord=Клавиатура`)
    .then((response) => response.json())
    .then((response) => {
      let { russian, english } = response;

      russianField.value = russian;
      englishField.value = english;
    });
});
