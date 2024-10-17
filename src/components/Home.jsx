import React from "react";
import Nav from "./Nav";
import Movies from "./Movies";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <section id="movies">
        <div className="container movie__container">
          <div className="row movie__row">
            <div className="movies__content">
              <div className="movies__list">
                <Movies />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
