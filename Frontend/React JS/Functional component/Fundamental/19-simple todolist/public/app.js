const root = ReactDOM.createRoot(document.querySelector(".root"));

function App() {
  const [task, setTask] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [message, setMessage] = React.useState('');

  function generateId() {
    return +new Date();
  }

  function saveTodoList(e) {
    e.preventDefault();
    if (task.length === 0) return setMessage('please fill the task!');
    if (edit.task === task) return setTask('');

    if (edit.id) {
      const editedTodoList = { ...edit,
        task: task
      };
      const findIndexTodos = todos.findIndex(todo => {
        return todo.id === edit.id;
      });
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

  function deleteTodoList(targetId) {
    const filteredTodoList = todos.filter(todo => {
      return todo.id !== targetId;
    });
    setTodos(filteredTodoList);
    if (edit.id) return cancelEditTodoList();
  }

  function editTodoList(targetTodo) {
    setEdit(targetTodo);
    setTask(targetTodo.task);
  }

  function cancelEditTodoList() {
    setTask('');
    setEdit({});
  }

  function inputLength(length) {
    if (length > 0) return setMessage('');
  }

  function doneTodoList(targetTodo) {
    const checkedTodo = { ...targetTodo,
      done: targetTodo.done ? false : true
    };
    const findIndexTodos = todos.findIndex(todo => {
      return targetTodo.id === todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[findIndexTodos] = checkedTodo;
    setTodos(updatedTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple TodoList"), message && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoList
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "task...",
    value: task,
    onChange: function (e) {
      setTask(e.target.value);
      inputLength(e.target.value.length);
    }
  }), edit.id && /*#__PURE__*/React.createElement("input", {
    type: "button",
    value: "cancel",
    onClick: cancelEditTodoList
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: edit.id ? "save" : "add"
  })), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoList.bind(this, todo)
    }), todo.task, "(", todo.done ? "selesai" : "belum selesai", ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoList.bind(this, todo)
    }, "edit"), /*#__PURE__*/React.createElement("button", {
      onClick: deleteTodoList.bind(this, todo.id)
    }, "delete"));
  })));
}

root.render( /*#__PURE__*/React.createElement(App, null));