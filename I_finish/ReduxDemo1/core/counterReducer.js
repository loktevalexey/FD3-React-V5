const initState={
  cnt: 0,
};

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function counterReducer(state=initState,action) {

  switch (action.type) {

    case "INC": {
      // хотелось бы просто увеличить state.cnt
      // но редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
      console.log('state до обработки редьюсером:',state);
      let newState={...state};
      newState.cnt++;
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    
    case "DEC": {
      console.log('state до обработки редьюсером:',state);
      let newState={...state};
      newState.cnt--;
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default counterReducer;
