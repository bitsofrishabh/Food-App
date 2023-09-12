import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //whenever state variable update,react triggers a reconciliation process(re-render the components)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
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

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border h-10 border-gray-400 rounded-md"
            value={searchText}
            placeholder="Search "
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-400 m-4 rounded-md"
            onClick={() => {
              const filterData = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterRestaurants(filterData);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-400 m-4 rounded-md"
            onClick={() => {
              const filteredData = listOfRestaurants.filter(
                (res) => res.cost < 500
              );
              setListOfRestaurants(filteredData);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName:- </label>
          <input
            className="p-2  m-2 border border-black rounded"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.map((resData) => {
          return (
            <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
              {resData.info.veg ? (
                <RestaurantCardPromoted resData={resData} />
              ) : (
                <RestaurantCard resData={resData} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
