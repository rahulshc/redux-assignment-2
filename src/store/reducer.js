import * as actionTypes from './actions';

const initialState= {
    persons: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.personAdded:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }

            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.personDeleted:
            const updatedPersons= state.persons.filter(person => person.id !== action.toDeleteId);
            return{
               ...state,
               persons: updatedPersons
            }

        default:
            return state
    }
}

export default reducer;