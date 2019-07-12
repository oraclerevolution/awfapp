import React from 'react'
import {View,Text,StyleSheet, FlatList, ScrollView} from 'react-native'
import TipsItem from './Partials/TipsItem'
import tipsdata from '../Helpers/TipsData'
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements'

export default class AwfTipsPage extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Header
                    leftComponent={
                        <Buttons
                            icon={
                                <Icon
                                    name="ios-menu"
                                    size={25}
                                    color="white"
                                />
                            }
                            onPress={()=>this.props.navigation.openDrawer()}
                        />
                    }
                    centerComponent={{ text: 'AWF Tips', style: { color: '#fff' } }}
                />
                <ScrollView>
                    <FlatList
                        data={tipsdata}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <TipsItem tips={item} /*displayChapterSubject={this._displayChapterOfSubject}*/ />}
                        numColumns={2}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})