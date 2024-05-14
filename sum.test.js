import { expect, it } from 'vitest'
import { sum } from './sum'

it('adds 1 + 2 to equal 3', () => {
    // Arrange: khai báo biến a và b
    let a = 1
    let b = 2

    // Act: gọi hàm sum với tham số a và b
    let result = sum(a, b)

    // Assert: so sánh kết quả trả về từ hàm sum với kết quả mong đợi
    let resultExpected = a + b
    expect(result).toBe(resultExpected)
})