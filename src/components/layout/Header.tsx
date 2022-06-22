import React, {SyntheticEvent, useContext, useState} from 'react';
import { Btn } from '../common/Btn';
import './Header.css';
import {SearchContext} from "../../context/search.context";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    // const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(search)

    }

    return (
        <header>
            <h1>To Do Lista
                <form onSubmit={setSearchFromLocalState}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Szukaj..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}/>
                </form>
            </h1>

            <div className="wrapper">
                <form className="add-task">
                    <input type="text" placeholder="Nazwa zadania..."/>
                    <Btn text="Dodaj"/>
                </form>
            </div>

        </header>
    );
};
