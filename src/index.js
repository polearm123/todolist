import { toDoItem } from "./toDoItem";
import {Project,ToDoItem} from './toDoItem.js';

const project1 = new Project("hello", "hello");

console.log(`this project name is ${project1.getTitle} and description is ${project1.getDescription}`);