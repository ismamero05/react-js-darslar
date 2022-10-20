export const reducer = (state, action)=>{
    switch(action.type){
        case 'add': 
            let selected = state.data.map((value) => value.id === action.payload.id && {...value, addtocart: true, quantity: 1})
            selected = selected.filter((value) => value && value)
            let added = [...state.products, ...selected]
            let reset = state.data.map((value) => value.id === action.payload.id ? selected[0] : value)
            return {...state, products: added, data: reset }

        case 'basket': 
            return {...state, basket: !state.basket}

        case 'increment':
            let res = state.products.map((value) => value.id === action.payload.ee ? {...value, quantity: value.quantity + 1} : value)
            return {...state, products: res}

        case 'decrement':
            let reas = state.products.map((value) => value.id === action.payload.ee && value.quantity > 1 ? {...value, quantity: value.quantity - 1} : value)
            return {...state, products: reas}

        case 'delete':
            let resad = state.products.map((value) => value.id !== action.payload)
            return {...state, products: resad}
            
        default: return state.data
    }
}