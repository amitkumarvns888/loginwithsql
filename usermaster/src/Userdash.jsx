import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'
const Userdash = () => {
    const [userData, setUserData] = useState([]);
    const navigate=useNavigate()

    const fetchAllUser = async () => {
        const res = await axios.get("http://localhost:4000/loginalldata");
        console.log(res);
        setUserData(res.data);

    };
    useEffect(() => {
        fetchAllUser();
    }, []);


    const bacbtn=()=>{
       navigate('/')
    }
  return (
    <div>
          <h2>User All Data</h2>
          <table>
              <thead>
                  <tr className='head'>
                      <th>ID</th>
                      <th>Username</th>
                      <th>UserEmail</th>
                      <th>UserMobile</th>
                      <th>UserActive</th>

                  </tr>
              </thead>
              <tbody>
                  {userData.map(user => (
                      <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.user_name}</td>
                          <td>{user.user_email}</td>
                          <td>{user.user_mobile}</td>
                          <td>{user.user_active}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
          <button onClick={bacbtn} className='backbtn'>Back</button>
    </div>
  )
}

export default Userdash
