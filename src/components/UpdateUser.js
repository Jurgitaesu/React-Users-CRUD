import {useRef} from 'react';

function UpdateUser({userInfo, sendUpdateInfo}) {
    console.log(userInfo)
    // console.log(updateUser)
    const name = useRef(null);
    const age = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    if (!!userInfo) {
        name.current.value = userInfo.name;
        age.current.value = userInfo.age;
        email.current.value = userInfo.email;
        password.current.value = userInfo.password;
    }

    function updateSelectedUser() {
        const updatedUser = {
            id: userInfo._id,
            name: name.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value
        }
        sendUpdateInfo(updatedUser);
        name.current.value = '';
        age.current.value = '';
        email.current.value = '';
        password.current.value = '';
    }

    return (
        <tr>
            <td><input ref={name} type="text"/></td>
            <td><input ref={age} type="text"/></td>
            <td><input ref={email} type="text"/></td>
            <td><input ref={password} type="text"/></td>
            <td></td>
            <td onClick={updateSelectedUser}><i className="fas fa-check"></i></td>
        </tr>

    );
}

export default UpdateUser;