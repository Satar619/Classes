////////////////////////////////////////////////////////////////////////////////
//                         FIRST ONE                                         ///
////////////////////////////////////////////////////////////////////////////////
//>> Test the alert() function
alert("Hello!");


//>> Open the browser's console and check the output.
console.log("Hello!");


//>> Concatenate two strings and display them:
console.log('Hello ' + 'world');


//>> Do a subtraction on two Numbers and display them:
console.log(5 - 3);


//>> Calculate the number of years since the creation of JS and alert it!
//>> (Hint: JavaScript was invented in 1995)
console.log(2018 - 1995);


//>> Combine String values and Number values:
console.log("JavaScript language is " + (2018 - 1995) + " years old.");


//>> Try removing the ( parentheses ) from the subtraction part:
console.log("JavaScript language is " + 2018 - 1995 + " years old.");


//>> What did just happened?
//NaN years old.

////////////////////////////////////////////////////////////////////////////////
//                         FIRST ONE                                         ///
////////////////////////////////////////////////////////////////////////////////

//>> Create an Array with three elements of type Number (your age), String (your name) and Boolean (are you married?) and store it in a let variable:
let personalData = [17, 'Abdulsatr', 'fals'];


//>> What's the type of an Array?
console.log(typeof personalData);


//>> console.log the first Array element
console.log(personalData[0]);


//>> Select each one the Array elements and console log their type:
console.log(typeof personalData[0]);
console.log(typeof personalData[1]);
console.log(typeof personalData[2]);


//>> Try to check if the 2nd element in the array is of type 'string'
//>> and console.log the result. You must use the Comparison Operator ===
console.log(typeof personalData[2] === 'fals');


//>> Add your last name and email in the `personalData` Array and
//>> console.log to see the contents
personalData.push('Shaerzai Yadegari');
personalData.push('satar@gmail.com');
console.log(personalData)

//>> No. We want our privacy. Let's just remove our last name and email
//>> From the `personalData` array. Display the contents.
personalData.pop([3]);
personalData.pop([4]);
console.log(personalData);


//>> Store your date of birth in a const variable.
//>> Add the date of birth in the beginning of the 'personalData'
// _____ dateOfBirth = ____;
// personalData._______(dateOfBirth);
// console.log(personalData);


//>> Let's check if a person is married. Console log the phrase
//>> 'Is <NAME> married?' replacing <NAME> with the name from the Array
//>> Console.log the marrital status in Boolean terms (true/false)
// console.log( "Is " + _________[ _ ] + " married?" );
// console.log( personalData[ _ ] );


//>> Add the `child` array to the `parent` Array
//>> Console.log the 'b' element from `parent` followed by 'ravo!':
let parent = [1, 2, 3];
let child = ['a', 'b', 'c'];
// ______.push(_____);
// console.log( ______[_][_] + "ravo!");