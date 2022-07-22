import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatFetch } from "./catState";
const CatPage = () => {
  const { cat } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatFetch());
    console.log(cat);
  }, []);

  return <React.Fragment></React.Fragment>;
};
export default CatPage;
