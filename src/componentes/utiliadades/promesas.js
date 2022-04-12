import { producto } from "./productos";

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

   

    export const promesaDetails = () =>{
    return new Promise ((resolve , reject) =>{
            setTimeout(() => {
               resolve(producto);
                reject('error')
            }, 2000);
        })
    }
