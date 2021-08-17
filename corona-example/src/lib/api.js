import axios from "axios";

export const getCenters = () => axios.get(
    'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=data-portal-test-key'
);