import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

export const useMenu = (resId) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchData();
    return () => {
      setMenu([]);
    };
  }, []);

  const fetchData = async () => {
    const url = MENU_API + resId;
    const data = await fetch(url);
    const json = await data.json();
    setMenu(json?.data?.cards);
    //console.log(json);
  };
  return menu;
};
