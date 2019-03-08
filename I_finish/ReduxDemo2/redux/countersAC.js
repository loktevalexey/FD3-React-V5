const COUNTER_BUTTON_CREATE='COUNTER_BUTTON_CREATE';
const COUNTER_BUTTON_ADD='COUNTER_BUTTON_ADD';

const counterButton_create=function(counterid) {
  return {
    type: COUNTER_BUTTON_CREATE,
    counterid:counterid,
  };
}

const counterButton_add=function(counterid,addvalue) {
  return {
    type: COUNTER_BUTTON_ADD,
    counterid:counterid,
    addvalue:addvalue,
  };
}

export {
  counterButton_create,COUNTER_BUTTON_CREATE,
  counterButton_add,COUNTER_BUTTON_ADD,
}
