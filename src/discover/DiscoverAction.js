import jsonData from '../../assets/example'
import axios from 'axios'

export const loadData = () => {
    return (dispatch) => {
        axios.get('https://raw.githubusercontent.com/weeravit/ReactNativePlayground/master/assets/example.json')
            .then((response) => {
                dispatch({
                    type: 'DISCOVER_LOADED',
                    payload: response.data.data
                })
            })
            .catch((error) => {
                console.log(error);
            });

        dispatch({
            type: 'DISCOVER_LOADING',
            payload: jsonData.data
        })
    };
};
