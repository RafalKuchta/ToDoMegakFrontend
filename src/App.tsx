import React, {useState} from 'react';

import { Header } from './components/layout/Header';
import { Tasks } from './components/Tasks/Tasks';
import {DoneTasks} from "./components/Tasks/Done/DoneTasks";
import { SearchContext } from './context/search.context';
import { LoadingContext } from './context/loading.context';

export const App = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <LoadingContext.Provider value={{loading, setLoading}}>
                    <Header />
                    <Tasks />
                    <DoneTasks />
                </LoadingContext.Provider>
            </SearchContext.Provider>
        </>
    );
}
