import React, { useState } from "react";
import MovieBackground from "../assets/moviebackground.jpg";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [{ searchTerm }, dispatch] = useStateValue();
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  function onSearch(e) {
    e.preventDefault();
    console.log(search);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      searchTerm: search,
    });
    navigate("/movies");
  }

  return (
    <>
      <section id="landing">
        <div className="movie__background">
          <figure className="movie__background--wrapper">
            <img
              src={MovieBackground}
              alt=""
              className="movie__background--img"
            />
            <div className="movie__background--text">
              <h1 className="movie__background--title">
                Movies<span className="textcolor">Paradise</span>
              </h1>
              <h3 className="movie__background--para">
                The possibilites are endless with Movies
                <span className="textcolor">Paradise</span>!
              </h3>
              <div className="movie__background--search">
                <form
                  onSubmit={(event) => onSearch(event)}
                  className="movie__input--wrapper form__submit"
                >
                  <input
                    type="text"
                    className="movie__input"
                    placeholder="Find a movie"
                    onChange={(event) => setSearch(event.target.value)}
                  />
                  <button
                    className="movie__background--button"
                    type="submit"
                  ></button>
                </form>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Nav;
