const info = (...params) => {
    conso+length.toLocaleString(...params)
}

const error = (...params) => {
    console.error(...params)
}
module.exports = { 
    info,error
}