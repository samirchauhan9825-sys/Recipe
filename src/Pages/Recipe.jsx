import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

function Recipe() {

    const{tag} = useParams();

    let [category,setCategory] = useState([]);

    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes/${tag}`).then((response)=>{return response.json()}).
        then((recipes)=>{
            setCategory(recipes)
            console.log(recipes)
        });
    },[])

  return (
    <>
{/* recipe section */}
<div className="container">
  <div className="row" id="recipedetails">
    <div class="col-lg-6 col-12">
          <img src={category?.image} className="w-100 rounded" alt="recipe-img" />
      </div>

      <div class="col-lg-6 col-12 mt-5">
          <h1>{category?.name}</h1>
          <p class="my-4">{category?.instructions}</p>
              {category?.ingredients}
          <div class="row text-center my-5 time">
              <div class="col-4">
                  <span class="fa fa-clock-o fs-1"></span>
                  <h5 class="my-2">Active Time</h5>
                  <h6>20 mins</h6>
              </div>


              <div class="col-4">
                  <span class="fa fa-history fs-1"></span>
                  <h5 class="my-2">Total Time</h5>
                  <h6>50 mins</h6>
              </div>

              <div class="col-4">
                  <span class="fa fa-users fs-1"></span>
                  <h5 class="my-2">Yield</h5>
                  <h6>Serves 2</h6>
              </div>
              
          </div>

          <div class="d-flex justify-content-between">
              <p>Created by Alen Walker  21 recipe</p>
              <div class="icon fs-3">
                  <span class="fa fa-plus-circle"></span>
                  <span class="fa fa-cart-plus"></span>
                  <span class="fa fa-print"></span>
              </div>
          </div>
      </div>
  </div>
</div>
{/* recipe section */}

{/* recipe detils section */}
<div className="container mt-5 recipe-detils">
  <h3>How to Make it</h3>
  <div className="row" id="steps">
    <div class="col-12">
          <div class="steps mt-4">
              <span class="fa fa-check-circle-o fs-4"> 1.STEP</span>
              <p class="ms-4 my-4">The first step to making a great pizza is to make a great pizza dough. In a
                  large mixing bowl or
                  in the bowl of a standing mixer with a hook attachment, add 1 teaspoon of instant yeast (3
                  grams) and ½ teaspoon of sugar. Instant yeast is rapid rise yeast.</p>
          </div>

          <div class="steps">
              <span class="fa fa-check-circle-o fs-4"> 2.STEP</span>
              <p class="ms-4 my-4">1 teaspoon instant yeast = 1.5 teaspoons active dry yeast = 3 teaspoons fresh
                  yeast. Mix dry active yeast or fresh yeast and ½ teaspoon sugar in 1 cup lukewarm water. Set
                  aside for 10 to 15 minutes or until the mixture has become frothy and bubbly.</p>
          </div>

          <div class="steps">
              <span class="fa fa-check-circle-o fs-4"> 3.STEP</span>
              <p class="ms-4 my-4">Mix with rest of the ingredients and knead to a soft dough. Next add 3 cups of
                  whole wheat flour and 1 teaspoon of salt. Add 3 tablespoons of olive oil, or preferred
                  flavorless oil. Tip: A little bit of acidity helps in gluten development. If you do not have
                  lemon juice, 1 tablespoon of apple cider vinegar is an option.</p>
          </div>

          <div class="steps">
              <span class="fa fa-check-circle-o fs-4"> 4.STEP</span>
              <p class="ms-4 my-4">And top with lots of fresh mozzarella cheese. Spread out evenly, again,
                  avoiding the very edge of the crust. Break fresh mozzarella cheese into chunks and place it on
                  the crust.Move the baking rack or tray to the lowest position in your preheated oven.</p>
          </div>
      </div>
  </div>
  <div className="row recipe-footer">
    <div className="col-lg-8 col-md-12">
      <h3 className="my-4">Comments</h3>
      <div className="chef d-flex">
        <img src="data:image/jpeg;base64,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" alt />
        <div className="ms-3 mt-3">
          <h5>Alice Thomsom</h5>
          <p>12 days ago</p>
          <span className="fa fa-star text-warning" />
          <span className="fa fa-star text-warning" />
          <span className="fa fa-star text-warning" />
          <span className="fa fa-star text-warning" />
          <span className="fa fa-star text-light" />
        </div>
      </div>
      <p className="my-4">
        It’s been pointed out to me that there’s certain things that I subconsciously do when I cook, that
        people would’ve never thought about doing! This has come from years of working in professional
        kitchens, you pick up some tricks of the trade that help with the speed of home cooking.</p>
    </div>
    <div className="col-lg-4 col-md-12 my-4">
      <h3>Tags</h3>
      <div className="d-flex justify-content-evenly my-4">
        <button className="p-2 border-0 text-success rounded">DINNER</button>
        <button className="p-2 border-0 text-success rounded">CASSEROLE</button>
        <button className="p-2 border-0 text-success rounded">PARTY</button>
        <button className="p-2 border-0 text-success rounded">MEAT</button>
      </div>
      <h3 className="my-5">Share Recipe</h3>
      <div className="d-flex justify-content-evenly my-4">
        <span className="fa fa-facebook border border-1 p-2 rounded-pill fs-4" style={{color: 'blueviolet'}} />
        <span className="fa fa-linkedin border border-1 p-2 rounded-pill fs-4" style={{color: 'blueviolet'}} />
        <span className="fa fa-twitter border border-1 p-2 rounded-pill fs-4" style={{color: 'blueviolet'}} />
      </div>
    </div>
    <div className="col-lg-8 col-12 text-center my-4 bg-light p-3">
      <div className="chef d-flex justify-content-center">
        <img src="data:image/jpeg;base64,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" alt />
        <div className="ms-3 mt-5">
          <h5>Tom Solender</h5>
          <p>12 days ago</p>
        </div>
      </div>
      <p className="my-4">
        It’s been pointed out to me that there’s certain things that I subconsciously do when I cook,
        that
        people would’ve never thought about doing! This has come from years of working in professional
        kitchens, you pick up some tricks of the trade that help with the speed of home cooking.</p>
    </div>
    {/* <div className="col-lg-8 col-12 chef d-flex justify-content-center">
      <img src="data:image/jpeg;base64,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" alt width="150px" " />
      <div className="ms-3 mt-3">
        <h5>Alice Thomsom</h5>
        <p>12 days ago</p>
        <span className="fa fa-star text-warning" />
        <span className="fa fa-star text-warning" />
        <span className="fa fa-star text-warning" />
        <span className="fa fa-star text-warning" />
        <span className="fa fa-star text-light" />
      </div>
    </div> */}
    <p className="col-lg-8 col-12 my-4 text-center">
      It’s been pointed out to me that there’s certain things that I subconsciously do when I cook, that
      people would’ve never thought about doing! This has come from years of working in professional
      kitchens, you pick up some tricks of the trade that help with the speed of home cooking.</p>
  </div>
</div>
{/* recipe detils section */}


    </>
  )
}

export default Recipe