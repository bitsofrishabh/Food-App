import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, areaName } =
    resData.info;

  return (
    <div className="m-4 p-4 h-fit w-[250px] bg-gray-50 rounded-lg hover:bg-gray-200">
      <h2 className="font-bold py-4 text-xl">{name}</h2>
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        height="200"
        width="200"
      ></img>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantCard;
