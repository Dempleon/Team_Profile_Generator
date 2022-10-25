const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('Creates an intern class', () => {
        const intern = new Intern('Daryl', 4, 'intern@gmail.com', 'SFSU');
        expect(intern).toBeInstanceOf(Intern);
        expect(intern.getName()).toEqual('Daryl');
        expect(intern.getId()).toEqual(4);
        expect(intern.getEmail()).toEqual('intern@gmail.com');
        expect(intern.getSchool()).toEqual('SFSU');
        expect(intern.getRole()).toEqual('Intern');
    });
})