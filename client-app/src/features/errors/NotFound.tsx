import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search'/>
                Vaya - hemos buscado por todas partes y no pudimos encontrar esto.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/events' primary>
                    Regresar a la página de Eventos
                </Button>
            </Segment.Inline>
        </Segment>
    );
}

export default NotFound;