import { useSelector, useDispatch } from 'react-redux';
import Order from '../components/Order';
import { useState, useRef } from 'react';
import { filterOrders } from '../slices/OrdersSlice';

function Orders() {
    const { filteredData, isLoading, error } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    console.log(filteredData);
    const dateRef = useRef();

    const handleFilterByDate = () => {
        console.log(dateRef.current.value);
        dispatch(filterOrders({ selectedDate: dateRef.current.value }));
    }

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Order List</h1>

            <div className="flex mb-6 space-x-4">
                <input
                    type="date"
                    ref={dateRef}
                    className="border border-gray-300 p-2 rounded-lg"
                />
                <button
                    onClick={handleFilterByDate}
                    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Filter by Date
                </button>
            </div>
            {filteredData.map(order => (
                <Order order={order} key={order.id}/>
            ))}
        </div>

    )
}

export default Orders;