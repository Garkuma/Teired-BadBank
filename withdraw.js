function Withdraw(){
    const [show, setShow]       =   React.useState(true);
    const [status, setStatus]   =   React.useState('');

    return(
        <Card 
            bgcolor="warning"
            header="Withdraw"
            status={status}
            body={show ?
                <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
                <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
        />
    )
}

function WithdrawMsg(props){
    return(<>
        <h5>Success</h5>
        <button type="submit"
            className="btn btn-light"
            onClick={() => {
                props.setShow(true);
                props.setStatus('');
            }}>
                Withdraw again
        </button>
    </>);
}

function WithdrawForm(props){
    const [email, setEmail]     =   React.useState('');
    const [amount, setAmount]   =   React.useState('');
    const ctx = React.useContext(UserContext);

    function handle(){

            fetch(`/account/update/${email}/-${amount}`)
                .then(response => response.text())
                .then(text => {
                    try {
                        const data = JSON.parse(text);
                        props.setStatus(JSON.stringify(data.balance));
                        props.setShow(false);
                        console.log('JSON', data);
                    } catch(err) {
                        props.setStatus('Failed to withdraw funds')
                        console.log('err', text);
                    }
            });
    }
    return(<>
        Email<br/>
        <input type="input" 
            className="form-control" 
            placeholder="Enter email" 
            value={email} 
            onChange={e => setEmail(e.currentTarget.value)}/><br/>

        Amount<br/>
        <input type="input" 
            className="form-control" 
            placeholder="Enter amount" 
            value={amount} 
            onChange={e => setAmount(e.currentTarget.value)}/><br/>

        <button type="submit"
            className="btn btn-light"
            onClick={handle}>
                Withdraw
        </button>
    </>);
}