describe("When checing if a social security number is valid", function() {
	it("will return false if the input is null", function() {
		expect(is_real_social_security_number("")).toBe(false);
		expect(is_real_social_security_number(null)).toBe(false);
	});

	it("will return false if there are any characters.", function() {
		expect(is_real_social_security_number('a')).toBe(false);
		expect(is_real_social_security_number('1a')).toBe(false);
		expect(is_real_social_security_number('a1')).toBe(false);
	});

	it("will ignore dashes.", function() {
		expect(is_real_social_security_number('123-23-1231')).toBe(true);
	});

	it("will require a length of 9.", function() {
		expect(is_real_social_security_number('12345678')).toBe(false);
		expect(is_real_social_security_number('1234567890')).toBe(false);
		expect(is_real_social_security_number('123456789')).toBe(true);
	});

});

