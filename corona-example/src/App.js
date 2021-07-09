import React, { useEffect, useRef } from 'react';
import axios from "axios";
import CenterList from "./components/CenterList";

// https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15077586#layer-api-guide

const { kakao } = window;

const App = () => {
    return <CenterList/>
};

export default App;