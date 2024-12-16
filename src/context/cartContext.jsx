import React, { createContext, useState, useContext, useEffect } from 'react';
import { addToCart as addToFireStore, fetchCartItems } from '../firebase/firebaseFunctions.js';
import { useAuth } from '../context/AuthContext';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const { currentUser } = useAuth(); // Get the current user from AuthContext
    const [cart, setCart] = useState([]);

    // Function to add item to cart
    const addToCart = async(product) => {
        console.log("user state when adding to cart", currentUser);
        if (currentUser) {
            await addToFireStore(currentUser.uid, product);
            setCart((prevCart) => [...prevCart, product]);
            console.log("added to cart", product);
        } else {
            console.error("No user is logged in.");
        }
    };

    // Function to load cart items from Firestore
    const loadCartItems = async () => {
        if (currentUser) {
            const items = await fetchCartItems(currentUser.uid); // Fetch cart items from Firestore
            setCart(items); // Set the cart state with fetched items
        }
    };

    // useEffect to load cart items when user changes
    useEffect(() => {
        loadCartItems();
    }, [currentUser]); // Re-run when currentUser changes

    return (
        <CartContext.Provider value={{ cart, addToCart,setCart }}>
            {children}
        </CartContext.Provider>
    );
}
