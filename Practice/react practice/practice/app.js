/*const author = "SOme Author";
const statement = "some statement";
const quote = highlight `Here is the ${statement} by author ${author} and it's true`;
console.log(quote);

const result = document.getElementById("root");
console.log(result);
result.innerHTML = quote;

function highlight(text, ...vars) {
    const awesomeText = text.map((item, index) => {
        return `${item} <strong class="blue">${vars[index]}</strong>`;
    });

    return awesomeText.join("");
}
*/

function sayHi() {
    console.log("hello");
}

sayHi();

const hello = function(name) {
    console.log(`hello ${name}`);
}
hello("kushal");

function triple(value1, value2) {
    return value1 * value2 * 2;
}
triple(1, 2);


console.log("---arrow fun--");

const sayHiAgain = () => console.log("hello");

sayHiAgain();

const double = value => value * 2;
console.log(double(4));

const multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
}

const sum = multiply(2, 3);
console.log(sum);

//return object

const object = () => ({ name: "john", age: 25 });
const person = object();
console.log(person.name);

//arrow functions as callback functions
const numbers = [1, 2, 3, 4, 5, 6, 7];
const big = numbers.filter((number, index) => {
    console.log(index);

    return number > 2;
});
console.log(big);

const btn = document.querySelector(".btn");
btn.addEventListener('click', () => console.log("this is clicked"));