import './App.css';
import Header from "./Components/Header/Header";
import Inputs from "./Components/Inputs/Inputs";
import Users from "./Components/Users/Users";
import {useAppSelector} from "./Components/Redux/hooks";

import Repositories from "./Components/Repositories/Repositories";
import { useState} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [inputcheck ,setInputcheck] =useState<string>("");
    const user = useAppSelector(state=>state.Info.status);
    const USERS = useAppSelector(state=>state.Info.users);
    const REPOS =useAppSelector(state=>state.Info.repos);

    function handleChange(newValue) {
        setInputcheck(newValue);
    }
    return (
        <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <header className={ (USERS || REPOS) && inputcheck.length > 3? "" : "headers"}>
                <div className='container'>
                    <Header/>
                    <Inputs onChange={handleChange}/>
                    {user === "users" && USERS && (inputcheck.length  > 3) ?
                        (<Users  data = { USERS }/>)
                        : (user === 'repositories' && REPOS && inputcheck.length > 3 ?
                        <Repositories data={REPOS}/>
                        : ""
                        )}
                </div>
            </header>
        </div>
    );
}

export default App;
