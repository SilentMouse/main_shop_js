import * as types from '../constants/authTypes';

export const auth = (email,password) => (
    {
        type: types.AUTH,
        state: {
            email: email,
            password: password
        }
    }
);
