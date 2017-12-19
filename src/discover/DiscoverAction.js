import jsonData from '../../assets/example'
import axios from 'axios'

export const loadData = () => {
    return (dispatch) => {
        axios.get('http://www.json-generator.com/api/json/get/cfzqJjYmCq?indent=2')
            .then((response) => {
                console.log(response);
                
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
