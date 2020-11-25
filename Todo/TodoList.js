import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { toggleTodo } from '../action'
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={
            todoList:props.todoList,
            filterValue: props.filterValue
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('ComponentWillReceiveProps',nextProps)
        if(nextProps.filterValue !== this.state.filterValue){
            if(nextProps.filterValue === 'DONE'){
                this.setState({
                    todoList:nextProps.todoList.filter((item)=>item.status)
                })
            }else if(nextProps.filterValue === 'NOT_DONE') {
                this.setState({
                    todoList:nextProps.todoList.filter((item)=>!item.status)
                })
            }else if (nextProps.filterValue === 'ALL') {
                this.setState({
                    todoList:nextProps.todoList
                })
            }

        }else{
            this.setState({
                todoList:nextProps.todoList
            })
        }

    }
    
    statusOfTodo = (value) =>{
        this.props.toggleTodo(value)
    }

    render() {
        console.log('Component',this.state.todoList)
        return (
            <View style={{marginTop:10}}>

                { this.state.todoList && this.state.todoList.length>0 && 
                   this.state.todoList.map((item, index)=>(
                        <TouchableOpacity 
                            onPress={()=>this.statusOfTodo(item.id)}
                            key={item.id}
                        >
                            {
                                item.status ?
                                <Text style={{ textDecorationLine:'line-through'}}>{item.id}  {item.todo}</Text>:
                                <Text>{item.id}  {item.todo}</Text>
                            }

                        </TouchableOpacity>        
                    ))
                }
                {
                    this.state.todoList && this.state.todoList.length ==0 && 
                    (<Text > No todo added yet</Text>)
                }
            </View>
        )
    }
}


const mapStateToProps = (state) =>({
    todoList :state.addTodo.todoList,
    filterValue : state.filter.value
})

const mapDispatchToProps = (dispatch) =>({
    toggleTodo : (id) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
