import React from 'react';
import {connect} from "react-redux";
import  SampleAction from './../actions/SampleAction';
import TopLevelScreenComponent from './../components/TopLevelScreenComponent'
import Header from './../components/header'
import {
    StyleSheet,
    View,
} from 'react-native';

import Articles from './../components/articles'

/**
 * Home
  CoverImage
  ShareActions
  Articles
    Article
      Title
      PodcastPlayer
      Description
      
 */

class EntryScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to top level component of this app.',
            dispatchMessage: 'Dispatch an action to:',
            passActionDispatchValue: 1,
            failActionDispatchValue: 0,
        };
        this.passDispatchedAction = this.passDispatchedAction.bind(this);
        this.failDispatchedAction = this.failDispatchedAction.bind(this)
    }

    passDispatchedAction() {
        this.props.dispatch(SampleAction(this.state.passActionDispatchValue))
    }

    failDispatchedAction() {
        this.props.dispatch(SampleAction(this.state.failActionDispatchValue))

    }

    render() {

        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.main}>
                  <Articles />
                </View>
                <TopLevelScreenComponent
                    passDispatchedAction={this.passDispatchedAction}
                    failDispatchedAction={this.failDispatchedAction}
                    message={this.props.sampleReducer.message}
                    history={this.props.history}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
    },
    main: {
      marginTop: 70
    }
});

function mapStateToProps(state, ownProps) {
    return ({
            sampleReducer: state.sampleReducer,
            location: ownProps.location
        }

    )
}

export default connect(mapStateToProps)(EntryScreen);

