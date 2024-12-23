const fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"]
// console.log(fruits);
// add
// const arr = [...fruits, "Figs"];
// console.log(arr);

// remove
// const arr = fruits.filter((fruit=> fruit !== "Durian"));
// console.log(arr);

// update
// const arr = fruits.map((fruit)=> fruit ==="Durian" ? "Pineapple" : fruit);  
// console.log(arr);
 
// const macbook = {
//   model: "MacBook Pro",
//   screen_size: "16 inches",
//   processor: "Apple M1 Pro",
//   storage: "1TB SSD"
// };
// console.log(macbook);

// add
// const obj = {...macbook, ram: "16GB"};
// console.log(obj);

// remove
// const {ram,...rest}= macbook;
// console.log(rest);

// // update
// const obj = {...macbook, storage: "2TB SSD"}; 
// console.log(obj);

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 2399,
    stock: 15,
    rating: 4.7
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 1099,
    stock: 25,
    rating: 4.8
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799,
    stock: 20,
    rating: 4.6
  },
  {
    id: 4,
    name: "Apple Watch Series 7",
    price: 399,
    stock: 30,
    rating: 4.5
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 249,
    stock: 50,
    rating: 4.4
  }
];

console.table(products);

// add
const newProduct = {
  id: 6,
  name: "AirPods Max",
  price: 999,
  stock: 10,
  rating: 4.9
};

// const arr = [...products, newProduct];
// console.table(arr);

// remove
// const arr = products.filter((product)=> product.id !== 4);
// console.table(arr);


// update
// const arr = products.map((product)=>{
// if(product.id === 4){
//   return {...product, stock : product.stock + 20}
// }
// return product;
// }
// );

const arr = products.map((product)=>{
 return {...product, price : product.price + 100}
}
);



console.table(arr);