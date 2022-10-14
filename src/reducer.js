import { mock } from "./mock"

export const reducer = (state, action) => {
    switch(action.type) {
        //delete
        case 'delete': 
        let res = state.data.filter((value) => value.id !== action.payload.userId)
            return {
                ...state, 
                data: res
            }
        
        // search
        case 'search': 
            let searchUser = mock.filter((value) => value[state.selected].toString().toLowerCase().includes(action.payload.valueEvent.toLowerCase()))
            return {
                ...state, 
                data: searchUser
            }

        
        // edit
        case 'edit':
            return {
                ...state, 
                id: action.payload.userId, 
                name: action.payload.userName, 
            }

        // name
        case 'name': 
            return {
                ...state, 
                name: action.payload.nameEvent 
            }
        


        case 'save':
            let saveUser = state.data.map((value) => value.id === state.id ? {...value, name: state.name, status: state.status} : value)
            return {
                ...state, 
                data: saveUser, 
                id: null
            }

        case 'enter' :
            return {...state, title: action.payload.onEnter}


        case 'add':
            let newUser = {id: state.data.length + 1, name: state.title}
            return {...state, data: [...state.data, state.data !== newUser]}
            
        // default
        default: return state.data

    }
}

