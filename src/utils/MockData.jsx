import {faker} from '@faker-js/faker';

/**
 * Generates a random person details.
 * @example
 *   name: 'John Doe',
 *   email: 'john@gmail.com'
 * @returns {{name: string, email: string}}
 */
export const personDetailsGenerator = () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

  return {
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({firstName, lastName, allowSpecialCharacters: false}),
  };
};

/**
 * Generates a random date from the past 10 years.
 * @example
 * 'Jan 1, 2012'
 * 'Feb 3, 2020'
 * @returns {string}
 */
export const getRandomDate = () =>{
    // Generate a past date using Faker
    const pastDate = faker.date.past({ years: 10 });

    // Format the date
    return new Date(pastDate)
        .toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
};

/**
 * Generates an array of random diplomas.
 *
 * @param {number} [countOfDiplomas=5] - The number of diplomas to generate.
 * @returns {Array} An array of random objects.
 */
export const getRandomDiplomas = (countOfDiplomas = 5) => {
    faker.seed(1234);

    const statuses = ['Created', 'Send', 'Cancelled', 'Rejected', 'Accepted'];
    const uniqueNumberQueue = new UniqueNumberQueue(countOfDiplomas);
    function createRandomDiploma() {
        const randomMark = faker.number.float({ min: 2, max: 7,precision: 0.01 });
        const number = uniqueNumberQueue.getTopNumber();

        return {
            id: `D-${number.toString().padStart(4, '0')}`,
            title: faker.lorem.sentence({ min: 3, max: 5 }),
            description: faker.lorem.paragraph({ min: 3, max: 6 }),
            status: faker.helpers.arrayElement(statuses),
            owner: personDetailsGenerator(),
            supervisor: personDetailsGenerator(),
            dateOfCreation: getRandomDate(),
            mark: randomMark > 6 ? null : randomMark,
            applicationId: `AP-${number.toString().padStart(4, '0')}`,
        };
    }

    return faker.helpers.multiple(createRandomDiploma, {
        count: countOfDiplomas,
    });
};

class UniqueNumberQueue {
    constructor(maxNumber) {
        this.queue = Array.from({ length: maxNumber + 1 }, (_, index) => index);
    }

    // Method to get the number at the top of the queue
    getTopNumber() {
        let number = this.queue.shift();
        return number | 0;
    }
}