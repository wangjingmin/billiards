export const g = 9.8
export let mu = 0.29
export let muS = 0.89
export let muC = 0.9
export let rho = 0.05
export let m = 0.2
export let R = 0.032
export let e = 0.85
export let Mz: number
export let Mxy: number
export let I: number

refresh()

function refresh() {
  Mz = ((mu * m * g * 2) / 3) * rho
  Mxy = (7 / (5 * Math.sqrt(2))) * R * mu * m * g
  I = (2 / 5) * m * R * R
}

export function setR(val: number) {
  R = val
  refresh()
}
export function setm(val: number) {
  m = val
  refresh()
}
export function setmu(val: number) {
  mu = val
  refresh()
}
export function setrho(val: number) {
  rho = val
  refresh()
}
export function setmuS(val: number) {
  muS = val
}
export function sete(val: number) {
  e = val
}
export function setmuC(val: number) {
  muC = val
}
