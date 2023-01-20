export const SET_COUNT = "SET_COUNT";
export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";

export const setCounter = (counter) => ({
  type: SET_COUNT,
  payload: counter
});

export const incrementCounter = () => ({
  type: INC_COUNT
});

export const decrementCounter = () => ({
  type: DEC_COUNT
});
