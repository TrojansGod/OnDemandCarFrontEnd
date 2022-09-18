import httpClient from "../http-common";

const giveFeedback123 = (data) => {
    return httpClient.post("/feedback/give", data);
};

export default  {giveFeedback123};