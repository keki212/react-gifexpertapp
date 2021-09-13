import React from 'react'
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Prueba del componente <GifGridItem />', () => {
    const title = 'Imagen para la prueba';
    const url ='https://imagenes.com/images.jpg';
    
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url} />)
        expect(wrapper).toMatchSnapshot();
    })
    
})
