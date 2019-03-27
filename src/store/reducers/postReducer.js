const initState = {
    posts: [
        {id: '1', title: 'lorem ipsum', content: 'ble ble ble ble ble'},
        {id: '2', title: 'lorem ipsum flaszka', content: 'e e e ble ble ble ble ble'},
        {id: '3', title: 'tance', content: 'ble ble ble ble he he he ble'}
    ]
}

const postReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_POST':
            return state;
        case 'CREATE_POST_ERROR':
            return state;
        default:
            return state;
    }
}

export default postReducer