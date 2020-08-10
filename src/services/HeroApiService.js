import axios from "axios";

const host = process.env.API_HOST || "localhost";
const port = +process.env.API_PORT || 8080;
const url = `http://${host}:${port}/api/heroes`;
console.log("API Endpoint: " + url);

const Headers = { 'Content-Type': 'application/json' };

export class HeroApiService {
    
    // Query
    static list() {
        return axios.get(url, Headers)
    }

    // Read
    static get(id) {
        return axios.get(url + "/" + id, Headers);
    }

    // Search
    static search(term) {
        return axios.get(url + "?name=" + term, Headers);
    }

    // Create
    static post(hero) {
        return axios.post(url, hero, Headers);
    }
    
    // Update
    static put(hero) {
        return axios.put(url, hero, Headers);
    }

    // Delete
    static delete(id) {
        return axios.delete(url + "/" + id, Headers);
    }
}