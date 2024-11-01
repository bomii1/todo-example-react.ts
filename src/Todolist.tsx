import { useState } from "react";
import { Button } from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const TodoList: React.FC = () => {
    // React.FC: 리액트 컴포넌트 정의할 때 타입스크립트 기반에서 사용 => function component 란 뜻
    // 함수형 컴포넌트를 정의할 때 사용할 수 있는 것, props 의 타입을 명시해주는 기능
    const title: string = "오늘 할 일";
    const [todos, setTodos] = useState<Todo[]>([
        {id: 0, text: '잠자기', isChecked: false }, 
        {id: 1, text: '공부하기', isChecked: false }, 
        {id: 2, text: '미팅하기', isChecked: false }
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodl] = useState<Todo | null>(null);

    const handleCheckedChange = (itemId: number) => {
        setTodos((prevItems) => 
            prevItems.map((item) => 
                item.id === itemId ? {...item, isChecked: !item.isChecked} : item
            )
            
        )
    }

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
            setNewTodo('');
        }
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // const handleTodoClick = (todo: Todo) => {
    //     setShowDetail(true)
    //     setSelectTodo(todo)
    // }

    // const handleCloseDetail = () => {
    //     setShowDetail(false);
    // }

    return (
    <div>
        <h1>{title}</h1>
            <p></p>
            <div className="container">
                <div>
                    <input type="text" 
                        placeholder="할 일 입력" 
                        style={{marginRight: '10px',
                        writingMode: 'horizontal-tb'}}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <Button onClick={addTodo}>추가</Button>     
                </div>
                <p></p>
                <div className="board">
                    <ul>
                        {
                            todos.map((todo) => 
                                <li key={todo.id}>
                                    <input type="checkbox" 
                                    onChange={() => {
                                        handleCheckedChange(todo.id);
                                    }}></input>
                                    <span onClick={() => {handleTodoClick(todo)}}>
                                        {
                                            todo.isChecked ? <del>{todo.text}</del> : todo.text
                                        }
                                    </span>
                                    <button className="del-button"
                                        onClick={() => removeTodo(todo.id)}
                                    >삭제</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;
