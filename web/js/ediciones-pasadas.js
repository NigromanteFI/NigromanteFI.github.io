window.onload = function(){
	$('#id_footer').load('./footer.html');
	$('#id_navbar').load('./navbar.html');
	carousel();
	revistas();
 };


function carousel(){
	var carousel = document.getElementById('carousel_imagenes');
	var nombre_img = ['img1','img2','img3','img4','img5','img6','img7','img8','img9','img10'];
	
	let div = document.createElement('div');
	div.setAttribute('class','carousel-item active');	
	let imagen = document.createElement('IMG');
	imagen.setAttribute('class','d-block w-100');
	imagen.src = './resources/'+nombre_img[0]+'.png';
	imagen.alt= nombre_img[0]+'.png';
	div.appendChild(imagen);
	carousel.appendChild(div);

	for (let index = 1; index < nombre_img.length; index++) {
		let div = document.createElement('div');
		div.setAttribute('class','carousel-item');
		
		let imagen = document.createElement('IMG');
		imagen.setAttribute('class','d-block w-100');
		imagen.src = './resources/'+nombre_img[index]+'.png';
		imagen.alt= nombre_img[index]+'.png';
		div.appendChild(imagen);
		carousel.appendChild(div);
	}

}

function revistas(){
	var revistasGrid = document.getElementById('revistas');
	var nombre_img = ['img1','img2','img3','img4','img5','img6','img7','img8','img9','img10','index_img_1','index_img_2'];
	for (let index = 0; index < nombre_img.length; index++) {
		let div = document.createElement('div');
		div.setAttribute('class','col-2 mb-3');
		
		let imagen = document.createElement('IMG');
		imagen.setAttribute('class','d-block w-100');
		imagen.src = './resources/'+nombre_img[index]+'.png';
		imagen.alt= nombre_img[index]+'.png';
		div.appendChild(imagen);

		let texto = document.createElement('p');
		texto.setAttribute('class','col__p-2');
		texto.innerHTML = 'Descripción de '+nombre_img[index];
		div.appendChild(texto);
		revistasGrid.appendChild(div);
	}

}