import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
import { useState } from "react";

const ItemsList = ({ data }) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState({});

  return data.map((item) => (
    <div className="flex justify-between">
      <div className="w-8/12">
        <h2 className="font-semibold p-1 text-gray-700">
          {item.card.info.name}
        </h2>
        <h3 className="font-medium p-1">
          ₹
          {item?.card?.info?.defaultPrice != null
            ? item?.card?.info?.defaultPrice / 100
            : item?.card?.info?.price / 100}
        </h3>
      </div>
      {itemCount[item.card.info.id] ? (
        <button className="m-2 p-2 hover:bg-gray-300 text-green-600 w-24 font-black text-xl rounded-lg shadow-md border-gray-300 border-2">
          <span
            className="pr-5"
            onClick={() => {
              setItemCount((prevState) => ({
                ...prevState,
                [item.card.info.id]: (prevState[item.card.info.id] || 0) - 1,
              }));
              dispatch(removeItems(item));
            }}
          >
            -
          </span>
          {itemCount[item.card.info.id]}
          <span
            className="pl-5"
            onClick={() => {
              setItemCount((prevState) => ({
                ...prevState,
                [item.card.info.id]: (prevState[item.card.info.id] || 0) + 1,
              }));
              dispatch(addItems(item));
            }}
          >
            +
          </span>
        </button>
      ) : (
        <button
          className="m-2 p-2 hover:bg-gray-300 text-green-600 w-24 font-black text-xl rounded-lg shadow-md border-gray-300 border-2"
          onClick={() => {
            dispatch(addItems(item));
            setItemCount((prevState) => ({
              ...prevState,
              [item.card.info.id]: (prevState[item.card.info.id] || 0) + 1,
            }));
          }}
        >
          ADD
        </button>
      )}
      <div className="h-[2px] bg-slate-200" />
    </div>
  ));
};
export default ItemsList;
