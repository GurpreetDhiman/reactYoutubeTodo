var React = require('react');
var ReactDOM = require('react-dom');

require('./css/index.css');

//Module Require

var TodoItem = require("./todoItem");
var AddItem = require("./addItem");

//Create Component



var TodoComponent = React.createClass({
    getInitialState: function(){
        return{
            todos:[
                    // { id: 0, text: "Wash up your clothes"},
                    // { id: 1, text: "eat something in morning"},
                    // { id: 2, text: "Have a good run in Morning"},
                ],
            age: 26
        }
    },
    render: function() {
        var todos = this.state.todos;
        todos = todos.map(function(item,index){
            
                return (
                    
                        <TodoItem onEdit={this.onEdit} onDelete={this.removeTodo} id={item.id} value={item.text} key={item.id}/>
                    
                )
        }.bind(this));
        return (
            <div id="todo-list">
                <p>Good things people must make a practise.</p>
                <p>{this.state.age}</p>
                <ul>
                    {todos}
                </ul>
                <AddItem addTodo={this.addTodo}/>
            </div>
        )
    },
    removeTodo: function(id){
        var updateTodo = this.state.todos.filter(function(val,index){
            return id !== val.id;
        });

        this.setState({
            todos: updateTodo
        })

    },
    nextId: function(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    addTodo: function(item){
        var updateTodo =[
            ...this.state.todos,
            {
                id: this.nextId(),
                text: item
            }
        ] 

        this.setState({
            todos: updateTodo
        })
    },
    onEdit: function(value, id){
        var updateTodo = this.state.todos.map(
            todo => (todo.id !== id) ? 
            todo: 
            {
                id: id,
                text: value
            }
        )
        
        this.setState({
            todos: updateTodo
        })
    }
})

var myCheess = {name: "Comembert", smellFactor: "Extreem pong", price: "$350"}

//put Component into html

ReactDOM.render( <TodoComponent message="I like things working..." chess={myCheess} count="8" />  , document.getElementById('todoComponent'))