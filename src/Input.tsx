import React, { Dispatch } from 'react';
import {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {Task, TaskPriority} from './reducers/reducer';
import {Actions, addTodo} from './actions/actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";
import './Input.css';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface InputState{
    task : Task;
}

interface InputProps{
    addTodo : (task : Task) => void;
}

class Input extends React.Component<InputProps, InputState>{
    constructor( props : InputProps ){
        super(props);
        this.state = {
            task : {
                date:new Date('2020-01-01T00:00:00'), 
                completed: false,
                priority : TaskPriority.low, 
                genle : '',
                value : ''
            }
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTask = this.handleChangeTask.bind(this);
        this.handleSubmit     = this.handleSubmit.bind(this);
    }

    private handleChangeDate = (event : MaterialUiPickersDate) :void => {
        if ( event === null )
            return;
        let now : Task = Object.assign(this.state.task);
        now.date = event;
        console.log("Change Date " + now.date.toString);
        this.setState( {task : now } );
    }
    private handleChangeTask = (event : ChangeEvent<HTMLInputElement>) :void => {
        let now : Task = Object.assign(this.state.task);
        now.value = event.target.value;
        this.setState( {task : now } );
    }

    private handleSubmit = (event : ChangeEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        this.props.addTodo(Object.assign({},this.state.task));
    }

    public render = () : JSX.Element => {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <h3>Input</h3>
            <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date"
                label="date"
                value={this.state.task.date}
                onChange={this.handleChangeDate}
              />
            <TextField label="task" variant="outlined" value={this.state.task.value} onChange={this.handleChangeTask}/>
            <Button variant="contained" type="submit">Add</Button>
            </form>
            </MuiPickersUtilsProvider>
        );
    }
}

//ReduxのStateをpropsとして扱るようにする。
const mapDispatchToProps = (dispatch : Dispatch<Actions>) : InputProps => {
    return {
        addTodo:(task : Task) :void => {
            dispatch(addTodo(task));
        }
    }
}

export default connect(null, mapDispatchToProps)(Input);
