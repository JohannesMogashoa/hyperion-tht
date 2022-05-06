const isbnChecker = require('./index');


// Valid Return Tests
test("isbnChecker('9783161484100') 'Valid'", () => {
    expect(isbnChecker('9783161484100')).toBe('Valid');
});

test("isbnChecker('9780316066525') 'Valid'", () => {
    expect(isbnChecker('9780316066525')).toBe('Valid');
});

test("isbnChecker('9783866155237') 'Valid'", () => {
    expect(isbnChecker('9783866155237')).toBe('Valid');
});

test("isbnChecker('9780345453747) 'Valid'", () => {
    expect(isbnChecker('9780345453747')).toBe('Valid');
});


// Invalid Return Tests
test("isbnChecker('031606652X') 'Invalid'", () => {
    expect(isbnChecker('031606652X')).toBe('Invalid');
});

test("isbnChecker('9783876155237') 'Invalid'", () => {
    expect(isbnChecker('9783876155237')).toBe('Invalid');
});

test("isbnChecker('0345453747') 'Invalid'", () => {
    expect(isbnChecker('0345453747')).toBe('Invalid');
});


// ISBN10 to ISBN13 Return Tests
test("isbnChecker('0316066524') 'Invalid'", () => {
    expect(isbnChecker('0316066524')).toBe('9780316066525');
});
test("isbnChecker('3866155239') 'Invalid'", () => {
    expect(isbnChecker('3866155239')).toBe('9783866155237');
});
test("isbnChecker('817450494X') 'Invalid'", () => {
    expect(isbnChecker('817450494X')).toBe('9788174504944');
});