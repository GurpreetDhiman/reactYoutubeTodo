var React = require('react');
require('./css/editItem.css');

var EditItem = React.createClass({
    render: function(){
       return ( <form id="add-todo" onSubmit={this.handleAddItem}>
            <input type="text" ref="edittedItem" required defaultValue={this.props.data.value}/>
            <input type="submit" value="Update me"/>
        </form>
       )
    },
    handleAddItem: function(e){
        e.preventDefault();
        this.props.addTodo(this.refs.edittedItem.value, this.props.data.id);
    }
});

module.exports = EditItem;