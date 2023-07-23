import React, { SyntheticEvent, useState } from 'react';
import { Destiny } from '../../../app/models/destiny';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

let DOPCurr = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'DOP'
})


let formatPhoneNumber = (str: string) => {
    let cleaned = ('' + str).replace(/\D/g, '')

    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
      };
    
      return null
}

export default observer (function DestinyList(){
    const {destinyStore} = useStore();
    const {deleteDestiny, destinies, loading} = destinyStore
    
    const [target, setTarget] = useState('');

    function handleDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteDestiny(id);
    }


    return(
        <Segment style={{marginTop:'4em'}}>
        <Item.Group divided>
            {destinies.map(destiny => (
                <Item key={destiny.id}>
                    <Item.Content>
                        <Item.Header as='a'>{destiny.name}</Item.Header>
                        <Item.Description>
                            <div style={{marginBottom:'5px'}}>
                                <Icon name='money bill alternate' />Presupuesto estimado: {DOPCurr.format(destiny.budget)}
                            </div>

                            <div style={{marginBottom:'5px'}}>
                                <Icon name='phone'/>Número de telefono: {formatPhoneNumber(destiny.phoneNumber) }
                            </div>

                            <div style={{marginBottom:'5px'}}>
                                <Icon name='user outline'/> Maxima cantidad de { destiny.maxPeople === 1 ? 'persona' : 'personas'}: {destiny.maxPeople.toLocaleString('en-US')}
                            </div>
                            <div style={{marginBottom:'5px'}}>
                                <Icon name='tag'/> Categoria: {destiny.category}
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' color='black' content='Mostrar' onClick={() => destinyStore.selectDestiny(destiny.id)}/>
                            <Button loading={loading && target === destiny.id} floated='right' negative  content='Delete' onClick={(e) => handleDelete(e, destiny.id)}/>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    </Segment>

    )
})