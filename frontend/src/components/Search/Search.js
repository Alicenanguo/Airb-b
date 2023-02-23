import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { searchThunk } from "../../store/spots";
import "./Search.css";

const Search = () => {
    const dispatch = useDispatch();
    const { keyword } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);

    const user = useSelector((state) => state.session.user);
    console.log("user_in_search", user);
    const spotSearch = useSelector((state) => state?.spots?.searchSpots);
    console.log("spot_in_search", spotSearch);

    useEffect(() => {
        dispatch(searchThunk(keyword)).then(() => setIsLoaded(true));
      }, [dispatch, keyword]);

      let searchArr;
      if (isLoaded) {
        searchArr = Object.values(spotSearch);
      }
    console.log("SearchArr", searchArr);

    return (
        isLoaded && (
          <>
            <div className="search-container">
              <div className="search-title">
                {searchArr?.length ? (
                  <div className="search-main">
                  <div className="search-result-info">
                    {searchArr?.map((el, i) => {
                      return (
                        <div className="search-info-list">
                          <NavLink
                            to={`/spots/${el?.id}`}
                            key={el.id}
                            className="search-link"
                          >
                            <div className="search-product-img-container">
                              <img
                                src={el?.previewImage}
                                className="search-product-img"
                                alt="images"
                              ></img>
                            </div>
                            <div className="search-product-name">{el?.name}</div>

                            <div className="search-product-price">
                              ${parseFloat(el?.price).toFixed(2)}
                            </div>
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                </div>
                ) : (
                  <>
                    <div className="no-search-result">
                      Sorry, we could not find any item for "{keyword}"!
                    </div>
                      <div className="text-find-else">

                        <NavLink className="text-find-else" to={"/"}>
                          <i class="fa-solid fa-face-smile"></i>
                          Find spot here
                        </NavLink>
                      </div>
                  </>
                )}
              </div>


            </div>
          </>
        )
      );
    };

    export default Search;
