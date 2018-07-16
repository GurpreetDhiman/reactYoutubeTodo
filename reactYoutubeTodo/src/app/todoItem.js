var React = require('react');
require('./css/todoItem.css');

var EditItem = require("./EditItem");
// Create ToDo Item import React from 'react'

var TodoItem = React.createClass({
    getInitialState: function(){
         return{
            isEditable: false
        }
    },
    getTodoList: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.value}</span>
                    <span className="item-edit"> <button onClick={this.editTodo}>Edit</button> </span>
                    <span className="item-remove"><button onClick={this.removeTodo}>Remove</button> </span>
                </div>
            </li>
        );
    },
    render: function(){
        var isEditable = this.state.isEditable;
       return ( 
                
                    (isEditable) ? 
                    (
                        <EditItem data={this.props} addTodo={this.addTodo} key={this.props.id} />
                    ) : this.getTodoList() );
    },
    removeTodo: function(){
        this.props.onDelete(this.props.id)
    },
    editTodo: function(){
        this.setState({isEditable:true});
    },
    addTodo: function(value,id){
        this.setState({isEditable:false});
        this.props.onEdit(value,id)
    }
});

module.exports = TodoItem;