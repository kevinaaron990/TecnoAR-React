

let condicion = true ;


export  const promesaItemList = (time, task) =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(condicion) {
            resolve(task);
        }else {
            reject('Error')
        }
    
    }, time);})}

   

    //  export const promesaDetails = () =>{
    //  return new Promise ((resolve , reject) =>{
    //         setTimeout(() => {
    //            resolve(productos);
    //             reject('error')
    //         }, 2000);
    //      })
    // }

     
    //  export const promesaDetails = (id) =>{
    //     return new Promise ((resolve , reject) =>{
    //         setTimeout(() => {
    //             let articleFilter = productos.filter(e => e.id == id);
    //             if (articleFilter) {
    //                 resolve(articleFilter);
    //             } else {
    //                 reject("Err");
    //             }
    //         }, 1000);
    //     })
    // }

    