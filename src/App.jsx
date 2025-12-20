import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
  <header className="bg-white shadow-md border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-900">Student Attendance</h1>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
        Add New Attendance
      </button>
    </div>
  </header>
  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 py-8">
    {/* Attendance Form */}
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-lg font-semibold mb-6">Attendance Form</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* className */}
        <div>
          <label className="block mb-2">Select className</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option>className 1</option>
            <option>className 2</option>
            <option>className 3</option>
          </select>
        </div>
        {/* Date */}
        <div>
          <label className="block mb-2">Attendance Date</label>
          <input type="date" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        {/* Search */}
        <div>
          <label className="block mb-2">Search Student</label>
          <input
            type="text"
            placeholder="Enter student name..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        {/* Button */}
        <div className="flex items-end">
          <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg">
            Mark Attendance
          </button>
        </div>
      </div>
      {/* Stats */}
      <div className="flex gap-6 border-t pt-4">
        <span>Present: 5</span>
        <span>Absent: 2</span>
        <span>Total: 7</span>
      </div>
    </div>
    {/* Attendance Table */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="px-6 py-4 text-left">Roll No</th>
            <th className="px-6 py-4 text-left">Student Name</th>
            <th className="px-6 py-4 text-center">Status</th>
            <th className="px-6 py-4 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-green-50">
            <td className="px-6 py-4">001</td>
            <td className="px-6 py-4">Alice Johnson</td>
            <td className="px-6 py-4 text-center">
              <button className="bg-green-500 text-white px-4 py-1 rounded-full">
                Present
              </button>
            </td>
            <td className="px-6 py-4">
              <input
                type="text"
                placeholder="Add remarks..."
                className="w-full px-2 py-1 border rounded"
              />
            </td>
          </tr>
          <tr className="border-b bg-red-50">
            <td className="px-6 py-4">002</td>
            <td className="px-6 py-4">Bob Smith</td>
            <td className="px-6 py-4 text-center">
              <button className="bg-red-500 text-white px-4 py-1 rounded-full">
                Absent
              </button>
            </td>
            <td className="px-6 py-4">
              <input
                type="text"
                placeholder="Sick leave"
                className="w-full px-2 py-1 border rounded"
              />
            </td>
          </tr>
        </tbody>
      </table>
      {/* Action Buttons */}
      <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3">
        <button className="border px-6 py-2 rounded-lg">Export CSV</button>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">
          Save Attendance
        </button>
      </div>
    </div>
  </main>
</div>
    </>
  )
}

export default App
