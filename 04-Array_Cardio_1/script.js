// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

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

const people = ['Bseck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Boeddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// inventor is correspong to each and every items og the inventors table
// long solution 

console.log("Array.prototype.filter()")
console.log("1. Filter the list of inventors for those who were born in the 1500's")
console.log("long solution ")

const filterInventorsBirthDate = inventors.filter( inventor => {
    if (inventor.year>= 1500 && inventor.year<1600) {
        return true; // keep it
    }
});
console.log("file: script.js ~ line 38 ~ filterInventorsBirthDate");
console.table( filterInventorsBirthDate)
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);

console.log("              ")
console.log("              ")
console.log("              ")
// Array.prototype.map()
console.log("Array.prototype.map()")
// 2. Give us an array of the inventors' first and last names
console.log("2. Give us an array of the inventors' first and last names")
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

console.log("              ")
console.log("              ")
console.log("              ")
// Array.prototype.sort()
console.log("Array.prototype.sort()")
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("3. Sort the inventors by birthdate, oldest to youngest")
const orderedFromTheOldestToTheYoungest = inventors.sort((item, nextItem) => {
    if (item.year > nextItem.year ) {
        return 1
    } else {
        return -1
    }
});
console.log("console.table of orderedFromTheOldestToTheYoungest is :")
console.table(orderedFromTheOldestToTheYoungest);
// better wrote
console.log("es6 Solution:")
const orderedFromTheOldestToTheYoungest_2 = inventors.sort((item,nextItem) => item.year > nextItem.year ? 1 : -1)
console.log("file: script.js ~ line 71 ~ orderedFromTheOldestToTheYoungest_2")
console.table(orderedFromTheOldestToTheYoungest_2)

orderedFromTheOldestToTheYoungest_2.forEach(item => {
    // console.log(item)
    console.log(`${item.first} has lived ${item.passed- item.year} years`)
})



console.log("              ")
console.log("              ")
console.log("              ")
// Array.prototype.reduce()
console.log("Array.prototype.reduce()")
// 4. How many years did all the inventors live?
console.log("4. How many years did all the inventors live?")

const totalYearAmount = inventors.reduce((total, inventor) => {
    // total is the first value we can establish and invenot is the array in which we goona get the data use for calculation
    // total first value is setUp as second argument of the reduce function reduce(function FirstReduceArgument (total, arrayWithData), second Argument which is the start ref value of of total )
    return total + inventor.passed - inventor.year
}, 0)
console.log("file: script.js ~ line 87 ~ totalYearAmount ~ totalYearAmount", totalYearAmount)
console.table(totalYearAmount)




// 5. Sort the inventors by years lived
const inventorsSortedByLifelength = inventors.sort((inventor, nextInventor) => {
    return inventor.passed - inventor.year > nextInventor.passed - nextInventor.year ? 1 : -1
})
console.log("file: script.js ~ line 103 ~ inventorsSortedByLifelength ~ inventorsSortedByLifelength", inventorsSortedByLifelength)

console.table(inventorsSortedByLifelength)

inventorsSortedByLifelength.map(item => console.log(`${item.first} ${item.last} has lived during ${item.passed -item.year} years`));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// // 1 find each a items 
// const all_aTags = document.querySelectorAll('.mw-category a'); //return a nodeList
// console.log("file: script.js ~ line 114 ~ all_aTags", all_aTags);

// // 2 convert a nodelist into an array
// const text_all_a_inArray = [...all_aTags]
// console.log("file: script.js ~ line 118 ~ innerHTML ~ innerHTML", text_all_a_inArray);
// // map into the array extract the streetNames only and the filter the street names including the ' de '
// const allAdresseswith_de = text_all_a_inArray.map(item => item.innerHTML).filter(streetName => streetName.includes(` de `));

console.log("              ")
console.log("              ")
console.log("              ")

// 7. sort Exercise using people array
console.log('7. sort Exercise using people array')
// Sort the people alphabetically by last name
console.log(' Sort the people alphabetically by last name')
// each index is a composed of a string with first and last name divided by a coma

const whatEver = people.sort(function(element, nextElement) {
    // console.log(element);// => return all indexes in a type : lastName , firstName
    const check_1 = element.split(`, `); // => return all array index/objects as a single array
    // console.log("file: script.js ~ line 135 ~ whatEver ~ check_1", check_1)  
    const  [lastNameCheck_1, firstNameCheck_1] = check_1; // => extract single element from the array
    // console.log("file: script.js ~ line 137 ~ whatEver ~ lastName", lastName)
    const check_2 = nextElement.split(`, `)
    const [lastNameCheck_2, firstNameCheck_2] = check_2
    
    // return lastNameCheck_2 > lastNameCheck_1 ? 1 : -1; 
    if(lastNameCheck_2 > lastNameCheck_1) {
        return 1
    } else {
        return -1
    }
})
console.log("file: script.js ~ line 143 ~ whatEver ~ whatEver", whatEver)

// const sortedByLastName = people.sort((firstPerson, secondPerson) => {
//     const [aLast, aFirst] = firstPerson.split(', ');
//     const [bLast, bFirst] = secondPerson.split(', ');
//     return aLast > bLast ? 1 : -1;
// });
// console.table(sortedByLastName);


console.log("              ")
console.log("              ")
console.log("              ")
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
console.log("file: script.js ~ line 164 ~ data", data)

const transportations = data.reduce((obj , item) => {
    if(!obj[item]) {
       obj[item] = 0
    } obj[item]++
    
    return obj
},{});
console.log("file: script.js ~ line 169 ~ transportations ~ transportations", transportations)

// const instances = data.reduce((obj, item) => {
//     if(!obj.hasOwnProperty(item)) {
//         obj[item] = 1;
//     }
//     else {
//         obj[item] ++;
//     }
//     return obj;
// }, {});

// console.table(instances);

