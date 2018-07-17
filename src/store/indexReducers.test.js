// This will test combined reducer
import rootReducer from './indexReducers';

describe('rootReducer', () => {
    it('initializes the defauult state', () => {
        expect(rootReducer({},{})).toEqual({ balance:0, bitcoin: {} })
    });
});