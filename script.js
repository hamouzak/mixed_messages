let sentences=[2];
let sentences2=[];
function generateRandomNumber(n){
    return Math.floor(Math.random()*(n));
}

function generateArray(){
    sentences[0]=['star', 'moon', 'sun', 'comet'];
    sentences[1]=['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'];
    sentences[2]=['go out and eat', 'not read this', 'play more', 'trust no one'];
}

function generateSentences(){
    generateArray();
    sentences2.push(`Your sign right now is a ${sentences[0][generateRandomNumber(sentences[0].length)]}`);
    sentences2.push(`You are having: ${sentences[1][generateRandomNumber(sentences[1].length)]}`);
    sentences2.push(`You should: ${sentences[2][generateRandomNumber(sentences[2].length)]}`);
    return sentences2[0]+'\n'+sentences2[1]+'\n'+sentences2[2];
}
console.log(generateSentences());


