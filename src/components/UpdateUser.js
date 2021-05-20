import {useRef} from 'react';

function UpdateUser({updateUser, userInfo}) {
    console.log(userInfo)
    const name = useRef();
    const age = useRef();
    const email = useRef();
    const password = useRef();
    if (!!userInfo) {
        name.current.value = userInfo.name;
        age.current.value = userInfo.age;
        email.current.value = userInfo.email;
        password.current.value = userInfo.password;
    }

    return (
        <tr>

            <td><input ref={name} type="text"/></td>
            <td><input ref={age} type="text"/></td>
            <td><input ref={email} type="text"/></td>
            <td><input ref={password} type="text"/></td>
            <td></td>
            <td onClick={updateUser}><i className="fas fa-check"></i></td>


        </tr>

    );
}

export default UpdateUser;