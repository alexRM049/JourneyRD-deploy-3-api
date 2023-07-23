import React from 'react';
import { Button, Container, Form, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import { NavLink } from 'react-router-dom';

export default function NavBar(){

    const {destinyStore} = useStore();
    // const {userStore: {user, logout, isLoggedIn, isAdmin}} = useStore();

    return(
        <>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item header>
                        <img src ="" alt="logo" style={{marginRight: '10px'}}/> 
                    </Menu.Item>    
                    <Menu.Item  as={NavLink} to='/' exact header>
                    Journey RD
                </Menu.Item>
                    <Menu.Item  />
                    <Menu.Item as={NavLink} to='/Destinos'name='Destinos' position='right'/>
                    <Menu.Item as={NavLink} to='/contact' name='Contactos'/>
                    <Menu.Item as={NavLink} to='/login' name='Ingresar ' />
                    <Menu.Item>
                        {/* {isLoggedIn && isAdmin && }*/}
                        <Button possitve content='Nuevo Destino' onClick={() => destinyStore.openForm()} />
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    )
}