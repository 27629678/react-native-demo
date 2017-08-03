'use strict';

const defaultState = {
  text: '请输入添加的内容',
  content: '',
  seprator: '+',
}

function reducer (state=defaultState, action) {
  switch (action.type) {
    case 'add_content':
      return Object.assign({}, state, {
        content: state.content + (state.content.length > 0 ? state.seprator : '') + action.content
      });

      break;

    case 'set_seprator':
      return Object.assign({}, state, {
        seprator: action.seprator,
      })

      break;

    default:
      return state;
  }

}

export default reducer
