import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getItems } from "./store/actions/items";

export const MainLayout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const [value, setValue] = useState("");

  const getItemsHandler = (e) => {
    setValue(e.target.value);
    dispatch(getItems(e.target.value));
  };

  return (
    <div>
      <input
        value={value}
        className="search"
        placeholder="поиск"
        type="text"
        onChange={getItemsHandler}
      />
      {items.length ? (
        <div className="tips">
          {items.map((el, index) => {
            return (
              <div
                className="tip"
                key={index}
                onClick={() => setValue(el.name)}
              >
                {el.name}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
