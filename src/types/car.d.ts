interface ICar {
    id: number;
    timestamp_cadastro : number;
    modelo_id : number;
    ano: number; 
    combustivel : string; 
    num_portas : number;
    cor: string;
    nome_modelo : string;
    valor : number | string;
    brand: number;
    brand_name: string;
}

export interface ICarData {
    cars: ICar[]
}