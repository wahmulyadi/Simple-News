const {GET_PROFILE} = require('../../../constans/constans');

const initState = {
    data: null,
};

const user = (state = initState, action) => {
    switch (action.type) {
        case `${GET_PROFILE}_PENDING`:
            if (action.error == undefined && action.payload) {
                return {
                    data: action.payload,
                };
            }
        case `${GET_PROFILE}_FULFILLED`:
            if (action.error == undefined && action.payload) {
                return {
                    data: action.payload,
                };
            }
        case `${GET_PROFILE}_REJECTED`:
            if (action.error == undefined && action.payload) {
                return {
                    data: action.payload,
                };
            }
        default:
            return state;
            break;
    }
};

export default user;
