import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        data: [
            {
                orderId: 101,
                customerName: "John Doe",
                deliveryAddress: "123 Main St, Cityville",
                items: [
                    { itemName: "Burger", quantity: 2, price: 5.99 },
                    { itemName: "Fries", quantity: 1, price: 2.99 },
                    { itemName: "Coke", quantity: 1, price: 1.99 },
                ],
                totalAmount: 16.96,
                orderStatus: "Delivered",
                deliveryTime: "2024-10-04T12:30:00Z",
                paymentMethod: "Credit Card",
            },
            {
                orderId: 102,
                customerName: "Jane Smith",
                deliveryAddress: "456 Oak St, Townsville",
                items: [
                    { itemName: "Pizza", quantity: 1, price: 12.99 },
                    { itemName: "Garlic Bread", quantity: 1, price: 3.99 },
                ],
                totalAmount: 16.98,
                orderStatus: "On the way",
                deliveryTime: "2024-10-03T13:00:00Z",
                paymentMethod: "Cash",
            },
            {
                orderId: 103,
                customerName: "Tom Johnson",
                deliveryAddress: "789 Pine St, Villagetown",
                items: [
                    { itemName: "Sushi Roll", quantity: 3, price: 8.99 },
                    { itemName: "Miso Soup", quantity: 2, price: 2.99 },
                ],
                totalAmount: 32.94,
                orderStatus: "Preparing",
                deliveryTime: "2024-10-02T13:30:00Z",
                paymentMethod: "PayPal",
            },
            {
                orderId: 104,
                customerName: "Alice Brown",
                deliveryAddress: "321 Elm St, Cityville",
                items: [
                    { itemName: "Chicken Wings", quantity: 2, price: 6.99 },
                    { itemName: "Salad", quantity: 1, price: 3.99 },
                ],
                totalAmount: 17.97,
                orderStatus: "Delivered",
                deliveryTime: "2024-10-01T14:00:00Z",
                paymentMethod: "Credit Card",
            },
            {
                orderId: 105,
                customerName: "Bob Martin",
                deliveryAddress: "654 Willow St, Townsville",
                items: [
                    { itemName: "Tacos", quantity: 3, price: 4.99 },
                    { itemName: "Churros", quantity: 1, price: 2.99 },
                ],
                totalAmount: 17.96,
                orderStatus: "On the way",
                deliveryTime: "2024-10-04T14:30:00Z",
                paymentMethod: "Cash",
            },
            {
                orderId: 106,
                customerName: "Sara White",
                deliveryAddress: "789 Birch St, Villagetown",
                items: [
                    { itemName: "Spaghetti", quantity: 1, price: 9.99 },
                    { itemName: "Garlic Bread", quantity: 1, price: 2.99 },
                ],
                totalAmount: 12.98,
                orderStatus: "Preparing",
                deliveryTime: "2024-10-04T15:00:00Z",
                paymentMethod: "PayPal",
            },
            {
                orderId: 107,
                customerName: "Tommy Lee",
                deliveryAddress: "111 Maple St, Cityville",
                items: [
                    { itemName: "Ramen", quantity: 2, price: 8.99 },
                    { itemName: "Tempura", quantity: 1, price: 4.99 },
                ],
                totalAmount: 22.97,
                orderStatus: "Delivered",
                deliveryTime: "2024-10-04T15:30:00Z",
                paymentMethod: "Credit Card",
            },
            {
                orderId: 108,
                customerName: "Emma Green",
                deliveryAddress: "222 Cedar St, Townsville",
                items: [
                    { itemName: "Burrito", quantity: 1, price: 7.99 },
                    { itemName: "Nachos", quantity: 1, price: 5.99 },
                ],
                totalAmount: 13.98,
                orderStatus: "On the way",
                deliveryTime: "2024-10-04T16:00:00Z",
                paymentMethod: "Cash",
            },
            {
                orderId: 109,
                customerName: "Jack Brown",
                deliveryAddress: "333 Spruce St, Villagetown",
                items: [
                    { itemName: "Pho", quantity: 1, price: 10.99 },
                    { itemName: "Spring Rolls", quantity: 1, price: 4.99 },
                ],
                totalAmount: 15.98,
                orderStatus: "Preparing",
                deliveryTime: "2024-10-04T16:30:00Z",
                paymentMethod: "PayPal",
            },
            {
                orderId: 110,
                customerName: "Olivia Johnson",
                deliveryAddress: "444 Oak St, Cityville",
                items: [
                    { itemName: "Salmon Sushi", quantity: 3, price: 12.99 },
                    { itemName: "Green Tea", quantity: 1, price: 2.99 },
                ],
                totalAmount: 41.96,
                orderStatus: "Delivered",
                deliveryTime: "2024-10-04T17:00:00Z",
                paymentMethod: "Credit Card",
            },
        ],
        filteredData: [
            {
                orderId: 101,
                customerName: "John Doe",
                deliveryAddress: "123 Main St, Cityville",
                items: [
                    { itemName: "Burger", quantity: 2, price: 5.99 },
                    { itemName: "Fries", quantity: 1, price: 2.99 },
                    { itemName: "Coke", quantity: 1, price: 1.99 },
                ],
                totalAmount: 16.96,
                orderStatus: "Delivered",
                deliveryTime: "2024-10-04T12:30:00Z",
                paymentMethod: "Credit Card",
            },
            {
                orderId: 102,
                customerName: "Jane Smith",
                deliveryAddress: "456 Oak St, Townsville",
                items: [
                    { itemName: "Pizza", quantity: 1, price: 12.99 },
                    { itemName: "Garlic Bread", quantity: 1, price: 3.99 },
                ],
                totalAmount: 16.98,
                orderStatus: "On the way",
                deliveryTime: "2024-10-03T13:00:00Z",
                paymentMethod: "Cash",
            },
            {
                orderId: 103,
                customerName: "Tom Johnson",
                deliveryAddress: "789 Pine St, Villagetown",
                items: [
                    { itemName: "Sushi Roll", quantity: 3, price: 8.99 },
                    { itemName: "Miso Soup", quantity: 2, price: 2.99 },
                ],
                totalAmount: 32.94,
                orderStatus: "Preparing",
                deliveryTime: "2024-10-02T13:30:00Z",
                paymentMethod: "PayPal",
            },
            {
                orderId: 104,
                customerName: "Alice Brown",
                deliveryAddress: "321 Elm St, Cityville",
                items: [
                    { itemName: "Chicken Wings", quantity: 2, price: 6.99 },
                    { itemName: "Salad", quantity: 1, price: 3.99 },
                ],
                totalAmount: 17.97,
                orderStatus: "Delivered",
                deliveryTime: "2024-10-01T14:00:00Z",
                paymentMethod: "Credit Card",
            },
            {
                orderId: 105,
                customerName: "Bob Martin",
                deliveryAddress: "654 Willow St, Townsville",
                items: [
                    { itemName: "Tacos", quantity: 3, price: 4.99 },
                    { itemName: "Churros", quantity: 1, price: 2.99 },
                ],
                totalAmount: 17.96,
                orderStatus: "On the way",
                deliveryTime: "2024-10-04T14:30:00Z",
                paymentMethod: "Cash",
            },
            {
                orderId: 106,
                customerName: "Sara White",
                deliveryAddress: "789 Birch St, Villagetown",
                items: [
                    { itemName: "Spaghetti", quantity: 1, price: 9.99 },
                    { itemName: "Garlic Bread", quantity: 1, price: 2.99 },
                ],
                totalAmount: 12.98,
                orderStatus: "Preparing",
                deliveryTime: "2024-10-04T15:00:00Z",
                paymentMethod: "PayPal",
            },
            {
                orderId: 107,
                customerName: "Tommy Lee",
                deliveryAddress: "111 Maple St, Cityville",
                items: [
                    { itemName: "Ramen", quantity: 2, price: 8.99 },
                    { itemName: "Tempura", quantity: 1, price: 4.99 },
                ],
                totalAmount: 22.97,
                orderStatus: "Delivered",
                deliveryTime: "2024-10-04T15:30:00Z",
                paymentMethod: "Credit Card",
            },
            {
                orderId: 108,
                customerName: "Emma Green",
                deliveryAddress: "222 Cedar St, Townsville",
                items: [
                    { itemName: "Burrito", quantity: 1, price: 7.99 },
                    { itemName: "Nachos", quantity: 1, price: 5.99 },
                ],
                totalAmount: 13.98,
                orderStatus: "On the way",
                deliveryTime: "2024-10-04T16:00:00Z",
                paymentMethod: "Cash",
            },
            {
                orderId: 109,
                customerName: "Jack Brown",
                deliveryAddress: "333 Spruce St, Villagetown",
                items: [
                    { itemName: "Pho", quantity: 1, price: 10.99 },
                    { itemName: "Spring Rolls", quantity: 1, price: 4.99 },
                ],
                totalAmount: 15.98,
                orderStatus: "Preparing",
                deliveryTime: "2024-10-04T16:30:00Z",
                paymentMethod: "PayPal",
            },
            {
                orderId: 110,
                customerName: "Olivia Johnson",
                deliveryAddress: "444 Oak St, Cityville",
                items: [
                    { itemName: "Salmon Sushi", quantity: 3, price: 12.99 },
                    { itemName: "Green Tea", quantity: 1, price: 2.99 },
                ],
                totalAmount: 41.96,
                orderStatus: "Delivered",
                deliveryTime: "2024-10-04T17:00:00Z",
                paymentMethod: "Credit Card",
            },
        ],
        error: null,
        isLoading: false
    },
    reducers: {
        deleteOrder: (state, action) => {
            console.log(action);
            return { ...state, filteredData: state.data.filter(order => order.orderId !== action.payload.orderId) };
        },
        filterOrders: (state, action) => {
            const selectedDateObj = new Date(action.payload.selectedDate);

            const filteredOrders = state.data.filter(order => {
                const deliveryDateObj = new Date(order.deliveryTime);
                if (selectedDateObj.getDate() === deliveryDateObj.getDate() && selectedDateObj.getMonth() === deliveryDateObj.getMonth() && selectedDateObj.getFullYear() === deliveryDateObj.getFullYear()) {
                    return order;
                }
            });
            return { ...state, filteredData: filteredOrders };
        }
    }
});

export const { deleteOrder, filterOrders } = ordersSlice.actions;

export default ordersSlice.reducer;