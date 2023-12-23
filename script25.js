// task-01
// console.log("My name is Ruslan")
// alert("My name is Murad")

// task-02
// const userName = "Ruslan"
// console.log(userName);

// task-03
// cavap olaraq yaziram person

// task-04
// let bookPrice = 750;
// let bookAmount = 14;
// let totalPrice = bookPrice * bookAmount;
// console.log(totalPrice);


//  oz hazirladigim
// function LengthConverter(valNum) {
//     document.getElementById("outputKilometers").innerHTML=valNum/1000;
// }


// task-05
// let number = 0.277778;
// let kmhSpeed = 75;
// let msSpeed = number * kmhSpeed;
// console.log(msSpeed);



// task-06
// let year = prompt("Dogum ilinizi daxil edin!");
// let age = 2023 - year;
// let result = age * 365;
// document.write("Isdifadecinin yashadigi gunlerin  sayi:", result);


// task-07
// const task07 = function (x) {
//     const y = Math.pow(x, 5)
//     console.log("netice", y)
// }
// task07(4)
// task07(9)




// task-07
// const element = 84;
// const object = 26;
// console.log(element + object);
// console.log(element - object);
// console.log(element * object);
// console.log(element / object);
// console.log(element ** object);
// console.log(element % object);
// console.log(element * object / 100);
// console.log(Math.sqrt(element));



// task-08
// let text = prompt("Xoş gəlmişsiniz")
// let firstName = 'Alan';
// let lastName = 'Turing';
// let result =  firstName + " " + lastName ;
// console.log("Sizin adınız: ", result, "Tanışlığımıza çox şadam!:");


// task-08
// let firstName = 'Alan';
// let lastName = 'Turing';
// console.log("Sizin adınız " + firstName + " " + lastName +".Tanışlığımıza çox şadam!")
// console.log(`Sizin adınız  ${firstName} ${lastName} .Tanışlığımıza çox şadam!`);



// task-09
// let text = prompt("Xoş gəlmişsiniz")
// let firstName = 'Alan';
// let lastName = 'Turing';
// let result =  firstName + lastName ;
// console.log("Sizi bir daha görməyimizə şadıq,",result);


// task-10
// let fullName = "Murad Orucov";
// fullName = fullName.split(" ").join("").length;
// console.log(fullName);

// task-10
// const fullName = "Ruslan Zeynalov"
// console.log(fullName.replace(/[^a-zA-Z]+/g, " "))


// // task-11
// let fullName = "Ruslan Zeynalov";
// console.log(fullName[0],fullName[fullName.indexOf(" ") +1]);


// task-11
// let fullName = "Ruslan Zeynalov";
// console.log(fullName[0], fullName[7]);


// task-11
// const fullName = prompt()
// const foundIndex = fullName.indexOf(" ") + 1;
// console.log(fullName[0],fullName[foundIndex]);


// task-11
// let = fullName = prompt();
// let arr = fullName.split(" ");
// console.log(arr[0][0]);
// console.log(arr[1][0]);


// task-12
// let text = prompt("Xoş gəlmişsiniz: Zehmet olmasa ad ve soyad daxil edin");
// if (text.length >= 3) {
//     let arr = text.split(" ");
//     arr = arr.reverse().join(" ");
//     console.log(arr);
// };

// task-12
// let fullName = prompt("Xoş gəlmişsiniz: Zehmet olmasa ad ve soyad daxil edin");
// let spaceIndex = fullName.indexOf(" ");
// let firstName = fullName.slice(0,spaceIndex);
// let lastName = fullName.slice(spaceIndex + 1);
// console.log(lastName, firstName);



// task-13
// let name = prompt("Adinizi daxil edin");
// console.log("Salam, " + name);



// task-14
// let num1 = Number(prompt("num1", 20));
// let num2 = prompt("num2", 10);
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2);


// task-15
// let text = prompt("Xoş gəlmişsiniz");
// let a = 12345;
// let b = 98765;
// let hasil = a * b;
// let hasilb  = hasil.toString().charAt(6);
// console.log(hasilb);

// task-15
// let a = 12345;
// let b = 98765;
// let value = String(a * b);
// console.log(value[6]);


// task-16

// "" + 1 + 0 = 10

// "" - 1 + 0 = -1

// "true" - false = NaN

// 6 / "3" = 3

// 4 + 5 + "px" = 9px

// "$" + 4 +5 = $45

// "4" - 2 = 2

// "4px" - 2 + "px" = NaNpx

// 7 / 0 = Infinity

// "-9" + 5 = -95

// "-9" - 5 = -14

// null + 1 = 0

// undefined + 1 = NaN


// task-17
// let text = prompt("Salam 4 herif ve reqem yazin")
// if (text.length >= 4) {
//     console.log(text);
// };



// task-17
// let num = prompt("num")
// console.log(+num[0] + +num[1] + +num[2] + +num[3]);


// task-17
// let num = prompt("num")
// console.log(+num[0] + +num[3]);



// task-18
// let text = prompt("soyadınızı və adınızı daxil edin")
// const userName = "Ruslan"
// console.log("Salam", userName);



// task-19
// let value = prompt("Daxil edin!", "530.90");
// let arr = value.split(".");
// console.log(`${arr[0]} manat ${arr[1]} qepik`);



// // task-20
// let value = 2542;
// console.log(value - (value * 13 / 100));



// task-21
// let fullName = "Ruslan Zeynalov";
// let father = "Mehman"
// console.log(fullName[0], fullName[fullName.indexOf(" ") + 1], father[0]);



// task-21
// let fullName = "Ivanov Pyotr Sergeevich";
// let arr = fullName.split(" ");
// let lastName = arr[0];
// let firstNameFirstLeter = arr[1][0];
// let fathertNameFirstLeter = arr[2][0];
// console.log(`${lastName}.${firstNameFirstLeter}.${fathertNameFirstLeter}`);



// task-22
// let value = 3000;
// let sum = value * 11 / 100;
// console.log( value + sum * 3);



//task-23
// let value = 20;
// console.log(value === 10);
// console.log(value == 10);
// console.log(value <= 10);
// console.log(value != 20);
// console.log(value =! 20);





// let value = 10;
// console.log(value === 10)
// console.log(value == 10);
// console.log(value <= 20);
// console.log(value != 20);




//task-24
// let a = 18;
// let b = 0;
// if (a > b) {
//     console.log("Access denied")
// } else if (b > a ) {
//     console.log("Access granted")
// }



// let a = 18;
// let b = 0;
// if (a < b) {
//     console.log("Access denied")
// } else if (b < a ) {
//     console.log("Access granted")
// }



// let a = 18;
// let b = 0;
// if (a < b) {
//     console.log("Access denied")
// } else if (b < a ) {
//    document.write("Access granted")
// }



// let a = 18;
// let b = 0;
// if (a < b) {
//     console.log("Access denied")
// } else if (b < a ) {
//     document.write("Access granted")
// }




// task-25
// function ortancilReqem() {
//     var ededler = [];

//     function ədədDaxilEt() {
//         var input = prompt(" ədəd daxil edin:");
//         var eded = parseInt(input);

//         if (!isNaN(eded) && eded >= 10 && eded <= 99) {
//             return eded;
//         } else {
//             alert("Xahiş olunur, düzgün formatda  ədəd daxil edin.");
//             return ədədDaxilEt();
//         }
//     }

//     while (ededler.length < 3) {
//         ededler.push(ədədDaxilEt());
//     }

//     ededler.sort(function (a, b) {
//         return a - b;
//     });

//     var ortancil = ededler[1];

//     console.log("Ortancıl ədəd: " + ortancil);
// }

// ortancilReqem();



// task-25
// let value = prompt("number", "45 46 47");
// let numberList = value.split(" ");
// let num1 = numberList[0];
// let num2 = numberList[1];
// let num3 = numberList[2];
// if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
//     console.log(`ortancil eded ${num2}-dir, input:${value}`);
// }
// else if (num1 < num2 && num1 > num3 || num1 > num2 && num1 < num3) {
//     console.log(`ortancil eded ${1}-dir, input:${value}`);
// }
// else if (num3 > num2 && num3 < num1 || num3 < num2 && num3 > num1) {

//     console.log(`ortancil eded ${3}-dir, input:${value}`)
// }else{
//     console.log(`Yalnish deyer`)
// }



// task-25
// let value = prompt("number", "45 46 47");
// let numberList = value.split(" ");
// let num1 = numberList[0];
// let num2 = numberList[1];
// let num3 = numberList[2];
// if(numberList.length === 3){
//     if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
//         console.log(`ortancil eded ${num2}-dir, input:${value}`);
//     }
//     else if (num1 < num2 && num1 > num3 || num1 > num2 && num1 < num3) {
//         console.log(`ortancil eded ${1}-dir, input:${value}`);
//     }
//     else if (num3 > num2 && num3 < num1 || num3 < num2 && num3 > num1) {

//         console.log(`ortancil eded ${3}-dir, input:${value}`)
//     }else{
//         console.log(`Yalnish deyer`)
//     }
// }





// task-26
// function IliYoxla() {
//     var il = prompt("Zəhmət olmasa bir il daxil edin:");
//     if (!isNaN(il) && parseInt(il) === parseFloat(il) && parseInt(il) % 4 === 0) {
//         console.log("İl uzun ildir.");
//     } else {
//         console.log("İl uzun il deyil.");
//     }
// }
// IliYoxla()




// task-26
// let year = prompt("ili daxil edin")
// if (year%4===0) {
//     console.log("uzun ildir")
// } else{
//    console.log("uzun il deyil")
// }




// task-27
// let id = prompt('enter product id:');
// if (id === '1') {
//     alert('Available 10 pcs.');
// }
// else if (id === '2') {
//     alert('Available 256 pcs.');
// }
// else if (id === '3') {
//     alert('Available 53 pcs.');
// }
// else if (id === '4') {
//     alert('There are 3 available.');
// }
// else {
//     alert('Out of stock');
// }


// switch (id) {
//     case "1":
//         alert('Available 10 pcs.');
//         break
//     case "2":
//         alert('Available 256 pcs.');
//         break
//     case "3":
//         alert('Available 53 pcs.')
//         break
//         case "4":
//             alert('There are 3 available.')
//         default:
//             alert('Out of stock')
// }




// task-28
// let twoWords = prompt("Xaish olunur m ve ya f yazain");
// switch (twoWords) {
//     case "m":
//         console.log("Male");
//         break
//    case "f":
//     console.log("Female");
//     break

//     default:
//         console.log(`YALNISH DEYER`);

// }


// task-29
// let month = prompt("Do not write more than 12 digits, the month is not more than 12");
// switch (month) {
//     case "1":
//         console.log("January");
//         break
//     case "2":
//         console.log("February");
//         break
//     case "3":
//         console.log("March");
//         break
//     case "4":
//         console.log("April");
//         break
//     case "5":
//         console.log("May");
//         break
//     case "6":
//         console.log("June");
//         break
//     case "7":
//         console.log("July");
//         break
//     case "8":
//         console.log("August");
//         break
//     case "9":
//         console.log("September");
//         break
//     case "10":
//         console.log("October");
//         break
//     case "11":
//         console.log("November");
//         break
//     case "12":
//         console.log("December");
//         break
//     default:
//         console.log(`WRONG VALUE`);
// }




//task-30
// let value = prompt("Bu tarixi 2009.12.19  daxil etməyiniz xahiş olunur.")
// switch (value) {
//     case "2009.12.19":
//         console.log("19 Dekabr 2009-cu il");
//         break
//     default:
//         console.log(`Yanlış dəyər`)

// }



