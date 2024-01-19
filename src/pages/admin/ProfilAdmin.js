import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./adminLayout/AdminLayout";

function Admin() {
  const [adminData, setAdminData] = useState([]);
  const id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      console.log('eeeee',id);
      try {
        const response = await axios.get(`https://ecommecegmc.onrender.com/admin/${id}`);
        setAdminData(response.data);
        console.log(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AdminLayout>
      {adminData && (
        <div className="row Pgutters-sm">
          <div className="col-md-4 mb-3">
            <div className="profil-cdard">
              <div className="Pcard-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4> Name : {adminData.name}</h4>
                    <p className="text-secondary mb-1">My Profile</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card Pmb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {adminData.name}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {adminData.email}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {adminData.phone}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {adminData.address}
                      </div>
                    </div>
                    <hr />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default Admin;
