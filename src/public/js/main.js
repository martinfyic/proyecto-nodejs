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
			price: price.value,
			image: image.value,
		});
		title.value = '';
		price.value = '';
		image.value = '';
	}
});

socket.on('addedProd', addedProd => {
	console.log(addedProd);
	const prodHTML = addedProd
		.map(
			prod =>
				`<tr>
        <td>${prod.title}</td>
        <td>${prod.price}</td>
        <td>${prod.image}</td>
      </tr>`
		)
		.join(' ');
	table.innerHTML = prodHTML;
});
