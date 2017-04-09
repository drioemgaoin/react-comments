export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(content) {
  return {
    type: ADD_COMENT,
    content
  }
}
