import components from './components';
import * as actions from './actions';
import * as constants from './constants';
import reducer from './reducer';

export default { components, actions, constants, reducer };




/*
*
* Possible solutions:
*
* ---
*
* Have each param: color, font, icon, have thematic tags and then simply combine those of the same theme.
* This approach would also require for there to be some sort of rules for inter params combinations,
* like two different colors maybe make a theme of it's own, or color + icon combination. Or maybe some
* font doesn't go well with some icon
*
* ---
*
* The simple approach. Just randomly pick stuff
*
* */