import { createElement } from "react";
import "./input.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Routes/router";



  const root = document.querySelector("#root"); 

  

  createRoot(root).render(<RouterProvider router={router}/>);


//   // view- react node
//   const app =createElement(
//     "div",
//     {id:"category-section",className:"p-5"},
//     createElement("p",{className:"text-2xl font-bold mb-4"},"Product Categories"),
//   createElement("div",null,
//   ...categories.map((category) => createElement("button", {className:"px-4 py-2 border border-gray-500 rounded-md me-2 mb-2"}, category)))
// );

  //view render
   
  // const title = document.createElement("p");
  // title.innerText = "Product Categories";
  // title.classList.add("text-2xl", "font-bold", "mb-4","px-3","text-gray-500");
 
  // const categoryBtn = (categoryName) => {
  //   const btn = document.createElement("button");
  //   btn.innerText = categoryName;
  //   btn.classList.add("px-4", "py-2", "border","border-gray-500","rounded-md", "me-2", "mb-2");
  //   return btn;
  // }

  // root.append(title);
  // categories.forEach((category) => root.append(categoryBtn(category)));