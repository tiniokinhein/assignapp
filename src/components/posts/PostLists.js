import React from 'react'
import { Card } from 'react-native-elements'
import { View, Text, Image } from 'react-native'
import styles from '../../global/styles'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const PostLists = (props) => {

    const { post } = props
    const navigation = useNavigation()

    return (
        <View style={styles.w50}>
            <Card containerStyle={styles.listCard}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail', { itemId: post.id })}>
                    <View>
                        <Image
                            source={{ uri: post.image }}
                            resizeMode="cover"
                            style={styles.listImg}
                        />
                    </View>
                    <View style={styles.p15}>
                        <Text style={styles.listTitle}>
                            {post.title.slice(0,40)}
                        </Text>
                    </View>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

export default PostLists