import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import './portfolio.css'
import Logo from './loripic.jpg'

class Portfolio extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='portfolio-grid'>
                    <Cell col={6}>
                        <img className="pic" src={Logo} height="350" width="350" />
                        <div>
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | JavaScript |Mysql & Mongoose| React | MERN</p>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <p className="my-info">My name is Lori Ross and I am a 20+ year financial professional with a concentration in Accounts Receivable. I have been in my current role as Supplier Receivables Manager at Mckesson Corporation for the past 3 years. I manage a team of 3 local analysts and 6 virtual analysts that are located in New Dehli India. I was privileged with the opportunity to travel to India to train and onboard the virtual team approximately two years ago. I am currently enrolled in SMU's Coding Bootcamp. I am excited to put my new skills to use to build applications and tools to help automate and create efficiencies in my current role. I am also looking for opportunities to freelance and expand my skillset through independent projects</p>
                    </Cell>
                </Grid>

            </div>

        )
    }
}

export default Portfolio;