function reverse(data) {
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
};
