export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'owner' | 'cashier' | 'admin';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
