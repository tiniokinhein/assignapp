import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Card } from 'react-native-elements'
import styles from '../../global/styles'

const RelatedPosts = (props) => {

    const { post } = props
    const navigation = useNavigation()   

    return (
        <View style={styles.inner_grid__3}>
            <Card containerStyle={styles.listSCard}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Detail', { itemId: post.id })}
                >
                    <View>
                        <Image
                            source={{ uri: post.image }}
                            resizeMode="cover"
                            style={styles.listImg}
                        />
                    </View>
                    <View style={styles.p15}>
                        <Text style={styles.listTitle}>
                            {post.title.slice(0,30)}
                        </Text>
                    </View>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

export default RelatedPosts
