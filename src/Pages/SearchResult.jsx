import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function SearchResult() {
  let [recipe, setRecipe] = useState([]);

  let query = useLocation().search.split("=")[1];
  console.log(query);

  useEffect(() => {
    
    fetch(`https://dummyjson.com/recipes/search?q=${query}`)
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

export default SearchResult;
