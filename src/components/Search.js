import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props)=> {
    // state={
    //     text: ''
    // };

    const[text, setText] = useState('');

    const onChange = (e)=>{
        setText(e.target.value );
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        if(text===''){
            props.setAlert('Please enter something', 'light')
        }else{
            props.searchUsers(text);
            setText('');
        }
        
    };

    
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users.."
                     value={text} onChange={onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {props.showClear ? (<button className="btn btn-light btn-block" onClick={props.clearUsers}>Clear</button>) : null}
            </div>
        )
    
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
}

export default Search
