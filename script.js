const buton = document.getElementById("buton");
const nume = document.getElementById("nume");
const descriere = document.getElementById("descriere");
const poza = document.getElementById("poza");
const educatie = document.getElementById("educatie");
const pasiuni = document.getElementById("pasiuni");

buton.addEventListener("click",function(){
	
	nume.textContent = "Ing. Smintina David-Gabriel";
	descriere.textContent="DevOps Engineer";
	educatie.innerHTML = "<h2>Realizari</h2><p>Absolvent ETTI</p>";
	pasiuni.innerHTML = "<h2>Experiente</h2><p>Concursuri relevante</p>";
	
	poza.src = "C:/Users/DavidGabrielSmintina/Desktop/LAB7/images/pisica2.jpg";
	poza.alt="poza 2";
	poza.style.opacity="1";
	poza.style.border="5px solid black";
	
	
});