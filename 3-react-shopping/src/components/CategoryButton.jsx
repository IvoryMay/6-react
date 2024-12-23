import react from "react";

const CategoryButton = ({ categoryName,current }) => {
  return (
    <button  className={`${current && "bg-gray-400 text-white"}text-nowrap px-4 py-2 border border-gray-500 rounded-md me-2 mb-2`}>
              {categoryName}
            </button>
  );
};  

export default CategoryButton;