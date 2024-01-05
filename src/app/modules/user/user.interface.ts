export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TUser = {
  id: string;
  name: TUserName;
  email: string;
  password: string;
  role: 'owner' | 'cashier' | 'admin';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
