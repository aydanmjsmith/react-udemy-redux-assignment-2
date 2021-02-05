import * as actions from '../actions';

const initialState = {
    personList: [ { id: 1, name: 'Aydan', age: 22} ],
}

const personReducer = (state = initialState, action) => {
    console.log('[personReducer]');
    console.log(action);

    switch (action.type) {
        case (actions.ADD_PERSON):
            //const updPersonList = [...state.personList];
            //updPersonList.push( action.person );

            return {
                ...state,
                personList: state.personList.concat(action.person)
            }
        case (actions.DELETE_PERSON):
            return {
                ...state,
                personList: state.personList.filter( ( person ) => person.id !== action.personId)
            }
        default : 
            console.log('[personReducer] Unknown action <' + action.type + '>');
    }

    return state;
};

export default personReducer;

