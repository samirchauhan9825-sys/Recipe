import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

function Search() {
  let [recipe, setRecipe] = useState([]);
  let [query, setQuery] = useState("");
  console.log(query);
  
  let navigate = useNavigate();

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
  console.log(query);

  function handelsubmit(e) {
    e.preventDefault();
    navigate(`/searchResult?query=${query}`);
  }

  return (
    <>
      <Container>
        <div className="uk-container my-4">
          <div data-uk-grid>
            <div className="uk-width-1-2@m">
              <form
                onSubmit={handelsubmit}
                className="uk-search uk-search-default uk-width-1-1 uk-margin-small-bottom"
              >
                <input
                  className="uk-search-input uk-text-small uk-border-rounded uk-form-large w-75 border-0 bg-light p-2"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  type="search"
                  placeholder="Search for recipes..."
                />
              </form>
            </div>
          </div>
        </div>

        <Row>
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
        </Row>
      </Container>
    </>
  );
}

export default Search;
