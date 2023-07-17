

export function updateLocalStorage(keyLocalstorage,data)
{
  localStorage.setItem(keyLocalstorage,JSON.stringify(data))
}


export function deleteLocalStorage(keyLocalstorage)
{
  localStorage.removeItem(keyLocalstorage)
}