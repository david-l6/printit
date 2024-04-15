


const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const fleche = document.querySelector('.arrow');
const flecheGauche = document.querySelector('.arrow_left');
const flecheDroite = document.querySelector('.arrow_right');
const text = document.querySelector('#banner p');
const dot = document.querySelectorAll('.dot');
const img = document.querySelector('#banner img');

document.addEventListener('DOMContentLoaded', (event) => {

		fleche.style.width = '100%';

		flecheGauche.style.position = 'absolute';
		flecheGauche.style.top = '-35px';
		flecheGauche.style.cursor = 'pointer';

		flecheDroite.style.position = 'absolute';
		flecheDroite.style.top = '-35px';
		flecheDroite.style.cursor = 'pointer';
});

let i = 0;
dot[i].classList.add('dot_selected');

flecheDroite.addEventListener('click', clicFlecheDroite);
function clicFlecheDroite() {
  	console.log('Flèche droite cliquée');
	i = (i + 1) % slides.length;
	changeImg();
	changeText();
	changeDot();
}

flecheGauche.addEventListener('click', clicFlecheGauche);
function clicFlecheGauche() {
  	console.log('Flèche gauche cliquée');
	i = (i + 3) % slides.length;
	changeImg();
	changeText();
	changeDot();
}

function changeImg() {
	img.src = "./assets/images/slideshow/" + slides[i].image;
}

function changeText() {
	text.innerHTML = slides[i].tagLine;
}

function changeDot() {
	dot.forEach(d => d.classList.remove('dot_selected'));
 	dot[i].classList.add('dot_selected');
}