const addAction = value => ({
  type: 'ADD_ITEM',
  payload: {
    value,
  },
});

const resetItemsAction = {
  type: 'RESET_ITEMS',
};

const deleteItemsAction = {
  type: 'DELETE_ITEMS',
};

const completeItemsAction = {
  type: 'COMPLETE_ITEMS',
};

const selectionChangeAction = changedItems => ({
  type: 'SELECTION_CHANGE_ITEM',
  payload: {
    changedItems,
  },
});

export {
  addAction,
  resetItemsAction,
  selectionChangeAction,
  deleteItemsAction,
  completeItemsAction,
};
