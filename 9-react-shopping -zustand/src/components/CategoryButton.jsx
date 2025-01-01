import react from "react";
import useCategoryStore from "../store/UseCategoryStore";

const CategoryButton = ({ category: {id,name,isActive} }) => {
const {activeCategory} = useCategoryStore();
  const handleClick = () => {
    activeCategory(id);
  }
  return (
    <button onClick={handleClick} className={`${isActive && "bg-gray-500 text-slate-50"}text-nowrap px-4 py-2 border border-black rounded-md me-2 mb-2 category-button`}>
              {name}
            </button>
  );
};  

export default CategoryButton;