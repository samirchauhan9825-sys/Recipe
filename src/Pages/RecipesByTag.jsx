import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";

function RecipesByTag() {
  let [data, setData] = useState([]);
  let [category, setCategory] = useState([]);

  let tag = useLocation().pathname.split("/")[2];
  console.log(tag);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => {
        return response.json();
      })
      .then((recipe) => {
        console.log(recipe);
        setCategory(recipe);
      });
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/tag/${tag}`)
      .then((response) => {
        return response.json();
      })
      .then((recipe) => {
        console.log(recipe);
        setData(recipe.recipes);
      });
  }, [tag]);
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col">
            <section className="banner my-4">
              <section className="low-op">
                <div className="banner-content p-1">
                  <h1 className="ms-5 mt-5 ps-4 pm-5 text-light display-5">
                    Choose from <br /> thusands of <br />
                    recipes
                  </h1>
                  <p className="ms-5 mt-4 ps-4 text-light">
                    Appropriately integrate technically sound value with
                    scalable <br /> informediaries negotitate sustainable
                    stategic theme areas
                  </p>
                  <button className="ms-5 p-4 bg-transparent text-light border border-0">
                    Sign up today <span className="fa fa-arrow-right ms-3" />
                  </button>
                </div>
              </section>
            </section>
          </div>
        </div>
      </Container>
      <div>
        {/* recipes section start */}
        <div className="container mt-5">
         <div className="row">
          <div className="col-2">
            <h5 className="fs-3 text-secondary">Category</h5>
            {category.map((value, index) => {
              return (
                <>
                  <Container>
                    <ul className="">
                      <li>
                        {index + 1}{" "}
                        <Link
                          to={`/recipeByTag/${value}`}
                          className="text-decoration-none text-secondary"
                        >
                          {value}
                        </Link>
                      </li>
                    </ul>
                  </Container>
                </>
              );
            })}
          </div>
            <div className="col-10">
              <div className="right-side mt-3">
                {/* <form className="d-flex flex-wrap gap-2 align-items-center mb-4">
          <div className="position-relative w-75">
            <span className="fa fa-search position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary" />
            <input type="search" className="form-control ps-5 py-2 bg-light border-0" placeholder="Search for recipes..." />
          </div>
          <button className="btn btn-danger rounded-pill px-4 py-2 ms-5">
            Sort by Latest <i className="fa fa-sort ms-2" />
          </button>
        </form> */}
                <div className="row">
                  {data.map((value, index) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-12" key={index}>
                        <div className="recipes-items">
                          <Link to={`/details/${value.id}`}>
                            <img src={value.image} class="recipe-pic w-100 mt-4" />
                          </Link>
                          <div className="recipes mt-4">
                            <h2 className="fs-5">{value.name}</h2>
                            <div className="reviwe d-flex justify-content-between mt-3">
                              <span className="fa fa-star text-warning">
                                <a className="text-secondary text-decoration-none">
                                  {value.rating}
                                </a>
                              </span>
                              <h5 className="text-secondary">
                                {value.cuisine}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* recipes section ends */})
    </div>
  );
}

export default RecipesByTag;
