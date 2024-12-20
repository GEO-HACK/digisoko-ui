import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { fetchCartItems, deleteCartItem } from "../../firebase/firebaseFunctions";
import { useAuth } from "../../context/AuthContext";

export default function Cart() {
  const { cart, setCart } = useCart();
  const { currentUser } = useAuth(); // Get the current user from Auth context
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Function to fetch cart items from Firestore
  const loadCartItems = async () => {
    if (currentUser) {
      try {
        const items = await fetchCartItems(currentUser.uid); // Fetch items from Firestore
        console.log("Fetched items:", items);
        setCart(items); // Update cart state
      } catch (error) {
        console.error("Error loading cart items:", error);
      }
    }
  };

  useEffect(() => {
    loadCartItems(); // Fetch cart items when component mounts
  }, [currentUser]); // Only re-fetch if currentUser changes

  // Delete an item from the cart
  const handleDeleteCartItem = async (indexToRemove, itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedCart = cart.filter((_, index) => index !== indexToRemove);
      setCart(updatedCart);

      try {
        await deleteCartItem(currentUser.uid, itemId); // Delete item in Firestore
        console.log(`Item with ID ${itemId} deleted successfully.`);
      } catch (error) {
        console.error("Error deleting item from cart:", error);
        alert("Failed to delete the item. Please try again.");
      }
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <Link to=".." className="text-blue-500 text-sm hover:underline">
        &larr; <span>Back to all products</span>
      </Link>
      <h2 className="text-2xl font-semibold my-4">Cart</h2>

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
                </div>
                <div>
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
              onClick={() => setShowPaymentModal(true)}
            >
              Order
            </button>
          </div>
        </>
      )}

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 sm:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Choose Payment Method</h2>
            <ul className="mb-4">
              <li>
                <button className="block w-full bg-blue-500 text-white text-sm px-4 py-2 rounded-md mb-2 hover:bg-blue-400">
                  Mpesa
                </button>
              </li>
              <li>
                <button className="block w-full bg-blue-500 text-white text-sm px-4 py-2 rounded-md mb-2 hover:bg-blue-400">
                  Card Payment
                </button>
              </li>
              <li>
                <button className="block w-full bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-400">
                  Other Payment Options
                </button>
              </li>
            </ul>
            <button
              className="bg-red-500 text-white text-sm px-4 py-2 rounded-md hover:bg-red-400"
              onClick={() => setShowPaymentModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
