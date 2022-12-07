import { double } from './example'

describe('그룹1', () => {
    // 모든 테스트가 시작되기 전 한 번만 실행
    beforeAll(() => {
        console.log('beforeAll!')
    })
    // 모든 테스트가 끝나고 한 번만 실행
    afterAll(() => {
        console.log('afterAll!')
    })

    // 각각의 테스트가 시작하기 직전에 실행
    // beforeEach() -> test('첫 테스트'...) -> beforeEach() ->test('인수가 숫자 데이터입니다.'...) -> beforeEach() -> test('인수가 없습니다')
    beforeEach(() => {
        console.log('beforeEach!')
    })
    // 각각의 테스트가 끝난 직후에 실행
    afterEach(() => {
        console.log('afterEach!')
    })
    test('첫 테스트', () => {
        console.log('첫 테스트!')
        expect(123).toBe(123)
    })
    
    test('인수가 숫자 데이터입니다.', () => {
        console.log('인수가 숫자 데이터입니다.')
        expect(double(3)).toBe(6)
        expect(double(10)).toBe(20)
    })
    
    test('인수가 없습니다', () => {
        console.log('인수가 없습니다.')
        expect(double()).toBe(0)
    })
})