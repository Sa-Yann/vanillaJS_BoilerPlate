console.log('index.js');
console.log("      ");
console.log("      ");
// 1 - title cases set up tp uppercase'
console.log('1 - title cases set up tp uppercase')
console.log("      ");
const h1 = document.querySelector(`#title`);
// console.log("file: index.js ~ line 3 ~ h1", h1)
console.log("file: index.js ~ line 6 ~ h1.innerHTML.toUpperCase()", h1.innerHTML.toUpperCase())

onload = () =>  h1.innerHTML.toUpperCase()

console.log("      ");
console.log("      ");
//2 - the longest world
console.log('2- the longest world');
console.log("      ");

console.log("      ");
console.log("1- THE LONGEST WORLD");
console.log("      ");


function longestWorld(phrase) {
    let worldsArray = phrase.split(' ');
    console.log(worldsArray);
    let longestWorldIs= ""
    for (let world of worldsArray){
        if (world.length > longestWorldIs.length) {
            longestWorldIs = world
            // console.log("file: index.js ~ line 26 ~ longestWorld ~ longestWorldIs", longestWorldIs)
        } else longestWorldIs = longestWorldIs
    }

    return console.log(`in the sentence : '${phrase}', the longest world is : ${longestWorldIs}`);
}
console.log(longestWorld('I woke up early today'));
console.log(longestWorld('I went straight to the beach'));

console.log("      ");
console.log("      ");
//2 - the longest world
console.log('3 - Find Out if if values in an array represent arithmetiq(+) or geometric(*) series');
console.log("      ");


function series(Array){

    // // 1 manage to get all serries in an Array
    let resultArrayTestArithm = [];
    let resultArrayTestGeomtrc = [];
    for(let i=1; i < Array.length; i++ ) {
        // const result = [];
        result4ArithmUse = Array[i] - Array[i -1];
        result4GmtrcUse = Array[i] / Array[i -1];
        
        resultArrayTestArithm.push(result4ArithmUse);
        
        resultArrayTestGeomtrc.push(result4GmtrcUse);
        
    }
    // console.log(resultArrayTestArithm);
    // console.log(resultArrayTestGeomtrc);

    // 2 once the logic of equal number understood ew use set() 
    // to define the numbers momentum in the Array passed to the fucntion
    let resultSet_TestArithm = new Set();
    let resultSet_TestGeomtrc = new Set();
    for(let i=1; i < Array.length; i++ ) {
        // const result = [];
        result4ArithmUse = Array[i] - Array[i -1];
        result4GmtrcUse = Array[i] / Array[i -1];
        
        resultSet_TestArithm.add(result4ArithmUse);
        
        resultSet_TestGeomtrc.add(result4GmtrcUse);
        
    }
    console.log(resultSet_TestArithm);
    console.log(resultSet_TestGeomtrc);

    // console.log('resultSet_TestArithm.size : ' , resultSet_TestArithm.size);

    resultSet_TestArithm.size === 1 && console.log(`${Array} est une suite Arithmetique`)
    resultSet_TestGeomtrc.size === 1 && console.log(`${Array} est une suite Geometric`)
    if(resultSet_TestArithm.size !== 1  && resultSet_TestGeomtrc.size !== 1 ) {
        console.log(`${Array} n'est ni une suite Arithmetique ni une suite Geometric`)
    }
    // return series
};

console.log(series([2, 4, 6, 8]));
console.log(series([3, 9, 27, 81, 243]));
console.log(series([1, 5, 1, 18]));
console.log(series([1, 5, 7, 18]));


console.log("      ");
console.log("      ");
console.log("3- THE LONGEST WORLD UPDATE: WHAT IF FEW WORDS HAVE TEH SAME LENGTH");
console.log("      ");

function longestWorld(string){
    let allWordsArr = string.split(' ');
    // console.log("file: index.js ~ line 105 ~ longestWorld ~ allWordsArr", allWordsArr)
    let wordSize = 0;
    let biggestWordsArr = []
    console.log("file: index.js ~ line 108 ~ longestWorld ~ biggestWordsArr", biggestWordsArr.length)

    for(i=0; i<allWordsArr.length; i++) {
        const word = allWordsArr[i]
        // si la longueyur du mot est superieure a la longueur actuelle de wordSize
        // sachant que lors de la 2ere loop ce sera toujours le cas
        if(word.length>wordSize){
            // donner a wordSize la valeur de world Lemgth
            wordSize = word.length
            biggestWordsArr = []
            biggestWordsArr.push(word)
            // console.log("file: index.js ~ line 117 ~ longestWorld ~ biggestWordsArr", biggestWordsArr)
        } else if (word.length>=wordSize && biggestWordsArr[0].length>0) {
                console.log("file: index.js ~ line 120 ~ longestWorld ~ biggestWordsArr", biggestWordsArr)
                biggestWordsArr = [...biggestWordsArr, word]
        }
    }
    
    return biggestWordsArr
}


console.log(longestWorld('I woke up early today bachbouzouk'));
console.log(longestWorld('I went straight to the beach, like straight straight'));


// if (word.length = biggestWordsArr[0].length){
//                 console.log("file: index.js ~ line 120 ~ longestWorld ~ word.length", word.length)
//                 console.log('ligne12: biggestWordsArr[0].length : ' , biggestWordsArr[0].length);
//                 biggestWordsArr = [...biggestWordsArr, word]
//                 // sinon si le mot est aussi grand wue celui déja dans le array biggestWordsArr
//                 // garder celui ou ceux qui est/sont  déja dedans et y ajouter le dernier mot checker
//                 // en utilisant le spread Opérateur
// }