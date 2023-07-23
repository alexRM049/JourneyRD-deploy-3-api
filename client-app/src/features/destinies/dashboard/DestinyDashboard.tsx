import React from 'react';
import {Container, Grid} from 'semantic-ui-react'
import DestinyList from './DestinyList';
import DestinyDetails from '../details/DestinyDetails';
import DestinyForm from '../form/DestinyForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function DestinyDashboard(){

    const {destinyStore} = useStore();
    const {selectedDestiny, editMode, } = destinyStore;
    return(
        <Container>
            <Grid>
                <Grid.Column width='10'>
                    <DestinyList />
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedDestiny && !editMode &&
                        <DestinyDetails/> }
                    {editMode &&
                        <DestinyForm />}
                </Grid.Column>
            </Grid>
        </Container>
    )
})