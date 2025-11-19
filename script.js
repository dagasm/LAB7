const buton = document.getElementById("buton");
const nume = document.getElementById("nume");
const descriere = document.getElementById("descriere");
const poza = document.getElementById("poza");
const educatie = document.getElementById("educatie");
const pasiuni = document.getElementById("pasiuni");
const pagina = document.getElementById("pagina");
const annastere = document.getElementById("annastere");

buton.addEventListener("click",function(){
	
	nume.textContent = "Ing. Smintina David-Gabriel";
	descriere.textContent="DevOps Engineer";
	educatie.innerHTML = "<h2>Realizari</h2><p>Absolvent ETTI</p>";
	pasiuni.innerHTML = "<h2>Experiente</h2><p>Concursuri relevante</p>";
	
	poza.src = "C:/Users/DavidGabrielSmintina/Desktop/LAB7/images/pisica2.jpg";
	poza.alt="poza 2";
	poza.style.opacity="1";
	poza.style.border="5px solid black";
	
	pagina.style.background = "#ccc";
	pagina.style.fontFamily = "Arial, Helvetica, sans-serif";
	
	
});
const anCurent = new Date().getFullYear();
const varsta = parseInt(annastere.textContent);
annastere.onmouseover = function(){
	annastere.textContent = varsta + anCurent + "ani";
}
annastere.onmouseout = function(){
	annastere.textContent = anCurent - varsta + "ani";
}
