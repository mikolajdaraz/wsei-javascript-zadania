//ZADANIE 1

// 1)
document.getElementById('test-event').addEventListener('click', (event) => {
     console.log(event);
})

//2)

document.addEventListener("mousemove",(event) => {
     console.log(event);
});

 3)

document.getElementById('test-event').addEventListener('mouseover', (event) => {
     console.log(event);
})

// 4)

document.addEventListener("keydown", (event) => {
     console.log(event);
});

// 5)

 document.addEventListener('scroll', (event) => {
     console.log(event);
});

// 6)

 document.getElementById('input-test').addEventListener('input', (event) => {
     console.log(event);
});

// ZADANIE 2

function changeTextSpanAboveBtn() {
    const button = document.getElementById('ex2');

    button.addEventListener('click', () => {
        button.nextElementSibling.innerText = button.dataset.text;
    });
}

changeTextSpanAboveBtn();

// 3

function changeSquareColor() {
    const square = document.getElementById('ex3');

    square.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    square.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}

changeSquareColor();

// 4

function validateNumberInInputTest() {
    const regex = /\d+/;

    document.getElementById('input-test').addEventListener('input', (event) => {
        const input = event.target;
        if (input.value.match(regex) !== null) {
            if (input.nextElementSibling.innerText.length === 0) {
                input.nextElementSibling.innerText = 'Nie można wpisywać cyfr';
            }
            return;
        }

        if (input.nextElementSibling.innerText.length > 0) {
            input.nextElementSibling.innerText = '';
        }
    });
}

validateNumberInInputTest();

// 5

function clickBtnCounter() {
    const button = document.getElementById('ex5-button');
    let i = 0;

    button.addEventListener('click', counter)

    function counter() {
        ++i;
        button.nextElementSibling.innerText = i;

        if (i === 10) {
            button.removeEventListener('click', counter);
        }
    }
}

clickBtnCounter();

// 6

function changeColorFromScroll() {
    const body = document.body;
    document.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    })
}

changeColorFromScroll();

// 7
function calculator() {
    const buttons = document.querySelectorAll('#calculator div');
    const numbers = buttons[0];
    const operationButtons = buttons[1];

    this.input = document.querySelectorAll('#calculator > input')[0]

    this.numbersListener = function (elements) {
        for (const element of elements.children) {
            element.addEventListener('click', (event) => {
                if (this.firstNumber === null) {
                    this.firstNumber = parseInt(event.target.outerText);
                }

                if (this.operation !== null && this.secondNumber === null) {
                    this.secondNumber = parseInt(event.target.outerText);

                    this.input.value = this.handle();

                    this.clearInputs();
                }
            });
        }
    }

    this.operationsListener = function (elements) {
        for (const element of elements.children) {
            element.addEventListener('click', (event) => {
                this.operation = event.target.outerText;
            });
        }
    }

    this.handle = function () {
        switch (this.operation) {
            case '+':
                return this.firstNumber + this.secondNumber;
            case '-':
                return  this.firstNumber - this.secondNumber;
            case '*':
                return  this.firstNumber * this.secondNumber;
            case '/':
                if (this.secondNumber === 0) {
                    throw new Error('cannot be divided by zero');
                }

                return this.firstNumber / this.secondNumber;
            default:
                throw new Error('Undefined operation');
        }
    }

    this.clearInputs = function () {
        this.firstNumber = null;
        this.secondNumber = null;
        this.operation = null;
    }

    this.clearInputs();
    this.numbersListener(numbers);
    this.operationsListener(operationButtons);
}

calculator();