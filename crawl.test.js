const { normalizeURL,getURLsFromHTML } = require('./crawl.js');
const { test, expect } = require('@jest/globals');

test('normalizeURL protocol', () => {
  const input = 'https://blog.boot.dev/path';
  const actual = normalizeURL(input);
  const expected = 'blog.boot.dev/path';
  expect(actual).toEqual(expected);
});

test('normalizeURL slash', () => {
  const input = 'https://blog.boot.dev/path/';
  const actual = normalizeURL(input);
  const expected = 'blog.boot.dev/path';
  expect(actual).toEqual(expected);
});

test('normalizeURL capitals', () => {
  const input = 'https://BLOG.boot.dev/path';
  const actual = normalizeURL(input);
  const expected = 'blog.boot.dev/path';
  expect(actual).toEqual(expected);
});

test('normalizeURL http', () => {
  const input = 'http://BLOG.boot.dev/path';
  const actual = normalizeURL(input);
  const expected = 'blog.boot.dev/path';
  expect(actual).toEqual(expected);
});

test('getURLsFromHTML absolute', () => {
  const inputURL = 'https://www.points.com/';
  const inputBody = '<html><body><a data-type="gatsby-link" href="/contact/schedule-appointment/">Get started</a>/body></html>';
  const actual = getURLsFromHTML(inputBody, inputURL);
  const expected = [ 'https://www.points.com/contact/schedule-appointment/' ];
  expect(actual).toEqual(expected);
});

test('getURLsFromHTML relative', () => {
  const inputURL = 'https://blog.boot.dev';
  const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>';
  const actual = getURLsFromHTML(inputBody, inputURL);
  const expected = [ 'https://blog.boot.dev/path/one' ];
  expect(actual).toEqual(expected);
});
  
test('getURLsFromHTML both', () => {
  const inputURL = 'https://blog.boot.dev';
  const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="/path/two"><span>Boot.dev></span></a></body></html>';
  const actual = getURLsFromHTML(inputBody, inputURL);
  const expected = [ 'https://blog.boot.dev/path/one', 'https://blog.boot.dev/path/two' ];
  expect(actual).toEqual(expected);
});

