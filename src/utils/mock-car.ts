import { ISelectOption } from "../components/Input/Select";
import { ICarData } from "../types/car";

export const mockCar: ICarData = {"cars": 
    [
        {
         "id": 55,
         "timestamp_cadastro" : 1696549488,
         "modelo_id" : 88,
         "ano": 2014, 
         "combustivel" : "FLEX", 
         "num_portas" : 4,
         "cor": "BRANCA",
         "nome_modelo" : "ETIOS",
         "valor" : 36000,
         "brand":1,
         "brand_name": "Toyota"
        },
        {

         "id": 23,
         "timestamp_cadastro" : 1696531236,
         "modelo_id" : 77,
         "ano": 2014, 
         "combustivel" : "FLEX", 
         "num_portas" : 4,
         "cor": "PRETO",
         "nome_modelo" : "COROLLA",
         "valor" : 120000, 
         "brand":1,
         "brand_name": "Toyota"
        },
        {

         "id": 3,
         "timestamp_cadastro" : 16965354321,
         "modelo_id" : 79,
         "ano": 1993, 
         "combustivel" : "DIESEL", 
         "num_portas" : 4,
         "cor": "AZUL",
         "nome_modelo" : "HILLUX SW4",
         "valor" : 47500,
         "brand":1,
         "brand_name": "Toyota"
        }
    ]

 }

 export const mockBrand: ISelectOption[] = [
     {
         value: 'chevrolet',
         label: 'Chevrolet'
     },
     {
         value: 'fiat',
         label: 'Fiat'
     },
     {
         value: 'ford',
         label: 'Ford'
     },
     {
         value: 'hyundai',
         label: 'Hyundai'
     },
     {
         value: 'peugeot',
         label: 'Peugeot'
     },
     {
         value: 'renault',
         label: 'Renault'
     },
    {
        value: 'toyota',
        label: 'Toyota'
    },
    {
        value: 'volkswagen',
        label: 'Volkswagen'
    }
 ]

 export const mockFuel: ISelectOption[] = [
    {
        value: 'diesel',
        label: 'Diesel'
    },
    {
        value: 'etanol',
        label: 'Etanol'
    },
    {
        value: 'flex',
        label: 'Flex'
    },
    {
        value: 'gasolina',
        label: 'Gasolina'
    },
 ]