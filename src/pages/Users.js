import UpdateUser from "../components/UpdateUser";

function Users({users, deleteId}) {
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
                            <td><i className="fas fa-pen-alt"></i></td>
                        </tr>
                    )}
                    <UpdateUser />
                    </tbody>
                </table> : null}
        </div>
    );
}

export default Users;