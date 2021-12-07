import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Form from './pages/Form';

function App() {
  const [users, setUsers] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');
  const [userInfo, setUserInfo] = useState('');

  setTimeout(function () {
    setFormMessage('');
    setUpdateMessage('');
  }, 4000);

  useEffect(() => {
    async function showUsers() {
      const response = await fetch('/show');
      const data = await response.json();
      setUsers(data.users);
    }
    showUsers();
  }, []);

  async function addUser(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch('/upload', options);
    const data = await response.json();
    setFormMessage(data.message);
    if (data.success) {
      setUsers(data.users);
    }
  }

  async function deleteUser(id) {
    const response = await fetch(`/delete/${id}`);
    const data = await response.json();
    setUpdateMessage(data.message);
    setUsers(data.users);
  }

  async function findUser(id) {
    const response = await fetch(`/user/${id}`);
    const data = await response.json();
    setUserInfo(data.userInfo[0]);
  }

  async function updateUser(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch('/update', options);
    const data = await response.json();
    setUpdateMessage(data.message);
    setUserInfo('');
    if (data.success) {
      setUsers(data.users);
    }
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Users
            updateMessage={updateMessage}
            users={users}
            deleteId={deleteUser}
            findUser={findUser}
            userInfo={userInfo}
            updateUser={updateUser}
          />
        </Route>
        <Route path="/form">
          <Form formMessage={formMessage} addUser={addUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
