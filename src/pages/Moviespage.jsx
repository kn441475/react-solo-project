import React, { useEffect, useState } from "react";
import "./Moviespage.css";
import Sidebar from "../components/Sidebar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchImg from "../assets/search.svg";
import axios from "axios";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import Movie from "../components/Movie";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Moviepage = () => {
  const [{ searchTerm }, dispatch] = useStateValue();
  const [search, setSearch] = useState("");
  const [searchMade, setSearchMade] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchTerm && searchMovies()
  }, [searchTerm]);



  async function searchMovies(){
   setLoading(true);
    setSearchMade(true);
    const response = await axios.get(
      `https://omdbapi.com/?type=movie&apikey=28c39af6&s=${searchTerm}`
    );
    const movies = response.data.Search.slice(0, 6);
    setMovies(movies)
    setLoading(false)
  }

  async function movieSearch(e) {
    e.preventDefault();
    setLoading(true);
    setSearchMade(true);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      searchTerm: search,
    });
  }

  return (
    <div className="moviepage">
      <Sidebar />
      <div className="moviepage__movies">
        <form
          className="moviepage__search"
          onSubmit={(event) => movieSearch(event)}
        >
          <div className="moviepage__search--input">
            <input
              type="text"
              value={search}
              placeholder="Search for a movie"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="moviepage__search--button">
            <button type="submit">
              <SearchRoundedIcon />
            </button>
          </div>
        </form>
        {loading === false && searchMade === false && (
          <figure className="moviepage__img--wrapper">
            <img src={SearchImg} alt="" />
            <h1>Waiting for your Search...</h1>
          </figure>
        )}
        {loading === true && searchMade === true && (
          <LoopRoundedIcon className="moviepage__loading" />
        )}
        {loading === false && searchMade === true && (
          <section id="movies">
            <div className="container movie__container">
              <div className="row movie__row">
                <div className="movies__content">
                  <div className="movies__list moviepage__movies--list">
                    {movies.map((movie) => (
                      <Movie
                        image={movie.Poster}
                        text={movie.Title}
                        key={movie.imdbID}
                        id={movie.imdbID}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Moviepage;
