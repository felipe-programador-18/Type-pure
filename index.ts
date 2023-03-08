import axios from 'axios'


const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
   id: number 
   title: string,
   completed: boolean
}

axios
.get(URL)
.then(res => {
  const todo = res.data as Todo ;
   const Id= todo.id ;
   const Title = todo.title;
   const Finish = todo.completed;
   console.log(`${Id} and ${Title} and testing more thing, ${Finish}`)
   logTodo(Id,Title, Finish)
})


const logTodo = (id:number, title:string, completed: boolean) => {
   console.log(`${id} and ${title} and testing more thing, ${completed}`)
}



