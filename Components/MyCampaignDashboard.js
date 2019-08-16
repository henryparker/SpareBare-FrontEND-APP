import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView
} from "react-native";
import { Badge, Text, Button, Icon, Avatar } from "react-native-elements";
import axios from "axios";
import { connect } from "react-redux";
import { Card, Title, Paragraph } from "react-native-paper";
import ActionButton from "react-native-action-button";
import { startSetCampaign } from "../actions/campaign";
import {
  startAddSubscribe,
  startRemoveSubscribe,
  startSetSubscribe
} from "../actions/subscribe";
import * as Progress from "react-native-progress";
export class MyCampaignDashboard extends React.Component {
  componentWillMount() {
    this.props.startSetCampaign();
    this.props.startSetSubscribe();
    console.log("hi bro", this.props.campaign.length);
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#eff4ff" }}>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40%"
            }}
          >
            <Text h1 style={{ color: "#3498db", textAlign: "center" }}>
              Managed Campaign
            </Text>
            {/* <Button title="setSub" onPress={()=>this.props.startSetSubscribe()}></Button> */}
          </View>
          {this.props.campaign
            .filter(val => val._user == this.props.auth.info._id)
            .map(val => (
              <View style={{ flex: 1 }}>
                <Card style={{ marginTop: 10 }}>
                  <Progress.Bar
                    width={Dimensions.get("window").width - 20}
                    progress={
                      val.moneyData.reduce((acc, val) => acc + val) / 2899
                    }
                  />

                  <Card.Content numberOfLines={3}>
                    <Title>{val.Title}</Title>
                    <Paragraph>
                      Raised: $
                      {val.moneyData.reduce((acc, val) => acc + val) || 0.0}
                    </Paragraph>
                  </Card.Content>
                </Card>
              </View>
            ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});
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
)(MyCampaignDashboard);
