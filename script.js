//Part 1 : Refactoring ALAB 308.3.1 (csv)
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const rows = csv.split("\n");//separate whole string in multiple strings-(5 strings)
console.log(rows);
console.log(rows.length);//5 separate strings
console.log(csv.length);
console.log(typeof(rows));//object
console.log(`---------------part 1----------------------`)
const table = []
for (i=0; i<rows.length; i++){
    let row = rows[i].split(',').join(' ')
    table.push(row)
    console.log(row);            
}
 

//Part 2: Expanding Functionality.
console.log(`---------------part 2-----------------------`)

let numColumn = 4 //variable that store # of columns in each row
const heading = table[0]; //furst row of the table
console.log(table)
let num = heading.split(' ').length // row split into strings, total # of strings

console.log(heading);
console.log(heading.split(' ').length);

const twoDimensionalA= [] //creating 2 dementional empty array
//depending on the column # adding each row in array as splitting 
// the  row into separte strings
//adding all new arrays into the 2 dementional array (twoDimensionalA)
for (let i=0; i<=num; i++){
    let row = rows[i].split(',')
    twoDimensionalA[i] = row
}


console.log(twoDimensionalA);



//Part 3: Transforming data.(transforming rows int objects)
console.log(`-------------------part 3 ------------------`)

const beginingArray = [
    ["ID", "Name", "Occupation", "Age"], 
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
]



const allKeys = beginingArray.slice(0,1); //slice the header row 
console.log(allKeys)
const allKeysLower = allKeys[0].map((key) => key.toLowerCase()) //All values from header row to small letters
console.log(allKeysLower);
const allData = beginingArray.slice(1,5);//data in the table that will be assign to the header element
//using map function to create list of abjects and asign keys and values
const arrayToObject = allData.map(function(x){
    return{
        id :x[0],
        name: x[1],
        ocupation: x[2],
        age:x[3],
    }
})

console.log(arrayToObject);

//Parth 4 Sorting and Manipulating Data
console.log(`------------------Part 4------------------------`)

//------ Sorted array
 let sortArray = arrayToObject.sort((objectX, objectY) => {
    return objectX.id - objectY.id;
});
console.log(sortArray);

// ----- 1.Remove last element from the sorted array.
removeLastElement = sortArray.pop()
console.log(removeLastElement) //removed element
console.log(sortArray); 

//------2. insert an object at index 1
let newObject= { id: "48", name: "Barry", occupation: "Runner", age: "25" }
let insertInSortArray = sortArray.splice(1,0,newObject);
console.log(sortArray);

//-----3. add to the end of the array
let lastElement = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
let addToEndOfSortArray = sortArray.push(lastElement);
console.log(sortArray);

//------ avarage age calculation.
//with forEach extract all ages from each object.
//Convert them to integer and push them to an array.
let averageAge = [];
sortArray.forEach((singleObject) => {
    let stringToInteger = parseInt(singleObject.age)  
    averageAge.push(stringToInteger)
});
console.log(averageAge);

//Sum all the ages from the array - averageAge
let sumOfAge = averageAge.reduce((accumulator, currentValue) => {
       return accumulator + currentValue
},0);
console.log(sumOfAge);

//calculating the average (deviding the total sumOfAge by the lenght of the array - averageAge)
let avarageSumOfAge = sumOfAge / averageAge.length
console.log(avarageSumOfAge) 






 
   