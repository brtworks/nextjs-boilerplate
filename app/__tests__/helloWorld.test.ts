import { helloWorld } from '../helloWorld';

test('returns hello world', () => {
	expect(helloWorld()).toBe('Hello, World!');
});
test('returns hello world', () => {
	expect(helloWorld()).toBe('Hello, World!');
});

test('returns a string', () => {
	expect(typeof helloWorld()).toBe('string');
});

test('does not return an empty string', () => {
	expect(helloWorld()).not.toBe('');
});

test('returns the correct length', () => {
	expect(helloWorld().length).toBe(13);
});

test('contains the word "Hello"', () => {
	expect(helloWorld()).toContain('Hello');
});

test('contains the word "World"', () => {
	expect(helloWorld()).toContain('World');
});

test('starts with "Hello"', () => {
	expect(helloWorld().startsWith('Hello')).toBe(true);
});

test('ends with "World!"', () => {