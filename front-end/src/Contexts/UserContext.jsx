import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext()
let baseUrl = "http://localhost:3001/"

export const UserProvider = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);

  function login(credentials) {

    return axios.post(baseUrl + "api/user/signin", credentials)
      .then(response => {
        localStorage.setItem('unpluggedToken', response.data)
        return response
      }
      );
  }

  function verify() {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('unpluggedToken')}`
    };
    return axios.post(baseUrl + "api/user/verify", null, {
      headers: myHeaders
    }).then(response => {
      if (response.data === true) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
      return new Promise(resolve => resolve(response.data));
    })
  }

  function createAccount(newUser) {
    return axios.post(baseUrl + "api/user/create-account", newUser).then(response => {
      return new Promise(resolve => resolve(response.data));
    })
  }

  return (
    <UserContext.Provider
      value={{
        login,
        verify,
        createAccount,
        isAdmin
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}