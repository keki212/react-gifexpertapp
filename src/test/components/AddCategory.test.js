import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas del componente <AddCategory.test.js />', () => {    
    
    const setcategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategory={ setcategories }/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategory={ setcategories }/>);
    })

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo.';
        input.simulate('change', { target: { value }});
        expect(wrapper.find('p').text().trim()).toBe(value)
    });
    
    test('No debe enviar la información con submit', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect( setcategories ).not.toHaveBeenCalled();
    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        //const input = wrapper.find('input');
        const value = 'One Pounch';
        wrapper.find('input').simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
        wrapper.find('form').simulate('submit',{ preventDefault(){}});
        expect(setcategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
})
