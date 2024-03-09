import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { SearchSvg } from "src/assets/index";
import { useAppDispatch } from "src/redux/store";
import { fetchAirportsByName } from "src/redux/slices/airportsSlice";

function SearchPanel() {
  const [isError, setError] = useState(false);
  const [inputValue, setInputValue] = useState(
    sessionStorage.getItem("searchAirport") || ""
  );
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isError = inputValue.length < 3;
    if (isError) {
      setError(true);
      return;
    } else {
      setError(false);
      dispatch(fetchAirportsByName(inputValue));
      sessionStorage.setItem("searchAirport", inputValue);
    }
  };

  useEffect(() => {
    if (!isError) {
      dispatch(fetchAirportsByName(inputValue));
    }
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError(false);
  };

  return (
    <form className="p-4" onSubmit={submitHandler}>
      <div>
        <div className="mt-2 flex">
          <input
            value={inputValue}
            type="text"
            onChange={changeHandler}
            placeholder="Airport name"
            className={classNames(
              "block rounded-md border-1 p-1 py-1.5 shadow-sm ring-1 ring-inset",
              { input_error: isError }
            )}
          />
          <button type="submit" className="ps-3">
            <img src={SearchSvg} />
          </button>
        </div>
        <div className="text-red">
          {isError && "Length of airport name should be more than two letters"}
        </div>
      </div>
    </form>
  );
}

export default SearchPanel;
