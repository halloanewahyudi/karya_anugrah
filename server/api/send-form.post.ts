export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const res = await $fetch('https://kat.sementara.net/wp-json/custom-form/v1/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        'your-name': body.name,
        'your-email': body.email,
        'your-message': body.message
      }
    })

    return res
  } catch (error: any) {
    console.error('❌ Gagal mengirim ke WP:', error)
    return {
      success: false,
      message: 'Gagal mengirim ke WordPress',
      details: error?.data || error?.message || 'Unknown error'
    }
  }
})
