const imgBoxEl = document.querySelector(".img-box");
const numOfLikesEl = document.querySelector("#numOfLikes");
const userName = document.querySelector("#userName");

async function fetchPhoto() {
	try {
		//eror 403: Rate Limit Exceeded
		const response = await fetch(
			"https://api.unsplash.com/photos/random?&client_id=yWH7KpaUvINjRnGj7UV4FDsANZWKTOXhOgdo_UHqW9Q"
		);
		const newPhoto = await response.json();
		return newPhoto;
	} catch (error) {
		console.log(error);
	}
}

//Добавление новой фотографии
async function loadPhoto() {
	const newPhoto = await fetchPhoto();
	console.log(newPhoto);
	if (newPhoto !== "") {
		photoCurrentLikes = newPhoto.likes;

		imgBoxEl.insertAdjacentHTML(
			"afterbegin",
			`
        <img src="${newPhoto.urls.small}" alt="${newPhoto.alt_description}">
        `
		);
		userName.textContent = newPhoto.user.name;
		numOfLikesEl.textContent = photoCurrentLikes;
	} else {
		console.log(newPhoto);
	}

	return newPhoto;
}

function likePhotos() {
	numOfLikesEl.textContent++;
}

loadPhoto();
