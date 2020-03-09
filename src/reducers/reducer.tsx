import {Actions} from '../actions/actions';

export enum TaskPriority {
    low    ,
    normal ,
    high
}

export interface Task {
    date        : Date;
    completed   : boolean;
    priority    : TaskPriority;
    genle       : string;
    value       : string 
}

const initState : Task[] = [];

const reducer = (state : Task[] = initState, action : Actions) : Task[] =>{
    switch (action.type) {
        case 'ADD':
             return [...state, action.task];
        case 'DELETE':
            const after = [...state];
            after.splice(action.id, 1);
            return after;
        default:
            return [];
    }
}

export default reducer;

