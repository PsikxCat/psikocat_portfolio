export async function createAccount(formData) {
  try {
    const response = await fetch('/api/contact/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
      }),
    })

    return await response.json()
  } catch (error) {
    throw new Error('Error sending message: ' + error.message)
  }
}
