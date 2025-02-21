import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'admin' | 'groomer' | 'receptionist';

interface Staff {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  phone: string;
  specialization?: string;
  schedule?: {
    [key: string]: string[]; // day: shifts
  };
}

interface AuthUser {
  id: string;
  username: string;
  role: UserRole;
  name: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  staffMembers: Staff[];
  login: (username: string, password: string) => boolean;
  logout: () => void;
  addStaffMember: (staff: Staff) => void;
  removeStaffMember: (id: string) => void;
  updateStaffMember: (id: string, updates: Partial<Staff>) => void;
}

// Mock staff data
const mockStaff: Staff[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'groomer',
    email: 'sarah@petcarespa.com',
    phone: '+91 9876543210',
    specialization: 'Dog Grooming',
    schedule: {
      Monday: ['9:00 AM - 5:00 PM'],
      Tuesday: ['9:00 AM - 5:00 PM'],
      Wednesday: ['9:00 AM - 5:00 PM'],
      Thursday: ['9:00 AM - 5:00 PM'],
      Friday: ['9:00 AM - 5:00 PM'],
    },
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'receptionist',
    email: 'mike@petcarespa.com',
    phone: '+91 9876543211',
    schedule: {
      Monday: ['8:00 AM - 4:00 PM'],
      Tuesday: ['8:00 AM - 4:00 PM'],
      Wednesday: ['8:00 AM - 4:00 PM'],
      Thursday: ['8:00 AM - 4:00 PM'],
      Friday: ['8:00 AM - 4:00 PM'],
    },
  },
];

// Mock user credentials
const users: Record<string, AuthUser> = {
  admin: {
    id: 'admin-1',
    username: 'admin',
    role: 'admin',
    name: 'Admin User',
  },
  groomer1: {
    id: 'groomer-1',
    username: 'groomer1',
    role: 'groomer',
    name: 'Sarah Johnson',
  },
  receptionist1: {
    id: 'receptionist-1',
    username: 'receptionist1',
    role: 'receptionist',
    name: 'Mike Chen',
  },
};

// Mock passwords (in a real app, these would be hashed and stored in a secure database)
const passwords: Record<string, string> = {
  admin: 'admin',
  groomer1: 'groomer123',
  receptionist1: 'reception123',
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      staffMembers: mockStaff,
      login: (username: string, password: string) => {
        const user = users[username];
        if (user && passwords[username] === password) {
          set({ isAuthenticated: true, user });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false, user: null }),
      addStaffMember: (staff: Staff) =>
        set((state) => ({
          staffMembers: [...state.staffMembers, staff],
        })),
      removeStaffMember: (id: string) =>
        set((state) => ({
          staffMembers: state.staffMembers.filter((staff) => staff.id !== id),
        })),
      updateStaffMember: (id: string, updates: Partial<Staff>) =>
        set((state) => ({
          staffMembers: state.staffMembers.map((staff) =>
            staff.id === id ? { ...staff, ...updates } : staff
          ),
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
);

// Helper function to check permissions
export function hasPermission(role: UserRole, action: string): boolean {
  const permissions: Record<UserRole, string[]> = {
    admin: ['all'],
    groomer: ['view_appointments', 'update_appointment_status', 'view_customers'],
    receptionist: [
      'view_appointments',
      'create_appointment',
      'update_appointment_status',
      'view_customers',
    ],
  };

  return (
    role === 'admin' || (permissions[role] && permissions[role].includes(action))
  );
}