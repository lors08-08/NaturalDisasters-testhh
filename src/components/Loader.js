import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loader() {
  return (
    <div className="loader">
      <CircularProgress size={60} color="secondary" />
    </div>
  );
}

export default Loader;
