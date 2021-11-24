import LoginForm from './LoginForm'


class App extends React.Component{

    state={login: "false"};

    onLogin=(event)=>{
      this.setState({login: 'true'});
    }

    render(){
      if(this.state.login==="false"){
        return (
            <button className="ui button" onClick={this.onLogin}>Login</button>
        );
      }
      else{
          return <LoginForm />;
      }
    }
}

export default App
