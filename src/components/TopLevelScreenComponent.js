import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
} from 'react-native';

import Articles from './../components/articles'

// This is a dumb component that is common for native and web

class TopLevelScreenComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to top level component of this app.',
            dispatchMessage: 'Dispatch an action to:',
            passActionDispatchValue: 1,
            failActionDispatchValue: 0,
        };

        this.navigateToHome = this.navigateToHome.bind(this)
    }

    navigateToHome() {
      this.props.history.push('/home')
    }

    render() {

        return (
            <View style={styles.main}>
                <ScrollView>
                  <View style={styles.pageMain}>
                    <View style={{width: '95%'}}>
                      <Articles />
                    </View>
                  </View>
                </ScrollView>
                {/* <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.state.dispatchMessage}
                    </Text>

                    <View style={styles.button}>

                        <Button
                            title={"Pass"}
                            onPress={this.props.passDispatchedAction}
                        />
                    </View>
                    <View style={styles.button}>

                        <Button
                            title={"Fail"}
                            onPress={this.props.failDispatchedAction}
                        />
                    </View>
                    <View style={styles.button}>

                        <Button
                            title={"Home"}
                            onPress={this.navigateToHome}
                        />
                    </View>
                </View>
                <Text style={styles.biggerText}>
                    {this.props.message}
                </Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  main: {
    marginTop: 70,
  },
  pageMain: {
    flex: 1,
    alignItems: 'center'
  },
  row: {
      flexDirection: 'row',
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  biggerText: {
      fontSize: 17,
      alignSelf: 'center'
  },
  button: {
      margin: 5
  }
});

export default TopLevelScreenComponent;

