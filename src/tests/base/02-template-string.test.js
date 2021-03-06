import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-striing.js', () => {
    
    test('getSaludo debe retornar hola Andres ', () => {
        
        const nombre = 'Andres';

        const saludo = getSaludo(nombre)

        expect(saludo).toBe('Hola ' + nombre)
    
    })

    test('getSaludo debe retornar Hola Carlos si o hay argumento nombre', () => {

        const saludo = getSaludo()

        expect (saludo).toBe('Hola Carlos' )

        
    })
    


    
})
