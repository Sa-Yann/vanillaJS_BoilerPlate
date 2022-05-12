// console.log('index.js');
// console.log("      ");
// console.log("      ");
// // 1 - title cases set up tp uppercase'
// console.log('1 - title cases set up tp uppercase')
// console.log("      ");
// const h1 = document.querySelector(`#title`);
// // console.log("file: index.js ~ line 3 ~ h1", h1)
// console.log("file: index.js ~ line 6 ~ h1.innerHTML.toUpperCase()", h1.innerHTML.toUpperCase())

// onload = () =>  h1.innerHTML.toUpperCase()

// console.log("      ");
// console.log("      ");
// //2 - the longest world
// console.log('2- the longest world');
// console.log("      ");

// console.log("      ");
// console.log("1- THE LONGEST WORLD");
// console.log("      ");


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
            // Sinon on a deja un mot dans biggestWordsArr
            // dc si le nouveau mot irritéré a autant plus de lettres que la taille du dernier mot stocké
                console.log("file: index.js ~ line 120 ~ longestWorld ~ biggestWordsArr", biggestWordsArr)
                // garder celui ou ceux qui est/sont  déja dedans et y ajouter le dernier mot checker
//              // en utilisant le spread Opérateur
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
//                 
// }



console.log("      ");
console.log("      ");
//2 - the longest world
console.log('4 - Capitalize First Letter ');
console.log("      ");

function capitalizeFirstLetter (string) {

    const splitSentenceArr= string.split(' ');
    // console.log("file: index.js ~ line 157 ~ capitalizeFirstLetter ~ splitSentenceArr", splitSentenceArr);

    let arrCompleteWorldsCapitalized = []

    for(i=0; i < splitSentenceArr.length; i++) {
        
        const firstLetter = splitSentenceArr[i].charAt(0).toUpperCase();
        const endOdWord = splitSentenceArr[i].slice(1);

        const newWordCapitalized = firstLetter.concat(endOdWord);
        // console.log("file: index.js ~ line 164 ~ capitalizeFirstLetter ~ newWordCapitalized", newWordCapitalized)
        arrCompleteWorldsCapitalized = [...arrCompleteWorldsCapitalized,newWordCapitalized]
        console.log("file: index.js ~ line 169 ~ capitalizeFirstLetter ~ arrCompleteWorldsCapitalized", arrCompleteWorldsCapitalized)
        let finalString = arrCompleteWorldsCapitalized.join(' ');
        console.log("file: index.js ~ line 171 ~ capitalizeFirstLetter ~ finalString", finalString)
        
        // const allMyFirstLettersArr = [...arrFirstLetter, firstLetter];
        // console.log("file: index.js ~ line 163 ~ capitalizeFirstLetter ~ allMyFirstLettersArr", allMyFirstLettersArr)
        // const allMyendOdWordArr = [...arrFirstLetter, endOdWord];
        // console.log("file: index.js ~ line 165 ~ capitalizeFirstLetter ~ allMyendOdWordArr", allMyendOdWordArr)
        // const newSentence = console.log(firstLetter + endOdWord);
        
    }

    return console.log('to define')

}

capitalizeFirstLetter('I got up early today');
// capitalizeFirstLetter('I went straight to the beach');



console.log("      ");
console.log("      ");
//2 - the longest world
console.log('4 - Unique Values ');
console.log("      ");

function uniqueValueCheck(string) {
    
    // // Methode 1
    // // console.log("file: index.js ~ line 197 ~ uniqueValueCheck ~ string", string)
    // let allSeperatedLettersInTheWord = []
    // for (var i = 0; i < string.length; i++) {
       
    //     const newLetter = string.charAt(i); //better use the For(...of ...) {} instead of for(var i = 0; i < string.length; i++) {}
    //     allSeperatedLettersInTheWord = [...allSeperatedLettersInTheWord, newLetter]
    //     // console.log("file: index.js ~ line 204 ~ uniqueValueCheck ~ allSeperatedLettersInTheWord", allSeperatedLettersInTheWord)
    //     for(i=0 ; i < allSeperatedLettersInTheWord.length; i++) {
    //         if (allSeperatedLettersInTheWord[i+1] !== allSeperatedLettersInTheWord[i]) {
    //             console.log(`il n'y a aucune lettre indentique dans le string: ${string}`)
    //             return string
    //         } else {
    //             console.log(`il y a des lettres indentiques dans le string: ${string}`)
    //         }
    //     }
    // }
    
    // Methode 2
    let allSeperatedLettersInTheWord = []
    for(letter of string){
        // console.log("file: index.js ~ line 219 ~ uniqueValueCheck ~ letter", letter)
        // allSeperatedLettersInTheWord.push(letter);
        // console.log("file: index.js ~ line 221 ~ uniqueValueCheck ~ allSeperatedLettersInTheWord", allSeperatedLettersInTheWord)
        let indexResult = allSeperatedLettersInTheWord.indexOf(letter);
        console.log("file: index.js ~ line 225 ~ uniqueValueCheck ~ indexResult", indexResult);
        allSeperatedLettersInTheWord = [...allSeperatedLettersInTheWord, letter]
        // allSeperatedLettersInTheWord.push(letter);
        console.log("file: index.js ~ line 225 ~ uniqueValueCheck ~ allSeperatedLettersInTheWord", allSeperatedLettersInTheWord)
        if(indexResult !== -1){
            console.log(`il n'y a aucune lettre indentique dans le string: ${string}`)
            return string
        } else {
                console.log(`il y a des lettres indentiques dans le string: ${string}`)
        }
    }

    return string
}

console.log(uniqueValueCheck('abcdefg'));
console.log(uniqueValueCheck('abcadefgg'));

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

console.log("      ");
console.log("      ");
console.log('30 Days JS Challenge - Array Cardio Day 1 ');
console.log("      ");

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 30djsc 1. Filter the list of inventors for those who were born in the 1500's
console.log("      ");
console.log('30_Chalngh 1. Filter the list of inventors for those who were born in the 1500\'s ');
console.log("      ");

const bornInXVIcentury = inventors.filter( inventor => inventor.year >= 1500 && inventor.year <1600)
console.log("file: index.js ~ line 273 ~ bornInXVIcentury", bornInXVIcentury);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log("      ");
console.log('30dJS_Chalngh 2. Give us an array of the inventors first and last names');
console.log("      ");

const firstAndLastNameArr = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log("file: index.js ~ line 279 ~ firstAndLastNameArr", firstAndLastNameArr);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("      ");
console.log('30dJS_Chalngh 3. Sort the inventors by birthdate, oldest to youngest');
console.log("      ");

const newInventorsOrder = inventors.sort(function (a, b) {
        return a.year - b.year
    } )
console.log("file: index.js ~ line 292 ~ newInventorsOrder ~ newInventorsOrder", newInventorsOrder)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log("      ");
console.log('30dJS_Chalngh 4. How many years did all the inventors live?');
console.log("      ");

const totalYears = inventors.reduce((previousTotalYearsValue, inventor ) => {
    let newAddedValueToAdd = inventor.passed - inventor.year
    return previousTotalYearsValue + newAddedValueToAdd
},0) // ZERO IS TO INDICATED THE FIRST PREVIOUS VALUE TO START FROM / COUNT ON
console.log("file: index.js ~ line 307 ~ totalYears ~ totalYears", totalYears)

// 5. Sort the inventors by years lived
console.log("      ");
console.log('30dJS_Chalngh 5. Sort the inventors by years lived');
console.log("      ");



const livedTheLonguest = inventors.sort((a,b) => {
    const lastInventorChecked = a.passed - a.year;
    const nextInventorChecker = b.passed - b.year;
    return nextInventorChecker > lastInventorChecked ? 1 : -1
    // si next
})
console.log("file: index.js ~ line 328 ~ livedTheLonguest ~ livedTheLonguest", livedTheLonguest)



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

console.log("      ");
console.log('6. create a list of Boulevards in Paris that contain \'de\' anywhere in the name');
console.log("      ");

// // ALL CODE NEEDS TO BE EXECUTED IN THE INSPECTER TOOL FROM WIKIPEDIA PAGE 
// // step: 1 get the dom element that contain the total list of boulevard with querySelector

//  const divWithdiv_ul_li_a = document.querySelector('.mw-category')

 
// //  step 2 : we get all the elements with a tag
// const listOfLinks = divWithdiv_ul_li_a.querySelectorAll('a')
// //  step 3 a querySelectorAll return a nodeList that needs to be transformed into an array to be mapped
//  const listArrayGood = Array.from(listOfLinks)

// //  step 4 :this array can the be mapped then filtered with a condition that select only the Bld names including ' de '

// const allTheBldWith_de = listArrayGood.map(Bld => Bld.innerHTML).filter(BldName => BldName.includes(' de '))


// 7. sort Exercise
// Sort the people alphabetically by last name
console.log("      ");
console.log('6. Sort the people alphabetically by last name');
console.log("      ");

// console.log(people[1])

const sortedAlphabeticalybyLastName = people.sort((lastOne,nextOne) => {
        const cleanNameInArr_lastOne =  lastOne.split(', ')
        const [lastName_lastOne, firstName_lastOne] = cleanNameInArr_lastOne
        const cleanNameInArr_nextOne =  nextOne.split(', ') //renvoi un Arr ['nom','prenom']
        const [lastName_nextOne, firstName_nextOne] = cleanNameInArr_nextOne
        // console.log("file: index.js ~ line 360 ~ sortedAlphabeticalybyLastName ~ firstName", firstName)
        
        // console.log("file: index.js ~ line 362 ~ sortedAlphabeticalybyLastName ~ newOrder", newOrder)
        return firstName_lastOne > firstName_nextOne ? 1 : -1
}
    // console.log("file: index.js ~ line 358 ~ inventors", inventors)      
);

console.log("file: index.js ~ line 362 ~ sortedAlphabeticalybyLastName ~ sortedAlphabeticalybyLastName", sortedAlphabeticalybyLastName)

for(i=0; i<sortedAlphabeticalybyLastName.length; i++) {
    const finalResult = sortedAlphabeticalybyLastName[i].split(', ').reverse().join(' ')
    console.log(finalResult)
}

// 8. Reduce Exercise
// Sum up the instances of each of these
console.log("      ");
console.log('8. Reduce Exercise / Sum up the instances of each of these');
console.log("      ");


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];


const typeOfTransportation = data.reduce((objRef, vehiculeName) => {

    if(!objRef[vehiculeName]) {
       objRef[vehiculeName] = 0;
    }
    objRef[vehiculeName]++;

    // console.log("file: index.js ~ line 388 ~ typeOfTransportation ~ index", index)
    return objRef
    
},{})
console.log("file: index.js ~ line 398 ~ typeOfTransportation ~ typeOfTransportation", typeOfTransportation)
