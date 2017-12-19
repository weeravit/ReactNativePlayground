import jsonData from '../../assets/example'

export const loadData = () => {

    return {
        type: 'DISCOVER_LOAD_DATA',
        payload: jsonData.data
    }
};
