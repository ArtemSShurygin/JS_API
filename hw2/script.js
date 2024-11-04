let parsedataHalloween = JSON.parse(dataHalloween);

const imgBoxEl = document.querySelector(".img-box");
const imgBoxNavEl = document.querySelector(".btn-nav");
const btnNextImg = document.querySelector("#btn-next-img");
const btnBackImg = document.querySelector("#btn-back-img");

let imgCurrentNum = 1;
let numOfImgs = parsedataHalloween.img.length;

// Выводим первую картинку на страницу
imgBoxEl.insertAdjacentHTML(
	"afterbegin",
	`
  <img src="./img/${parsedataHalloween.img[imgCurrentNum - 1]}" alt="halloween_img${imgCurrentNum}">
  `
);

// Вывод предыдущей картинки из массива картинок
btnBackImg.addEventListener("click", function (e) {
	imgCurrentNum === 1 ? (imgCurrentNum = numOfImgs) : imgCurrentNum--;

	imgBoxEl.replaceChildren();
	imgBoxEl.insertAdjacentHTML(
		"afterbegin",
		`
    <img src="./img/${parsedataHalloween.img[imgCurrentNum - 1]}" alt="halloween_img${imgCurrentNum}">
    `
	);
});

// Вывод следущей картинки из массива картинок
btnNextImg.addEventListener("click", function (e) {
	imgCurrentNum === numOfImgs ? (imgCurrentNum = 1) : imgCurrentNum++;

	imgBoxEl.replaceChildren();
	imgBoxEl.insertAdjacentHTML(
		"afterbegin",
		`
    <img src="./img/${parsedataHalloween.img[imgCurrentNum - 1]}" alt="halloween_img${imgCurrentNum}">
    `
	);
});

// Задаем навигацию по картинкам
for (i = 0; i < numOfImgs; i++) {
	imgBoxNavEl.insertAdjacentHTML(
		"beforeend",
		`
    <button>${i + 1}</button>
    `
	);
}

// Вывод конкретной картинки, выбранной в навигации
imgBoxNavEl.addEventListener("click", function (e) {
	imgBoxEl.replaceChildren();
	const parentNode = e.target.parentNode;
	const indexTargetNode = [...parentNode.children].indexOf(e.target);

	imgBoxEl.insertAdjacentHTML(
		"afterbegin",
		`
    <img src="./img/${parsedataHalloween.img[indexTargetNode]}" alt="halloween_img${indexTargetNode + 1}">
    `
	);
});
