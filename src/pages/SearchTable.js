import React, { useEffect, useState } from 'react';
import getAllCustomer from "../service/authService";
import removeCustomer from "../service/authService";
import { DataGrid } from '@mui/x-data-grid';

export default function SearchTable() {
    const [customer, setCustomer] = useState([]);
    const [emailId, setEmailId] = useState("");

    const handleDelete = (emailId) => {
        console.log("Printing emailId", emailId);
        removeCustomer
          .removeCustomer(emailId)
          .then((response) => {
            console.log("course deleted successfully", response.data);
            init();
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      };

    const btnUpdate = () =>{
        return (<button className="btn btn-danger ml-2" onClick={() => { handleDelete(emailId);}}>
            Delete
          </button>)
    };

    const columns = [
        { field: 'emailId', headerName: 'EmailId', width: 200 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'location', headerName: 'Location', width: 130 },
        { field: 'car', headerName: 'Car', width: 130 },
        {field: 'delete', headerName: 'Delete', width: 150, renderCell: btnUpdate,}
      ];

    const init = () => {
        getAllCustomer
          .getAllCustomer()
          .then((response) => {
            console.log("Printing customer data", response.data);
            setCustomer(response.data);
            console.log(customer);
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      };
    
      useEffect(() => {
        init();
      }, []);
    

  return (
    <div style={{ height: "400px", width: '90%',textColor:"white" }}>
      <DataGrid
        rows={customer}
        columns={columns}
        pageSize={5}
        getRowId ={(row) => row.emailId}
        rowsPerPageOptions={[1]}
        onSelectionModelChange={(ids) => {
            const selectedIDs = ids;
            setEmailId(selectedIDs)}}
        // disableMultipleSelection={true}
        // checkboxSelection
        style={{background:"white"}}
      />
      {console.log(emailId)}
    </div>
  );
}