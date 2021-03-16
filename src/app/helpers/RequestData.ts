export async function getData(url) {
  const rawResponse = await fetch(url, {
    method: 'GET',
    headers: {
      'x-api-key': '6dbcd228-556e-49f5-9c55-5bf6bd32e788',
    },
    
  });
  return await rawResponse.json();
}

export async function postData(url, data) {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': '6dbcd228-556e-49f5-9c55-5bf6bd32e788',
    },
    body: JSON.stringify(data),
  });
  return await rawResponse.json();
}

export async function deleteData(url, id) {
  await fetch(url + '/' + id, {
    method: 'DELETE',
    headers: {
      'x-api-key': '6dbcd228-556e-49f5-9c55-5bf6bd32e788',
    },
  })
}
