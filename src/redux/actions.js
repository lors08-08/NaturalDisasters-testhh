export function loadEvents() {
  return (dispatch) => {
    dispatch({ type: "events/load/start" });
    fetch(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "events/load/succeed",
          payload: json.events,
        });
      });
  };
}

export function setEventType(id) {
  return {
    type: "eventType/set",
    payload: id,
  };
}
