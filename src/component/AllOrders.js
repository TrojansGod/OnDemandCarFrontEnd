import React, { useEffect, useState } from 'react';
import getAllOrders from "../service/authService";
import { DataGrid } from '@mui/x-data-grid';
import Link from '@mui/material/Link';

export default function AllOrders() {
    const [washer, setWasher] = useState([]);
    const [emailId, setEmailId] = useState("");

     const placeOrder = () =>{
      return (<Link className="btn btn-danger ml-2" href='/order' style={{textDecoration: "none",color:"white"}}>
          Place order
       </Link>)
  };



    const columns = [
        { field: 'orderId', headerName: 'OrderId', width:300 },
        { field: 'washerId', headerName: 'WasherId', width: 150 },
        { field: 'emailId', headerName: 'EmailId', width: 100 },
        { field: 'firstName', headerName: 'UserFName', width: 100 },
        { field: 'lastname', headerName: 'UserLName', width: 100 },
        { field: 'timeDate', headerName: 'SLOT', width: 100 },
        { field: 'washerName', headerName: 'WasherName', width: 100 },
        { field: 'washerLocation', headerName: 'LOCATION', width: 100 },
        { field: 'pack', headerName: 'PACKAGE', width: 100 },
        {field: 'cost', headerName: 'PRICE', width: 100},
        {field: 'success', headerName: 'STATUS', width: 160}
      ];

    const init = () => {
        getAllOrders
          .getAllOrders()
          .then((response) => {
            console.log("Printing customer data", response.data);
            setWasher(response.data);
            console.log(washer);
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      };
    
      useEffect(() => {
        init();
      }, []);
    

  return (
    <div style={{ height: "400px", width: '100%',textColor:"white" }}>
      <DataGrid
        rows={washer}
        columns={columns}
        pageSize={5}
        getRowId ={(row) => row.emailId}
        rowsPerPageOptions={[1]}
        onSelectionModelChange={(ids) => {
            const selectedIDs = ids;
            setEmailId(selectedIDs)
            localStorage.setItem("washerEmailId",emailId);}}
        // disableMultipleSelection={true}
        // checkboxSelection
        style={{background:"white"}}
      />
      
      {console.log(emailId)}
    </div>
  );
}