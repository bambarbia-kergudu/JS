window.onload = init; // дожидаемся полной загрузки страницы


function init(){

	var button = document.getElementById("add_button"); // извлекаем объект кнопки с id = add_button
	button.onclick = createSticky; // задаем обработчик события и ждем нажатия кнопки

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

function createSticky(){
	var value = document.getElementById("note_text").value; // извлекаем текст из текстового поля
	var key = "sticky_" + localStorage.length; // создаем уникальный ключ для заметки
	localStorage.setItem(key, value); // добавляем новую заметку в локальное хранилище
	addStickyToDom(value); // выводим новую заметку на странице
}
