import React, { useState, useReducer } from 'react';
import {mock} from './mock.js';
import { reducer } from './reducer.js';


const Func = () => {
    const [state, dispatch] = useReducer(reducer, {
        data: mock,
        id: null,
        name: '',
        title: ''
    })

  return (
    <div style={{flex: 1}}>
        <h1>UseReducer</h1>
        <input type="text" placeholder='Search...' onChange={(e) => dispatch({type: 'search', payload: {valueEvent: e.target.value}})} />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.data.map((value) => {
                        return(
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{
                                    state.id === value.id 
                                    ?
                                    <input type='text' value={state.name} onChange={(e) => dispatch({type: 'name', payload: {nameEvent: e.target.value}})} />
                                    :
                                    value.name
                                }</td>
                                <td>
                                    {
                                        state.id === value.id 
                                        ?
                                        <button onClick={() => dispatch({type: 'save'})}>save</button>
                                        :
                                        <button onClick={() => dispatch({type: 'edit', payload: {userId: value.id, userName: value.name}})}>edit</button>
                                    }
                                    <button onClick={() => dispatch({type: 'delete', payload: {userId: value.id}})}>delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <input onChange={(e) => dispatch({type: 'enter', payload: {onEnter: e.target.value}})} type="text" />
        <button onClick={() => dispatch({type: 'add'})}>+</button>
        
    </div>
  )
}

export default Func