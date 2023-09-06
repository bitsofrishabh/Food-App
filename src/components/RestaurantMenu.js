import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log("resId:", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9121181&lng=77.6445548&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );

    const json = await data.json();
    console.log("data:", json);
    setResInfo(json.data);
  };

  console.log("resInfo:", resInfo);

  const dataMenu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
      .itemCards;
  console.log("dataMenu:", dataMenu);

  return (
    <div>
      <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
      <h2>{resInfo?.cards[0]?.card?.card?.info.city}</h2>
      <h2>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h2>
      <ul>
        {dataMenu?.map((item) => (
          <div>
            <li>{item.card.info.name}</li>
            <li>{item.card.info.price}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
