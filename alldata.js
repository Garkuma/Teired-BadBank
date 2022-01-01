function AllData(){
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all').
            then(response => response.json()).
            then(data => {
                console.log(data);
                
                for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                    console.log(element.email);
                }
                
                setData(JSON.stringify(data));
            });
        },[]);
    return(<>
        <h5>All Data in Store:</h5>
            {data}
    </>);
}