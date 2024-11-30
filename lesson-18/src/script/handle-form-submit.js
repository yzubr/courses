export default async function handleFormSubmit(event) {
  event.preventDefault()
  console.log(event.target)
  const formData = new FormData(event.target)
  console.log(formData)

  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    body: formData
    // credentials: 'include'
  })
  const data = await response.json()
  console.log(data)
  localStorage.setItem('refreshToken', data.refreshToken)
}
