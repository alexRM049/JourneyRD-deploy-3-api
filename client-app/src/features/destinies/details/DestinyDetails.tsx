import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import MapComponent from '../../map/MapComponent';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';

// const {userStore: {user, logout, isLoggedIn, isAdmin}} = useStore();

export default function DestinyDetails(){

  const {destinyStore} = useStore()
  const {selectedDestiny: destiny, openForm, cancelSelectedDestiny} = destinyStore

  const lat = destiny?.destinyLat
  const long = destiny?.destinyLong

  console.log(lat);
  console.log(long);

  if (!destiny) return <LoadingComponent />;


    return (
        <Card fluid style={{marginTop:'4em'}}>
        <Image src={`/assets/${destiny.category}.jpg`} />
        <Card.Content>
          <Card.Header>{destiny.name}</Card.Header>
          <Card.Description>
            {destiny.description}
          </Card.Description>
        </Card.Content>
        <Card.Content>
            <MapComponent lat={destiny.destinyLat} lng={destiny.destinyLong}/>
        </Card.Content>
        <Card.Content extra>
            <Button.Group width= '2'>
              {/*{isAdmin &&
                <Button basic color='blue' content='Edit' />} */}
                <Button basic color='blue' content='Edit' onClick={() => openForm(destiny.id)}/>
                <Button basic color='grey' content='Cancel' onClick={cancelSelectedDestiny}/>
            </Button.Group>

        </Card.Content>
      </Card>
    )
}