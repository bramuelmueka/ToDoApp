import React from 'react'
import PropTypes from 'prop-types'
import { partial } from '../../lib/utils';
import './TodoItem.css';

export const TodoItem = props => { 
    const hangleToggle = partial(props.handleToggle, props.id)
    const handleRemove = partial(props.handleRemove, props.id)

    return (
        <div> 
            <br></br><div className='items'>
                <div class="cardi">
            <label htmlFor={props.id}>
                <input class="form-check-input" type="checkbox" id={props.id}
                    checked={props.isComplete}
                    onChange={hangleToggle}   
                    
                />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {props.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label> 
            <button className="btn btn-xs btn-danger" title="Remove Todo" onClick={handleRemove}>Delete</button>  
         </div> <br></br></div>
           
        </div>
        
        
              
            
    )
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool,
    name: PropTypes.string.isRequired
}