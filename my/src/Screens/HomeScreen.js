import React, { useEffect, useState } from "react";
import PaginationComponent from "../Components/PaginationComponent";
import CardGrid from "../Components/CardGrid";
import axiosInstance from "../APIConfig";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Search from "../Components/Search";

function HomeScreen() {
    const [pageNumber, setPageNumber] = useState(1);
    const [moviesData, setMoviesData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [activeMovie, setActiveMovie] = useState(null);
    const [searchKey, setSearchKey] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (!searchKey)
        axiosInstance.get('discover/movie?page=' + pageNumber)
            .then((response) => {
                setMoviesData(response.data.results);
                setPageCount(response.data.total_pages);
            })
            .catch((error) => {
                console.log("Something went wrong!")
            })
    }, [pageNumber]);

    useEffect(() => {
        if (searchKey)
            axiosInstance.get('search/movie?query=' + searchKey+'&&page='+ pageNumber)
                .then((response) => {
                    console.log("response", response)
                    setMoviesData(response.data.results);
                    setPageCount(response.data.total_pages);
                })
                .catch((error) => {
                    console.log("Something went wrong!")
                })
    }, [searchKey, pageNumber]);
    function reset(){
        setSearchKey('');
        setPageNumber(1);
    }
    // show movie description
    useEffect(() => {
        if (activeMovie)
            navigate("./movie-description", { state: { movie: activeMovie } });
    }, [activeMovie]);
    return (
        <div>
            {console.log("searchKey", searchKey)}
            <Header title={'Movie List'} />
            <Search
                setSearchText={setSearchKey}
                reset={reset}
            />
            <div style={{ margin: '10px' }}>
                <div style={{ width: '100%', display: 'flex', margin: '10px 0' }}>
                    <PaginationComponent
                        totalPages={pageCount}
                        setPageNumber={setPageNumber}
                        pageNumber={pageNumber}
                    />
                </div>
                <CardGrid
                    moviesRecords={moviesData}
                    setSelectedMovie={setActiveMovie}
                />
                <div style={{ width: '100%', display: 'flex', margin: '10px 0' }}>
                    <PaginationComponent
                        totalPages={pageCount}
                        setPageNumber={setPageNumber}
                        pageNumber={pageNumber}
                    />
                </div>
            </div>
        </div>
    );

}
export default HomeScreen;