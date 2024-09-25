import { userContext } from "../utils/userContext";
import Card, { withDiscountInfo } from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [name, setName] = useState("");
  //const { userName } = useContext(userContext);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9308107&lng=77.58385770000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const restaurantData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantData);
    setFilteredList(restaurantData);
  };

  useEffect(() => {
    fetchData();
    setName("Afsah Syeda");
  }, []);

  const DiscountedCard = withDiscountInfo(Card);
  //console.log("UserName:" + userName);

  //Conditional rendering
  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <userContext.Provider value={{ userName: "Afsah", setName }}>
      <div className="body">
        <div className="filter">
          <input
            className="res-filter"
            placeholder="Search"
            onChange={(e) =>
              setFilteredList(
                restaurantList.filter(
                  (res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase().trim()) ||
                    res.info.cuisines
                      .join(",")
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase().trim())
                )
              )
            }
          ></input>
          <button
            className="res-filter"
            title="Restaurants with a rating higher than 4.5"
            onClick={() =>
              setFilteredList(
                restaurantList.filter((obj) => obj.info.avgRating >= 4.5)
              )
            }
          >
            Top Rated Restaurants
          </button>
          <input
            className="border-black border-[1px] pl-1"
            onChange={(e) => useContext(userContext).setName(e.target.value)}
          ></input>
        </div>
        <div className="cards">
          {filteredList.map((restaurant) => {
            return restaurant.info.hasOwnProperty(
              "aggregatedDiscountInfoV3"
            ) ? (
              <Link
                className="font-medium hover:underline"
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <DiscountedCard
                  key={restaurant.info.id}
                  data={restaurant.info}
                />
              </Link>
            ) : (
              <Link
                className="font-medium hover:underline"
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <Card key={restaurant.info.id} data={restaurant.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </userContext.Provider>
  );
};
export default Body;
