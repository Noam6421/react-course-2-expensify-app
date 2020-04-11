// Get the total of the visible expenses

export default (expenses) => {
    return expenses.reduce((total, expense) => total + expense.amount, 0)
}
