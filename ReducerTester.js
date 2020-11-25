import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native' 
import { increment , decrement } from './action'
import { connect } from 'react-redux'

class ReducerTester extends Component {
    constructor(props){
        super(props)
        this.state={
            multiplier:1
        }
    }
    onChangeOfText = (value) =>{
        if(parseInt(value)>1){
            this.setState({
                multiplier:parseInt(value)
            })
        }else{
            this.setState({
                multiplier:1
            })
        }
    }
    render() {
        return (
            <View style={{backgroundColor:'#D4D4D4',width:'100%',height:'100%',justifyContent:'space-evenly'}}>
                <Text style={{alignSelf:'center'}}>Counter {this.props.count}</Text>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>this.props.increment(this.state.multiplier)} style={{height : 30 , width: 80, backgroundColor:'#E3E3E3',justifyContent:'center',alignItems:'center'}}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.decrement(this.state.multiplier)} style={{height : 30 , width: 80, backgroundColor:'#E3E3E3', marginLeft:40,justifyContent:'center',alignItems:'center'}} >
                        <Text>-</Text>
                    </TouchableOpacity>   
                </View>
                <Text style={{alignSelf:'center',marginTop:20}}>Enter the differnce</Text>
                <TextInput
                        style={{alignSelf:'center',backgroundColor:'#fff',width:'90%',marginTop:5}}
                        value={this.state.multiplier}
                        onChangeText={(text)=>this.onChangeOfText(text)}
                        keyboardType='numeric'

                    />
          </View>

        )
    }
}

const mapStateToProps = (state) =>({
    count: state.counterValue.value
})
  
const mapDispatchToProps = (dispatch) => ({
    increment: (multiplier) => dispatch(increment(multiplier)),
    decrement : (multiplier) => dispatch(decrement(multiplier))
})

export default connect (mapStateToProps, mapDispatchToProps)(ReducerTester)
