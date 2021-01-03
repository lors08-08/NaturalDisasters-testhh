import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import Map from "./components/Map";
import Header from "./components/Header";
import { loadEvents } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
}

export default App;
