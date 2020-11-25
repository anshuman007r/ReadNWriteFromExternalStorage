import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { addTodo } from '../action'

class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state={
            text:''
        }
    }

    onChangeText = (text) =>{
        if(text !== undefined){
            this.setState({
                text
            })
        }
    }

    submitText = () =>{
        this.props.addTodo(this.state.text)
        this.setState({
            text:''
        })
    } 
      
    render() {
        return (
            <View>
             <Text>Add item todo list</Text>
             <TextInput
                style={{alignSelf:'center',width:'90%'}}
                onChangeText={(text)=>this.onChangeText(text)}
                value={this.state.text}
                placeholder='Please enter your todo'
             />
             <TouchableOpacity onPress={this.submitText} style={{width:70,height:30}}>
                 <Text>Submit</Text>
             </TouchableOpacity>

            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodo : (todo) => dispatch(addTodo(todo))
})

export default connect( null, mapDispatchToProps )(AddTodo)
