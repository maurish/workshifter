import { Map, List } from 'immutable'

const defaultState = List.of(
    Map({name:'pauli'}), 
    Map({name:'johannes'})
)
export default function(state = defaultState, { type, payload}) {
    switch (type) {
        default:
            return state;
    }
}
