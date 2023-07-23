import { Card, Container, Divider, Header, Icon, Image, Segment } from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";
import { useStore } from "../../app/stores/store";

export default function HomePage(){

    const {destinyStore} = useStore()
    const {destinies} = destinyStore

    return(
        <>
        
        <Container>
        <Header className='MainHeader' content='JOURNEY RD' as='h1' />
            <HeaderSubHeader className='subHeader' content='Reservar ahora' as='h2'/>
            <Divider> </Divider>
            <h1 style={{color:'white'}}>Nuestros mejores lugares</h1>
            
            <Segment vertical>
                {destinies.map(destiny =>(
                    <Card>
                        <Card.Content>
                            <Card.Header>{destiny.name}</Card.Header>
                        </Card.Content>
                        <Card.Description>
                            {destiny.description}
                        </Card.Description>
                        <Card.Content exxtra>
                            <Icon name='money bill alternate'/> Presupuesto: {destiny.budget}
                        </Card.Content>
                    </Card>
                ))}
            </Segment>
        </Container>
        </>

)
}