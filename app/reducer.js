'use strict';

const defaultState = {
  text: 'abc',
  content: ''
}

function reducer (state=defaultState, action) {
  switch (action.type) {
    case 'add_content':
      return Object.assign({}, state, {
        content: state.content + (state.content.length > 0 ? '+' : '') + action.content
      });

      break;

    default:
      return state;
  }

}

export default reducer
