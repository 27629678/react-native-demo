function add_content(text) {
  if (text.length == 0) {
    return { type: 'none' }
  }

  return {type: 'add_content', content: text}
}

export default add_content
