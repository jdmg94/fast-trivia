import { combineReducers } from 'redux';
import { reducer as game } from '../containers/Game';
import { reducer as settings } from '../containers/Settings';

const reducer = combineReducers({
  game,
  settings,
});

export default reducer;
