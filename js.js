// ##### HW

// ## Задание

// Получить список всех персонажей серии фильмов `Звездные войны` и вывести их на экран. По клику выводить под именем персонажа список космических кораблей, которыми он управлял (если конечно управлял).

// #### Технические требования:
// - Отправить AJAX запрос по адресу `https://swapi.co/api/people/` и получить список всех персонажей серии фильмов `Звездные войны`.
// - Как только с сервера будет получена информация о персонажах, сразу же выведите их список на страницу. Необходимо указать имя, пол и родной мир персонажа (поля `name`, `gender` и `homeworld`).
// - Если персонаж в фильмах управлял каким-то космическим кораблем или несколькими, вывести под названием его родного мира кнопку `Список кораблей` (свойство `starships`).
// - При клике на кнопку `Список кораблей` получите с сервера все космические корабли, которыми персонаж управлял на протяжении саги, и выведите их на экран, заменив кнопку `Список кораблей` на тег h3 с текстом `Пилотируемые корабли` внутри него.
// - AJAX запрос необходимо реализовать используя JavaScript`.

// #### Необязательные задания продвинутой сложности
// - сделать каждое имя корабля ссылкой, и при клике на него должен появлятся вложенный список подробных характеристик корабля с такими данными: модель (поле `model`), класс корабля (поле `starship_class`), пасажировместимость (поле `passengers`) и место производства (поле `manufacturer`)
// - Если имя корабля - Тысячелетний сокол (Millennium Falcon), то под списком кораблей вывести крупными буквами надпись: `Хан Соло стрелял первым!`
window.addEventListener('load', function () {
    const tBody = document.querySelector('tbody'),
    buton = document.getElementsByTagName("button");
    create = el => document.createElement(el);




    function show(data) {
        console.log(data.results);
        data.results.forEach(element => {
            if (element.starships.length > 0) {
                const tr1 = create('tr'),
                    btn = create('button'),
                    td1 = create('td'),
                    td2 = create('td');
                td3 = create('td');
                td4 = create('td');
                td1.innerHTML = element.name;
                td2.innerHTML = element.gender;
                td3.innerHTML = element.homeworld;
                btn.innerHTML = 'Список кораблей';
                td4.append(btn);
                tr1.append(td1, td2, td3, td4);
                tBody.append(tr1);
            } else {
                const tr1 = create('tr'),
                    td1 = create('td'),
                    td2 = create('td');
                td3 = create('td');
                td1.innerHTML = element.name;
                td2.innerHTML = element.gender;
                td3.innerHTML = element.homeworld;
                tr1.append(td1, td2, td3);
                tBody.append(tr1);
            }
        });

    }

    const tr = create('tr'),
        pName = create('th'),
        gender = create('th'),
        homeworld = create('th');

    pName.innerText = 'name';
    gender.innerText = 'gender';
    homeworld.innerText = 'homeworld';

    tBody.append(tr);
    tr.append(pName, gender, homeworld);

    async function requestFetch(url) {
        const pers = await fetch(url);
        return pers.json();
    }

   
    


    requestFetch('https://swapi.dev/api/people/').then((item) => {
        show(item);
    });

    

});
