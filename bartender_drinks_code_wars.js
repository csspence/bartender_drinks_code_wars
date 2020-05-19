/*
Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs 
according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
 "Programmer"	 "Hipster Craft Beer"
 "Bike Gang Member"	"Moonshine" 
 "Politician"	"Your tax dollars" 
 "Rapper"	"Cristal" 
 *anything else*	"Beer" 
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value 
should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. 
For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".
*/

const correctCapital = (str) => {
  console.log('here is str: ' + str);
  str = str.toLowerCase();
  let array = str.split(' ');
  let newStr = '';
  for(let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  newStr = array.join(' ');
  console.log('here is newStr: ' + newStr);
  return newStr;
}

const getDrinkByProfession = (param) => {
  let newParam = correctCapital(param);
  if(newParam === 'Jabroni') {
    return 'Patron Tequila';
  }
  if(newParam === 'School Counselor') {
    return 'Anything with Alcohol';
  }
  if(newParam === 'Programmer') {
    return 'Hipster Craft Beer';
  }
  if(newParam === 'Bike Gang Member') {
    return 'Moonshine';
  }
  if(newParam === 'Politician') {
    return 'Your tax dollars';
  }
  if(newParam === 'Rapper') {
    return 'Cristal';
  }
  return 'Beer';
}