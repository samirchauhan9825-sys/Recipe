import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Home() {
  let [recipe, setRecipe] = useState([]);
  let [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => {
        return response.json();
      })
      .then((categorydata) => {
        setCategory(categorydata);
        console.log(categorydata);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => {
        return response.json();
      })
      .then((recipedata) => {
        setRecipe(recipedata.recipes);
        console.log(recipedata);
      });
  }, []);

  return (
    <>
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
      <div className="container mt-5">
        <div className="row">
          {/* <div className="col-2">
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
          </div> */}
          <div className="col-12">
            <div className="row">
              {recipe.map((value) => {
                return (
                  <div className="col-md-6 col-lg-4 col-12">
                    <div className="recipes-items">
                      <Link to={`/recipe/${value.id}`}>
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
                          <h6 className="text-secondary">{value.cuisine}</h6>
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
      );
    </>
  );
}

export default Home;
