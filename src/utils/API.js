import axios from "axios";


// eslint-disable-next-line import/no-anonymous-default-export 
//Ask Steve G if he found solution
export default {
    getRandomUsers: function() {
        return axios.get('https://randomuser.me/api/?results=40&nat=us&seed=abc');
    }
};