console.log("app.js is running!");

const myObject = {
    title: "Indecision App",
    subtitle: "put your life in the hands of a computer",
    options:[],
};


const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option){
        myObject.options.push(option);
        e.target.elements.option.value = "";
        rerenderApp();
        }
    
};
const appRoot = document.getElementById('app');

const removeAll = () => {
    myObject.options = [];
    rerenderApp();
}

const whatToDo = () => {
    const randomNum = Math.floor(Math.random()*myObject.options.length);
    const option = myObject.options[randomNum];
    alert(option);
};

const rerenderApp = () =>{
    const template = (
        <div>
            <h1>{myObject.title}</h1> 
            {myObject.subtitle && <p>{myObject.subtitle}</p>}
            <p>{myObject.options.length>0 ? "Here are your options":"No options"}</p>
            <button disabled={myObject.options.length ===0} onClick={whatToDo}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
              {myObject.options.map((option)=>{
                  return <li key={option}>Option: {option}</li>;
              })}
            </ol>
            <form onSubmit={onFormSubmit}>
              <input type="text" name="option"/>
              <button>Add option</button>
            </form>
        </div>  
        );
    
        ReactDOM.render(template, appRoot);
}

rerenderApp()



