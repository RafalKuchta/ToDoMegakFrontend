import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export const App = () => {
    return (
        <>

            <header>
                <h1><strong>To Do</strong> Lista</h1>
                <div className="wrapper">
                    <div className="add-task">
                        <input type="text" placeholder="Nazwa zadania..."/>
                        <button>{"Dodaj"}</button>
                    </div>
                </div>
            </header>

            <div className="wrapper-to-do">
                <div className="tasks-to-do">
                    <p>Learn Java Script</p>
                    <div className="action">
                        <FontAwesomeIcon icon={faCheck} size="xs" className="icon-done"/>
                        <FontAwesomeIcon icon={faPenToSquare} className="icon-edit"/>
                        <FontAwesomeIcon icon={faTrashCan} className="icon-trash"/>
                    </div>

                </div>
            </div>


            <div className="wrapper-done">
                <div className="tasks-to-do">
                    ... Zrobione
                </div>
            </div>

        </>
    );
}
