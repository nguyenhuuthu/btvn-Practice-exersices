     //bài 5*
// // console.log(age);//error

// let age = 27;

// console.log(age);   // 27

// // console.log(firstName);// error chưa đc khai báo

// console.log(age); // 27

// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";

// console.log(firstName); // peter
// console.log(lastName);//parker
// console.log(job);//Spider man

///////////
  //bài 6
//   a = 2;
//   var a;
//   console.log( a ); // 2
  ////
  //bài 7
//   console.log( a ); //undefined
// var a = 2;


//bài 8
// Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log() var a = 10;
// function foo() {
// var a;
// console.log( a );// undefined
// a = 2;
// }
// foo();

 
//Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = prompt()
// function removeEnd(arr, n) {
//   // logic code
//   arr.length = arr.length - n

//   return arr
// }

  //  12. Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
//   let arr = [1,2,3,4,5,6,7,8,9];
//   function first(arr, n) {
//     let arr2 = []
// // logic code
//     for(let i = 0; i < arr.length; i++){
//        if(i< n) {
//         arr2.push(arr[i]);
//        }
//     } 
//     return arr2;

// }

//13. Cho một mảng
// const users = [
// {
// name: "Angelina Jolie",
// age: 80
// },
// {
// name: "Eric Jones",
// age: 2
// },
// {
// name: "Paris Hilton",
// age: 5
// },
// {
// name: "Kayne West",
// age: 16
// },
// {
// name: "Bob Ziroll",
// age: 100
// }
// ]
// let user = users.map(function(users){
//     return `<H1>${users.name}</H1> <H2>${users.age}</H2>    `;
// })
// console.log(user);
// //Sử dụng phương thức map() của array, tạo một array mới với các phần tử con ở
// //trong có name nằm trong các thẻ h1, age nằm trong các thẻ h2
 
//14 
// let usrInput = users.map(function(user){

//     return user.name;
    
//     })
    
//     console.log(usrInput);
/////////////
// bài 16
// let array = [1,2,3,4,5,6,7,8,9,0,74];

// let filterArray = array.filter(function(arr){

//    return arr > 5;
// })

// console.log(filterArray);

//Viết một hàm triple() trả về một số đã được nhân 3
//Sử dụng phương thức map của array, viết hàm multiply() nhận vào một mảng và trả về mảng mới với các số đã 
//được nhân 3. Sử dụng hàm triple để nhân 3 các số đó.
// let tripleNum = [1,2,3,4,55];
// let n = prompt(Number('NHap:'));
// function triple(number){
//     return number*3;
// }
// console.log(triple());
// let tripleNumber = tripleNum.map((trip)=>{

//     return (trip*3)*triple(n);
   
// })

// console.log(tripleNumber);
