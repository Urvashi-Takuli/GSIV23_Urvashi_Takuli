import React, { useEffect, useState } from "react";
import PaginationComponent from "../Components/PaginationComponent";
import CardGrid from "../Components/CardGrid";
import axiosInstance from "../APIConfig";
import {useNavigate} from "react-router-dom";
import Header from "../Components/Header";

function HomeScreen() {
    const [pageNumber, setPageNumber] = useState(1);
    const [moviesData, setMoviesData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [activeMovie, setActiveMovie] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axiosInstance.get('discover/movie')
            .then((response) => {
                setMoviesData(response.data.results);
                setPageCount(response.data.total_pages);
            })
            .catch((error) => {
                console.log("Sometthing went wrong!")
            })
    },[pageNumber]);

    // show movie description
    useEffect(() => {
        if(activeMovie)
        navigate("./movie-description");
    },[activeMovie]);

    return (
        <div style={{}}>
            {console.log("movies Data-----------", activeMovie)}
            <Header/>
            <PaginationComponent
                totalPages={pageCount}
            />
            <CardGrid
                moviesRecords={moviesData}
                setSelectedMovie={setActiveMovie}
            />
            <PaginationComponent
                totalPages={pageCount}
            />
        </div>
    );

}
export default HomeScreen;