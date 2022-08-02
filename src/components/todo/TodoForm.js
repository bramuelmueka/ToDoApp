import React from 'react'
import PropTypes from 'prop-types'

export const TodoForm = props => { 
    return(
        
        < form style={{maxWidth: "50%", display: "flex", alignItems: "center", justifyContent: "center",color:"lightcoral"}} onSubmit={props.handleSubmit}> <b>  Add a todo: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><br></br>
            <input style={{maxWidth: "50%"}} className="form-control" focus="true"  type="text" placeholder='Type and press enter' value={props.currentTodo} onChange={props.handleOnchangeInput} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{backgroundColor: "lightcoral", borderColor:"lightcoral"}} className="btn btn-xs btn-success" title="Create Todo" onClick={props.currentTodo}>Create Todo</button><br></br><br></br>
          </form>
    )
}

TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleOnchangeInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}