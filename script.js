const create = function (teg) {
    return document.createElement(teg);
};

const buttonPaint = create('input');
buttonPaint.setAttribute('type', 'button');
buttonPaint.setAttribute('value', 'Нарисовать');
buttonPaint.setAttribute('id', 'buttonPaint');

const input = create('input');
input.setAttribute('type', 'text');
input.setAttribute('value', '');
input.setAttribute('placeholder', 'Введите диаметр круга');


const button = document.getElementById('buttonCircleDraw');
const divForCircles = create('div');
document.body.append(divForCircles);


document.body.append(divForCircles);

button.onclick = () => {
    button.remove();
    divForCircles.append(buttonPaint);
    divForCircles.append(input);
}

buttonPaint.onclick = () => {
    divForCircles.style.cssText = `
        width : ${input.value * 10}px;
        display : flex;
        flex-wrap: wrap;
    `;
    buttonPaint.remove();
    input.remove();

    let i = 100;
    while (i != 0) {
        const circle = create('div');
        circle.setAttribute('class', 'circle');
        circle.style.cssText = ` 
        width : ${input.value}px;
        height : ${input.value}px;
        background-color : rgb(${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)});
        border-radius:50%;
    `
        divForCircles.append(circle);
        i--;
    };
};



divForCircles.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        event.target.remove();
    };
});


