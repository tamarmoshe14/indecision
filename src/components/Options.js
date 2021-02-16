import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
    <div className="widget-header">
        <h3 className="widget-header__title">These are your options:</h3>
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
   
    {props.options.length ==0 && <p className="widget__message">Please enter some options</p>}

    {props.options.map((option, index)=> {return <Option 
        key={option} 
        optiontext={option}
        count = {index+1}
        handleDeleteOption={props.handleDeleteOption}
        />})}
    </div>
);

export default Options;