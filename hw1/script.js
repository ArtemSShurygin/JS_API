const lessons = document.querySelector(".lessons");

let parseDataLessons = JSON.parse(dataLessons);

// parseDataLessons.forEach((element) => {
// 	lessons.insertAdjacentHTML(
// 		"beforeend",
// 		`
//     <section class="lesson" id="lesson_${element.id}">
//       <h2>${element.name}</h2>
//       <p>${element.time}</p>
//       <p class="currentParticipants">Текущее количество записанных участников: ${element.currentParticipants}</p>
//       <p>Максимального количества участников: ${element.maxParticipants}</p>
//       <button class="lessonAddParticipant">Записаться</button>
//       <button class="lessonRemoveParticipant">Отменить запись</button>
//     </section>
//     `
// 	);

parseDataLessons.forEach((element) => {
	lessons.insertAdjacentHTML(
		"beforeend",
		`
      <section class="lesson" id="lesson_${element.id}">
        <div class="lesson_element"><p class="lesson__name">${element.name}</p></div>
        <div class="lesson_element"><p class="lesson__time">${element.time}</p></div>
        <div class="lesson_element"><p class="lesson__participants">${element.currentParticipants}/${element.maxParticipants}</p></div>
        <div class="lesson_element lesson__button_box"><button class="lessonAddParticipant lesson__btn">Записаться</button></div>
        <div class="lesson_element lesson__button_box"><button class="lessonRemoveParticipant lesson__btn">Отменить запись</button></div>
        </div>
      </section>
      `
	);

	let btnAddParticipant = document.querySelector(`#lesson_${element.id}`).querySelector(`.lessonAddParticipant`);
	let btnRemoveParticipant = document.querySelector(`#lesson_${element.id}`).querySelector(".lessonRemoveParticipant");
	let currentParticipants = document.querySelector(`#lesson_${element.id}`).querySelector(".lesson__participants");

	if (element.currentParticipants === 0) {
		btnRemoveParticipant.setAttribute("hidden", true);
	}

	btnAddParticipant.addEventListener("click", function (e) {
		currentParticipants.textContent = `${++element.currentParticipants}/${element.maxParticipants}`;
		console.log(`${element.name}: ${element.currentParticipants}/${element.maxParticipants}`);

		if (element.currentParticipants === 1) {
			console.log("Верни кнопку отменить");
			btnRemoveParticipant.removeAttribute("hidden", true);
		}

		if (element.currentParticipants === element.maxParticipants) {
			console.log("Удали кнопку добавить");
			btnAddParticipant.setAttribute("hidden", true);
		}
	});

	btnRemoveParticipant.addEventListener("click", function (e) {
		currentParticipants.textContent = `${--element.currentParticipants}/${element.maxParticipants}`;
		console.log(`${element.name}: ${element.currentParticipants}/${element.maxParticipants}`);

		if (element.currentParticipants === element.maxParticipants - 1) {
			console.log("Верни кнопку добавить");
			btnAddParticipant.removeAttribute("hidden");
		}

		if (element.currentParticipants === 0) {
			console.log("Удали кнопку отменить");
			btnRemoveParticipant.setAttribute("hidden", true);
		}
	});
});
