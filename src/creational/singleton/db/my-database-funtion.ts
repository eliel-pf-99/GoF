import { User } from '../interfaces/user';

export const MyDatabaseClassic = (function () {
    const users: User[] = [];

    return {
        add(user: User): void {
            users.push(user);
        },

        remove(index: number): void {
            users.slice(index, 1);
        },

        show(): void {
            for (const user of users) {
                console.log(user);
            }
        },
    };
})();
