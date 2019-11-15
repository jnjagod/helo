const initialState = {
  username: '',
  profile_pic: '',
  user_id: 0
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload }
    default: return state
  }
}