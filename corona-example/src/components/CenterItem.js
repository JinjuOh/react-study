import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const CenterItemBlock = styled.div`
  display: flex;
  
  .map {
    margin-right: 1rem;
  }
  
  .contents {
    h2 {
      margin: 0;
      a {
      color : black;
      }
    }
  
      p {
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
      }
  }
  
  & + & {
  margin-top: 3rem;
`;

const {kakao} = window;

const CenterItem = ({center}) => {

    const {centerName, facilityName, address, lat, lng} = center;

    const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 9
    };

    const container = useRef(null);

    useEffect(() => {
        const map = new kakao.maps.Map(container.current, options);
        // 마커가 표시될 위치입니다
        var markerPosition = new kakao.maps.LatLng(lat, lng);
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        map.setDraggable(false);
    }, []);

    return (
        <CenterItemBlock>
            <div ref={container} style={{width: '160px', height: '160px'}} className={"map"}></div>
            <div className={"contents"}>
                <h2>
                    <a href={"https://google.com"} target={"_blank"} rel={"noopener norefferer"}>
                        {centerName}
                    </a>
                </h2>
                <p>{address} {facilityName}</p>
            </div>
        </CenterItemBlock>
    );
};

export default CenterItem;