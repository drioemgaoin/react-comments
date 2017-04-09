
export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(content, avatar, date) {
  return {
    type: ADD_COMMENT,
    comment: {
      date,
      content,
      avatar
    }
  }
}
