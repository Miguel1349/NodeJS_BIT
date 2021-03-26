const { async } = require("rxjs")

const doSomethingAsync = () => {// Se define una promesa
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }

const doSomething = async () => {// se define async la función para poder hacer uso de await
    console.log(await doSomethingAsync());// espera a que se resuelva la promesa
}

console.log('Before');
doSomething();
console.log('After');


// Asincronia encadenada
const promiseToDoSomething = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 10000)
    })
  }
  
  const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + '\nand I watched'
  }
  
  const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + '\nand I watched as well'
  }
  
  watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
  })