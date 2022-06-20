import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";

import './Tasks.css';


export const Tasks = () => {
    return (
        <div className="wrapper-to-do">
            <div className="tasks-to-do">
                <p>task 1</p>
                <div className="action">
                    <FontAwesomeIcon icon={faCheck} size="xs" className="icon-done"/>
                    <FontAwesomeIcon icon={faPenToSquare} className="icon-edit"/>
                    <FontAwesomeIcon icon={faTrashCan} className="icon-trash"/>
                </div>

            </div>
        </div>
    )
}