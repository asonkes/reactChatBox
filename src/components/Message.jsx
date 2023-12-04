// Ici, on ne peut pas mettre dans les les paramètres de message "key", car c'est pour react qu'on fait ça, si on le met dans la parenthèse, il n'affiche plus rien (il saute)...
// C'est react qui demande de faire ça pour pouvoir afficher le reste, et si on écrit 2x le même message, key sert alors, car il va dire qu'il y a deux messages les mêmes mais avec une key différente...
const Message = ({pseudo, message}) => {
    return ( 
        <p className="user-message">
            {message}
        </p>
     );
}
 
export default Message;