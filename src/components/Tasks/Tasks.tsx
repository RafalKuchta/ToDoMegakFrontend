import React, {useContext, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {SearchContext} from "../../context/search.context";

import { LoadingContext } from "../../context/loading.context";
import {TodoEntity} from 'types';
import './Tasks.css';


export const Tasks = () => {
    const {search, setSearch} = useContext(SearchContext);
    const {loading, setLoading} = useContext(LoadingContext);
    const [todos, setTodos] = useState<TodoEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/todo/search/${search}`);
            const data = await res.json();
            setTodos(data);
        })();
    }, [loading, search]);


    const setDelete = (id: string) => {
        setLoading(true);
            (async () => {
                await fetch(`http://localhost:3001/todo/${id}`,{
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id,
                    }),
                });
            })();
    };

    setLoading(false);

    return (
        <>
                {
                    todos.map(todo => (
                        <div key={todo.id} className="wrapper-to-do">
                            <div className="tasks-to-do">
                                <p>{todo.name}</p>
                                <div className="action">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        size="xs"
                                        className="icon-done"/>
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        className="icon-edit"/>
                                    <FontAwesomeIcon
                                        icon={faTrashCan}
                                        className="icon-trash"
                                        onClick={() => setDelete(todo.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }

        </>


    )
}