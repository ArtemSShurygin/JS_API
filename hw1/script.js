const lessons = document.querySelector(".lessons");

let parseDataLessons = JSON.parse(dataLessons);

parseDataLessons.forEach((element) => {
	lessons.insertAdjacentHTML(
		"beforeend",
		`
    <section id="lesson_${element.id}">
      <h2>${element.name}</h2>
      <p>${element.time}</p>
      <p id="currentParticipants${element.id}">Текущее количество записанных участников: ${element.currentParticipants}</p>
      <p>Максимального количества участников: ${element.maxParticipants}</p>
      <button id="lessonAddParticipant${element.id}">Записаться</button>
      <button id="lessonRemoveParticipant${element.id}">Отменить запись</button>
    </section>
    `
	);



  let btnAddParticipant = document.querySelector(`#lessonAddParticipant${element.id}`);
  let btnRemoveParticipant = document.querySelector(`#lessonRemoveParticipant${element.id}`);
  let currentParticipants = document.querySelector(`#currentParticipants${element.id}`);

  if (element.currentParticipants===0) {
    btnRemoveParticipant.setAttribute("hidden", true)
  }

  btnAddParticipant.addEventListener('click', function (e) {
    if (element.currentParticipants===0) {
      btnRemoveParticipant.removeAttribute("hidden", true)
    }
    currentParticipants.textContent=`Текущее количество записанных участников: ${++element.currentParticipants}`;
    console.log(element.currentParticipants);

    if(element.currentParticipants===element.maxParticipants) {
      console.log("Перебор");
      btnAddParticipant.setAttribute("hidden", true)
    }
  });

  btnRemoveParticipant.addEventListener('click', function (e) {

    if(element.currentParticipants===1) {
      console.log("Верни кнопку");
      btnRemoveParticipant.setAttribute("hidden", true)
    }

    if(element.currentParticipants===element.maxParticipants) {
      console.log("Верни кнопку");
      btnAddParticipant.removeAttribute("hidden")
    }

    currentParticipants.textContent=`Текущее количество записанных участников: ${--element.currentParticipants}`;
    console.log(element.currentParticipants);
  });

});



