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

const sampleCenter = {
    centerName: '코로나19 중앙 예방접종센터',
    facilityName: '국립중앙의료원 D동',
    address: '서울특별시 중구 을지로 39길 29',
    lat: '37.567817',
    lng: '127.004501'
}


const CenterList = () => {
    const [centers, setCenters] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=data-portal-test-key'
                );
                setCenters(response.data.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    if(loading) {
        return <CenterListBlock>대기 중..</CenterListBlock>
    }

    if(!centers) {
        return null;
    }

    return (
        <CenterListBlock>
            {
                centers.map(center=>(
                    <CenterItem key={center.id} center={center}/>
                ))
            }
        </CenterListBlock>
    );
};

export default CenterList;