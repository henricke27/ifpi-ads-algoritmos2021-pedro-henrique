function nova_matriz_quadrada(n){
    const matriz = Array(n)
    
    for (let i = 0; i < n; i++){
        matriz[i] = Array(n)
    }

    return matriz
}

module.exports = {
    nova_matriz_quadrada
}