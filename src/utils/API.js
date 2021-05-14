import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=25&nat=fr&seed=foobar&exc=login,registered";

//eslint-disable-next-line import/no-anonymous-default-export 
//Ask Steve G if he found solution

const exportDefault = {
    getRandomUsers: function() {
        return axios.get(BASEURL);
    },
}

export default exportDefault