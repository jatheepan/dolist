const addAction = value => ({
  type: 'ADD_ITEM',
  payload: {
    value,
  },
});

const resetAction = {
  type: 'RESET_ITEMS',
};

const deleteItemsAction = {
  type: 'DELETE_ITEMS',
};

const completeItemsAction = {
  type: 'COMPLETE_ITEMS',
};

const selectionChangeAction = (id, checked) => ({
  type: 'SELECTION_CHANGE_ITEM',
  payload: {
    id,
    checked,
  },
});

export { addAction, resetAction, selectionChangeAction, deleteItemsAction, completeItemsAction };
