var React = require('react');
require('./css/addItem.css');

var AddItem = React.createClass({
    render: function(){
       return ( <form id="add-todo" onSubmit={this.handleAddItem}>
            <input type="text" ref="newItem" required/>
            <input type="submit" value="Add me"/>
        </form>
       )
    },
    handleAddItem: function(e){
        e.preventDefault();
        this.props.addTodo(this.refs.newItem.value);
        this.refs.newItem.value = '';
    }
});

module.exports = AddItem;