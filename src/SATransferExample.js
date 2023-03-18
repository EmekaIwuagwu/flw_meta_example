import {
  StyleSheet,
  Alert,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const SATransferExample = () => {
  const [account_bank, setAccountBank] = useState("");
  const [beneficiary_name, setBeneficiaryName] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [currency, setCurrency] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [recipient_address, setRecipientAddress] = useState("");

  const InitiateTransfers = () => {
    //Alert.alert('Test');
    //var amount_int = parseInt(amount,10);

    let item = {
      account_bank,
      beneficiary_name,
      account_number,
      amount,
      narration,
      currency,
      meta: {
        first_name,
        last_name,
        email,
        mobile_number,
        recipient_address,
      },
    };

    fetch("https://api.flutterwave.com/v3/transfers", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer FLWSECK_TEST-153740d351951b5f6d5ae8b903e0c467-X",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.message === "Transfer Queued Successfully") {
          /*localStorage.setItem('userinfo', username);
            history.push('/dashboard');*/
          Alert.alert("Transfer Complete");
        } else {
          alert(responseJson.message);
        }
      })
      .catch((error) => {
        Alert.alert(error);
      });
  };

  return (
    <View>
      <View style={styles.space2} />
      <ScrollView
        contentContainerStyle={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ marginTop: 50 }} />
        <TextInput
          placeholder=" Account Bank"
          value={account_bank}
          onChangeText={(text) => setAccountBank(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" Beneficiary Name"
          value={beneficiary_name}
          onChangeText={(text) => setBeneficiaryName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" Account Number"
          value={account_number}
          onChangeText={(text) => setAccountNumber(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" Amount"
          value={parseInt(amount)}
          onChangeText={(text) => setAmount(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" Narration"
          value={narration}
          onChangeText={(text) => setNarration(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" Currency"
          value={currency}
          onChangeText={(text) => setCurrency(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" First Name"
          value={first_name}
          onChangeText={(text) => setFirstName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" Last Name"
          value={last_name}
          onChangeText={(text) => setLastName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" Mobile Number"
          value={mobile_number}
          onChangeText={(text) => setMobileNumber(text)}
          style={styles.input}
        />
        <TextInput
          placeholder=" Receipient Address"
          value={recipient_address}
          onChangeText={(text) => setRecipientAddress(text)}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => {
            InitiateTransfers();
          }}
          style={styles.button}
        >
          <Text style={styles.loginbtn}> Submit </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SATransferExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    width: 300,
    height: 55,
    margin: 5,
    fontSize: 19,
    fontWeight: "bold",
    borderBottomColor: "#030303",
    borderBottomWidth: 1,
    marginBottom: 30,
  },

  button: {
    width: 300,
    height: 52,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#030303",
    alignItems: "center",
    marginBottom: 50,
  },

  Regbutton: {
    width: 300,
    height: 52,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#030303",
  },

  loginbtn: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  AccountBalance: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "left",
  },

  loginbtn2: {
    color: "#030303",
    fontSize: 20,
    fontWeight: "bold",
  },

  logo: {
    width: 150,
    height: 150,
  },

  space: {
    width: 10,
    height: 20,
  },

  space2: {
    width: 10,
    height: 10,
  },

  imageStyle: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    margin: 2,
    height: 15,
    width: 15,
    resizeMode: "stretch",
    marginBottom: 8,
    marginTop: 8,
    alignItems: "center",
  },
});
