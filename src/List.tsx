import React, { ReactElement, Dispatch } from 'react';
import {connect} from 'react-redux';
import {Task, TaskPriority} from './reducers/reducer';
import {Actions, deleteTodo} from './actions/actions';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import './List.css';

export type ListStateProps = {
    tasks : Task[]; 
}

export type ListDispatchProps = {
    deleteTodo:(i:number) => void;
}

export type ListProps = ListStateProps & ListDispatchProps;

interface ListState{
}

class List extends React.Component<ListProps, ListState>{
    constructor(props : ListProps){
        super(props);
        this.state = {
            tasks : []
        };
    }

    clickDelete = (i : number) : void => {
        this.props.deleteTodo(i);
    }

    render = () : ReactElement => {
        return (
            <div>
            <h3>Todo</h3>
            <TableContainer component={Paper} style={{maxWidth : '700px'}}>
            <Table>
                <TableHead >
                <TableRow>
                    <TableCell align="center">No.</TableCell>
                    <TableCell align="center">Completed</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Priority</TableCell>
                    <TableCell align="center">Task</TableCell>
                    <TableCell align="center">Del</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.props.tasks.map((task, i) => (
                    <TableRow key={i}>
                    <TableCell align="center">{i+1}</TableCell>
                    <TableCell  align="center">
                    <Checkbox
                        checked={task.completed}
                    />
                    </TableCell>
                    <TableCell align="center">{('00' + task.date.getDate()).slice(-2) + '/' + ('00' + task.date.getMonth() + 1).slice(-2) +'/'+task.date.getFullYear()}</TableCell>
                    <TableCell align="center" style={{maxWidth: '10%'}}>{task.priority.toString}</TableCell>
                    <TableCell align="center">{task.value}</TableCell>
                    <TableCell align="center"><DeleteIcon onClick={this.clickDelete.bind(this, i)}/></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        );
    }
}

const mapStateToProps = (state : Task[]) : ListStateProps =>{
    return {
        tasks : state
    };
}

const mapDispatchToProps = (dispatch:Dispatch<Actions>) : ListDispatchProps =>{
    return {
        deleteTodo : (i:number):void => dispatch(deleteTodo(i))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);