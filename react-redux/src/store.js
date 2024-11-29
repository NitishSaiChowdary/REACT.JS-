import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './slices/CounterSlice';
import ordersSliceReducer from './slices/OrdersSlice';

const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        orders: ordersSliceReducer
    }
});

export default store;