import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Form from "./pages/Form";

function App() {
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        async function showUsers() {
            const response = await fetch('http://localhost:3002/show');
            const data = await response.json();
            setUsers(data.users);
        }

        showUsers();
    }, [])

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
        if (data.success) {
            setUsers(data.users);
        }
    }

    async function deleteUser(id) {
        const response = await fetch(`http://localhost:3002/delete/${id}`);
        const data = await response.json();
        setMessage(data.message);
        setUsers(data.users);
    }

    async function findUser(id) {
        const response = await fetch(`http://localhost:3002/user/${id}`);
        const data = await response.json();
        setUserInfo(data.userInfo[0]);
    }

    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Users
                        users={users}
                        deleteId={deleteUser}
                        findUser={findUser}
                        userInfo={userInfo}
                    />
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
