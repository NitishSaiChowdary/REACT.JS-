import DeleteTodo from './DeleteTodo';
import { useState, useContext } from 'react';
import Switch from "react-switch";
import TodoContex from '../services/TodoContex';

function Todo(props) {
    const [isShowModal, setIsShowModal] = useState(false);
    const { toggleCompletion } = useContext(TodoContex);

    const { todo } = props;
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-800">{todo.title}</h3>
            <p className="text-gray-600 mt-2">{todo.description}</p>
            <div className="mt-4 flex items-center justify-between border-t pt-4">
                <div className="flex items-center">
                    <Switch
                        checked={todo.isCompleted}
                        onChange={() => toggleCompletion(todo.id)}
                    />
                    <span
                        className="ml-3 text-sm"
                        style={{ color: todo.isCompleted ? 'green' : 'red' }}
                    >
                        {todo.isCompleted ? 'Completed' : 'Incomplete'}
                    </span>
                </div>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-full"
                    onClick={() => setIsShowModal(true)}
                >
                    Delete
                </button>
            </div>
            {isShowModal && <DeleteTodo setIsShowModal={setIsShowModal} todoId={todo.id} />}
        </div>
    )
}

export default Todo;