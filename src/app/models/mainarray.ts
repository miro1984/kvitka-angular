export interface MainArray {
  id: number,
  name: string,
  link: string,
  drop: boolean,
  sublist?: SubList[]
}
export interface SubList {
  id: number; name: string; link: string
}
