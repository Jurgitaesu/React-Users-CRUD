import UpdateUser from "../components/UpdateUser";
import {useState} from 'react';

function Users({users, deleteId, findUser, userInfo, updateUser}) {
    const [close, setClose] = useState(false);

    function updateUserOpen(id) {
        findUser(id);
        setClose(true);
    }

    function sendUpdateInfo(userData){
        updateUser(userData);
        setClose(false);
    }

    return (
        <div className="pt-50">
            <h2 className="text-center my-40">Vartotojai</h2>
            {!!users ?
                <table>
                    <thead>
                    <tr>
                        <th>Vartotojo vardas</th>
                        <th>Amžius</th>
                        <th>Elektroninis paštas</th>
                        <th>Slaptažodis</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user =>
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td onClick={() => deleteId(user._id)}>
                                <i className="fas fa-trash-alt"></i>
                            </td>
                            <td onClick={() => updateUserOpen(user._id)}>
                                <i className="fas fa-pen-alt"></i></td>
                        </tr>
                    )}
                    {close? <UpdateUser
                        userInfo={userInfo}
                        sendUpdateInfo={sendUpdateInfo}
                        />
                        : null}
                    </tbody>
                </table> : null}
        </div>
    );
}

export default Users;