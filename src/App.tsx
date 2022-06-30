import React, {useState} from 'react';

import { Header } from './components/layout/Header';
import { Tasks } from './components/Tasks/Tasks';
import { SearchContext } from './context/search.context';
import { LoadingContext } from './context/loading.context';
import { Routes, Route } from 'react-router-dom';
import {EditTask} from "./components/Tasks/Edit/EditTask";

export const App = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <LoadingContext.Provider value={{loading, setLoading}}>

                    <Routes>

                        <Route path="/" element={
                            <>
                            <Header />
                            <Tasks />
                            </>
                        }/>
                        <Route path="/edit/:id" element={<EditTask />}/>

                    </Routes>
                </LoadingContext.Provider>
            </SearchContext.Provider>
        </>
    );
}
