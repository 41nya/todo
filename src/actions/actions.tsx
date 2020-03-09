import {Action} from 'redux';
import {Task} from '../reducers/reducer';

export interface AddAction extends Action{
        type : 'ADD';
        task : Task;
}

export interface DeleteAction extends Action{
        type : 'DELETE';
        id   : number;
}

export type Actions = AddAction | DeleteAction;

export const addTodo = (task : Task) : AddAction =>{
        return {type:'ADD', task};
}

export const deleteTodo = (id : number) : DeleteAction => {
        return {type:'DELETE', id};
}

