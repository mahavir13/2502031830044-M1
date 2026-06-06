const handleInput = (event) => {
    console.clear();

    console.log("value:", event.target.value);
}

function Hii() {
    const isloggedIn = false;

    let message;

    if (isloggedIn) {
        message = <h2>Welcome Bhavani</h2>;
    } else {
        message = <h2>Please Login</h2>;
    }

    return message;
}

function Hello() {
    return (
        <div>
            <h2>Hello Component</h2>

            <button onClick={() => alert("Hello Bhavani")}>Click Me</button>
            <br/><br/>
            <input type="text" onChange={handleInput} placeholder="type anything"/>
            <Hii />
        </div>
    );
}

export default Hell