var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");
var para = document.querySelectorAll(".para ");

for (let i = 0; i < plus.length; i++) {
	plus[i].addEventListener('click', function () {
		plus[i].classList.toggle("hidden");
		minus[i].classList.toggle("hidden");
		para[i].classList.toggle("hidden");
	})
}

for (let i = 0; i < minus.length; i++) {
	minus[i].addEventListener('click', function () {
		plus[i].classList.toggle("hidden");
		minus[i].classList.toggle("hidden");
		para[i].classList.toggle("hidden");
	})
}