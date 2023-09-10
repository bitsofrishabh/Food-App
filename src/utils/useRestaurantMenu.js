import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  
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
    return resInfo;
  };
};

export default useRestaurantMenu;
