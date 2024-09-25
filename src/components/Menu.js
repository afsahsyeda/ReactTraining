import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useMenu } from "../utils/useMenu";
import Category from "./Category";
import { useState } from "react";

const Menu = () => {
  const { resId } = useParams();
  const menu = useMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (menu.length == 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = menu[2]?.card?.card?.info;
  const categories = menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  //console.log(categories[0].card.card);

  return (
    <div className="w-6/12 text-center mx-auto">
      <h1 className="text-left font-extrabold text-2xl m-2">{name}</h1>
      <h2 className="text-left font-bold text-lg m-2">{costForTwoMessage}</h2>
      <h3 className="text-left font-bold text-sm text-orange-500 m-2">
        {cuisines.join(", ")}
      </h3>
      <div className="block">
        {categories.map((c, index) => (
          <Category
            key={c?.card.card.itemCards[0].card.info.imageId}
            data={c?.card?.card}
            setShowIndex={() => setShowIndex(index == showIndex ? -1 : index)}
            isCollapsed={index == showIndex ? false : true}
          />
        ))}
      </div>
    </div>
  );
};
export default Menu;
