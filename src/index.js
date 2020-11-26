// import {Project,ToDoItem,projectsModule,displayController} from './toDoItem.js';

import {ToDoItem,Project,ProjectList,displayController} from './toDoItem.js';
import { compareAsc, format } from 'date-fns'
import './styles.css';


const toDoOne = new ToDoItem("title","description","dueDate","priority");
const toDoTwo = new ToDoItem("dad","help dad with dishes","date","description");
const toDoThree = new ToDoItem("testing","testing", "high", "high");
const project1 = new Project("first Project" , "comments only ;P");
const project2 = new Project("second project","helping dad");


console.log(toDoOne.getTitle());
console.log(toDoOne.getPriority());

console.log(project1.getTitle());
console.log(project1.getDescription());

project1.addToDo(toDoOne);
project2.addToDo(toDoTwo);
project1.addToDo(toDoThree);
project2.addToDo(toDoThree);

var todoList = project1.getList();
var todoTwo = project2.getList();

console.log(todoList[0].getTitle());
console.log(todoTwo[0].getTitle());

ProjectList.addNewProject(project1);
ProjectList.addNewProject(project2);

console.log(ProjectList.listProjects()[0].getTitle());


displayController.displayProjects();








// const todo1 = new ToDoItem("help mum", "do dishes",new Date(2014,1,11),"high");

// project1.addToDo(todo1);

// console.log(project1.getList());