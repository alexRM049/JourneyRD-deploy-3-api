import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import {  Container } from 'semantic-ui-react';
import DestinyDashboard from '../../features/destinies/dashboard/DestinyDashboard';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from './LoadingComponent';
import { Outlet } from 'react-router-dom';

function App() {

  const {destinyStore} = useStore()


  useEffect(() => {
    destinyStore.loadDestinies();
  }, [destinyStore])


if(destinyStore.loadingInitial) return <LoadingComponent content='Cargando Destinos' />

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '3em'}}>
        <Outlet />
      </Container>
    </>
  );
}

export default observer(App);
