import RestaurantDetails from "./RestaurantDetails";
import ResDetails from "../Utils/ResDetails";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(ResDetails);
  

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurant = restaurantList.filter(
              (values) => values.info.rating.rating_text > 4
            );
            console.log(filteredListOfRestaurant);
            setRestaurantList(filteredListOfRestaurant);
          }}
        >
          top rated restaurant
        </button>
      </div>
      <div className="rest-Container">
        {restaurantList.map((type, index) => (
          <RestaurantDetails key={index} resName={type} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
