import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, areaName } =
    resData.info;

  return (
    <div className="res-card">
      <h2>{name}</h2>
      <img src={CDN_URL + cloudinaryImageId} height="200" width="200"></img>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantCard;
