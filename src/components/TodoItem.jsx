import React from "react";
import ReactDOM from "react-dom";
import "./miestilo.css" 
export function TodoItem({todo}){

    const {id, tarea} = todo;

    return (
        <div className="card" >
            <img src="https://picsum.photos/200" className="card-img-top imagenchica" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{tarea}</h5>
            </div>
        </div>
    );
}