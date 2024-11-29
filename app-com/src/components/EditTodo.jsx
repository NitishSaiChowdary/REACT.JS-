import TodoContex from './services/TodoContex';
import { useState, useContext } from "react";
import DeleteTodo from './DeleteTodo';

function EditTodo(props) {
    const { setIsEditModal, todo } = props;
    const { updateTodo } = useContext(TodoContex); // Using context to update the todo
    const [updatedTodo, setUpdatedTodo] = useState({
        title: todo.title,
        description: todo.description,
        isCompleted: todo.isCompleted,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTodo({ ...updatedTodo, [name]: value });
    };

    const handleStatusChange = (e) => {
        setUpdatedTodo({ ...updatedTodo, isCompleted: e.target.checked });
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-1/3 shadow-lg">
                <h2 className="text-lg font-bold mb-4">Edit Todo</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        updateTodo(todo.id, updatedTodo); // Call updateTodo function from context
                        setIsEditModal(false);
                    }}
                >
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={updatedTodo.title}
                            onChange={handleInputChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Description</label>
                        <textarea
                            name="description"
                            value={updatedTodo.description}
                            onChange={handleInputChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Completed</label>
                        <input
                            type="checkbox"
                            checked={updatedTodo.isCompleted}
                            onChange={handleStatusChange}
                        />{' '}
                        Completed
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                            onClick={() => setIsEditModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditTodo;
