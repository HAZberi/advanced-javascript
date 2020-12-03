
"use strict"

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
    cart : [
        { product: 'pizza', quantity: 5},
        { product: 'wings', quantity: 15},
    ],
    user: { loggedIn: true}
}

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);
console.log(stateClone);
console.log(stateCloneDeep);
state.user.loggedIn = false;
console.log(stateClone);




