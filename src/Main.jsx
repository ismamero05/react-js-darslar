import React, { useState } from 'react';
import { Container, Adding, Mains, Counter, TotalCount, Items } from './style';
import data from './data.js'
import left from './assets/left-arrow.png'
import right from './assets/right-arrow.png'


const Func = () => {
    const [state, setState] = useState(data)
    const [check, setChecked] = useState(false)
    const [ids, setIds] = useState(null)
    const [title, setTitle] = useState('')
    var Totalcounter = 0

    const onCheck = (e, id) => {
        setChecked(e.target.checked)
        setIds(id)
    }
    
    const increment = (id) => {
        let res = state.map((value) => value.id === id ? {...value, quantity: value.quantity + 1} : value)
        setState(res)
    }

    const decrement = (id) => {
        let res = state.map((value) => value.id === id && value.quantity > 1 ? {...value, quantity: value.quantity - 1} : value)
        setState(res)
    }

    const onEnter = (e) => {
        const {value} = e.target;
        setTitle(value)  
    }


    const onAdd = () => {
        const NewUser = {
            id: state.length + 1,
            title: title,
            quantity: 1
        }

        setState([...state, NewUser])
        setTitle('')
    }
    
    return (
        <Container>
            <Adding>
            <input value={title} onChange={onEnter} type="text" />
            <button onClick={onAdd}>+</button>
            </Adding>
            {
                state.map((value) => {
                    Totalcounter += value.quantity
                    return (
                        <Mains key={value.id}>
                            <input onChange={(e) => onCheck(e, value.id)} type="checkbox" name="" id="" />
                            <Items check={value.id === ids && check}>{value.title}</Items>
                            <Counter>
                                <img onClick={() => decrement(value.id)} src={left} alt="" />
                                <p>{value.quantity}</p>
                                <img onClick={() => increment(value.id)} src={right} alt="" />
                            </Counter>
                        </Mains>
                    )
                })
            }
            <TotalCount>Total: {Totalcounter}</TotalCount>
        </Container>
    )
}

export default Func