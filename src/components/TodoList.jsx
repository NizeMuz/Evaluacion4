import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";
import {v4 as uuid} from "uuid";
import { TodoItem } from "./TodoItem";
import "./miestilo.css"
export function TodoList(){

    //INICIALIZAR VARIABLES QUE ESTARÁ VIENDO REACT
    //POR SI SUFREN CAMBIOS
    //todos = NOMBRE DE LA CONSTANTE
    //setTodos = MÉTODO QUE VA A UTILIZAR PARA SUFRIR MODIFICACIONES
    //useState = USARÁ UN STATE PARA CAPTURAR LOS ESTADOS,
    //EN ESTE CASO UN ARREGLO
    const [todos, setTodos] = useState([
        {id:1, tarea:'Vacaciones'}, {id:2, tarea:'Paseo'},
        {id:3, tarea:'Viaje'}, {id:4, tarea:'Fiesta'}
    ]);

    const tareaRef = useRef();

    const agregarTarea = () =>{
        //alert("Agregando tarea...");
        const tarea = tareaRef.current.value;
        const id = uuid();
        //alert(id);

        if(tarea === '') return;

        setTodos((prevTodos) =>{
            const nuevaTarea = {
                id:uuid(),
                tarea: tarea
            }
            //3 PUNTITOS TOMA EL ARREGLO Y LO DESCOMPONE
            //CON EL RETURN ESTOY TOMANDO EL ARREGLO ANTIGUO + UNA NUEVA TAREA
            //Y FORMO UN NUEVO ARREGLO DE TAREAS

            tareaRef.current.value = '';
            return [...prevTodos, nuevaTarea];
        });
    }



    return (
        <Fragment>
            <h1 className="textocentrado">Mi Album</h1>
            <div className="input-group mt-4 mb-4 te">
                <input ref={tareaRef} placeholder="Ingrese un titulo" className="form-control" type="text"></input>
                <button onClick={agregarTarea} className="btn btn-success">+</button>
            </div>
            <div className="col">
                {todos.map((todo) => (
                        <TodoItem todo={todo} key={todo.id}></TodoItem>
                ))}
                </div> 
        </Fragment>
    );
}