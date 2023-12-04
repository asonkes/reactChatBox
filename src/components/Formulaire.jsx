import React, { Component } from 'react';

class Formulaire extends Component {
    state = { 
        message: '',
        length: this.props.length
     } 

     createMessage = () => {
        const {pseudo, addMessage, length} = this.props

        // Message que l'utilisateur envoi à Dyma pour qu'il réponde.
        const message = {
            pseudo: pseudo,
            message: this.state.message
        }

        addMessage(message)

        //reset
        this.setState({message: '', length:length})
     }

     // Grâce à cette partie, on peut écrire, dans le bloc qui ets le formulaire....
     // A chaque fois que j'écris une autre lettre, le chiffre de 140 diminue...
     handleChange = event => {
        const message = event.target.value 
        //console.log(message.length)
        const length =  this.props.length - message.length
        // En fait ici, le 140, qui est indiqué, il veut que quand on écrit, le chiffre diminue en fonction du nombre de lettres notées (donc la longueur maximale c'est 140).
        this.setState({message:message, length:length})
     }

     // Permet de voir si le texte (formulaire) ets bien envoyé...
     // Aller voir dans Components/hooks/ pour voir si message bien envoyé !!!
     handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
     }

     // A chaque fois que tu cliques, c'est pour savoir quelle touche, l'utilisateur a touché
     // Et donc on a évènement, car c'est quand tu cliques sur Enter, on va chercher la méthode "createMessage"...
     // Donc cette méthode "createMessage", fait en sorte de terminer le message, donc on a plus besoin de cliquer sur "envoyer"
     handleKeyUp = event => {
        if(event.key === 'Enter') 
        {
            this.createMessage()
        }
     }

    render() { 
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange} 
                    onKeyUp={this.handleKeyUp}
                    required
                    maxLength={'140'}
                />

                <div className='info'>
                    {this.state.length}
                </div>

                <button type="submit">
                    Envoyer
                </button>
            </form>
        );
    }
}
 
export default Formulaire;