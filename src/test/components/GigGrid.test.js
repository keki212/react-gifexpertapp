import React from 'react'
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas del componente <GigGrid />', () => {
    const category = 'One Pounch';
    
    
    test('Debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data : [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se carga las imagenes', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquiercosa/cosa.jpg',
                title: 'Cualquier cosa',
                username: 'La cosa'
            },
            {
                id: 'ABD',
                url: 'https://localhost/cualquiercosa/cosa.jpg',
                title: 'Cualquier cosa',
                username: 'La cosa'
            },
            {
                id: 'ABE',
                url: 'https://localhost/cualquiercosa/cosa.jpg',
                title: 'Cualquier cosa',
                username: 'La cosa'
            }
        ]
        useFetchGifs.mockReturnValue({
            data : gifs,
            loading: false
        })
        
        const wrapper = shallow(<GifGrid category={category} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})
