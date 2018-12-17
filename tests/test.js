
describe('first test', () => {
	it('whatever', () => {
		browser.url('https://myappbloggg.herokuapp.com');
		browser.waitForVisible('.btn-floating');
		browser.pause(9999);
		browser.click('.btn-floating');
		
	})

	// test('uppercase \'test\' to equal \'TEST\'', (done) => {
	// 	uppercase('test', (str) => {
	// 		expect(str).toBe('TEST')
	// 		done()
	// 	})
	// })
})