const BASE_URL = 'http://localhost:3000';

export const createLink = ({ topicName, url, description }) => fetch(`${BASE_URL}/api/topics/${topicName}/links`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url,
    description,
    topicName,
  }),
}).then(response => response.json());
