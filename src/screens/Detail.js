import { View, Text , ScrollView, Image } from 'react-native'
import React from 'react'
import { Header } from 'react-native-elements'
import { COLOR } from '../components/color/Color'
import styles from '../global/styles'
import { db } from '../config/firebase'
import RelatedPosts from '../components/posts/RelatedPosts'


const Detail = ({ route , navigation }) => {

    const [item,setItem] = React.useState(null)
    const [items,setItems] = React.useState([])
    const scroll = React.useRef()
    const { itemId } = route.params
    
    React.useEffect(() => {
        db
        .ref(`/posts/${itemId}`)
        .on('value', (snap) => {
            setItem(snap.val())
        })
        
        db
        .ref('/posts')
        .on('value', (snapshot) => {
            var data = []
            snapshot.forEach((snap) => {
                data.push(snap.val())
            })
            
            setItems(data)
        })

        scroll
        .current
        .scrollTo({
            x: 0,
            y: 0,
            animated: true
        })
        
    }, [itemId])

    const title = item ? item.title : null
    const image = item ? item.image : null
    const description= item ? item.description : null

    const filterPosts = items.filter(fr => (item ? item.id : null) !== fr.id)
    const relatedPosts = filterPosts.length ? (
        <>
            <Text style={styles.rlpTitle}>Related Posts</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    filterPosts.map((p) => (
                        <RelatedPosts post={p} key={p.id}/>
                    ))
                }
            </ScrollView>
        </>
    ) : null

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
                    icon: 'arrow-back',
                    type: 'Ionicons',
                    size: 30,
                    onPress: () => navigation.goBack()
                }}
                centerComponent={{
                    text: title,
                    style: styles.detailTitle
                }}
            />

            <ScrollView ref={scroll}>
                <View style={styles.scrollView}>
                    <Image 
                        source={{ uri: image }}
                        resizeMode="cover"
                        style={styles.detailImg}
                    />
                    <View style={styles.p20}>
                        <Text style={styles.detailInTitle}>
                            {title}
                        </Text>
                        <Text style={styles.detailInPar}>
                            {description}
                        </Text>
                    </View>
                </View>

                <View style={styles.scrollView}>
                    {relatedPosts}
                </View>
            </ScrollView>
        </>
    )
}

export default Detail
