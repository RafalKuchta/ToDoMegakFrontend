import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Header } from './components/layout/Header';
import { Tasks } from './components/Tasks/Tasks';
import {DoneTasks} from "./components/Done/DoneTasks";

export const App = () => {

    const tasks: any = [
        {
            id: 1,
            description: "Learn Java Script"
        }
    ]

    return (
        <>
            <Header />
            <Tasks />
            <DoneTasks />
        </>
    );
}
