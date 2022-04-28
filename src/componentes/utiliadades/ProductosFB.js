import {getDocs, getFirestore, query, where, collection} from "firebase/firestore";

export const getProducts = () => {
    const db = getFirestore();
    const productos = collection(db, "productos");

    return getDocs(productos)
}

export const getProductsCategory = (id) => {
    const db = getFirestore();
    const productos = collection(db, "productos");
    const q = query(productos, where("category", "==", id));
    
    return getDocs(q);
}
