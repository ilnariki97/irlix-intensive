import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setFilterCategory,
} from '../../store/reducers/filters.slice'
import {useGetDrinksQuery} from "../../services/mockService";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer1 from "../../components/Footer/Footer1";
import NavBar from "../../components/navBar/NavBar"
import "../Home/home.scss"


export default function Home() {
    const dispatch = useDispatch()
    const {sortByCategory} = useSelector((state) => state.filtersReducer.filters)
    const {data, error, isLoading} = useGetDrinksQuery(sortByCategory);

    const handleCategoryChanges = (category) => {
        dispatch(setFilterCategory(category))
    }

    const listResults = data && data.map((card) => {
        return <Card data={card} key={card.id}/>
    })

    return (
        <>
            <Header/>
            <NavBar onClickCategory={handleCategoryChanges}/>
            <div className="main">
                <div className="main__container">
                    {error ? (
                        <>Error!</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : data ? (
                        listResults
                    ) : null}
                </div>
            </div>
            <Footer1/>
        </>
    );
}
