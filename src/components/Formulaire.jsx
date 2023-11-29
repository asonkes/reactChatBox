import React, { Component } from 'react';

class Formulaire extends Component {
    state = { 
        message: ''
     } 

     createMessage = () => {
        const {pseudo, addMessage} = this.props

        // Message que l'utilisateur envoi à Dyma pour qu'il réponde.
        const message = {
            pseudo: pseudo,
            message: this.state.message
        }

        addMessage(message)

        //reset
        this.setState({message: ''})
     }

     // Grâce à cette partie, on peut écrire, dans le bloc qui ets le formulaire....
     handleChange = event => {
        const message = event.target.value 
        this.setState({message:message})
     }

     // Permet de voir si le texte (formulaire) ets bien envoyé...
     // Aller voir dans Components/hooks/ pour voir si message bien envoyé !!!
     handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
     }

    render() { 
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange} 
                    required
                    maxLength='140' 
                />

                <div className='info'>
                    140
                </div>

                <button type="submit">
                    Envoyer
                </button>
            </form>
        );
    }
}
 
export default Formulaire;