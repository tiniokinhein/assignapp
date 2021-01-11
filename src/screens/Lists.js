import { Header } from 'react-native-elements'
import { ScrollView, View, RefreshControl } from 'react-native'
import React from 'react'
import styles from '../global/styles'
import PostLists from '../components/posts/PostLists'
import { db } from '../config/firebase'
import { COLOR } from '../components/color/Color'
import SkeletonContent from 'react-native-skeleton-content'


const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout)
    })
}

const Lists = () => {

    const [items,setItems] = React.useState([])

    const [refreshing, setRefreshing] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(1000).then(() => setRefreshing(false))
    }, [refreshing])

    React.useEffect(() => {
        db
        .ref('/posts')
        .on('value', (snapshot) => {
            var data = []
            snapshot.forEach((snap) => {
                data.push(snap.val())
            })

            setItems(data)
        })
    }, [])

    const posts = items.length ? (
        items.map(p => (
            <PostLists post={p} key={p.id} />
        ))
    ) : (
        <View style={styles.listView}>
            {
                Array(10).fill().map((item,index) => (
                    <View
                        key={index}
                        style={styles.w50}
                    >
                        <SkeletonContent
                            
                            isLoading={true}
                            layout={[ styles.listSkeleton ]}
                            boneColor={COLOR.F}
                            highlightColor={COLOR.A}
                        />
                    </View>
                ))
            }
        </View>
    )

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
                    text: 'Lists',
                    style: styles.headerTitle
                }}
            />

            <ScrollView 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View 
                    style={
                        styles.scrollView,
                        styles.viewLists
                    }
                >
                    {posts}
                </View>
            </ScrollView>
        </>
    )
}

export default Lists
