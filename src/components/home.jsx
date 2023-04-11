import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { logOut } from "../firebase";
import { userCredContext } from "../context/usercred";

const Home = () => {
    const user = useContext(userCredContext)
    const navigate = useNavigate()

    const exit = () => {
        logOut().then(() => {
            localStorage.clear()
            navigate('/login')
        }).catch(error => console.log(error))
    }

    return (
        <div className="home">
            <div>
                <h1>Hello World</h1>
                <p>logged in email : {user?.email}</p>
            </div>

            <button className="logoutbtn" onClick={exit}> Log Out </button>
        </div>

    );
}

export default Home;