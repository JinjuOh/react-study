import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CenterItem from "./CenterItem";

const CenterListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleCenter = {
//     centerName: '코로나19 중앙 예방접종센터',
//     facilityName: '국립중앙의료원 D동',
//     address: '서울특별시 중구 을지로 39길 29',
//     lat: '37.567817',
//     lng: '127.004501'
// }


const CenterList = ({loadingCenters, centers}) => {
    return (
        <div>
            {loadingCenters && '로딩 중...'}
            {!loadingCenters && centers && (
                <CenterListBlock>
                    {
                        centers.data.map(center => (
                            <CenterItem key={center.id} center={center}/>
                        ))
                    }
                </CenterListBlock>
            )}
        </div>
    );
};

export default CenterList;