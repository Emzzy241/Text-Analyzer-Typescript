function wordCounter(text: string): number{
    if (text.trim().length === 0) return 0;

    let arr = text.split(" ");
    let counter: number = 0;
    arr.forEach( element => {
        if(typeof element === 'string' && isNaN(Number(element))) counter++;
    });

    return counter;
}

let wordCount = wordCounter(" Hello There 123");

console.log(wordCount);