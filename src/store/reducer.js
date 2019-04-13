import { combineReducers } from 'redux';
import { reducer as game } from '../containers/Game';

const reducer = combineReducers({
  game,
});

export default reducer;
