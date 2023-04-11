import { nanoid } from "nanoid"
import qs from "qs"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCategoryId, setFilters } from "../../redux/slices/filterSlice"
import { fetchPizzas } from "../../redux/slices/pizzasSlice"
import Categories from "../Categories"
import PizzaBlock from "../PizzaBlock/PizzaBlock"
import Skeleton from "../PizzaBlock/Skeleton"
import Sort, { sortPosition } from "../Sort"


const Home = ({ searchValue }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const isSearch = useRef(false)
   const isMaunted = useRef(false)
   const { items, status } = useSelector((state) => state.pizza)

   const categoryId = useSelector((state) => state.filter.categoryId)
   const sortType = useSelector((state) => state.filter.sort.sortProperty);




   const onChangeCategory = (id) => {
      dispatch(setCategoryId(id))
   }

   const getPizzas = async () => {


      try {
         dispatch(fetchPizzas({
            categoryId,
            sortType,
         }))
      } catch (error) {
         console.log("ERROR", error);
      } finally {

      }

      window.scroll(0, 0)

   };

   useEffect(() => {
      if (isMaunted.current) {
         const queryString = qs.stringify({
            categoryId,
            sortType
         });
         navigate(`?${queryString}`)
         if (sortType === 'rating' && categoryId === 0) {
            navigate('')
         }
      }
      isMaunted.current = true
   }, [categoryId, sortType])

   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1))

         const sort = sortPosition.find(obj => obj.sortProperty === params.sortType)


         dispatch(setFilters({
            ...params,
            sort,
         }))
         isSearch.current = true
      }
   }, [])




   useEffect(() => {

      //
      if (!isSearch.current) {
         getPizzas();
      }
      isSearch.current = false
   }, [categoryId, sortType])




   const pizzas = items.filter(item => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
         return true
      }

      return false;
   }).map(item => <PizzaBlock key={nanoid()} title={item.title} price={item.price} imageUrl={item.imageUrl} sizes={item.sizes} id={item.id} types={item.types} />)

   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <Categories value={categoryId} onClickCategory={onChangeCategory} />
               <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
               {status === 'error' ?
                  (<div><h2>Произошла ошибка</h2></div>) :
                  (status === 'loading' ?
                     [...new Array(8)].map((_, index) =>
                        <Skeleton key={index} />
                     ) : pizzas)
               }

            </div>
         </div>
      </div>)
}

export default Home;