import './style.css'

// async await
const fetchBtn = document.querySelector('#fetchBtn');
const handleFetchBtn = async () => {
  console.log("u clicked me")
  const res1 = await fetch("http://localhost:5000/tasks/1");
  const data1 = await res1.json();
  console.log(data1);

  const res2 = await fetch('http://localhost:5000/tasks/2');
  const data2 = await res2.json();
  console.log(data2);

  const res3 = await fetch('http://localhost:5000/tasks/3');
  const data3 = await res3.json();
  console.log(data3);

  const res4 = await fetch('http://localhost:5000/tasks/4');
  const data4 = await res4.json();
  console.log(data4);


  


//   new Promise(function(resolve,reject){
//      setTimeout(()=>{
//       const val =Math.floor( Math.random() * 10);
//       console.log(val);
//        if(val>5){
//         resolve(val);
//        }else{
//         reject(val);
//        }

//      },1000);
//   }).then(function(x){
// console.log("success",x);
//   },
//   function(y){
//     console.log("fail",y);
//   }
//   )


  // fetch('http://localhost:5000/tasks').then(res => res.text()).then(data => {console.log( typeof data);
  //   console.log(JSON.parse(data));
  // });

  // fetch('http://localhost:5000/tasks').then(res => res.json()).then(data => {console.log(data)});

  // fetch('http://localhost:5000/tasks/1').then(res => res.json()).then(data => {console.log(data)});

  // fetch('http://localhost:5000/tasks/2').then(res => res.json()).then(data => {console.log(data)});

  // fetch('http://localhost:5000/tasks/3').then(res => res.json()).then(data => {console.log(data)});

  // fetch("https://api.fastforex.io/fetch-all?api_key=0f6cfe29c3-20dd590f77-splsr7").then(res => res.json()).then(rates => console.log(rates));

  // fetch('https://fakestoreapi.com/products/1')
  //           .then(res=>res.json())
  //           .then(product=>console.log(product));
}

fetchBtn.addEventListener('click', handleFetchBtn);


const createTableBtn = document.querySelector('#createTableBtn');
const taskTemplate = document.querySelector('#taskTemplate');
// const title = document.querySelector('.title');
// const description = document.querySelector('.description');
// const status = document.querySelector('.status');
// const priority = document.querySelector('.priority');


const handleCreateTableBtn = () => {
const table = document.querySelector('#table');
fetch('http://localhost:5000/tasks').then(res => res.json()).then(data => {
const headerRow = document.createElement('tr');
headerRow.innerHTML = `

<th class="px-6 py-3 text-center border-2 border-gray-300">Title</th> 
<th class="px-6 py-3 text-center border-2 border-gray-300">Description</th> 
<th class="px-6 py-3 text-center border-2 border-gray-300">Status</th> 
<th class="px-6 py-3 text-center border-2 border-gray-300">Priority</th> `;
  
table.appendChild(headerRow);

  
  data.forEach(task => {
    const taskRow = taskTemplate.content.cloneNode(true);
    taskRow.querySelector('.title').textContent = task.title;
    taskRow.querySelector('.description').textContent = task.description;
    taskRow.querySelector('.status').textContent = task.status;
    taskRow.querySelector('.priority').textContent = task.priority;
    table.appendChild(taskRow);
  });
})}
   
      


createTableBtn.addEventListener('click', handleCreateTableBtn);