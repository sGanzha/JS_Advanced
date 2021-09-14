const pizza = {
    pizzaSize: {
        id: '',
        price: null
    },
    pizzaSauce: {
        sauce: '',
        price: null
    },
    pizzaTopping:{
        topping: '',
        price: null
    },
    get price() {
        return pizza.pizzaSize.price + pizza.pizzaSauce.price +
        pizza.pizzaTopping.price;
    },
    get sauce() {
        return pizza.pizzaSauce.sauce; 
    },
    get topping() {
        return pizza.pizzaTopping.topping;
    }
};

document.querySelector("#pizza").addEventListener("click", (e) => {});

// Выбираем размер
const [...labelArr] = document.querySelectorAll("label > input");
labelArr.forEach((item) => {
    item.addEventListener("click", (e) => {
        //console.dir(item);
        if (item.checked) {
            const input = item;
            if (input.id == "small") {
                pizza.pizzaSize = {
                    size: "small",
                    price: 30,
                };
            } else if (input.id == "mid") {
                pizza.pizzaSize = {
                    size: "mid",
                    price: 50,
                };
            } else if (input.id == "big") {
                pizza.pizzaSize = {
                    size: "big",
                    price: 70,
                };
            }
            showInfo();
        }
    });
});

function showInfo() {
    document.querySelector(".price > p").innerHTML = "Ціна: " + pizza.price;
    document.querySelector(".sauces > p").innerHTML = "Соуси: " + pizza.sauce;
    document.querySelector(".topings > p").innerHTML = "Топiнги: " + pizza.topping;
    
}

// Выбираем соус
const [...sauceArr] = document.querySelectorAll('.sauce');
sauceArr.forEach( (item) => {
    item.addEventListener('dragstart', function (event){
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("Text", this.id); 
    });

    const target = document.querySelector('.table'); 

    target.addEventListener('dragover', function (event) {
        // отменяем стандартное обработчик события dragover.
        if (event.preventDefault) event.preventDefault();
        return false;
    });

    target.addEventListener("drop", function (event) {
    console.dir(item);
        // прекращаем дальнейшее распространение события по дереву DOM и отменяем возможный стандартный обработчик установленный браузером.
        if (event.preventDefault) event.preventDefault();
        if (event.stopPropagation) event.stopPropagation();
        var id = event.dataTransfer.getData("Text");
        
        if (id == "sauceClassic") {
            pizza.pizzaSauce = {
                sauce: "Кетчуп",
                price: 25,
            };
        } else if (id == "sauceBBQ") {
            pizza.pizzaSauce = {
                sauce: "BBQ",
                price: 30,
            };
        } else if (id == "sauceRikotta") {
            pizza.pizzaSauce = {
                sauce: "Рiкотта",
                price: 35,
            };
        }
        showInfo();
    });
});


// Выбираем топинги
const [...toppingsArr] = document.querySelectorAll('.topping');
toppingsArr.forEach( (item) => {
    item.addEventListener('dragstart', function (event){
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("Text", this.id); 
    });

    const target = document.querySelector('.table'); 

    target.addEventListener('dragover', function (event) {
        // отменяем стандартное обработчик события dragover.
        if (event.preventDefault) event.preventDefault();
        return false;
    });

    target.addEventListener("drop", function (event) {
    console.dir(item);
        // прекращаем дальнейшее распространение события по дереву DOM и отменяем возможный стандартный обработчик установленный браузером.
        if (event.preventDefault) event.preventDefault();
        if (event.stopPropagation) event.stopPropagation();
        var id = event.dataTransfer.getData("Text");
        
        if (id == "moc1") {
            pizza.pizzaTopping = {
                topping: "Сир звичайний",
                price: 25,
            };
        } else if (id == "moc2") {
            pizza.pizzaTopping = {
                topping: "Сир фета",
                price: 30,
            };
        } else if (id == "moc3") {
            pizza.pizzaTopping = {
                topping: "Моцарелла",
                price: 35,
            };
        } else if (id == "telya") {
            pizza.pizzaTopping = {
                topping: "Телятина",
                price: 35,
            };
        } else if (id == "vetch1") {
            pizza.pizzaTopping = {
                topping: "Помiдори",
                price: 35,
            };
        } else if (id == "vetch2") {
            pizza.pizzaTopping = {
                topping: "Гриби",
                price: 35,
            };
        } ;
        
        showInfo();
    });
});



// FORM
// проверяем input что вводится
function validate( el ){

    function validateEl( reg, val ){
        // Проверка на валидность
        if (reg.test(val)){
            document.querySelector(`#error-${el.id}`).style.display = 'none';
        }else{
            document.querySelector(`#error-${el.id}`).style.display = 'block';
        }
        console.log(reg.test(val));
        //console.log(val.search(reg) !== -1 ? true : false);
    }

    

    switch( el.id ){
        case 'name':            
            validateEl( /^[А-я]+$/ , el.value); 
        break;
        case 'phone':
            //+38(XXX)XXX-XX-XX
            validateEl( /^\+38\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/ , el.value);
        break;
        case 'email':
            validateEl( /^[A-z1-9._]+@[a-z1-9._]+.[a-z]{1,4}$/ , el.value);
        break;
    }
}

function errorShow(){

}

const [...inputArr] = document.querySelectorAll('#contactInfo input');

inputArr.filter( function(el){
    return el.id === 'name' || el.id === 'phone' || el.id === 'email';
}).forEach( function(el){
    el.addEventListener('input', function(){

        validate(this);
        
    });
});



