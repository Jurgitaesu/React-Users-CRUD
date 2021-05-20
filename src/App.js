import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Form from "./pages/Form";

function App() {
    const [users, setUsers] = useState('');
    const [message, setMessage]=useState('');



    async function addUser(user) {
        console.log(user);
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('http://localhost:3002/upload', options);
        const data = await response.json();
        console.log(data)
        setMessage(data.message);
        // if (data.success) {
        //     setUsers(data.users);
        // }
    }

    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Users />
                </Route>
                <Route path="/form">
                    <Form
                        message={message}
                        addUser={addUser}

                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
