import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    

    test('getUser debe retornar unn objeto', () => {
        
    //     const user = {
    //         uid: 'ABC123',
    //         username: 'El_Papi1502'
    // }

    //     expect(getUser()).toStrictEqual(user)

            const userMock = {
                uid: 'ABC123',
                username: 'El_Papi1502'
        }

            const user = getUser()
            
            expect(userMock).toEqual(user)
    })

    test('getUsuarioActivo debe retornar unn objeto', () => {
        
        const nombre = 'Andres'

        const userMock = {
            uid: 'ABC567',
            username: nombre
        }

        expect(getUsuarioActivo(nombre)).toEqual(userMock)

        
    })
    
    
})
