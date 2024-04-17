import axios from "axios";
import { createContext } from "react";

export const HeaderContext = createContext()
let baseUrl = "http://localhost:3001/"

export const HeaderProvider = (props) => {

    function getHeaderImage() {
        return axios.get(baseUrl + "api/header")
            .then(response => {
                return response.data
            }
            );
    }

    function editHeaderImage(newImage) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('unpluggedToken')}`
        };
        return axios.put(baseUrl + "api/header/edit", newImage, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            }
            );
    }

    function getNotes() {
        return axios.get(baseUrl + "api/notes/")
            .then(response => {
                return response.data
            }
            );
    }

    function createNote(newNote) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('unpluggedToken')}`
        };
        return axios.post(baseUrl + "api/notes/", newNote, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            }
            );
    }


    return (
        <HeaderContext.Provider
            value={{
                getHeaderImage,
                editHeaderImage,
                getNotes,
                createNote
            }}
        >
            {props.children}
        </HeaderContext.Provider>
    )
}