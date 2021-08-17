import React, { useEffect, useRef } from 'react';
import axios from "axios";
import CenterList_back from "./components/CenterList_back";
import CenterListContainer from "./containers/CenterListContainer";

// https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15077586#layer-api-guide

const { kakao } = window;

const App = () => {
    return <CenterListContainer/>
};

export default App;