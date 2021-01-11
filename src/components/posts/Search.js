import React from 'react'
import { View, Text, Image ,TouchableOpacity } from 'react-native'
import { Card, ListItem, SearchBar } from 'react-native-elements'
import { db } from '../../config/firebase'
import styles from '../../global/styles'
import { COLOR } from '../color/Color'
import { useNavigation } from '@react-navigation/native'

const Search = () => {

    const [search,setSearch] = React.useState('')
    const [items,setItems] = React.useState([])
    const navigation = useNavigation()

    const updateSearch = (search) => {
        setSearch(search)
    }

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

    const filters = items.filter(fr => fr.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)

    const results = (
        <Card containerStyle={styles.searchContainer}>
            {
                filters.map((p) => (
                    <TouchableOpacity
                        key={p.id}
                        onPress={() => navigation.navigate('Detail', { itemId: p.id })}
                    >
                        <ListItem containerStyle={styles.searchList}>
                                <Image 
                                    source={{ uri: p.image }} 
                                    resizeMode="cover" 
                                    style={styles.searchImg} 
                                />
                                <View style={styles.scrollView}>
                                    <Text style={styles.searchText}>{p.title}</Text>
                                </View>
                        </ListItem>
                    </TouchableOpacity>
                ))
            }
        </Card>
    )

    return (
        <>
            <SearchBar
                round
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInput}
                searchIcon={styles.size25}
                inputStyle={styles.text}
                lightTheme={true}
                placeholder="Search"
                placeholderTextColor={COLOR.A}
                onChangeText={updateSearch}
                value={search}
            />
            
            {
                search.length >= 4 ? results : null
            }
        </>
    )
}

export default Search
