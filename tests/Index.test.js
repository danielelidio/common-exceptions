require('./test-helper');

require('../index');

describe('Global Exceptions.', function() {
	it('Exception should be loaded for global use.', function() {
		expect(Exception).to.not.be.an('undefined');
	});

	it('InvalidArgumentException should be loaded for global use.', function() {
		expect(InvalidArgumentException).to.not.be.an('undefined');
	});

	it('WrongTypeException should be loaded for global use.', function() {
		expect(WrongTypeException).to.not.be.an('undefined');
	});

	it('EmptyFieldException should be loaded for global use.', function() {
		expect(EmptyFieldException).to.not.be.an('undefined');
	});
});