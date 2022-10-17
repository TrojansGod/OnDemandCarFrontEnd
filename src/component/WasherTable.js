import React, { useEffect, useState } from 'react';
import getAllWasher from "../service/authService";
import removeWasher from "../service/authService";
import { DataGrid } from '@mui/x-data-grid';
import Link from '@mui/material/Link';
let q=true;
let p=localStorage.getItem("6");
if(p=="admin")
{
  q=false;
}
export default function WasherTable() {
    const [washer, setWasher] = useState([]);
    const [emailId, setEmailId] = useState("");
     const placeOrder = () =>{
      return (<Link className="btn btn-danger ml-2" href='/order' style={{textDecoration: "none",color:"white"}}>
          Place order
       </Link>)
  };

  const handleDelete = (emailId) => {
    console.log("Printing emailId", emailId);
    removeWasher
      .removeWasher(emailId)
      .then((response) => {
        console.log("course deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };




  const btnDelete = () => {
    // return ()
    return (
      <button className="btn btn-danger ml-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Delete
        </button>
    )
  };

    const columns = [
        { field: 'emailId', headerName: 'EmailId', width: 150 },
        { field: 'washerName', headerName: 'Washer name', width: 100 }, 
        { field: 'line1', headerName: 'Line1', width: 100 },
        { field: 'city', headerName: 'City', width: 100 },
        { field: 'state', headerName: 'State', width: 100 },
        { field: 'pincode', headerName: 'Pincode', width: 100 },
        { field: 'landmark', headerName: 'Landmark', width: 100 },
        { field: 'phoneNo', headerName: 'phoneNo', width: 100 },
        {field: 'delete', headerName: 'Delete', width: 100, renderCell: btnDelete, hide:q },
        {field: 'placeOrder', headerName: 'Place', width: 160, renderCell: placeOrder}
      ];

    const init = () => {
        getAllWasher
          .getAllWasher()
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
    <div style={{ height: "400px", width: '100%',color:"white" }}>
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
      <div className="modal fade" data-bs-backdrop="false" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-dark" id="exampleModalLabel">Confirmation</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-dark">
                  Are you sure want to delete ?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary " data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                    onClick={() => { handleDelete(emailId);}}
                  >Confirm</button>
                </div>
              </div>
            </div>
          </div>
      
      {console.log(emailId)}
    </div>
  );
}