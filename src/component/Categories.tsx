import { useState } from "react";

type CategoriesProps = {
   value: number;
   onClickCategory: any;
}


const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
   const [activeIndex, setActiveIndex] = useState(0)
   const [sortPizza, setSortPizaa] = useState(['все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'])
   const clickCategory = (index: number) => {
      setActiveIndex(index)
   }


   const result = sortPizza.map((sort, index) =>
      <li
         onClick={() => onClickCategory(index)}
         key={index}
         className={value == index ? 'active' : ''}>{sort}</li>
   )

   return (
      <div className="categories">
         <ul>
            {result}
         </ul>
      </div>
   )
}
export default Categories;