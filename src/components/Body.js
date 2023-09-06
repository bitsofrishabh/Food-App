import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");

  //whenever state variable update,react triggers a reconciliation process(re-render the components)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json:", json);
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants ||
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants ||
        json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants ||
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants ||
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants ||
        json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants ||
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <section className="body">
      <div className="search-box">
        <input
          type="text"
          value={searchText}
          placeholder="Search "
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            const filterData = listOfRestaurants.filter((res) => {
              console.log("res:", res);
              console.log(searchText);
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            console.log("filterData", filterData);
            setFilterRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaurants.filter(
              (res) => res.cost < 500
            );
            setListOfRestaurants(filteredData);
            console.log("Mouse Over", filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestaurants.map((resData) => {
          return (
            <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
              <RestaurantCard resData={resData} />;
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Body;
