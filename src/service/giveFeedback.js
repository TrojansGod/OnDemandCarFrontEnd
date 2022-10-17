import httpClient from "../http-common";

const giveFeedback123 = (data) => {
    return httpClient.post("/feedback/feed", data);
};

export default  {giveFeedback123};