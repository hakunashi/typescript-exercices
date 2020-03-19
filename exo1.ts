// ecrire une classe utilisateur (FULL ENGLISH)
// ayant comme constructor's params un email et un mot de passe

class User
{
    private mail : string
    private password : string
    private fails : number

    constructor (mail,password,fails)
    {
        this.mail = mail
        this.password = password
        this.fails = 0
    }

    // ecrire un method s'appelant auth(), elle prendra en paramètre un email et un mot de passe
    // si l'email et le mdp fournis sont identiques à ceux de l'objet on renvoit true sinon false


    private canAuth()
    {
        if (this.fails < 3)
        {
            return true
        }
        else
        {
            return false
        }
    }

    public auth(mail,password)
    {
        if (this.canAuth() === true)
        {
            if (mail === this.mail && password === this.password)
            {
                return true
            }
            else
            {
                this.fails++
                console.log(this.fails)
                if (this.fails > 2)
                {
                    console.log("il y a 3 erreurs")
                }
                return false
            }
        }
    }

    // en bonus 1
    // si on fourni 3 fois d'affiler un mauvais mdp, la methode auth affiche un message d'erreur
}

// usage
var user = new User("tokyn27@gmail.com", "guitare12345",0);

console.log(user.auth("tokyn27@gmail.com", "guitare12345")); // -> true
console.log(user.auth("tokyn27@gmail.com", "piano6789")); // -> false
console.log(user.auth("isaacrasolofo@gmail.com", "guitare12345"));
console.log(user.auth("isaacrasolofo@gmail.com", "guitare12345")); // -> false

// en bonus 2
// crypter le mot de passe stocké
