
type Rol = 'Teacher' | 'Secretary'
type Profile = 'Admin' | 'User'

export class User {
    id: string;
    username: string;
    password: string;
    name: string;
    rol: Rol;
    profile: Profile

    constructor(id: string, username: string, password: string, name: string, rol: Rol, profile: Profile) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.rol = rol;
        this.profile = profile
    }
}