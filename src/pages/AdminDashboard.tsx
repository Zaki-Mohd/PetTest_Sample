import React, { useState } from 'react';
import {
  Users,
  Calendar,
  MessageSquare,
  Settings,
  BarChart,
  Image,
  LogOut,
  UserPlus,
  Clock,
  Star,
  Package,
} from 'lucide-react';
import { useAuthStore, type UserRole } from '../store/auth';
import { useNavigate } from 'react-router-dom';

interface DashboardCard {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

interface Appointment {
  id: number;
  petName: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed';
  assignedTo?: string;
}

interface Review {
  id: number;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  approved: boolean;
}

const dashboardCards: DashboardCard[] = [
  {
    title: 'Total Appointments',
    value: '156',
    icon: <Calendar className="h-6 w-6" />,
    color: 'bg-purple-500',
  },
  {
    title: 'Active Customers',
    value: '89',
    icon: <Users className="h-6 w-6" />,
    color: 'bg-blue-500',
  },
  {
    title: 'New Messages',
    value: '24',
    icon: <MessageSquare className="h-6 w-6" />,
    color: 'bg-green-500',
  },
  {
    title: 'Total Revenue',
    value: '₹45,250',
    icon: <BarChart className="h-6 w-6" />,
    color: 'bg-yellow-500',
  },
];

const recentAppointments: Appointment[] = [
  {
    id: 1,
    petName: 'Max',
    service: 'Full Grooming',
    date: '2024-03-20',
    time: '10:00 AM',
    status: 'pending',
    assignedTo: 'Sarah Johnson',
  },
  {
    id: 2,
    petName: 'Luna',
    service: 'Spa Treatment',
    date: '2024-03-20',
    time: '11:30 AM',
    status: 'confirmed',
    assignedTo: 'Mike Chen',
  },
  {
    id: 3,
    petName: 'Charlie',
    service: 'Health Check-up',
    date: '2024-03-20',
    time: '2:00 PM',
    status: 'completed',
    assignedTo: 'Sarah Johnson',
  },
  {
    id: 4,
    petName: 'Bella',
    service: 'Basic Bath',
    date: '2024-03-21',
    time: '9:30 AM',
    status: 'pending',
    assignedTo: 'Mike Chen',
  },
];

const reviews: Review[] = [
  {
    id: 1,
    customerName: 'John Doe',
    rating: 5,
    comment: 'Excellent service! My dog loves coming here.',
    date: '2024-03-19',
    approved: true,
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    rating: 4,
    comment: 'Great experience, very professional staff.',
    date: '2024-03-18',
    approved: false,
  },
];

interface TabProps {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function Tab({ label, icon, active, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-purple-100 text-purple-700'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const { logout, user, staffMembers } = useAuthStore();
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center"
                >
                  <div className={`${card.color} text-white p-3 rounded-lg mr-4`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {card.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Appointments */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Recent Appointments
                </h2>
                <button className="text-purple-600 hover:text-purple-700">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-3">Pet Name</th>
                      <th className="pb-3">Service</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Time</th>
                      <th className="pb-3">Assigned To</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAppointments.map((appointment) => (
                      <tr key={appointment.id} className="border-b last:border-0">
                        <td className="py-3">{appointment.petName}</td>
                        <td className="py-3">{appointment.service}</td>
                        <td className="py-3">{appointment.date}</td>
                        <td className="py-3">{appointment.time}</td>
                        <td className="py-3">{appointment.assignedTo}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              appointment.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : appointment.status === 'confirmed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {appointment.status.charAt(0).toUpperCase() +
                              appointment.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );

      case 'staff':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Staff Members</h2>
              <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <UserPlus className="h-5 w-5 mr-2" />
                Add Staff Member
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-3">Name</th>
                    <th className="pb-3">Role</th>
                    <th className="pb-3">Email</th>
                    <th className="pb-3">Phone</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {staffMembers.map((staff) => (
                    <tr key={staff.id} className="border-b last:border-0">
                      <td className="py-3">{staff.name}</td>
                      <td className="py-3 capitalize">{staff.role}</td>
                      <td className="py-3">{staff.email}</td>
                      <td className="py-3">{staff.phone}</td>
                      <td className="py-3">
                        <button className="text-purple-600 hover:text-purple-700 mr-2">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Customer Reviews
            </h2>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border-b pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {review.customerName}
                      </h3>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'fill-current' : 'stroke-current'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {!review.approved && (
                        <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          Approve
                        </button>
                      )}
                      <button className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'store':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Store Management</h2>
              <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Package className="h-5 w-5 mr-2" />
                Add Product
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product cards would go here */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Coming Soon</h3>
                <p className="text-gray-600">
                  Online store management features are under development.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {user?.name} ({user?.role})
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex space-x-4">
            <Tab
              label="Dashboard"
              icon={<BarChart className="h-5 w-5" />}
              active={activeTab === 'dashboard'}
              onClick={() => setActiveTab('dashboard')}
            />
            <Tab
              label="Staff"
              icon={<Users className="h-5 w-5" />}
              active={activeTab === 'staff'}
              onClick={() => setActiveTab('staff')}
            />
            <Tab
              label="Reviews"
              icon={<Star className="h-5 w-5" />}
              active={activeTab === 'reviews'}
              onClick={() => setActiveTab('reviews')}
            />
            <Tab
              label="Store"
              icon={<Package className="h-5 w-5" />}
              active={activeTab === 'store'}
              onClick={() => setActiveTab('store')}
            />
          </div>
        </div>

        {/* Main Content */}
        {renderContent()}
      </div>
    </div>
  );
}