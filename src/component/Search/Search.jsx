import debounce from "lodash.debounce";
import React, { useCallback, useContext, useRef, useState } from "react";
import { SearchContext } from "../../App";


import st from './Search.module.scss';




const Search = () => {
   const { searchValue, setSearchValue } = useContext(SearchContext)
   const [value, setValue] = useState('')
   const inputRef = useRef()

   const testDb = useCallback(
      debounce(() => {
         console.log('hello')
      }, 1000),
      []
   )


   const onClickClear = () => {
      setSearchValue('')
      setValue('')
      inputRef.current.focus()
   }

   const getSearch = debounce((str) => {
      setSearchValue(str)
   }, 500)

   const onChangeInput = (e) => {
      setValue(e.target.value)
      getSearch(e.target.value)
   }

   return (
      <div className={st.root}>
         <svg className={st.search} id="Glyph" version="1.1" viewBox="0 0 32 32" space="preserve" ><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_" /></svg>
         <input
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            className={st.input}
            placeholder="поиск пиццы ..." />
         {value ? <svg onClick={onClickClear} className={st.close} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z" /></svg>
            : ''
         }

      </div>
   )
}

export default Search;