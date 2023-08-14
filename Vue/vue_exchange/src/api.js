const url = 'https://api.coincap.io/v2'

//para obetner las 20 principales criptomonedas
function getAssets(){
    return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

//para obtener una coin en particular
function getAsset(coin){
    return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data)
}

//para obtener el historial de la coin
function getAssetHistory(coin) {
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()

    return fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
    .then(res => res.json())
    .then(res => res.data)
}

//recibe la moneda
function getMarkets(coin) {
    return fetch(`${url}/assets/${coin}/markets?limit=7`)
    .then(res => res.json())
    .then(res => res.data)
}

function getExchange(id) {
    return fetch(`${url}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}

//exportar funcion
export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange
}