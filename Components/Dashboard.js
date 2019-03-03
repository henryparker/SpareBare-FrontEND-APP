import React from 'react';
import { StyleSheet, View, Image,Dimensions,ImageBackground,ScrollView} from 'react-native';
import {Badge,Text,Button,Icon,Avatar} from 'react-native-elements';
import axios from 'axios';
import { connect } from 'react-redux';
import {Card,Title,Paragraph} from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import {startSetCampaign} from '../actions/campaign';
import {startAddSubscribe, startRemoveSubscribe,startSetSubscribe} from '../actions/subscribe';
export class Dashboard extends React.Component {
    componentWillMount(){
      this.props.startSetCampaign();
      this.props.startSetSubscribe();
      console.log("hi bro",this.props.campaign.length)

    }
    static navigationOptions = {
        header: null,
      };
    render() {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        let campaignCardComponent = (val) => {
          if(val){
          return (
          <Card key={val._id} onPress={()=>this.props.navigation.navigate("IndividualCampaign",{campaign_Id: val._id})}>
                
                <Card.Cover source={{ uri: val.ImageURL }} />
                <Card.Content>
                  <Title>{val.Title}</Title>
                  <Paragraph numberOfLines={3} >{val.Description}</Paragraph>
                </Card.Content>
                <Card.Actions style={{flex:1}}>
                <Button
                        onPress={()=>this.props.subscribeList.includes(val._id)? this.props.startRemoveSubscribe(val._id) : this.props.startAddSubscribe(val._id)}

                        icon={
                                <Icon
                                  name='payment'
                                  size={30}
                                  color='white'
                                />
                              }
                        title = "SUBSCRIBE"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                          backgroundColor: this.props.subscribeList.includes(val._id)?'#27ae60':"#e67e22",
                          width: 300,
                          height: 45,
                          borderColor: "transparent",
                          borderWidth: 0,
                          borderRadius: 15
                        }}
                        containerStyle={{ flex: 1, alignItems:'center' }}
                      />
                </Card.Actions>
            </Card>
        )}}
        let campaignCard = (isSubscribe) => {return this.props.campaign.length>0 ? this.props.campaign.map( val =>{

         if (isSubscribe){
           if(this.props.subscribeList.includes(val._id)){
            return campaignCardComponent(val)
           }
          }else{
            if(!this.props.subscribeList.includes(val._id)){
              return campaignCardComponent(val)
            }
          }
        }): <Text h1 style={{color:'#3498db'}}>sup</Text>}

        // let campaignCard = this.props.campaign.length>0 ? this.props.campaign.map( val =>

        //     <Card key={val._id}>
                
        //         <Card.Cover source={{ uri: val.ImageURL }} />
        //         <Card.Content>
        //           <Title>{val.Title}</Title>
        //           <Paragraph numberOfLines={3} >{val.Description}</Paragraph>
        //         </Card.Content>
        //         <Card.Actions style={{flex:1}}>
        //         <Button
        //                 onPress={()=>this.props.subscribeList.includes(val._id)? this.props.startRemoveSubscribe(val._id) : this.props.startAddSubscribe(val._id)}

        //                 icon={
        //                         <Icon
        //                           name='payment'
        //                           size={30}
        //                           color='white'
        //                         />
        //                       }
        //                 title = "SUBSCRIBE"
        //                 titleStyle={{ fontWeight: "700" }}
        //                 buttonStyle={{
        //                   backgroundColor: this.props.subscribeList.includes(val._id)?'#27ae60':"#9b59b6",
        //                   width: 300,
        //                   height: 45,
        //                   borderColor: "transparent",
        //                   borderWidth: 0,
        //                   borderRadius: 15
        //                 }}
        //                 containerStyle={{ flex: 1, alignItems:'center' }}
        //               />
        //         </Card.Actions>
        //     </Card>): <Text h1 style={{color:'#3498db'}}>sup</Text>
        
      return (
      <View style={{flex:1,  backgroundColor:"#eff4ff"}}>
        <ScrollView style={{flex:1}}>
        
            <View style={{alignItems:'center', marginTop:'20%'}}>
                <Text h1 style={{color:'#3498db'}}>Hi {this.props.auth.info.name.split(" ")[0]}</Text>
                {/* <Button title="setSub" onPress={()=>this.props.startSetSubscribe()}></Button> */}
            </View>
            <View style={{alignItems:'center'}}>
              <Avatar rounded size="xlarge" source={{uri:this.props.auth.info.picture.data.url}}/>
              <Button   onPress={()=>{this.props.navigation.navigate("MyCampaignDashboard")}} title='MY CAMPAIGN' 
                        containerStyle= {{marginVertical:20, marginTop:20}} titleStyle={{ fontWeight: "700",color:'white' }} 
                        buttonStyle={{width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderRadius:15,
                        borderWidth: 0}}/>
              <Text h3> Total Spare: $ {this.props.totalSpare.totalSpare.toFixed(2)}</Text>
            </View>
            <View >
              <Button title='MY SUBSCRIPTION' containerStyle= {{marginVertical:20}} titleStyle={{ fontWeight: "700",color:'white' }} buttonStyle={{backgroundColor: "rgba(92, 99,216, 1)",height: 45,width:null}}/>
                {campaignCard(true)}
              <Button title='NOT SUBSCRIBE'  containerStyle= {{marginVertical:20}} titleStyle={{ fontWeight: "700", color:'white'}} buttonStyle={{backgroundColor: "rgba(92, 99,216, 1)",height: 45,width:null}}/>
                {campaignCard(false)}
            </View>

        </ScrollView>
        
        <ActionButton
              renderIcon={active => active ? (<Icon
                reverse
                raised
                size={32}
                name='plus-circle'
                type='font-awesome'
                color='#3498db'
                /> ) : (<Icon
                  reverse
                  raised
                  size={32}
                  name='plus-circle'
                  type='font-awesome'
                  color='#3498db'
                  />)}
              buttonColor="rgba(231,76,60,1)"
              onPress={() => {this.props.navigation.navigate('CampaignForm')}}/>
    
      </View>
        
      );
      
    }
  }
  const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });
const mapDispatchToProps = (dispatch) => ({
  startSetCampaign : ()=> dispatch(startSetCampaign()),
  startAddSubscribe: (data)=>dispatch(startAddSubscribe(data)),
  startRemoveSubscribe : (data)=>dispatch(startRemoveSubscribe(data)),
  startSetSubscribe:()=>dispatch(startSetSubscribe())
});

const mapStateToProps = (state,props) => {
    return {
      campaign: state.campaign,
      auth : state.auth,
      totalSpare: state.totalSpare,
      subscribeList: state.subscribeList
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);