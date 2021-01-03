const initialState = {
  loading: false,
  events: [],
  eventType: 8,
};

function application(state = initialState, action) {
  switch (action.type) {
    case "events/load/start":
      return {
        ...state,
        loading: true,
      };
    case "events/load/succeed":
      return {
        ...state,
        loading: false,
        events: action.payload,
      };
    case "eventType/set":
      return {
        ...state,
        eventType: action.payload,
      };
    default:
      return state;
  }
}

export default application;
