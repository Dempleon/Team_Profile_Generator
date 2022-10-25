const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('creates an engineer class', () => {
        const engineer = new Engineer('Daryl', 3, 'engineer@gmail.com', 'dempleon');
        expect(engineer).toBeInstanceOf(Engineer);
        expect(engineer.getName()).toEqual('Daryl');
        expect(engineer.getId()).toEqual(3);
        expect(engineer.getEmail()).toEqual('engineer@gmail.com');
        expect(engineer.getGitHub()).toEqual('https://github.com/dempleon');
        expect(engineer.getRole()).toEqual('Engineer');

    });
})