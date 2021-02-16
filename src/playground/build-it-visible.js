class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false,
        };
    }

    handleVisibilityToggle(){
        this.setState((prevState)=>{return {visibility: !prevState.visibility};});
    }
    
    render(){
        return (
            <div>
              <h1>Visibility Toggle</h1>
              <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? "Close":"Details"}</button>
              <p>{this.state.visibility ? "This is some information":""}</p>
            
            </div>

        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const myAppRoot = document.getElementById('app');

// const myObject = {
//     num:1,
// };

// const showInfo = () => {
//     myObject.num ++;
//     renderMe();
// };


// const renderMe = () => {
//     const myTemplate = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={showInfo}>{myObject.num %2 ===0 ? "close details":"some details"}</button>
//         <p>{myObject.num %2 ===0 ? "here is some information":""}</p>
//         </div>
//         );

//     ReactDOM.render(myTemplate, myAppRoot);
// };

// renderMe();
