const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

function App(){
    const [task, setTask] = React.useState('');
    const [todos,  setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [message, setMessage] = React.useState('');

    function generateId(){
        return + new Date();
    }

    function saveTodoList(e){
        e.preventDefault();

        if(task.length === 0) return setMessage('please fill the task!')

        if(edit.task === task) return setTask('');

        if(edit.id){
            const editedTodoList = {
                ...edit,
                task: task
            }

            const findIndexTodos = todos.findIndex(todo => {
                return todo.id === edit.id;
            })

            const updatedTodos = [...todos];
            updatedTodos[findIndexTodos] = editedTodoList;        

            setTodos(updatedTodos);

            return cancelEditTodoList();
        }

        setTodos([...todos, {
            id: generateId(),
            task: task,
            done: false
        }]);
        setTask('');
        setMessage('');
    }

    function deleteTodoList(targetId){
        const filteredTodoList = todos.filter(todo => {
            return todo.id !== targetId;
        })

        setTodos(filteredTodoList);

        if(edit.id) return cancelEditTodoList();
    }

    function editTodoList(targetTodo){
        setEdit(targetTodo);
        setTask(targetTodo.task)
    }

    function cancelEditTodoList(){
        setTask('');
        setEdit({});
    }

    function inputLength(length){
        if(length > 0) return setMessage('');
    }

    function doneTodoList(targetTodo){
        const checkedTodo = {
            ...targetTodo,
            done: targetTodo.done ? false : true
        }

        const findIndexTodos = todos.findIndex(todo => {
            return targetTodo.id === todo.id;
        })

        const updatedTodos = [...todos];
        updatedTodos[findIndexTodos] = checkedTodo;

        setTodos(updatedTodos)
    }

    return (
        <>
            <h1>Simple TodoList</h1>
            {message && <p style={{color: 'red'}}>{message}</p>}
            <form onSubmit={saveTodoList}>
                <input type="text" placeholder="task..." value={task} onChange={function(e){
                    setTask(e.target.value);
                    inputLength(e.target.value.length);
                }} />
                {edit.id && <input type="button" value="cancel" onClick={cancelEditTodoList} />}
                <input type="submit" value={edit.id ? "save" : "add"} />
            </form>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.done} onChange={doneTodoList.bind(this, todo)} />
                            {todo.task}
                            ({todo.done ? "selesai" : "belum selesai"})
                            <button onClick={editTodoList.bind(this, todo)}>edit</button>
                            <button onClick={deleteTodoList.bind(this, todo.id)}>delete</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

root.render(<App />);