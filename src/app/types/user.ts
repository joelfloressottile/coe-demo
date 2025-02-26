export interface User {
  username: string;
  email: string;
  role: string[];
  feedbacks?: string[];
}

export interface UsersData {
  [key: string]: User;
}
