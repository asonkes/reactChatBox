import React, { Component } from 'react';
// Sert à faire une redirection
import {Navigate} from 'react-router-dom';

class Connexion extends Component {
    state = { 
        pseudo: "",
        goToChat: false
     } 

    handleChange = (event) => {
        const pseudo = event.target.value
        this.setState({pseudo:pseudo})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({goToChat:true})
    }

    render() { 
        if(this.state.goToChat) 
        {
            // return dans une fonction fait un point d'arret
            // Navigate, va se rediriger vers la page que j'ai demandé...
            return <Navigate to={`/pseudo/${this.state.pseudo}`} />
        }
        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input 
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder='Pseudo'
                    type="text"
                    required
                    />
                    <button type='submit'>GO</button>
                </form>
            </div>
        );
    }
}
 
export default Connexion;
;