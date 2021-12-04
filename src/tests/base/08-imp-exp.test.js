import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de heroes', () => {
    test('debe retornar un heroe por id', () => {
        

        const id = 1;
        const heroe = getHeroeById(id)

        const heroesData = heroes.find( h => h.id === id)

        expect( heroe ).toEqual (heroesData)
    })

    test('debe retornar undefined si hereo no existe', () => {
        

        const id = 10;
        const heroe = getHeroeById(id)

        expect( heroe ).toBe (undefined)
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const arr = getHeroesByOwner(owner)
        
        const arrMock = arr.filter( h => h.owner === owner )
        
        expect(arr ).toEqual(arrMock)

    })

    
    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const arr = getHeroesByOwner(owner)
        
        expect(arr.length ).toBe(2)

    })





    
})
