import { getGifs } from '../../helpers/getGifs'

describe('Pruebas del helper getGifs.test.js', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        //console.log(gifs);
        expect(gifs.length).toBe(10);
    });

    test('Se debe enviar el parametro category', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
    })
    
    
})
