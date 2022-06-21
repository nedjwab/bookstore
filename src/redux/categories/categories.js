const CHECK_STATUS = 'CHECK_STATUS';

// Action
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Reducer
const data = 'Under construction';
const statusReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return data;
    default: return state;
  }
};

export default statusReducer;
