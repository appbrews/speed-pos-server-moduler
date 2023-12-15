export type User = {
  id: string;
  password: string;
  needsPasswordChange: string;
  role: 'owner' | 'cashier' | 'admin';
  status: 'in-progress' | 'block';
  isDeleted: boolean;
};
