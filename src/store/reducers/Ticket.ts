import {
  GET_TICKET,
  SET_ERROR,
  SHOW_TICKET,
  TicketState,
  SET_LOADING,
  
} from "../constant/types";
import { TicketAction } from "../actions/actions";
const initialState: TicketState = {
  ticket: null,
  tickets: [],
  error: "",
  loading: true,
};

const TicketReducer = (state = initialState, action: TicketAction) => {
  switch (action.type) {
    case SHOW_TICKET:
      return { ...state, tickets: action.payload };
    case GET_TICKET:
      return { ...state, ticket:action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default TicketReducer;
