import React from "react";

import { setSpare } from "../actions/bankAuth";
import { connect } from "react-redux";
import { FAB } from "react-native-paper";
import PlaidAuthenticator from "react-native-plaid-link";
import { api } from "../api";

export class BankLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { update: true };
  }
  static navigationOptions = {
    header: null
  };

  onMessage = async data => {
    console.log(data);
    if (data.action == "plaid_link-undefined::connected") {
      publicToken = data.metadata.public_token;
      spareAmount = await api.post("/banking", { body: { publicToken } });
      this.props.setSpare(spareAmount.body);
      this.props.navigation.navigate("Dashboard");
    } else {
      this.setState({ update: !this.state.update });
    }
  };
  render() {
    return (
      <PlaidAuthenticator
        onMessage={this.onMessage}
        publicKey="c34f505df53215f364ae16f9657339"
        env="sandbox"
        product="auth,transactions"
        clientName="Spare Bare Project"
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSpare: amount => dispatch(setSpare(amount))
});

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth,
    totalSpare: state.totalSpare
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankLogin);
