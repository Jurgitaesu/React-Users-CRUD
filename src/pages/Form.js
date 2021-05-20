import {useRef} from 'react';

function Form({message, addUser}) {
    const name = useRef();
    const age = useRef();
    const email = useRef();
    const password = useRef();

    function submitUserForm() {
        const user = {
            name: name.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value
        }
        addUser(user)
        name.current.value = "";
        age.current.value = "";
        email.current.value = "";
        password.current.value = "";
    }

    return (
        <div className="w-80p m-auto">
            <h2 className="text-center my-40">Naujo vartotojo sukūrimas</h2>
            <div className="d-flex dir-column j-center w-450 m-auto">
                <input className="pd-10 my-10" ref={name} type="text" placeholder="Vartotojo vardas"/>
                <input className="pd-10 my-10" ref={age} type="number" placeholder="Amžius" min="0"/>
                <input className="pd-10 my-10" ref={email} type="email" placeholder="Elektroninis paštas"/>
                <input className="pd-10 my-10" ref={password} type="password" placeholder="Slaptažodis"/>
                <div className="text-center h-20"> {!!message ? message : null}</div>
                <button onClick={submitUserForm} className="btn-submit m-auto">Patvirtinti</button>
            </div>
        </div>
    );
}

export default Form;