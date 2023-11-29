import React, { Component } from 'react';

class Formulaire extends Component {
    state = {  } 
    render() { 
        return (
            <form className='form'>
                <textarea 
                required
                maxlength='140'>
                </textarea>
                <button type="submit">
                    Envoyer
                </button>
            </form>
        );
    }
}
 
export default Formulaire;