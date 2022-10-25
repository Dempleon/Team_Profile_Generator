const Manager = require('../lib/Manager');

describe('Manager classd', () => {
    it('creates an instance of Manager', () => {
        const manager = new Manager('Daryl', 2, 'empleo@gmail.com', 10);
        expect(manager.getName()).toEqual('Daryl');
        expect(manager.getId()).toEqual(2);
        expect(manager.getEmail()).toEqual('empleo@gmail.com');
        expect(manager.getRole()).toEqual('Manager');
        expect(manager.officeNumber).toEqual(10);
    })
})

module.exports = Manager;