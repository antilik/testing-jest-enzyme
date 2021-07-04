const asyncFunc = (store) => (next) => (action) => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  } else {
    action.payload
      .then((response) => {
        const newAction = {
          ...action,
          payload: response,
        };

        store.dispatch(newAction);
      })
      .catch((e) => console.log(e));
  }
};

export default asyncFunc;
