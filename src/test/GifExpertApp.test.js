import React from 'react'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas del componente <GifExpertApp />', () => {
    
    test('Debe mostrar correctamente el componente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar la lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaulCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
