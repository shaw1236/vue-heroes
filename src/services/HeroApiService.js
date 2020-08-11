import axios from "axios";

import {MessageService} from './MessageService';

const host = process.env.API_HOST || "localhost";
const port = +process.env.API_PORT || 8080;
const url = `http://${host}:${port}/api/heroes`;
console.log("API Endpoint: " + url);

const Headers = { 'Content-Type': 'application/json' };

export class HeroApiService {
    
    /** Log a HeroService message with the MessageService */
    static log(message) {
        MessageService.add(`HeroService: ${message}`); 
    }

    // Query
    static list() {
        HeroApiService.log('fetched heroes');
        return axios.get(url, Headers);
    }

    // Read
    static get(id) {
        HeroApiService.log(`fetched hero id=${id}`);
        return axios.get(url + "/" + id, Headers);
    }

    // Search
    static search(term) {
        HeroApiService.log(`Search heroes matching "${term}"`);
        return axios.get(url + "?name=" + term, Headers);
    }

    // Create
    static post(hero) {
        HeroApiService.log(`added hero w/ id=${newHero.id}`);
        return axios.post(url, hero, Headers);
    }
    
    // Update
    static put(hero) {
        HeroApiService.log(`updated hero id=${hero.id}`);
        return axios.put(url, hero, Headers);
    }

    // Delete
    static delete(id) {
        HeroApiService.log(`deleted hero id=${id}`);
        return axios.delete(url + "/" + id, Headers);
    }
}