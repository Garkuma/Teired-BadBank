function Login(){
    const [show, setShow]       =   React.useState(true);
    const [status, setStatus]   =   React.useState('');

    return(
        <Card 
            bgcolor="success"
            header="Login"
            status={status}
            body={show ?
                <LoginForm setShow={setShow} setStatus={setStatus}/> :
                <LoginMsg setShow={setShow} setStatus={setStatus}/>}
        />
    )
}

function LoginMsg(props){
    return(<>
        <h5>Success</h5>
        <button type="submit"
            className="btn btn-light"
            onClick={() => props.setShow(true)}>
                Authenticate again
            </button>
    </>);
}

function LoginForm(props){
    const [email, setEmail]         =   React.useState('');
    const [password, setPassword]   =   React.useState('');
    
    function handle(){
        fetch(`/account/login/${email}/${password}`)
            .then(response => response.text())
            .then(text => {
                try {
                    const data = JSON.parse(text);
                    props.setStatus('');
                    props.setShow(false);
                    console.log('JSON', data.email, data.balance, status);
                } catch(err) {
                    props.setStatus(text)
                    console.log('err', text);
                }
        });
        
    }
    
    return(<>
        Email<br/>
        <input type="input" 
            className="form-control"
            id="email"
            placeholder="Enter email" 
            value={email} 
            onChange={e => setEmail(e.currentTarget.value)}/><br/>

        Password<br/>
        <input type="password"
            className="form-control"
            id="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={e => setPassword(e.currentTarget.value)}/><br/>

        <button type="submit"
            className="btn btn-light"
            id="login"
            onClick={handle}>
                Login
        </button>
    </>);
}

// get elements
const email     = document.getElementById('email');
const password  = document.getElementById('password');
const login     = document.getElementById('login');
const loginMsg  = document.getElementById('loginMsg');