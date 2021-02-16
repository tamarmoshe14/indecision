class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleReset = this.handleReset.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.state = 
            {
                count: 0,
            };
        
    }

    componentDidMount(){
        const stringNum = localStorage.getItem('count');
        const intNum = parseInt(stringNum, 10);
        if (!isNaN(intNum)){
        this.setState(()=>({count:intNum}));}
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count!==this.state.count) {
            const newNum = this.state.count;
            localStorage.setItem('count', newNum);
        };
    }
    handleReset(){
        this.setState(()=>{return {count:0};})
    }
    handleMinusOne(){
        this.setState((prevState)=>{return {count: prevState.count-1};});
    }
    handlePlusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        })
    }
    render(){
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );}
}


ReactDOM.render(<Counter />, document.getElementById('app'));

