window.onload = init; // дожидаемся полной загрузки страницы


function init(){

localStorage.setItem("sticky_0", "Первая заметка");
localStorage.setItem("sticky_1", "Вторая заметка");

	for (var i = 0; i < localStorage.length; i++){ // подсчитываем кол-во элементов в локальном хранилище
		var key = localStorage.key(i); // получаем ключ каждого элемента
		if(key.substring(0, 6) == "sticky"){ // проверяем, начинается ли название ключа со sticky
			var value = localStorage.getItem(key); // получаем значение по ключу
			addStickyToDom(value); // передаем значение в функцию
		}
	}

}

function addStickyToDom(value){
	var stickies = document.getElementById("stickies"); // выбираем из DOM элемент с id = stickies
	var sticky = document.createElement("li"); // создаем элемент li
	var span = document.createElement("span"); // создаем элемент span
	span.setAttribute("class", "sticky"); // добавляем элементу span атрибут class="sticky"
	span.innerHTML = value; // добавляем в span текст заметки
	sticky.appendChild(span); // вкладываем элемент span в li
	stickies.appendChild(sticky); // вкладываем li в элемент с id stickies
}
