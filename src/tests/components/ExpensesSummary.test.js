import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummery } from '../../components/ExpensesSummary';

test('should render ExpenseSummary with 1 expense', () => {
   const wrapper = shallow(<ExpensesSummery expenseCount={1} expensesTotal={235} />);
   expect(wrapper).toMatchSnapshot(); 
});

test('should render ExpenseSummary with multiple expenses', () => {
   const wrapper = shallow(<ExpensesSummery expenseCount={235} expensesTotal={5555555} />);
   expect(wrapper).toMatchSnapshot(); 
});
