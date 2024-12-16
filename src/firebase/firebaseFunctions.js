import { doc, setDoc, collection , getDocs, QuerySnapshot,deleteDoc } from "firebase/firestore"
import { db } from "./firebase"//this is a s firestore instance


export const addToCart = async (userId, product) => {
    try{
        const productRef = doc(db, "users", userId, "cartItems",String( product.id))
        await setDoc(productRef ,{
            itemName:product.title,
            price: product.price,
            imageSrc:product.imageSrc,
            quantity:product.quantity || 1,
            status: "pending"
        });
        console.log("Item added to cart:" ,product.title );

    }catch (error){
        console.error("Error adding item to cart", error);

    }
};

//fetching the cart items from the logged in user
export const fetchCartItems = async(userId) => {
    const cartItems = [];
    try {
        const QuerySnapshot = await getDocs(collection(db,"users", userId, "cartItems"));
        QuerySnapshot.forEach((doc) => [
            cartItems.push({id : doc.id, ...doc.data() })
        ])
    
    }
    catch (error) {
        console.error("Error fetching cart items:", error)

    }
    return cartItems;
}

export const deleteCartItem = async (userId, itemId) => {
    try {
      const itemDocRef = doc(db, "users", userId, "cartItems", itemId);
      await deleteDoc(itemDocRef);
      console.log("Item deleted successfully:", itemId);
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };