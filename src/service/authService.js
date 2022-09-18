import httpClient from "../http-common";
let token=localStorage.getItem("token");
let username=localStorage.getItem("username");
const auth = (data) => {
    const p= httpClient.post("/authenticate", data);
    return p;
    
};
const getcurrentuser = (id) => {
    return httpClient.get(`/user/getemail/${id}`,{
        headers:{
            
           'Authorization': `Bearer ${token}`
        }
    });
  };

  const washerRegister = (data) => {
    return httpClient.post(`/user/washer`, data,{
      headers:{
          
         'Authorization': `Bearer ${token}`
      }
  });
  };
  const washerLog = (id) => {
    return httpClient.get(`/order/washer/order/${id}`);
  }
  const getcurrent = (id) => {
    return httpClient.get(`/user/getemail/${id}`,{
        headers:{
            
           'Authorization': `Bearer ${token}`
        }
    });
  };
  const getWasherByEmail = (id) =>{
    return httpClient.get(`/washer/getemail/${id}`);
  };
  const updateuser = (data) => {
    return httpClient.put(`/user/updateuser/${data.emailId}`, data,{
      headers:{
          
         'Authorization': `Bearer ${token}`
      }
  });
  };

  const getAllWasher = () =>{
    return httpClient.get(`/washer/getall`);
  };

  const getAllOrders = () =>{
    return httpClient.get(`/order/getall`);
  };
  const getcurrentorders = () =>{
    return httpClient.get(`/order/getemail/${username}`);
  };
  const removeWasher = (id) => {
    return httpClient.delete(`/user/deletewasher/${id}`,{
      headers:{
          
         'Authorization': `Bearer ${token}`
      }
  });
  };

  const Deletecurrentuser = (id) => {
    return httpClient.delete(`/user/deleteuser/${id}`,{
        headers:{
           'Authorization': `Bearer ${token}`
        }
    });
  };

  const getAllCustomer = () =>{
    return httpClient.get(`/user/getall`,{
      headers:{
          
         'Authorization': `Bearer ${token}`
      }
  });
  };
  
  const removeCustomer = (id) => {
    return httpClient.delete(`/user/deleteuser/${id}`,{
      headers:{
          
         'Authorization': `Bearer ${token}`
      }
  });
  };
  const order = (data) => {
    return httpClient.post(`/pgredirect`, data);
  };

  const Postorder = (data) => {
    return httpClient.post("/order/register", data);
  };
  // logout a user

const logout = () => {
  return localStorage.clear();
};


export default  {washerLog,getcurrentorders,  getAllOrders,washerRegister,auth,getcurrentuser,Deletecurrentuser,getAllCustomer,removeCustomer,logout,getAllWasher,removeWasher,updateuser,getcurrent,getWasherByEmail,Postorder};