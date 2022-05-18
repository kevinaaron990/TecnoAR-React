import productos from "./productos";





// export  const promesaItemList = (time, task) =>{
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if(condicion) {
//             resolve(task);
//         }else {
//             reject('Error')
//         }
    
//     }, time);})}

   
export const promesaItemList = (id) => {
    return new Promise((res, rej) =>{
        const productosFilter = productos.filter((producto) => producto.category === id);
        setTimeout(() => {
            id ? res(productosFilter) : res(productos)
        },1000)
    })
}


export const promesaDetails = (id) => {
    return new Promise((res, rej) => {
        const productosFind = productos.find
        ((producto) => producto.id === Number(id));

        setTimeout(() =>{
            res(productosFind);
        },1);
    });
};