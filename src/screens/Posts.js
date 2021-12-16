import  React,{useState} from 'react';
import { View, StyleSheet, TouchableOpacity,FlatList
,Pressable, Linking,
} from 'react-native';
import 'intl-pluralrules'
import { onlineManager } from 'react-query'
// import '../../assets/i18n/i18n';
// import  from '@react-native-community/netinfo'
import usePosts from '../hooks/usePosts';
import { Text } from '../components/Text';
import{ colors} from '../colors';
import {useTranslation} from 'react-i18next';
// import '../../assets/i18n/i18n';
import { initReactI18next } from 'react-i18next';
// import NetInfo from "@react-native-community/netinfo";
// import 'intl/assets/en';

// import {
//  } from 'react-native-gesture-handler';

export const Posts = ({ navigation }) => {
    // const {t, i18n} = useTranslation();
    const [currentLanguage,setLanguage] =useState('en');
    // const [online,setOnline] =useState('')
    const { data, isLoading, isSuccess } = usePosts();
    // const changeLanguage = value => {
    //     i18n
    //       .changeLanguage(value)
    //       .then(() => setLanguage(value))
    //       .catch(err => console.log(err));
    //   };
    // onlineManager.setEventListener(setOnline => {
    //   return NetInfo.addEventListener(state => {
    //     setOnline(state.isConnected)
    //   })
    // })
    return (
        <View style={styles.container}>
            {/* <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
          {t('hello')}{' '}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
          {t('this line is translated')}
        </Text>
        <Pressable
          onPress={() => changeLanguage('en')}
          style={{
            backgroundColor:
              currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
            padding: 20,
          }}>
          <Text>Select English</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            changeLanguage('hi')
            //
          }
          style={{
            backgroundColor:
              currentLanguage === 'hi' ? '#33A850' : '#d3d3d3',
            padding: 20,
          }}>
          <Text>हिंदी का चयन करें</Text>
        </Pressable>
      </View> */}
            {isLoading && (
                <View>
                    <Text>Loading...</Text>
                </View>
            )}

            {isSuccess && (
                <View style ={{flex:1}}>
                    <Text style={styles.header}>all posts</Text>
                    <FlatList
                        data={data}
                        style={styles.wrapper}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                  // navigation.navigate('Post', { post: item })
                                  Linking.openURL('demo://app/notifications')
                                }
                                style={styles.post}
                            >
                                <View style={styles.item}>
                                    <Text style={styles.postTitle}>
                                      {item.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom:50,
        paddingVertical:20
    },
    wrapper: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal:10
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    header: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.primary,
        paddingVertical: 10
    },
    post: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    postTitle: { color: colors.white, textTransform: 'capitalize' }
});