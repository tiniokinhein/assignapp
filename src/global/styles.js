import { StyleSheet } from 'react-native'
import { COLOR } from '../components/color/Color'

export default StyleSheet.create({
    scrollView: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLOR.A
    },
    headerTitle: {
        fontFamily: 'PB',
        fontSize: 24,
        color: COLOR.B,
        paddingHorizontal: 10,
        width: 250
    },
    text: {
        fontFamily: 'PM'
    },
    viewLists: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 15,
        backgroundColor: COLOR.A
    },
    listView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 5,
        backgroundColor: COLOR.A
    },
    listSkeleton: {
        width: '100%',
        height: 250,
        borderColor: 'transparent',
        borderWidth: 5,
        borderStyle: 'solid',
        borderRadius: 15
    },
    detailTitle: {
        fontFamily: 'PB',
        fontSize: 20,
        color: COLOR.B,
        paddingHorizontal: 10,
        width: 300
    },
    detailInTitle: {
        fontSize: 25,
        fontFamily: 'PM',
        marginBottom: 15
    },
    detailInPar: {
        fontSize: 18,
        fontFamily:'PR'
    },
    detailImg: {
        width: '100%',
        height: 400
    },
    p20: {
        padding: 20
    },
    p15: {
        padding: 15
    },
    w50: {
        width: '50%'
    },
    size25: {
        fontSize: 25
    },
    listCard: {
        borderRadius: 15,
        borderWidth: 0,
        marginHorizontal: 5,
        marginVertical: 8,
        padding: 0,
        overflow: 'hidden',
        elevation: 0
    },
    listImg: {
        width: '100%',
        height: 180,
    },
    listTitle: {
        color: COLOR.E,
        fontFamily: 'PM'
    },
    inner_grid__3: {
        width: 160,
        borderColor: 'transparent',
        borderWidth: 20,
        borderStyle: "solid",
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 5
    },
    rlpTitle: {
        fontFamily: 'PB',
        fontSize: 24,
        color: COLOR.B,
        marginHorizontal: 20,
        marginTop: 30
    },
    listSCard: {
        borderRadius: 10,
        borderWidth: 0,
        marginHorizontal: 5,
        padding: 0,
        overflow: 'hidden',
        elevation: 0
    },
    searchView: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: 10,
        backgroundColor: COLOR.A
    },
    searchContainer: {
        borderRadius: 0,
        elevation: 0,
        borderWidth: 0,
        padding: 0,
        marginTop: 0,
        marginBottom: 20,
        marginHorizontal: 10,
        backgroundColor: COLOR.A
    },
    searchList: {
        backgroundColor: COLOR.F,
        padding: 0,
        marginTop: 0,
        marginHorizontal: 0,
        marginBottom: 5,
        borderRadius: 15,
        overflow: 'hidden'
    },
    searchImg: {
        width: 80,
        height: 80
    },
    searchText: {
        fontFamily: 'PR',
        fontSize: 16, 
        paddingHorizontal: 5
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    searchBarInput: {
        backgroundColor: COLOR.F,
        height: 60,
        paddingHorizontal: 5
    }
})
