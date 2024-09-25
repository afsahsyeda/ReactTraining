import { FOOD_IMG } from "../utils/constants";

const Card = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating: starRating,
    sla: { slaString: deliveryTime },
    costForTwo,
  } = props?.data;
  return (
    <div className="card" data-testid="res-card">
      <img className="card-img" src={FOOD_IMG + cloudinaryImageId} />
      <div className="card-content">
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <ul className="nav-items">
          <li>{starRating + " stars"}</li>
          <li>{deliveryTime}</li>
          <li>{costForTwo}</li>
        </ul>
      </div>
    </div>
  );
};

export const withDiscountInfo = (Card) => {
  return (props) => {
    const { header = "", subHeader = "" } =
      props?.data?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="bg-black text-white absolute m-2">
          {header + " " + subHeader}
        </label>
        <Card data={props?.data} />
      </div>
    );
  };
};

export default Card;
