import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const dataMenu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
      .itemCards;

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
