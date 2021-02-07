// ZADANIE 1
console.log(document.getElementById('buz').parentNode);

console.log(document.getElementById('baz').previousElementSibling);

console.log(document.getElementById('foo').children);

console.log(document.getElementById('foo').parentNode);

console.log(document.getElementById('foo').firstElementChild);

let fooChildrenElements = document.querySelector("#foo").children;
console.log(fooChildrenElements[Math.floor(fooChildrenElements.length / 2)]);

//ZADANIE  2

function clickListener(element) {
    element.addEventListener('click', (event) => {
        console.log(event.target.children[0].outerText.trim());
    });
}

clickListener(document.getElementById('ex2'));

//ZADANIE 3 i 4

const elementsToEvents = document.querySelectorAll('#ex3 button');

function showAndAddedStyleForButtonSpan(elements) {
    elements.forEach(function (element) {
        element.addEventListener('click', () => {
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

            element.parentNode.style.color = randomColor;

            if (element.nextElementSibling.style.display === "none") {
                element.nextElementSibling.style.display = 'inline';
                return;
            }

            element.nextElementSibling.style.display = 'none';
        })
    });
}

showAndAddedStyleForButtonSpan(elementsToEvents);

//ZADANIE 5

const divsEx5 = document.querySelectorAll('#ex5 div');

divsEx5.forEach((div) => {
    div.addEventListener('mouseover', () => {
        // 1
        document.querySelectorAll('#ex5 ul')[0].firstElementChild.style.backgroundColor = div.style.backgroundColor;

        // 2
        // document.querySelectorAll('#ex5 ul')[0].lastElementChild.style.backgroundColor = div.style.backgroundColor;

        // 3
        // document.querySelectorAll('#ex5 ul li').forEach((li) => {
        //     if (li.outerText % 2 !== 0) {
        //         return;
        //     }
        //
        //     li.style.backgroundColor = div.style.backgroundColor;
        // });

        // 4
        // document.querySelectorAll('#ex5 ul li').forEach((li) => {
        //     li.style.backgroundColor = div.style.backgroundColor;
        // });

        // 5
        // document.querySelectorAll('#ex5 > ul')[0].style.backgroundColor = div.style.backgroundColor;
    });
});

// 6

const ex6 = document.getElementById('ex6');

let firstTask = ex6.firstElementChild.firstElementChild.firstElementChild;
let secondTask = ex6.firstElementChild.parentNode.firstElementChild.firstElementChild.nextElementSibling.parentNode;
let thirtyTask = ex6.parentNode.firstElementChild.parentNode.children[1].firstElementChild.firstElementChild.firstElementChild;