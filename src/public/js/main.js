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
		const prod = {
			title: title.value,
			price: Number(price.value),
			url: image.value,
		};
		socket.emit('addProduct', prod);
		title.value = '';
		price.value = '';
		image.value = '';
	}
});

socket.on('addedProd', async addedProd => {
	const prodHTML = await addedProd
		.map(
			prod =>
				`<tr>
        <td>${prod.title}</td>
        <td>${prod.price}</td>
        <td><img width="60" src="${prod.url}" alt="${prod.title}"></td>
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
		const saveMessage = {
			email: userEmail.value,
			message: message.value,
			date: new Date().toLocaleString('es-UY'),
		};
		socket.emit('sendMessage', saveMessage);

		message.value = '';
	}
});

socket.on('messages', messages => {
	const messHTML = messages
		.map(
			mess => `
	<p class="fs-5 text-primary fw-bolder m-0">${mess.email} 💬</p>
	<p class="fs-6 text-info m-0">[${mess.date}]</p>
	<p class="fs-5 fst-italic m-0"> ---> ${mess.message}</p>
	<hr />
	`
		)
		.join(' ');

	chat.innerHTML = messHTML;
});
