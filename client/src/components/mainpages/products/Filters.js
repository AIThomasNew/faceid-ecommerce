import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span>Фильтры: </span>
                <select className='filter-sort-select' name="category" value={category} onChange={handleCategory} >
                    <option value=''>Все товары</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className="row sort">
                <span>Сортировать по: </span>
                <select className='filter-sort-select' value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Новым</option>
                    <option value='sort=oldest'>Старым</option>
                    <option value='sort=-sold'>Лучшим продажам</option>
                    <option value='sort=-price'>Убыванию цены</option>
                    <option value='sort=price'>Возрастанию цены</option>
                </select>
            </div>

            <input style={{textIndent: '8px'}} className='filter-sort-select' type="text" value={search} placeholder="Найти товар..."
            onChange={e => setSearch(e.target.value.toLowerCase())} />
        </div>
    )
}

export default Filters
