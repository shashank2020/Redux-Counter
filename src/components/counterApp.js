import React, { Component} from 'react'
import {StyleSheet,View,Text, Button, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

 class counterApp extends Component {

 

  increaseCounter = () => {
    this.setState({counter:this.state.counter+1});
  }
  decreaseCounter = () => {
    this.setState({counter:this.state.counter-1});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',width:400,justifyContent:'space-around'}}>
            <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
              <Text style={{fontSize:30}}>Increase</Text>
            </TouchableOpacity>
            <Text  style={{fontSize:30}} >{this.props.counter}</Text>
            <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
              <Text  style={{fontSize:30}}>Decrease</Text>
            </TouchableOpacity>
         
        </View>
      </View>
    )
  }
}

function mapStateToProps(state){
    return{
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter : () => dispatch({type:'DECREASE_COUNTER'}),
    }
}

const styles = StyleSheet.create({
 container : {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center'
   
 },
});


export default connect(mapStateToProps,mapDispatchToProps)(counterApp);
