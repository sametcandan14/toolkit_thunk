import { useEffect } from "react";
import { getUsers } from "../redux/testSlice";
import { useDispatch } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return <div>MainPage</div>;
};

export default MainPage;
