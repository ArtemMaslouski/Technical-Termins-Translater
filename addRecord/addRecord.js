let russianField = document.querySelector("#RussianWord");
let englishField = document.querySelector("#EnglishWord");
let explonation = document.querySelector("#Explonation");

let addButton = document.querySelector("#Add");
addButton.addEventListener("click", function () {
  if (!russianField.value || !englishField.value || !explonation.value) {
    alert("Невозможно добавить запись! Заполните поля!");
  } else {
    let RussianWord = russianField.value;
    let EnglishWord = englishField.value;
    let ExplonationWord = explonation.value;

    fetch("http://localhost:3000/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Russian: RussianWord,
        English: EnglishWord,
        Explonation: ExplonationWord,
      }),
    }).then((response) => {
      if (response.status == 200) {
        alert("Термин успешно добавлен в словарь");
      }
    });
  }
  russianField.value = "";
  englishField.value = "";
  explonation.value = "";
});
