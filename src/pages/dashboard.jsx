import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to Attendance Dashboard
      </h1>
      <Link to="/attendance">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Go to Attendance
        </button>
      </Link>
    </div>
  );
}
export default Dashboard;