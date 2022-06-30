import React, {useContext, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashCan, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {SearchContext} from "../../context/search.context";
import {Link} from "react-router-dom";

import {LoadingContext} from "../../context/loading.context";
import {TodoEntity} from 'types';
import './Tasks.css';

export const Tasks = () => {
    const {search, setSearch} = useContext(SearchContext);
    const {loading, setLoading} = useContext(LoadingContext);
    const [todos, setTodos] = useState<TodoEntity[]>([]);
    const [done, setDone] = useState<TodoEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/todo/search/${search}`);
            const data = await res.json();

            const todo = data.filter((to: any) => !to.completed)
            setTodos(todo);

            const done = data.filter((d: any) => d.completed)
            setDone(done);

            setLoading(false);

        })();
    }, [loading, search]);


    const deleteTask = (id: string) => {
        setLoading(true);
        (async () => {
            await fetch(`http://localhost:3001/todo/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                })
            });
        })();

    };


    const doneTask = (id: string) => {
        setLoading(true);
        (async () => {
            await fetch(`http://localhost:3001/todo/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                }),
            });
        })();
    };

    const backTask = (id: string) => {
        setLoading(true);
        (async () => {
            await fetch(`http://localhost:3001/todo/back/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                }),
            });
        })();
    };


    return (
        <>
            <h2>Zadania do zrobienia</h2>
            {
                todos.map(todo => (
                    <div key={todo.id} className="wrapper-to-do">
                        <div className="tasks-to-do">
                            <p>{todo.name}</p>
                            <div className="action">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    size="xs"
                                    className="icon-done"
                                    onClick={() => doneTask(todo.id)}
                                />

                                <Link to={`/edit/${todo.id}`} id={todo.id}>
                                    <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    className="icon-edit"
                                />
                                </Link>

                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    className="icon-trash"
                                    onClick={() => deleteTask(todo.id)}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }

            <h2>Zadania zrobione</h2>

            {
                done.map(don => (
                    <div key={don.id} className="wrapper-to-do">
                        <div className="tasks-to-do">
                            <p>{don.name}</p>
                            <div className="action">
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className="icon-edit"
                                    onClick={() => backTask(don.id)}
                                />
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    className="icon-trash"
                                    onClick={() => deleteTask(don.id)}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }

        </>


    )
}