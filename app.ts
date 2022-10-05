var divs = ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5", "Menu6", "Menu7", "Menu8", "Menu9", "Menu10"
  , "Menu11", "Menu12", "Menu13", "Menu14", "Menu15", "Menu16", "Menu17", "Menu18", "Menu19", "Menu20"
  , "Menu21", "Menu22", "Menu23", "Menu24", "Menu25", "Menu26", "Menu27", "Menu28", "Menu29", "Menu30"
  , "Menu31", "Menu32", "Menu33", "Menu34", "Menu35", "Menu36", "Menu37", "Menu38", "Menu39", "Menu40"
  , "Menu41", "Menu42", "Menu43", "Menu44", "Menu45", "Menu46", "Menu47", "Menu48", "Menu49", "Menu50"
];
var visibleDivId: any = null;
function toggleVisibility(divId: any): void {
  if (visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}

function hideNonVisibleDivs(): void {
  var i: any, divId: any, div: any;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}





// Question Start

// Question No 1 

var Question1 = () => {
  var name: any | null = prompt("Enter Your Name", "Saqib Ali");
  var len = name.length
  let myContainer = <HTMLElement>document.getElementById('Question1Ans');
  myContainer.innerHTML += "Name :" + name + " <br>Length: " + len
}

// Question No 2 

var Question2 = () => {
  var name: any | null = prompt("Enter Your Name", "Saqib Ali");
  var copy = name.slice();
  let myContainer = <HTMLElement>document.getElementById('Question2Ans');
  myContainer.innerHTML += "Name :" + name + " <br>Copy: " + copy
}

// Question No 3

var Question3 = () => {
  var fname: any | null = prompt("Enter Your First Name", "Saqib");
  var lname: any | null = prompt("Enter Your Last Name", "Ali");
  var fullName = fname.concat(lname);
  let myContainer = <HTMLElement>document.getElementById('Question3Ans');
  myContainer.innerHTML += "First Name :" + fname + " <br>Last Name : " + lname + " <br> Full Name:" + fullName
}

// Question No 4

var Question4 = () => {
  var fname: any | null = prompt("Enter Your First Name", "Saqib");
  var lname: any | null = prompt("Enter Your First Name", "Saqib");
  var Nm1 = fname.toUpperCase();
  var Nm2 = lname.toUpperCase();
  var result = Nm1 === Nm2;
  if (result) {
    let myContainer = <HTMLElement>document.getElementById('Question4Ans');
    myContainer.innerHTML += "The Strings are Similar :<br>" + result;
  }
  else {
    let myContainer = <HTMLElement>document.getElementById('Question4Ans');
    myContainer.innerHTML += "The Strings are not Similar :<br>" + result;
  }
}

// Question No 5
var Question5 = () => {
  var userInput: any | null = prompt("Enter You Peragraph", "saqib ali");
  var str = userInput.toUpperCase();
  let myContainer = <HTMLElement>document.getElementById('Question5Ans');
  myContainer.innerHTML += "The convert lowercase  to uppercas:<br>" + str;
}

// Question No 6
var Question6 = () => {
  var userInput: any | null = prompt("Enter You Peragraph", "SAQIB ALI");
  var str = userInput.toLowerCase();
  let myContainer = <HTMLElement>document.getElementById('Question6Ans');
  myContainer.innerHTML += "The convert uppercas to lowercase: <br>" + str;

}

// Question No 7
var Question7 = () => {
  var text: any | null = prompt("Enter You Peragraph", "SAQIB ali");
  var ans = text.split('')
    .map((c: any) =>
      c === c.toUpperCase()
        ? c.toLowerCase()
        : c.toUpperCase()
    ).join('')

  console.log(ans)
  let myContainer = <HTMLElement>document.getElementById('Question7Ans');
  myContainer.innerHTML += "Input Text :" + text + " <br> The Toggle Case: <br>" + ans;

}

// Question No 8
var Question8 = () => {
  var str: any | null = prompt("Enter You Peragraph", "SAQIB ali 102030 /.,<>");
  var alphabetic: string = '';
  var digit: number = 0;
  var specialChar: any = 0;
  var spaces: any = 0;
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];

    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      // To handle upper case letters
      alphabetic += ch.toLowerCase();
      console.log("Alpha", alphabetic);


    }
    else if (ch >= "0" && ch <= "9") {
      digit++;
      console.log("dig", digit);

    }
    else if (ch == '') {
      spaces++;
      console.log("Space" + spaces);

    }
    else {
      specialChar++;
      console.log("sp", specialChar);
    }

  }
  let myContainer = <HTMLElement>document.getElementById('Question8Ans');
  myContainer.innerHTML += "User Input Text :" + str + "<br> Alphabetic :" + alphabetic + " <br> Digit :" + digit + " <br> SpecialChar :" + specialChar + "<br> Spaces :" + spaces;
}

// Question No 9
var Question9 = () => {
  var str: any | null = prompt("Enter You Peragraph", "SAQIB ali");
  str = str.toLowerCase();
  var vowelsCount: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowelsCount += 1;
    }
    // console.log("Vowel" + vowelsCount);
  }
  let myContainer = <HTMLElement>document.getElementById('Question9Ans');
  myContainer.innerHTML += "User Input Text :" + str + "<br> VowelsCount :" + vowelsCount
}

// Question No 10
var Question10 = () => {
  var str: any | null = prompt("Enter You Peragraph", "SAQIB ali");
  str = str.toLowerCase();
  var result = str.split(' ').length;
  console.log("Result  : " + result);
  let myContainer = <HTMLElement>document.getElementById('Question10Ans');
  myContainer.innerHTML += "User Input Text :" + str + "<br> Total Word:" + result
}

// Question No 11
var Question11 = () => {
  var str: any | null = prompt("Enter You Peragraph", "SAQIB ali");
  str = str.toLowerCase();
  var result: string = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  console.log("Reverse  : " + result);
  let myContainer = <HTMLElement>document.getElementById('Question11Ans');
  myContainer.innerHTML += "User Input Text :" + str + "<br> Reverse :" + result
}

// Question No 12
var Question12 = () => {
  var str: any | null = prompt("Enter You palindrome Word", "civic");
  str = str.toLowerCase();
  var checkWord: string = '';
  for (var i = str.length - 1; i >= 0; i--) {
    checkWord += str[i];

  }
  if (str === checkWord) {
    console.log(checkWord, " is Palindrome Word");
    let myContainer = <HTMLElement>document.getElementById('Question12Ans');
    myContainer.innerHTML += "User Input Text :" + str + "<br>" + checkWord + " :is Palindrome Word";
  }
  else {
    console.log(checkWord, " is not Palindrome Word");
    let myContainer = <HTMLElement>document.getElementById('Question12Ans');
    myContainer.innerHTML += "User Input Text :" + str + "<br>" + checkWord + " :is not Palindrome Word";

  }
}
// Question No 13
var Question13 = () => {

  var str: any | null = prompt("Enter Your Sentence", "Saqib Ali");
  const reverseString = (input: string) => {
    return input.split(' ').reverse().join(' ');
  };
  var show = reverseString(str)
  console.log(show);
  let myContainer = <HTMLElement>document.getElementById('Question13Ans');
  myContainer.innerHTML += " User Input Text :" + str + "<br> <br>  Reverse Word : " + show;

  //The join() method returns an array as a string.
  //The join() method does not change the original array.
  //  Split the words, and return the second word: 
}

// Question No 14
var Question14 = () => {
  var str: any | null = prompt("Enter Your Sentence", "Saqib Ali");
  var ser: any | null = prompt("Enter Your Search Word", "A");
  var show;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ser) {

      show = i + 1
    }
    let myContainer = <HTMLElement>document.getElementById('Question14Ans');
    myContainer.innerHTML += " User Input Text :" + str + "<br> <br>  Occurrence of a Character: " + show;
  }

}

// Question No 15
var Question15 = () => {
  var str: any | null = prompt("Enter Your String", "Saqib Ali");

  var result: string = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  console.log("Last Character  : " + result[1]);

  let myContainer = <HTMLElement>document.getElementById('Question15Ans');
  myContainer.innerHTML += " User Input Text :" + str + "<br> <br>  Last Character: " + result[1];

}

// Question No 16
var Question16 = () => {
  var str: any | null = prompt("Enter Your String Character", "Saqib Ali");
  var search: any | null = prompt("Enter Your word to be search", "A");

  var countText: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == search) {
      countText += 1;
    }
    console.log(countText);
  }
  let myContainer = <HTMLElement>document.getElementById('Question16Ans');
  myContainer.innerHTML += " User Input Text :" + str + "<br> <br>  Count Character: " + countText;


}
// Question No 17
var Question17 = () => {
  var str: any | null = prompt("Enter Your String Character", "Saqib Ali");
  var search: any | null = prompt("Enter Your Search Word", "Ali");
  var result = str.split(`${search}`).length - 1;
  let myContainer = <HTMLElement>document.getElementById('Question17Ans');
  myContainer.innerHTML += " User Input Text :" + str + "<br> <br>  Count Character: " + result;

}

// Question No 18
var Question18 = () => {
  var s: any | null = prompt("Enter Your String Character", "SAQIB Ali SS A ");
  var findChar = function (str: any) {
    var char: any;
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) < str.lastIndexOf(str[i])) {
        char = str[i];
        console.log("Char", char);
        break;
      }
    }
    let myContainer = <HTMLElement>document.getElementById('Question18Ans');
    myContainer.innerHTML += " User Input Text :" + s + "<br>   Hight frequency: " + char;
    return char;
  }
  findChar(`${s}`);
}

// Question No 19


var Question19 = () => {


  var s: any | null = prompt("Enter Your String Character", "Saqib Ali");
  var findChar = function (str: any) {
    var char: any;
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        char = str[i];
        console.log("Char", char);
        break;
      }
    }
    let myContainer = <HTMLElement>document.getElementById('Question19Ans');
    myContainer.innerHTML += " User Input Text :" + s + "<br> <br>  Lowest frequency: " + char;
    return char;
  }
  findChar(`${s}`);


}

// Question No 20
var Question20 = () => {
  var arr: any | null = prompt("Enter Your String Character", "Saqib Ali");

  function getFrequency(string: any) {
    var freq: any = {};
    console.log("freq" + freq.character);

    for (var i = 0; i < string.length; i++) {
      var character = string.charAt(i);
      console.log("Character", character);


      if (freq[character]) {
        freq[character]++;
      } else {
        freq[character] = 1;
      }
    }

    return freq;
  };
  console.log(getFrequency(arr))


}

// Question No 21
var Question21 = () => {

  var str: any | null = prompt("Enter Your String Character", "Saqib Ali");
  var ser: any | null = prompt("Enter Your Remove Character", "A");
  var newString: string = " ";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ser) {
      // newString =str.slice(1); //remove first character of string

      //apni marzi ka character ko remove kro 🤭
      newString = str.slice(0, i) + str.slice(i + 1, str.length);
      console.log(`Remove Character `, newString);
    }
  }
  let myContainer = <HTMLElement>document.getElementById('Question21Ans');
  myContainer.innerHTML += " User Input Text :" + str + `<br> ${ser}  Remove Character 🤭 : ` + newString;

}

// Question No 22
var Question22 = () => {

  var str: any | null = prompt("Enter Your String Character", "Saqib Ali");

  var newString: string = " ";


  //apni marzi ka character ko remove kro 🤭
  newString = str.slice(0, str.length - 1)
  console.log(`Remove Last Character `, newString);

  let myContainer = <HTMLElement>document.getElementById('Question21Ans');
  myContainer.innerHTML += " User Input Text :" + str + `<br>   Remove Last Character 🤭 : ` + newString;

}
// Question No 23
var Question23 = () => {

  let str = 'Typescript- is -popular language'
  var newString = str.split('-').join('')
  console.log( newString )

  let myContainer = <HTMLElement>document.getElementById('Question23Ans');
  myContainer.innerHTML += " User Input Text :" + str + `<br>   Remove All Occ..3 Character 🤭 : ` + newString;

}

// Question No 24
var Question24 = () => {

  var str: any | null = prompt("Enter Your String Character", "SSaaqqiibb");
  var newString: string = " ";
  for (let i = 0; i < str.length; i++) {
    var c = str[i]
    // agr c variable me string ka repeated character ho to ye return kry ga
    // the index of c, else it returns -1
    if (newString.indexOf(c) < 0) {
      newString += c
    }
  }
  console.log("NewString", newString);


  let myContainer = <HTMLElement>document.getElementById('Question24Ans');
  myContainer.innerHTML += " User Input Text :" + str + `<br>   Remove Duplicate Character 🤭 : ` + newString;

}