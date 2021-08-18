import React from 'react';
import CenterList from "../components/CenterList";
import {getCenters} from '../modules/center';
import {useEffect} from 'react';
import {connect} from 'react-redux';

const CenterListContainer = ({getCenters, loadingCenters, centers}) => {
    // useEffect(()=> {
    //     getCenters();
    // }, [getCenters]);
    useEffect(()=> {
        const fn = async () => {
            try {
                await getCenters();
            } catch (e) {
                console.log(e);
            }
        };
        fn();
    }, [getCenters])
    return (
        <CenterList loadingCenters={loadingCenters} centers={centers}/>
    );
};

export default connect(
    ({center, loading}) => ({
        centers : center.centers,
        loadingCenters : loading['sample/GET_CENTERS']
    }),
    {
        getCenters
    }
) (CenterListContainer)