import React from 'react';
import { StyleSheet, View, Image,Dimensions,ImageBackground} from 'react-native';
import {Badge,Text,Icon,FormLabel,FormInput,Button} from 'react-native-elements';
import { TextInput } from 'react-native-paper';

import axios from 'axios';
import { connect } from 'react-redux';
import {Formik} from 'formik';
 import {startAddCampaign} from '../actions/campaign'
 
export class CampaignForm extends React.Component {
    static navigationOptions = {
      header: null,
    };
    render() {
      
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        
      return (

        <View style={{flex:1}}>
        
              <View style={{alignItems:'center', marginTop:'10%'}}>
                  <Text h1 style={{color:'#3498db'}}>Create Campaign</Text>
              </View>
              
                  <Formik initialValues={{Title:"PLEASE PUT IN TITLE", 
                  Description:"PLEASE PUT IN DESCRIPTION", 
                  URL:"http://example.jpg.com"}} 
                        onSubmit={values=>{this.props.startAddCampaign(values)}}>
                  {({handleChange, handleSubmit, values})=>(
                  <View style={{flex:1}}>
                      <View >
                        <TextInput 
                        mode='outlined'
                        label='Title'
                        onChangeText={handleChange('Title')} value={values.Title}/>
                        <TextInput 
                        mode='outlined'
                        label='URL'
                        onChangeText={handleChange('URL')} value={values.URL} />
                        <TextInput 
                        mode='outlined'
                        multiline={true}
                        label='Description'
                        onChangeText={handleChange('Description')} value={values.Description} />
                    
                      </View>
                    
                    <View style={{flex: 1,flexDirection: 'row',alignItems: 'flex-end',justifyContent: 'flex-end',}}>
                      <View style ={{flex:1,justifyContent:"flex-end",alignItems:"flex-start"}}>
                          <Icon
                          onPress={handleSubmit}
                            reverse
                            raised
                            size={32}
                            name='check'
                            color='rgba(39, 174, 96,1.0)'
                          />
                      </View>
                      <View style ={{flex:1,justifyContent:"flex-end",alignItems:"flex-end"}}>
                          <Icon
                          onPress={()=>this.props.navigation.goBack()}
                            reverse
                            raised
                            size={32}
                            name='cancel'
                            color='rgba(231, 76, 60,1.0)'
                          />
                      </View>

                    </View>
                </View>
                  )}
                </Formik>

              
                      </View>

        
      );
      
    }
  }

const mapDispatchToProps = (dispatch) => ({
  startAddCampaign : (data) => dispatch(startAddCampaign(data))
});

const mapStateToProps = (state,props) => {
    return {
      auth : state.auth,
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps)(CampaignForm);

// import React, { Component } from 'react';
// import { Alert, Keyboard, Text, View, StyleSheet } from 'react-native';
// import { Constants } from 'expo';
// import { Formik } from 'formik';
// import { Button, TextInput, Appbar } from 'react-native-paper';

// export default class CampaignForm extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Appbar.Header>
//           <Appbar.Content
//             title="Nothing"
//           />
//         </Appbar.Header>
//         <View style={styles.content}>
//           <Formik 
//             initialValues={{ firstName: '' }} 
//             onSubmit={values => {
//                 Alert.alert(JSON.stringify(values, null, 2));
//                 Keyboard.dismiss();
//               }
//             }>
//             {({ handleChange, handleSubmit, values }) => (
//               <View>
//               <TextInput
//                 onChangeText={handleChange('firstName')}
//                 value={values.firstName}
//                 label="First name"
//                 placeholder="I am ready!"
//               />
//               <Button onPress={handleSubmit} style={styles.button}>Submit</Button>
//               </View>
//             )}
//           </Formik>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ecf0f1',
//   },
//   content: {
//     padding: 16,
//   },
//   button: {
//     marginTop: 16,
//   }
// });
