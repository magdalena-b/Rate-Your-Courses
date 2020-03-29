import { Course } from './course';

export interface User {
    email: string;
    courses?: Course[];
}
