// let a = Number(prompt("Nhập số A"))
// let v = Number(prompt("Nhập số V"))

// let t = 0
// for (let i = a; i <= v; i++){
//     t = t + i
// }

// console.log(t)

// let a = Number(prompt("Nhập số A"))
// let v = Number(prompt("Nhập số V"))

// let a = Number(prompt("Nhập số A"))

// let t = 0
// for (let i = a; i <= v; i++){
//     t = t * i
// }

// console.log(t)


// Array: Mảng là chứa tập hợp của nhiều giá trị trong 1 vùng

let computers = [
    {
      laptopName: "ROG",
      price: 100,
    },
    {
      laptopName: "DELL",
      price: 200,
    },
  
    {
      laptopName: "ASUS",
      price: 300,
    },
  ];

for (let i = 0; i < computers.length; i++) {
    if(computers[i].price >= 200)
    console.log(computers[i].laptopName)
}

