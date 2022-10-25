const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('creates an instance of Employee', () => {
        const worker = new Employee('Daryl', 1, 'daryl@gmail.com');
        expect(worker.getName()).toEqual('Daryl');
        expect(worker.getId()).toEqual(1);
        expect(worker.getEmail()).toEqual('daryl@gmail.com');
    })
})