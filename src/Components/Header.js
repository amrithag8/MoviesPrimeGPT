import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../Store/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SUPPORTING_LANNGUAGES } from "../utils/languageConstants";
import { addSelectedLanguage } from "../Store/configSlice";
import { toggleGptButton } from "../Store/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptToggle = useSelector((store) => store.gpt.toggleButton);
  console.log("gptToggle", gptToggle);
  let { pathname } = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      if (pathname === "/browse" || pathname === "/gpt-search") {
        navigate("/login");
      }
    } else {
      if (pathname === "/login" || pathname === "/register") {
        navigate("/browse");
      }
    }
  }, []);

  const signOutHandler = () => {
    dispatch(removeUser());
    localStorage.removeItem("user");
    navigate("/login");
  };

  const languageHandler = (e) => {
    dispatch(addSelectedLanguage(e.target.value));
  };

  return (
    <div className="absolute text-red-500 z-50 items-center w-screen flex justify-between p-4">
      <h1 className="font-lilita text-5xl font-extrabold">MOVIES PRIME</h1>
      <div className="">
        <img src="" />

        {localStorage.getItem("user") && (
          <div className="flex items-center gap-8">
            {gptToggle && (
              <select
                name="Languages"
                id="languages"
                className="p-2 bg-black rounded-md text-white"
                onChange={languageHandler}
              >
                {SUPPORTING_LANNGUAGES.map((item) => {
                  return <option value={item.identifier}>{item.name}</option>;
                })}
              </select>
            )}
            {gptToggle ? (
              <button
                className="cursor-pointer bg-purple-800 p-2 rounded-lg m-2 text-white"
                onClick={() => {
                  navigate("/browse");
                  dispatch(toggleGptButton());
                }}
              >
                Home
              </button>
            ) : (
              <button
                className="cursor-pointer bg-purple-800 p-2 rounded-lg m-2 text-white"
                onClick={() => {
                  navigate("/gpt-search");
                  dispatch(toggleGptButton());
                }}
              >
                AI Search
              </button>
            )}

            <div className="flex flex-col items-center">
              <p className="text-xs font-bold">
                {" "}
                Hi {localStorage.getItem("user")}
              </p>
              <button
                className="text-sm cursor-pointer p-2 bg-red-500 font-bold text-black rounded-md"
                onClick={signOutHandler}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
