import { useDispatch } from "react-redux";
import { deleteOrder } from "../slices/OrdersSlice";

function Order(props) {
    const { order } = props;
    const dispatch = useDispatch();

    return (
        <div key={order.orderId} className="bg-white shadow-md rounded-lg mb-6 p-6 relative">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">{order.customerName}</h2>
              <p className="text-gray-500">{order.deliveryAddress}</p>
            </div>
            {/* Delete Icon */}
            <button
              onClick={() => dispatch(deleteOrder({ orderId: order.orderId }))}
              className="text-red-500 hover:text-red-700 border px-2 py-1 border-red-500"
            >
              Delete
            </button>
          </div>
          <div className="text-gray-600">
            <p><strong>Items:</strong></p>
            <ul className="list-disc pl-5">
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.itemName} (x{item.quantity}) - ${item.price}
                </li>
              ))}
            </ul>
            <p className="mt-2"><strong>Total Amount:</strong> ${order.totalAmount}</p>
            <p><strong>Status:</strong> {order.orderStatus}</p>
            <p><strong>Delivery Time:</strong> {new Date(order.deliveryTime).toLocaleString()}</p>
            <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          </div>
        </div>
    )
}

export default Order;

