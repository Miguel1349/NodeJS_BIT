let done = true

const isItDoneYet = new Promise((resolve, reject) => {// declara una nueva promesa
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {// Si la promesa esta resuelta 
      console.log(ok)
    })
    .catch(err => {// Si la promesa no esta resuelta
      console.error(err)
    })
}

checkIfItsDone()