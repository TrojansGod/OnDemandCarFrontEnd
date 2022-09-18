import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header1 from "../component/Header1";
import getcurrentuser from "../service/authService";
import Deletecurrentuser from "..//service/authService";
import SearchTable from "./SearchTable"
let p= localStorage.getItem("username");

export const CostomerDetail = () => {
  const [faculty, setFaculty] = useState([]);

  const init = () => {
    
    
    getcurrentuser
      .getcurrentuser(p)
      .then((response) => {
        console.log("Printing faculty data", response.data);
        setFaculty(response.data);
        localStorage.setItem("NAME",response.data.firstName+" "+response.data.lastName);
        localStorage.setItem("1",response.data.emailId);
        localStorage.setItem("2",response.data.firstName);
        localStorage.setItem("3",response.data.lastName);
        localStorage.setItem("4",response.data.location);
        localStorage.setItem("5",response.data.car);
        localStorage.setItem("6",response.data.role);
        localStorage.setItem("7",response.data.image);
        window.location.href="/";
      })
      .catch((error) => {
        console.log("Something went wrong", error);
        window.location.href="/adash";

      });
  };
  useEffect(() => {
   
    init();
  }, []);

  // Remove
  // const handleDelete = (p) => {
  //   console.log("Printing id", p);
  //   Deletecurrentuser
  //     .Deletecurrentuser(p)
  //     .then((response) => {
  //       console.log("USER DELETED deleted successfully", response.data);
  //       window.location.href="/out";
  //       init();
  //     })
  //     .catch((error) => {
  //       console.log("Something went wrong", error);
  //     });
  // };


  return (
    <div>
    {/* <div className="container">
      <h3 style={{ color: 'white' }}>List of Faculty</h3>
      <hr />
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th> EMAIL</th>
              <th> FIRST Name</th>
              <th> LAST NAME</th>
              <th> LOCATION</th>
              <th> MODEL</th>
              <th> Role</th>
            </tr>
          </thead>
          <tbody id="table-text">
            
              <tr >   
                <td>{localStorage.getItem("1")}</td>
                <td>{localStorage.getItem("2")}</td>
                <td>{localStorage.getItem("3")}</td>
                <td>{localStorage.getItem("4")}</td>
                <td>{localStorage.getItem("5")}</td>
                <td>{localStorage.getItem("6")}</td>
                <td>
                <Link
                    className="btn btn-info"
                    to={`/update/${localStorage.getItem("1")}`}>
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(localStorage.getItem("1"));
                    }}
                  >
                    Delete
                  </button>
                  </td>
              </tr>
            
          </tbody>
        </table>
      </div>
                  </div> */}
    {init}
    </div>
  );
};


