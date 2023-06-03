export default function getNextAnniversary(date) {
  const currentDate = new Date()
  const currentDateMs = currentDate.getTime()
  const currentYear = currentDate.getFullYear()

  let nextAnniversary = new Date(`${date}`)
  nextAnniversary.setFullYear(currentYear)
  let nextAnniversaryMs = nextAnniversary.getTime()

  if (currentDateMs > nextAnniversaryMs) {
    nextAnniversary = nextAnniversary.setFullYear(currentYear + 1)
    return nextAnniversary
  }
  return nextAnniversary
}
