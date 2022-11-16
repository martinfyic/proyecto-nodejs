const socket = io.connect();

socket.on('connect', () => {
	console.log('🚀 Conectado al servidor');
});

socket.on('disconnect', () => {
	console.log('⚠️ Perdimos la conexión');
});

const form = document.getElementById('formAddProd');
const title = document.getElementById('inputText');
const price = document.getElementById('inputPrice');
const image = document.getElementById('inputImage');
const table = document.getElementById('tableProdAdded');

form.addEventListener('submit', e => {
	e.preventDefault();
	if (title.value && price.value && image.value) {
		socket.emit('addProduct', {
			title: title.value,
			price: Number(price.value),
			image: image.value,
		});
		title.value = '';
		price.value = '';
		image.value = '';
	}
});

socket.on('addedProd', addedProd => {
	const prodHTML = addedProd
		.map(
			prod =>
				`<tr>
        <td>${prod.title}</td>
        <td>${prod.price}</td>
        <td><img width="60" src="${prod.image}" alt="${prod.title}"></td>
      </tr>`
		)
		.join(' ');
	table.innerHTML = prodHTML;
});

const formChat = document.getElementById('formChat');
const userEmail = document.getElementById('inputEmail');
const message = document.getElementById('inputMessage');
const chat = document.getElementById('messages');

formChat.addEventListener('submit', e => {
	e.preventDefault();
	if (userEmail.value && message.value) {
		socket.emit('sendMessage', {
			email: userEmail.value,
			message: message.value,
			date: new Date().toLocaleString('es-UY'),
		});

		message.value = '';
	}
});

socket.on('messages', messages => {
	console.log(messages);
	const messHTML = messages
		.map(
			mess => `
	<p class="fs-5 text-primary fw-bolder">${mess.email}</p>
	<p class="fs-6 text-primary fw-bolder">[${mess.date}]</p>
	<p> ---> ${mess.message}</p>
	<hr />
	`
		)
		.join(' ');

	chat.innerHTML = messHTML;
});
