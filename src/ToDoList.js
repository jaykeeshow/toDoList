import React, { Component, useState } from "react";
const ToDoList = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Learn React",
            done: false,
        },
        {
            id: 2,
            name: "Go cycling",
            done: true,
        },
    ]);
    const [item, setItem] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: items.length + 1,
            name: item,
            done: false,
        };
        setItems((prevItems) => [...prevItems, newItem]);
    };
    const handleToggle = (id) => {
        const itemsCopy = [...items];
        itemsCopy.forEach((item) => {
            if (item.id === id) {
                item.done = !item.done;
            }
        });
        setItems(itemsCopy);
    };
    return (
        <div className="toDoList">
            <form className="header" onSubmit={handleSubmit}>
                <h2>My list of to-do things</h2>
                <input
                    type="text"
                    placeholder="for example do laundry...."
                    onChange={(e) => setItem(e.target.value)}
                />
                <button className="btn-add">Add</button>
            </form>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={item.done ? "done" : ""}
                        onClick={() => handleToggle(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ToDoList;

