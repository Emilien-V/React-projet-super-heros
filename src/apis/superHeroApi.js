import axios from 'axios';
import keys from '../secret';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://superheroapi.com'
});