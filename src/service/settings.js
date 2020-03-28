export const getSettings = async () => {
  const rawData = await localStorage.getItem('settings')
  const buffer = JSON.parse(rawData)

  return buffer || { amount: 5, level: 'easy' }
}

export const saveSettings = async data => {
  const buffer = JSON.stringify(data)

  await localStorage.setItem('settings', buffer)
}
