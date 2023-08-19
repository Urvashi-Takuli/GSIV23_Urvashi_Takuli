
/*search component for movies*/
import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
    state = {
        searchValue: '',
        movies: []
    };
    //handle the submit search request
    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    }
    // to handle the search keyword
    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };
    // function to call the API to fetch results
    makeApiCall = searchInput => {
        var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                this.setState({ movies: jsonData.meals });
            });
    };
    render() {
        return (
            <div>
                <h1>Welcome to the meal search app</h1>
                <input
                    name="text"
                    type="text"
                    placeholder="Search"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                />
                <button onClick={this.handleSearch}>Search</button>
                {this.state.movies ? (
                    <div>
                        {this.state.movies.map((meal, index) => (
                            <div key={index}>
                                <h1>{meal.strMeal}</h1>
                                <img src={meal.strMealThumb} alt="meal-thumbnail" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Try searching for a movie</p>
                )}
            </div>
        );
    }
}
export default Search;