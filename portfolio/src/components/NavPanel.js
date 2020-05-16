import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import { Button, Card, CardText } from 'react-mdl';
import { Link } from 'react-router-dom'



function Navbar() {
    return (

        <div style={{ height: '300px', position: 'relative' }}>
            <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
                <Header transparent title="Title" style={{ color: 'white' }}>
                    <Navigation>
                        <Link to='/aboutMe'>About Me</Link>
                        <Link to='/resume'>Resume</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/'>Portfolio</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to='/aboutMe'>About Me</Link>
                        <Link to='/resume'>Resume</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/'>Portfolio</Link>
                    </Navigation>
                </Drawer>
                <Content />

            </Layout>
        </div>

    );
}

export default Navbar;
