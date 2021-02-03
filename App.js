import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './reducer/store'
import Test from './ReducerTester'
import AddTodo from './Todo/AddTodo'
import TodoList from './Todo/TodoList'
import Filter from './Todo/Filter'
import { Alert, TouchableOpacity, Text, PermissionsAndroid, Image } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
const dirOfLocal = '/storage/emulated/0/Demo/'
import RNFS from 'react-native-fs'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      images : []
    }
  }

  componentDidMount(){
    this.requestCameraPermission()
  }
    requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Cool Photo App Camera Permission",
            message:
              "Cool Photo App needs access to your camera " +
              "so you can take awesome pictures.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          RNFS.mkdir(dirOfLocal).catch((error)=>{console.log("client directory:",error)})
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }

  downloadImage = () => {
    let options = {
      addAndroidDownloads: {
        //Related to the Android only
        useDownloadManager: true,
        path:dirOfLocal + new Date().getTime() +'.png',
        description: 'Image',
      }
    }
    this.callAPI(options)
  }

  getImage = () =>{
    RNFS.readDir(dirOfLocal).then((res) =>{
      console.log(res)
      this.setState({
        images : res
      })
    }).catch((error)=>{
      console.log(error)
    })

  }
  
  callAPI = (options) => {
    let imageURL = 'http://utic.trisysit.com/utic/static/images/logo.png'
    RNFetchBlob.config(options).fetch('GET', imageURL )
    .then(res =>{
      console.log('res',JSON.stringify(res))
      Alert.alert('', 'Image has been downloaded successfully')
    }).catch((error) => {
      Alert.alert('', error)
    })

  }

  render() {
    console.log('red',this.state.images)
    return (
        <Provider store={store}>
          <TouchableOpacity onPress = {()=>this.downloadImage()} style = {{ alignSelf : 'center', marginTop : 20, borderColor : 'grey', borderWidth : 1}}>
            <Text> Save Image</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {()=>this.getImage()} style = {{ alignSelf : 'center', marginTop : 20, borderColor : 'grey', borderWidth : 1}}>
            <Text> Get Image</Text>
          </TouchableOpacity>
          {
            this.state.images.map((image, index) =>
              <Image source = {{uri : 'file://'+image.path}} style={{height : 30, width : 30, borderWidth : 1, borderRadius :1, borderColor :'#000' }} key ={index}/>
            )
          }
          {/* <AddTodo/>
          <TodoList/>
          <Filter/> */}
        </Provider>
    )
  }
}

