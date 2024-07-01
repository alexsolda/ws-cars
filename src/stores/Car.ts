import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ICar, ICarData } from '../types/car'
import { mockCar } from '../utils/mock-car'

type ICarByBrandState = {
    cars: ICarData 
    addCar: (car: ICar) => void
}

export const useCarsByBrand = create<ICarByBrandState>()(persist((set, get) => ({
    cars: mockCar,
    addCar: (car: ICar) => {
      const newState = {
        cars: [...get().cars.cars, car]
      }  
      set({
        cars: newState
      })
    }
  }), {
    name: 'cars_by_brand'
  }))