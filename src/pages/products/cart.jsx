import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { fetchCartItems, deleteCartItem } from "../../firebase/firebaseFunctions";
import { useAuth } from "../../context/AuthContext";

const OrderConfirmation = ({ orderDetails, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Confirm Your Order</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Order Summary:</h3>
          <ul className="mb-4">
            {orderDetails.cart_items.map((item, index) => (
              <li key={index} className="text-sm">
                {item.name} - {item.quantity} x ${item.price}
              </li>
            ))}
          </ul>
          <div className="font-bold text-sm">
            <p>Total: ${orderDetails.total.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Cart() {
  const { cart, setCart } = useCart();
  const { currentUser } = useAuth();
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});

  const loadCartItems = async () => {
    if (currentUser) {
      try {
        const items = await fetchCartItems(currentUser.uid);
        const updatedItems = items.map((item) => ({
          ...item,
          showStatus: false, // Initially hide the status
        }));
        setCart(updatedItems);
      } catch (error) {
        console.error("Error loading cart items:", error);
      }
    }
  };

  useEffect(() => {
    loadCartItems();
  }, [currentUser]);

  const handleDeleteCartItem = async (indexToRemove, itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedCart = cart.filter((_, index) => index !== indexToRemove);
      setCart(updatedCart);

      try {
        await deleteCartItem(currentUser.uid, itemId);
      } catch (error) {
        console.error("Error deleting item from cart:", error);
      }
    }
  };

  const handleOrder = () => {
    if (cart.length === 0) {
      setMessage("Your cart is empty!");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const orderDetails = {
      customer_name: currentUser.displayName || "Unknown Customer",
      cart_items: cart.map((item) => ({
        name: item.itemName,
        quantity: item.quantity || 1,
        price: item.price,
      })),
      total,
    };

    setOrderDetails(orderDetails);
    setShowConfirmation(true);
  };

  const confirmOrder = () => {
    const updatedCart = cart.map((item) => ({
      ...item,
      showStatus: true, // Show status after ordering
    }));

    setCart(updatedCart);
    setShowConfirmation(false);
    setMessage("Successfully ordered the items!");
  };

  const cancelOrder = () => {
    setShowConfirmation(false);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <Link to=".." className="text-blue-500 text-sm hover:underline">
        &larr; <span>Back to all products</span>
      </Link>
      <h2 className="text-2xl font-semibold my-4">Cart</h2>

      {message && (
        <div className="bg-green-100 text-green-700 p-4 rounded-md my-4">
          {message}
        </div>
      )}

      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={item.id} className="flex flex-col gap-2 p-4 items-center mx-auto">
              <div className="flex justify-start items-center gap-5 w-4/5 bg-white rounded-lg p-5 shadow-md">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-24 h-auto rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.itemName}</h3>
                  <p className="text-gray-700">${item.price}</p>
                  {item.showStatus && (
                    <p className="text-sm text-green-600">Status: {item.status}</p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => handleDeleteCartItem(index, item.id)}>
                    <BsTrash className="text-red-500 hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="w-4/5 mx-auto mt-8 p-5 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</h3>
            <button
              className="mt-4 bg-green-500 text-white text-sm px-4 py-2 rounded-md transition-transform hover:bg-green-400 hover:scale-105 active:bg-green-600"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}

      {showConfirmation && (
        <OrderConfirmation
          orderDetails={orderDetails}
          onConfirm={confirmOrder}
          onCancel={cancelOrder}
        />
      )}
    </div>
  );
}
