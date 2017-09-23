import React from 'react';
import { Text, Button, View } from 'react-native';
import Search from 'react-native-search-box';

import { StackNavigator } from 'react-navigation';

export default class AddFriend extends React.Component {
    static navigationOptions = {
      title: 'Add Friends'
    };
    beforeFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('beforeFocus');
            resolve();
        });
    }

    onFocus = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onFocus', text);
            resolve();
        });
    }

    afterFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('afterFocus');
            resolve();
        });
    }

    onCancel = () => {
        return new Promise((resolve, reject) => {
            console.log('onCancel');
            resolve();
        });
    }

    afterDelete = () => {
        return new Promise((resolve, reject) => {
            console.log('afterDelete => toggle keyboard');
            this.refs.search_bar.focus();
            resolve();
        });
    }

    onSearch = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onSearch', text);
            resolve();
        });
    }

    onChangeText = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onChangeText', text);
            resolve();
        });
    }
    render() {
        return(
          <View>
            <Search
              ref="search_box"
              onSearch={this.onSearch}
              onChangeText={this.onChangeText}
              onDelete={() => console.log('onDelete')}
              afterDelete={this.afterDelete}
              beforeFocus={this.beforeFocus}
              onFocus={this.onFocus}
              afterFocus={this.afterFocus}
              onCancel={this.onCancel}
            />
          </View>
        );
    }
}
