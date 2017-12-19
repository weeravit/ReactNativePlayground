import jsonData from '../../assets/example'

export const loadData = () => {
    return {
        type: 'HOME_LOAD_DATA',
        payload: jsonData.data
    }
};
