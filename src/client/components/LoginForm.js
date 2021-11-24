import React from 'react'
import Success from './success'

class LoginForm extends React.Component{

  state={uname: '',password: '',error: '',success: 'false'};

  onFormSubmit=(event)=>{


      if(this.state.uname==='' || this.state.password===''){
        window.alert("Please fill in all details");
        event.preventDefault();
      }
      else{
        console.log("form true");
        this.setState({success: 'true'});
      }
  }

  render(){

    if(this.state.success==="false"){
        return (
          <div className="ui segment" style={{marginTop: '20px'}}>
            <form className="ui form" onSubmit={this.onFormSubmit} action="">
            <h3>Log-In</h3>

              <div className="field">
                  <label>User Name</label>
                  <input type="text" name="userName" placeholder="User Name" style={{width: '500px'}}
                  value={this.state.uname}
                  onChange={e=>{this.setState({uname: e.target.value})}}
                   />
              </div>

              <div className="field">
                  <label>Password</label>
                    <input type="password" name="password" style={{width: '500px'}}
                    value={this.state.password}
                    onChange={e=>{this.setState({password: e.target.value})}}/>
              </div>

              <button className="ui button" type="submit" onSubmit={this.onFormSubmit}>Submit</button>

          </form>

          </div>


        );

      }
      else{

        return <Success uname={this.state.uname} />
      }
    }
}

export default LoginForm
