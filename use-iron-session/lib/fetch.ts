const apiServer = 'https://dummyjson.com';

export const fetchData = (
  endpoint: string,
  params: object,
  type: 'POST' | 'GET' = 'POST', 
) => {
  return fetch(apiServer + endpoint, {
    method: type,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...params,
      expiresInMins: 30, // optional, defaults to 60
    })
  }).then(res=>res.json())
}