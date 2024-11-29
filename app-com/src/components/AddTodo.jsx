import { useForm } from 'react-hook-form';
import TodoContex from '../services/TodoContex';
import { useContext } from 'react';

function AddTodo() {
    const { register, handleSubmit } = useForm();
    const { insertTodo, setIsAddTodoVisible } = useContext(TodoContex);

    const addTodo = (data) => {
        insertTodo(data);
    };
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Add New Todo</h2>

                <form onSubmit={handleSubmit(addTodo)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Enter title"
                            {...register('title')}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Enter description"
                            {...register('description')}
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                            onClick={() => setIsAddTodoVisible(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Todo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default AddTodo;