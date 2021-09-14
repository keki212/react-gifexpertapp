import React from 'react'
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Prueba del componente <GifGridItem />', () => {
    const title = 'Imagen para la prueba';
    const url ='https://imagenes.com/images.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    test('Debe mostrar el componente correctamente', () => {        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el titulo', ()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener la url y alt de las props', () => {
       const img = wrapper.find('img');
        //const { src, alt } = img.props();
        //expect(src).toBe(url);
        //expect(alt).toBe(title);

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('Debe tener animate__backInRight', () => {
        //const className = 'animate_fadeIn'
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__backInRight') ).toBe(true);
    })
    

    
})
