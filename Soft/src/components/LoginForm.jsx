function Welcome(){
    return(
        <div className="welcomePage">
            <div className="input1">
            <h4 className="email">email</h4>
            <input type="text" className="firstInput"/>
            </div>
            <div className="input2">
                <h4 className="password">password</h4>
               <input type="password" className="secondInput"/>
            </div>  
            <button className="submit" onClick={'click'}>Submit</button>
            <button className="loginButton" onClick={'click'}>
                Log in
            </button>
        </div>
        
    )
}

export default Welcome





//             <h3 className="email">email</h3>
//            
//            <h3 className="password">password</h3>
//            <input type="password" className="secondInput"/>
                 