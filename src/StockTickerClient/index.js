export default class StockTickerClient {
    static async getProfile(symbol) {
        return fetch(`https://stocktickerwebapi.azurewebsites.net/api/profile/${symbol}`)
            .then(response => response.json());
    }

    static async searchCompanies(query) {
        return fetch(`https://stocktickerwebapi.azurewebsites.net/api/search?query=${query}`)
            .then(response => response.json());
    }
}