//1

function getTags(elements) {
    const tags = [];

    for (const element of elements) {
        tags.push(element.tagName.toLowerCase());
    }

    return tags;
}

console.log(getTags(document.getElementsByClassName('more-divs')));

// 2

function showInfo(element) {
    console.log(element.innerHTML);
    console.log(element.outerHTML);
    console.log(element.classList.value);
    console.log(element.classList);
    console.log(element.dataset);
}

showInfo(document.getElementsByClassName('short-list')[0]);

// 3

function sumAndMinusFromDataset(element) {
    const firstNumber = parseInt(element.dataset.numberone);
    const secondNumber = parseInt(element.dataset.numbertwo);
    const thirtyNumber = parseInt(element.dataset.numberThree);

    return {'sum': (firstNumber + secondNumber + thirtyNumber), minus: (firstNumber - secondNumber - thirtyNumber)};
}

console.log(sumAndMinusFromDataset(document.getElementById('datasetCheck')));

// 4

document.getElementById('spanText').innerText = 'Bla Bla';

// 5

document.getElementById('spanText').classList.add('new-class');

// 6

function changeClassList(elementClassList) {
    let allClass = '';
    elementClassList.forEach((singleClass) => {
        allClass += ' + ' + singleClass;
        console.log(singleClass);
    });

    console.log(allClass.slice(3, allClass.length));

    elementClassList.value = '';
    console.log('Usunięto wszystkie klasy');
}

changeClassList(document.getElementById('classes').classList);

// 7

function addDataSetForLi(elements) {
    elements.forEach((element) => {
        if (element.dataset.text === undefined) {
            element.dataset.text = 'text';
        }
    })
}

addDataSetForLi(document.querySelectorAll('#longList > li'))

// 8

function createObject(nameClass) {
    addClass({newClass: nameClass});
}

function addClass(object) {
    const newClassName = object.newClass;
    document.getElementById('myDiv').classList.add(newClassName);
}

createObject('string_z_parametru');

// 9

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber = getRandomInt(0, 10);
console.log("Random number for 7 task is: " + randomNumber);

function addClassForNumber(number) {
    const element = document.getElementById('numbers');

    if (number % 2 === 0) {
        element.classList.add('event');
    } else {
        element.classList.add('odd');
    }
}

addClassForNumber(randomNumber);

// 10

function getValues(elements) {
    const result = [];

    elements.forEach((element) => {
       result.push(element.innerText);
    });

    return result;
}

console.log(getValues(document.querySelectorAll('#longList > li')));

// 11

function liNewValues(elements) {
    elements.forEach((element) => {
        element.dataset.oldValue = element.innerText;
        element.innerText = getRandomInt(0, 10);
    });

}

liNewValues(document.querySelectorAll('#longList > li'));