import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { filter } from '../action'

class Filter extends Component {

    show = (value) =>{
        this.props.filter(value)
    }

    render() {
        return (
            <View style={{alignItems:'center',justifyContent :'space-between',flexDirection:'row',width:'100%', height : 30, marginTop:20}}>
                <TouchableOpacity
                    onPress={()=>this.show('ALL')}
                    style={{width : '20%', backgroundColor:'#C3C3C3'}}
                >
                        <Text> All </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{width : '20%', backgroundColor:'#C3C3C3'}}
                    onPress={()=>this.show('DONE')}
                >
                    <Text>Completed list</Text>                   
                </TouchableOpacity>
                <TouchableOpacity
                    style={{width : '20%', backgroundColor:'#C3C3C3'}}
                    onPress={()=>this.show('NOT_DONE')}
                >
                    <Text>Not completed list</Text>       
                </TouchableOpacity>
            </View>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    filter : (value) => dispatch(filter(value))
})

export default connect(null,mapDispatchToProps)(Filter)
