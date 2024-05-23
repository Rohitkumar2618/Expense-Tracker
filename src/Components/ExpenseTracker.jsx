import React, { useState } from "react";

const ExpenseTracker = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState([]);

  const addExpense = () => {
    if (!input || !amount) return;
    const newExpense = {
      id: expense.length + 1,
      title: input,
      amount: amount,
    };
    setExpense([...expense, newExpense]);
    setInput("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpense(expense.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Expense Tracker</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Expense"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Add Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={addExpense}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Add Expense
        </button>
        <ul className="expense-list mt-6">
          {expense.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
            >
              <span>{expense.title}</span>
              <span className="font-bold">₹{expense.amount}</span>
              <button
                onClick={() => deleteExpense(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
