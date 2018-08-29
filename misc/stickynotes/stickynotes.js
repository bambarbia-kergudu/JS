window.onload = init; // дожидаемся полной загрузки страницы


function init(){

	var button = document.getElementById("add_button"); // извлекаем объект кнопки с id = add_button
	button.onclick = createSticky; // задаем обработчик события и ждем нажатия кнопки

	var stickiesArray = getStickiesArray(); // получаем массив ключей для последующей выборки по локальному хранилищу

	for (var i = 0; i < stickiesArray.length; i++) { // подсчитываем кол-во элементов в массиве
		var key = stickiesArray[i]; // получаем ключ каждого элемента
		var value = localStorage[key]; // получаем значение по ключу из локального хранилища
		addStickyToDom(value); // передаем значение в функцию для вывода данных на сайте
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
	var stickiesArray = getStickiesArray(); // получаем массив ключей
	var currentDate = new Date(); // узнаем текущую дату
	var key = "sticky_" + currentDate.getTime(); // преобразуем текущую дату в кол-во секунд, прошедших с 1970 года и объединяем со sticky_
	var value = document.getElementById("note_text").value; // извлекаем текст из текстового поля
	localStorage.setItem(key, value); // добавляем ключ - значение в локальное хранилище
	stickiesArray.push(key); // добавляем в конец массива новый уникальный ключ для последующей выборки значения по ключу
	localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray)); // превращаем массив в строку и добавляем в локальное хранилище по ключу stickiesArray
	addStickyToDom(value); // выводим новую заметку на странице
}

function getStickiesArray(){
	var stickiesArray = localStorage.getItem("stickiesArray"); // получаем строку с сохраненными ключами из локального хранилища
	if(!stickiesArray){ // если строки с сохраненными ключами нет
		stickiesArray = []; // создаем пустой массив
		localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray)); // превращаем пустой массив в строку и добавляем в stickiesArray
	} else { // если строка с сохраненными ключами есть
		stickiesArray = JSON.parse(stickiesArray); // превращаем строку в массив
	}
	return stickiesArray; // возвращаем массив
}
