export interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

/*
Найдите и исправьте ошибку в данных, возвращаемых функцией getPerson.
 */
export function getPerson(): IPersonData {
    return {
        name: 'Petr',
        secondName: 'Smith',
        age: 7,
    };
}

export interface IStudentData {
    name: string;
    secondName: string;
    age: number;
    phone?: string;
}

/*
Допишите функцию `getStudentsData` так, чтобы она возвращала массив из указанных в комментарии данных.
Данные должны храниться в объектах, соответствующих интерфейсу `IStudentData`.
 */
export function getStudentsData(): IStudentData[] {
    let array: IStudentData[] = [];
    let person1: IStudentData = {
        name: 'Ivan',
        secondName: 'Petrov',
        age: 20,
        phone: '+7(555)555-55-50',
    };
    let person2: IStudentData = {
        name: 'Stepan',
        secondName: 'Petrov',
        age: 19,
        phone: '+7(555)555-55-51',
    };
    let person3: IStudentData = { name: 'Petr', secondName: 'Ivanov', age: 19 };
    array.push(person1, person2, person3);
    return array;

    /**
     * Данные студентов которые нужно передать:
     *
     * 1. Ivan Petrov 20 лет +7(555)555-55-50
     * 2. Stepan Petrov 19 лет +7(555)555-55-51
     * 3. Petr Ivanov 19 лет
     *
     */
}
