import { add } from '../../src/index';
import { describe, test, expect } from '@jest/globals';
describe('test add', () => {
    test('2+2', () => {
        expect(add(2, 2)).toEqual(4);
    });
});
