export function obtenerAniversario(date) {
  const currentDate = new Date();
  const currentDateMs = currentDate.getTime();
  const currentYear = currentDate.getFullYear();

  let nextAnniversary = new Date(`${date}, ${currentYear}`);
  let nextAnniversaryMs = nextAnniversary.getTime();

  if (currentDateMs > nextAnniversaryMs) {
    nextAnniversary = new Date(`${date}, ${currentYear + 1}`);
    return nextAnniversary;
  }
  return nextAnniversary;
}
