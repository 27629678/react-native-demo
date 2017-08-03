export const add_content = function(text) {
  if (text.length == 0) {
    return {type: 'none'}
  }

  return {type: 'add_content', content: text}
}

export const set_seprator = function(seprator) {
  if (seprator.length == 0) {
    return {type: 'none'}
  }

  return {type: 'set_seprator', seprator: seprator}
}
