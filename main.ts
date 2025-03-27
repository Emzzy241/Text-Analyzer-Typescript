function wordCounter(text: string): number{
    if (text.trim().length === 0) return 0;

    let arr = text.split(" ");
    let counter: number = 0;
    arr.forEach( element => {
        if(typeof element === 'string' && isNaN(Number(element))) counter++;
    });

    return counter;
}

function checkingSentence(sentence: string): string{
    sentence = sentence.toLowerCase();
    sentence = sentence.replace(/[^a-zA-Z0-9\s]/g, "");
    return sentence;
}
let testCheckSentence = checkingSentence("Hello There 123Ade412 423 {}# # # () \ ] \ / /** {} [] () 9027")

console.log(testCheckSentence);