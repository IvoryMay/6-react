import './style.css'


const fetchBtn = document.querySelector('#fetchBtn');
const handleFetchBtn = () => {
  console.log("u clicked me")
  // fetch('http://localhost:5000/tasks').then(res => res.text()).then(data => {console.log( typeof data);
  //   console.log(JSON.parse(data));
  // });

  // fetch('http://localhost:5000/tasks').then(res => res.json()).then(data => {console.log(data)});

  // fetch('http://localhost:5000/tasks/1').then(res => res.json()).then(data => {console.log(data)});

  // fetch('http://localhost:5000/tasks/2').then(res => res.json()).then(data => {console.log(data)});

  // fetch('http://localhost:5000/tasks/3').then(res => res.json()).then(data => {console.log(data)});

  // fetch("https://api.fastforex.io/fetch-all?api_key=0f6cfe29c3-20dd590f77-splsr7").then(res => res.json()).then(rates => console.log(rates));

  fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(product=>console.log(product));
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