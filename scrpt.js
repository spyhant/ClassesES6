/*  function reverse(data) {
    var letters = [],
        l = data.length;
    while (l--) {
        letters.push(data[l]);
    }
    return letters.join('');
}

function isPalindrome(word) {
    var wordLenght = word.length;
    var wordMid = wordLenght / 2;

    if (wordLenght % 2 === 0) {
        var firstPolovina = word.substring(0, wordMid);
        var secondPolovina = word.substring(wordMid);
    } else {
        var firstPolovina = word.substring(0, wordMid - 0.5);
        var secondPolovina = word.substring(wordMid + 0.5);
    }

    return firstPolovina === reverse(secondPolovina);
};
butt.onclick = function () {
    let val = document.getElementById('elem1').value;
    console.log(isPalindrome(val));
};  */

/* let age = document.getElementById('age').value;
console.log(age);

function showUser(surname, name) {
    this.name = name;
    this.surname = surname;
    this.value = age;
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser('Lobach', 'Alex'); */
"use strict"

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        var elem = document.createElement('div');
        elem.style.width = this.width;
        elem.style.height = this.height;
        elem.style.background = this.bg;
        elem.style.fontSize = this.fontSize;
        elem.style.textAlign = this.textAlign;
        elem.innerHTML = "Hello Alex";
        
        elem.style.cssText += 'color: white;'
        document.body.appendChild(elem);
    }
}
const diven = new Options("100px", "200px", "green", "20px", " center");
diven.createDiv();