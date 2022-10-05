import React,{Component} from "react";


export default class Login extends Component{

    state = { email:"",password:"",message:""};

    render(){
        return(
            <div className="col-lg-9">
                <h4 className="m-1 p-1 border-bottom">Login</h4>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={(event)=>{
                            this.setState({email:event.target.value});
                        }}   />
                </div>


                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(event)=>{
                            this.setState({password:event.target.value});
                        }}   />
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.onLoginClick}>
                    Submit
                </button>
                <div>{this.state.message}</div>


            </div>

        );
    }


    onLoginClick = async() => {

        console.log(this.state);
        var response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,{method:'get'});
        var body = await response.json();
        console.log(body);

        if(body.length >0){
            this.setState(
                {message:<span>Valid Credentials</span>} 
                );
        }else{
            this.setState(
                {message:<span>Invalid Credentials</span>}
            );
        }
    }
}