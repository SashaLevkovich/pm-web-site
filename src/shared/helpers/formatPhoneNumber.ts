export const formatPhoneNumber = (phone: string): string => {
  const match = phone.match(/^\+375(\d{2})(\d{3})(\d{2})(\d{2})$/)
  if (!match) return phone
  const [, code, part1, part2, part3] = match
  return `+375 (${code}) ${part1}-${part2}-${part3}`
}
