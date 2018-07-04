const defaultState = {
  items: [],
};
export default function (_state = defaultState, action) {
  const state = JSON.parse(JSON.stringify(_state));
  switch (action.type) {
    case 'ADD_ITEM':
      state.items.push({
        id: Date.now(),
        label: action.payload.value,
        selected: false,
        done: false,
      });
      return state;
    case 'RESET_ITEMS':
      state.items = [];
      return state;
    case 'SELECTION_CHANGE_ITEM': {
      const { id, checked } = action.payload;
      const item = state.items.find(i => i.id === id);
      item.selected = checked;
      return state;
    }
    default:
      state.items = [];
      return state;
  }
}

