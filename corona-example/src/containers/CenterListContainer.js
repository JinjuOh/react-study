import React from 'react';
import CenterList from "../components/CenterList";
import {getCenters} from '../modules/center';
import {useEffect} from 'react';
import {connect} from 'react-redux';

const CenterListContainer = ({getCenters, loadingCenters, centers}) => {
    useEffect(()=> {
        getCenters();
    }, [getCenters]);
    return (
        <CenterList loadingCenters={loadingCenters} centers={centers}/>
    );
};

export default connect(
    ({center}) => ({
        centers : center.centers,
            loadingCenters : center.loading.GET_CENTERS
    }),
    {
        getCenters
    }
) (CenterListContainer)