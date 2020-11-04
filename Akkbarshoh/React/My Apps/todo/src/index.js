import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";
import AppHeader from "./components/app-header";


const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'))