import React, {useState} from 'react';

import { Header } from './components/layout/Header';
import { Tasks } from './components/Tasks/Tasks';
import {DoneTasks} from "./components/Done/DoneTasks";
import { SearchContext } from './context/search.context';

export const App = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <Header />
                <Tasks />
                <DoneTasks />
            </SearchContext.Provider>
        </>
    );
}
