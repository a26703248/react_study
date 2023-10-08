import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // 這是為了使用更多的匹配器，例如 `toBeInTheDocument`
import Greeting from './Greeting';

// 一個 describe 就是一個 Test Suites
describe('Greeting Component', () => {

    // 測試一：檢查 Greeting 組件能否在沒有任何錯誤或異常的情況下正常渲染。
    test('renders without crashing', () => {
      render(<Greeting />);
    });

    // 測試二： 姓名：John、身高：170、體重：60、BMI：20.76。
    test('calculate BMI correctly with valid inputs', async () => {
      render(<Greeting />);

      const nameInput = screen.getByPlaceholderText('姓名');
      const heightInput = screen.getByPlaceholderText('身高 (公分)');
      const weightInput = screen.getByPlaceholderText('體重 (公斤)');
      const button = screen.getByText(/計算 BMI/);

      fireEvent.change(nameInput, { target: { value: 'John' } });
      fireEvent.change(heightInput, { target: { value: '170' } });
      fireEvent.change(weightInput, { target: { value: '60' } });

      fireEvent.click(button);

      // 使用 findByText 來等待元素
      const resultInTableBody = await screen.findByText('20.76', { selector: 'tbody td' });
      expect(resultInTableBody).toBeInTheDocument();
    });
});
