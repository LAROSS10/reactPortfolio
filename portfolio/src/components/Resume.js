import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div style={{ width: '80%', margin: 'auto' }} className="contact-body">
                <Grid className="contact-grid">
                    <cell col={6}>half page</cell>
                    <cell col={6}>half page</cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;