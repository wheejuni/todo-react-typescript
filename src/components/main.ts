import React from 'react';
import ReactDOM from 'react-dom';

interface Props {

}

interface TodoItem {
    id: Number;
    title: String;
    content: String;
}

interface TodoAppState {
    items: TodoItem[]
}

class Main extends React.Component<TodoAppState, Props> {
    render() {
        return(
            <div>
                <div className="main-component">
                    <h1> hello todo! </h1>
                </div>
            </div>
        );  
    }
}

export default Main;