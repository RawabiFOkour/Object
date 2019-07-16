console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var objectRawabi = {
  firstName: "Rawabi",
  lastName: "Okour",
  age: 23,
  dob: "1/8/1995",
  favoriteFood: ["makmorah", "shawermah", "kfc"],
  favoriteMovie: ["interstreller", "la casa de papel", "scarymovie", "final destenation", "the end"]
};
console.log(objectRawabi);



var persons = [


  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }


];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
function firstName(persons) {
  var arr = [];
  for (var index = 0; index < persons.length; index++) {
    arr.push(persons[index].name.first);

  }
  return arr;
}
console.log(firstName(persons));
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
function averageAge(persons) {
  var sum = 0;
  var avg;
  for (var index = 0; index < persons.length; index++) {
    sum = sum + persons[index].age;
    avg = sum / persons.length;
  }
  return avg;
}
console.log(averageAge(persons));
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(persons) {
  var ageMax = -Infinity;
  for (var index = 0; index < persons.length; index++) {
    if (persons[index].age > ageMax) {
      ageMax = persons[index].age;
      var nameFirat = persons[index].name.first;
      var lastName = persons[index].name.last;
    }

  }
  return nameFirat + " " + lastName;
}
console.log(olderPerson(persons));
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function nalongestNameme(persons) {
  var fullNameLength = 0;
  var max = -Infinity;
  for (var index = 0; index < persons.length; index++) {
    fullNameLength = persons[index].name.first.length + persons[index].name.last.length;
    if (fullNameLength > max) {
      max = fullNameLength;
      var nameFirat = persons[index].name.first;
      var lastName = persons[index].name.last;
    }
  }
  return nameFirat + " " + lastName;
}
console.log(nalongestNameme(persons));
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
// repet question (the answer above)
function nalongestNameme(persons) {
  var fullNameLength = 0;
  var max = -Infinity;
  for (var index = 0; index < persons.length; index++) {
    fullNameLength = persons[index].name.first.length + persons[index].name.last.length;
    if (fullNameLength > max) {
      max = fullNameLength;
      var nameFirat = persons[index].name.first;
      var lastName = persons[index].name.last;
    }
  }
  return nameFirat + " " + lastName;
}
console.log(nalongestNameme(persons));
////////////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
function repeatWord(string) {
  var str = string.toLowerCase();
  var arrayString = str.split(" ");
  var result = {};
  for (var index = 0; index < arrayString.length; index++) {
    s = arrayString[index];
    var counter = 0;
    for (var j = 0; j < arrayString.length; j++) {
      if (arrayString[j] === s) {
        counter++;
      }
    }
    result[arrayString[index]] = counter;
  }

 return result;


}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(str) {
  var string = str.toLowerCase();
  var s;
  var ob = {};
  for (var index = 0; index < string.length; index++) {
    s = string[index];
    var counter = 0 ;
    for (var j = 0; j < string.length; j++) {
      if (string[j] === s) {
        counter++;
      }
      
    }
       ob[string[index]]=counter;
  }
  return ob;
}
console.log(repeatChar("mamababatetacedo"));
/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a' , 'd'])
=>  {a: 1}
*/
function selectFromObject(ob , ar) {
  var objectAr = {};
for (var index = 0; index < ar.length; index++) {
  s = ar[index];
  for (var key in ob) {
    if (s === key) {
      
      objectAr[key] = ob[key];
    }
    
    
  }
  
}
  return objectAr
}
console.log(selectFromObject({a: 1, cat: 3}, ['a' , 'd']));
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(ob) {
  var ar = [];
  for (var key in ob) {
   ar.push(key);
   ar.push(ob[key]);
  }
  return ar;
}
console.log(objectToArray({firstName:"Moh",age:24}));
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(arr) {
  var obb ={};
  for (var index = 0; index < arr.length; index+=2) {

    obb[arr[index]]=arr[index+1];
    
  }
  return obb;
}
console.log(arrayToObject(["firstName","Moh","age",24]));
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(obj) {
  var object ={};
  var type ;
  for (var key in obj) {
  
    if (typeof(obj[key])==="number")
    {
      object[key]=obj[key];
    }
  }
  return object;
}
console.log(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]}));

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/

function onlyString(obj) {
  var object ={};
  var type ;
  for (var key in obj) {
  
    if (typeof(obj[key])==="string")
    {
      object[key]=obj[key];
    }
  }
  return object;
}
console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]}));
/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj) {
  var object ={};
  var type ;
  for (var key in obj) {
  
    if (typeof(obj[key])==="object")
    {
      object[key]=obj[key];
    }
  }
  return object;
}
console.log(onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));


/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
function keysArray(ob) {
  var ar = [];
  for (var key in ob) {
   ar.push(key);
   
  }
  return ar;
}
console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})); 

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/

function valuesArray(ob) {
  var ar = [];
  for (var key in ob) {
    ar.push(ob[key]);
   
  }
  return ar;
}
console.log(valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]})); 
/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var object = {a:1 , b:3 , c:4};
object.a=4;
object.c=66;
delete object.b;
console.log(object);

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(obj) {
  var count = 0;
  
  for (var key in obj) {
    count++;
    
  }
  return count;
}

console.log(objectLength({a:1,b:2,c:3,d:4}));

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(obj) {
  var object={};
  for (var key in obj) {
   if (obj[key]%2 === 0)
   {
     object[key]=obj[key];
   }
  }
  return object;
}
console.log(evenValue({a:1, b:2, c:3, d:4}));
/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
function longestKey(obj) {
  var max=-Infinity;
var m;
  for (var key in obj) {
   if (key.length> max)
   {
     max =key.length;
     m = obj[key];
   }
  }
  return m;
}
console.log(longestKey({car:1, school:2, monster:3, alexMercer:4}));