import React, {SyntheticEvent, useContext} from 'react';
import './Header.css';
import {SearchContext} from "../../context/search.context";
import {AddForm} from "../Tasks/Add/AddForm";

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

            <AddForm />

        </header>
    );
};
