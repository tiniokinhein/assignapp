import React from 'react'
import { Header } from 'react-native-elements'
import { View } from 'react-native'
import { COLOR } from '../components/color/Color'
import styles from '../global/styles'
import Search from '../components/posts/Search'

const Home = () => {

    return (
        <>
            <Header
                backgroundColor={COLOR.F}
                statusBarProps={{
                    backgroundColor: COLOR.F,
                    barStyle: 'dark-content'
                }}
                barStyle="dark-content"
                leftComponent={{
                    text: 'Assign App',
                    style: styles.headerTitle
                }}
            />

            <View style={styles.container}>
                <Search />
            </View>
        </>
    )
}

export default Home