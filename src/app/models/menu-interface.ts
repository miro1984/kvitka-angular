export interface Imenu {
    id: number,
    name: string,
    link: string,
    drop: boolean,
    sublist?: ISubList[]
}

export interface ISubList {
    id: number;
    name: string;
    link: string
}
