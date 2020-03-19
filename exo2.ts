// ecrire une classe ordinateur FULL ENGLISH

class Computer
{
    private id : number
    private model : string
    private years : number
    private price : number

    // construction avec un id (number différent pour chaque ordi), modele, une annee, un prix
    constructor (id,model,years,price)
    {
        this.id = id
        this.model = model
        this.years = years
        this.price = price
    }

    // methode chooseCheapest -> elle prend un ordinateur en paramètre
    public chooseCheapest(computer2)
    {
        if (this.getYears() === computer2.getYears() && this.getModel() === computer2.getModel())
        {
            if (this.getPrice() < computer2.getPrice())
            {
                return this.getId()
            }
            else
            {
                return computer2.getId()
            }
        }
    }

    public getYears()
    {
        return this.years
    }

    public getModel()
    {
        return this.model
    }

    public getPrice()
    {
        return this.price
    }

    public getId()
    {
        return this.id
    }
}

var computer1 = new Computer(302497421,"Asus",2016,800)
var computer2 = new Computer(439841352,"Asus",2016,980)

// si l'année et le modèle sont identiques entre les 2 ordis, alors on retourne l'id de celui qui a le prix le plus bas

console.log(computer1.chooseCheapest(computer2))