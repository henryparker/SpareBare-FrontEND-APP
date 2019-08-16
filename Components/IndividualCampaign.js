import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import {
  Badge,
  Text,
  Icon,
  FormLabel,
  FormInput,
  Button
} from "react-native-elements";
import { TextInput } from "react-native-paper";

import axios from "axios";
import { connect } from "react-redux";
import { Formik } from "formik";
import { startAddCampaign } from "../actions/campaign";
import AreaChartComponent from "./AreaChartComponent";
// import console = require('console');
export class IndividualCampaign extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    let width = Dimensions.get("window").width;
    let height = Dimensions.get("window").height;
    const { navigation } = this.props;
    const campaignId = navigation.getParam("campaign_Id", "NO-ID");
    console.log(
      this.props.campaign.filter(val => val._id == campaignId)[0].moneyData
    );
    return campaignId != "NO-ID" ? (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItem: "center",
            marginTop: 20
          }}
        >
          <Card style={{ marginTop: 10, elevation: 0 }}>
            <Card.Cover
              source={{
                uri: this.props.campaign.filter(val => val._id == campaignId)[0]
                  .ImageURL
              }}
            />
            <Card.Content>
              <Title>
                {
                  this.props.campaign.filter(val => val._id == campaignId)[0]
                    .Title
                }
              </Title>
              <Paragraph>
                {
                  this.props.campaign.filter(val => val._id == campaignId)[0]
                    .Description
                }
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            marginTop: 20
          }}
        >
          <Text h3> Weekly Performance</Text>
          <Text h4>
            {" "}
            Total Raised: $
            {this.props.campaign
              .filter(val => val._id == campaignId)[0]
              .moneyData.reduce((acc, val) => acc + val)}
          </Text>
          <AreaChartComponent
            data={
              this.props.campaign.filter(val => val._id == campaignId)[0]
                .moneyData
            }
          />
        </View>
      </ScrollView>
    ) : (
      <Text>Not Found</Text>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startSetCampaign: () => dispatch(startSetCampaign()),
  startAddSubscribe: data => dispatch(startAddSubscribe(data)),
  startRemoveSubscribe: data => dispatch(startRemoveSubscribe(data)),
  startSetSubscribe: () => dispatch(startSetSubscribe())
});

const mapStateToProps = (state, props) => {
  return {
    campaign: state.campaign,
    auth: state.auth,
    totalSpare: state.totalSpare,
    subscribeList: state.subscribeList
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualCampaign);

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
