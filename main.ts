
function noOfWords(wordInput: string): number{
    wordInput = wordInput.trim();

    let arr = wordInput.split(" ");
    let counter: number = 0;
    arr.forEach(element => {
        if (element !== "") counter++;
    });
    return counter;
}

let actualNoOfWords = noOfWords("hello there");

console.log(actualNoOfWords);