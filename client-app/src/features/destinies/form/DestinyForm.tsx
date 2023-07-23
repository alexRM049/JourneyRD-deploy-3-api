import React, { ChangeEvent, useState } from 'react';
import { Button, Dropdown, Form, Segment } from 'semantic-ui-react';
 import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer (function DestinyForm() {

    const {destinyStore} = useStore()
    const {selectedDestiny, closeForm, createDestiny, updateDestiny } = destinyStore;

    const initialState = selectedDestiny ?? {
        id: '',
        name: '',
        category: '',
        region: '',
        province: '',
        phoneNumber: '',
        city: '',
        maxPeople: 0,
        budget: 0,
        description: '',
        destinyLong: 0,
        destinyLat: 0,
        // name: string = '';
        // category: string = '';
        // region: string = '';
        // province: string = '';
        // phoneNumber: string = '';
        // city: string = '';
        // maxPeople: number = 0;
        // budget: number = 0;
        // description: string = '';
        // destinyLong: number = 0;
        // destinyLat: number = 0;
    }

    const categoryOptions = [
        {key: 'category0',text: 'Sol y Playa', value:'solyplaya'},
        {key: 'category1',text: 'Naturaleza', value:'naturaleza'},
        {key: 'category2',text: 'Cultura', value:'cultura'},
        {key: 'category3',text: 'Gastronomia', value:'gastronomia'},
    ]

    const [destiny, setDestiny] = useState(initialState)
    
    function handleSubmit(){
        destiny.id ? updateDestiny(destiny) : createDestiny(destiny);

    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setDestiny({...destiny, [name]: value})
    }

    return (
        <>
        <Segment clearing style={{marginTop:'4em'}}>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input name='name' placeholder='Nombre del destino' onChange={handleInputChange} value={destiny.name} />
                <Form.Dropdown name='category' placeholder='Seleccione la categoria' options={categoryOptions} fluid selection value={destiny.category} />
                <Form.Input name='city' placeholder='Ciudad' onChange={handleInputChange} value={destiny.city}/>
                <Form.Input name='region' placeholder='Región' onChange={handleInputChange} value={destiny.region}/>
                <Form.Input name='province' placeholder='Provincia' onChange={handleInputChange} value={destiny.province}/>
                <Form.Input name='phoneNumber' placeholder='Número de teléfono' type='number' onChange={handleInputChange} value={destiny.phoneNumber}/>
                <Form.Input name='maxPeople' placeholder='Maxima cantidad de personas permitidas' type='number' onChange={handleInputChange} value={destiny.maxPeople}/>
                <Form.Input name='budget' placeholder='Presupuesto' type='number' onChange={handleInputChange} value={destiny.budget}/>
                <Form.Input name='destinyLong' placeholder='Longitud (localización)' type='number' onChange={handleInputChange} value={destiny.destinyLong}/>
                <Form.Input name='destinyLat' placeholder='Latitud (localización)' type='number' onChange={handleInputChange} value={destiny.destinyLat}/>
                <Form.TextArea name='description' placeholder='Descripción' onChange={handleInputChange} value={destiny.description }/>

                <Button floated='right' positive content='Submit' type='submit'/>
                <Button onClick={closeForm} floated='right' negative content='Cancel' type='button'/>
            </Form>
        </Segment>

        </>

    );
})
