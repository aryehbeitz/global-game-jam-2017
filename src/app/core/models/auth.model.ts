export interface Auth {
    token: string;
    roles: string[];
}

export const Role = {
    User: 'User',
    GlobalAdmin: 'Administrator'
}

export const RolesHierarchy = {
    USER: [Role.User],
    GLOBAL_ADMIN: [Role.User, Role.GlobalAdmin]
}

