import httpClient from "../http-common";
let token=localStorage.getItem("token");
const Reg = (data) => {
    return httpClient.post("/user/register", data);
};
const Regadmin = (data) => {
    return httpClient.post("/user/register/admin",data, {    
        headers:{
            
            'Authorization': `Bearer ${token}`
         }
    });
};


export default  {Reg,Regadmin};