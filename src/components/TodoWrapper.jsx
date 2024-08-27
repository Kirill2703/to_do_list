import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import TimeDate from './Time';
import CalendarToggle from './CalendarToggle';
import { Col, Divider, Row } from 'antd';


uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [calendarDate, setCalendarDate] = useState(new Date());

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    };
    
    let getDate = new Date().toLocaleDateString();
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="MainContainer">
            <Row>
              <Col span={6}>
                <div className="ContainerCalendar">
                  <CalendarToggle
                    calendarDate={calendarDate}
                    onDateChange={setCalendarDate}
                  />
                </div>
              </Col>
            </Row>
            <TimeDate />
            <h3>{getDate}</h3>
            <div className="TodoWrapper">
              <h1>Get Things Done!</h1>
              <TodoForm addTodo={addTodo} />
              {todos.map((todo, index) =>
                todo.isEditing ? (
                  <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                  <Todo
                    task={todo}
                    key={index}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                  />
                )
              )}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TodoWrapper;
