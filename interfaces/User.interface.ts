export interface User {
    id: number;

    firstName?: string;
    lastName?: string;
    fullName?: string;

    // email?: Email | string | null;
    // phone?: Phone | string | null;

    // province?: string;
    // city?: string;
    // address?: string;
    // location?: [number, number] | string;

    // avatar?: StorageFile | string | null;

    // roles: UserRoles[];

    active: boolean;
    verified: boolean;
}
