import axios from "axios"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCategoryId } from "../../redux/slices/filterSlice"

import Categories from "../Categories"
import PizzaBlock from "../PizzaBlock/PizzaBlock"
import Skeleton from "../PizzaBlock/Skeleton"
import Sort from "../Sort"


const Home = ({ searchValue }) => {
   const dispatch = useDispatch()
   const categoryId = useSelector((state) => state.filter.categoryId)
   const sortType = useSelector((state) => state.filter.sort.sortProperty);
   const [items, setItems] = useState([])
   const [loaning, setLoaning] = useState(true)


   const onChangeCategory = (id) => {
      dispatch(setCategoryId(id))
   }

   useEffect(() => {
      setLoaning(true)
      axios.get(`https://63e7a4f1bb28627977157a40.mockapi.io/items${categoryId > 0 ? '?category=' + categoryId : '?'}&sortBy=${sortType}&order=asc`)
         .then((res) => {
            setItems(res.data)
            setLoaning(false)
         })
      window.scroll(0, 0)
   }, [categoryId, sortType])



   const pizzas = items.filter(item => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
         return true
      }

      return false;
   }).map(item => <PizzaBlock key={nanoid()} title={item.title} price={item.price} imageUrl={item.imageUrl} sizes={item.sizes} types={item.types} />)

   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <Categories value={categoryId} onClickCategory={onChangeCategory} />
               <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
               {loaning ?
                  [...new Array(8)].map((_, index) =>
                     <Skeleton key={index} />
                  ) : pizzas
               }

            </div>
         </div>
      </div>)
}

export default Home;