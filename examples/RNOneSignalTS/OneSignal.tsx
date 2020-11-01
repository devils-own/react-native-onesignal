import OneSignal from 'react-native-onesignal';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface Props {
  name: string;
}

export interface State {
    name: string;
}

class OneSignalDemo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            name: props.name
        }
    }

    async componentDidMount() {
        OneSignal.setAppId("ce8572ae-ff57-4e77-a265-5c91f00ecc4c");
        OneSignal.setLogLevel(6, 0);
        const state = await OneSignal.getDeviceState();
        this.setState({ name : state.emailAddress });
    }

    render() {
        return (
            <View style={styles.root}>
                <Text>OneSignal</Text>
            </View>
        );
    }
};

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  }
});

export default OneSignalDemo;
