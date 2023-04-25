export class User {
    // atributos
    // id: string
    // name: string
    // email: string
    // password: string
    // constructor
    constructor(
        private id: string, 
        private name: string, 
        private email: string, 
        private password: string
        ){}

    // metodos
    public getId(): string{
        return this.id
    }
    public setId(newId: string): void{
        this.id = newId
    }
    public getName(): string{
        return this.name
    }
    public setName(newName: string): void{
        this.name = newName
    }
    public getEmail(): string{
        return this.email
    }
    public setEmail(newEmail: string): void{
        this.email = newEmail
    }    
    public getPassword(): string{
        return this.password
    }
    public setPassword(newPassword: string): void{
        this.password = newPassword
    }
};

// instancia
const user1 = new User(
    "004",
    "rogerio",
    "rogerio@gmail.com",
    "111222333444"
);
console.table(user1.getId());