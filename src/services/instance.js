import axios from "axios";

const baseURL="http://localhost:3001/api/v1"

const instance=axios.create({
     baseURL,
     timeout:3000,
     headers:{
      'content-type':'application/json',
     },
     withCredentials:true,
});

export default instance;