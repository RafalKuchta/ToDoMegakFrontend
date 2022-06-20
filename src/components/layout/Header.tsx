import React from 'react';
import { Btn } from '../common/Btn';
import './Header.css';

export const Header = () => (
    <header>
        <h1>To Do Lista</h1>
        <div className="wrapper">
            <form className="add-task">
                <input type="text" placeholder="Nazwa zadania..."/>
                <Btn text="Dodaj"/>
            </form>
        </div>
    </header>
)