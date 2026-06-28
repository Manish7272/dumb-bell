import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useState("");
    const [products, setProducts] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem("loggedInUser"))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUser");
        handleSuccess("User Loggedout")

        setTimeout(() => {
            navigate("/login");
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const headers = { headers: { "authorization": localStorage.getItem("token") } }
            const response = await fetch(url, headers)

            const result = await response.json();
            console.log(result)
            setProducts(result);

        } catch (error) {
            handleError(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div>
            <div>{loggedInUser}</div>
            <button onClick={handleLogout}>Logout</button>
            <div>
                {
                    products && products?.map((item, index) => (
                        <ul key={index}>
                            <span>{item.name}: {item.price}</span>
                        </ul>
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home;