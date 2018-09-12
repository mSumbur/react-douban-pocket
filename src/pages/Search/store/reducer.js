import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  error: false,
  book: {
    start: 0,
    count: 10,
    text: 'A',
    default: true,
    error: false,
    data: []
  },
  movie: {
    start: 0,
    count: 10,
    text: 'top250',
    default: true,
    error: false,
    data: []
  },
  music: {
    start: 0,
    count: 10,
    text: 'A',
    default: true,
    error: false,
    data: []
  }
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_BOOK:
      return state.set('book', fromJS(action.value))
    case constants.SET_MOVIE:
      return state.set('movie', fromJS(action.value))
    case constants.SET_MUSIC:
      return state.set('music', fromJS(action.value))
    case constants.NO_NETWORK:
      return state.set(action.dataType, fromJS(action.value))
    default:
      return state
  }
}
