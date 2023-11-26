//Part 1 : Refactoring ALAB 308.3.1 (csv)
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26\n";
const rows = csv.split("\n");//separate whole string in multiple strings-(6 strings)
console.log(rows);
console.log(rows.length);//6 separate strings
console.log(csv.length);
console.log(typeof(rows));//object
const table = []
for (i=0; i<rows.length; i++){
    let row = rows[i].split(',').join(' ')
    table.push(row)
    console.log(row);            
}
 

//Part 2: Expanding Functionality.

let numColumn = 4 //variable that store # of columns in each row
const heading = table[0]; //furst row of the table
let num = heading.split(' ').length // row split into strings, total # of strings
console.log(heading);
console.log(heading.split(' ').length);

const twoDimensionalA= [] //creating 2 dementional empty array

//depending on the column # adding each row in array as splitting 
// the  row into separte strings
//adding all new arrays into the 2 dementional array (twoDimensionalA)
for (let i=0; i<=num; i++){
    let row = table[i].split(' ')
    twoDimensionalA[i] = row   
}

console.log(twoDimensionalA);
