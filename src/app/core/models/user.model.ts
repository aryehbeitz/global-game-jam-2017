import { RolesHierarchy } from './auth.model';

export interface User {
    id: string;
    isAdmin: boolean;
    email: string;
    lastLogin: string;
    ldapUser: boolean;
    username: string;
    name: string;
    roles: string[];
    status: string;
    userFavorites: UserFavorites[]
}

export interface UserFavorites {
    name: string;
    url: string;
}