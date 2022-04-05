let condicion = true ;


const promesas = (time, task) =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(condicion) {
            resolve(task);
        }else {
            reject('Error')
        }
    
    }, time);})}

    export default promesas;