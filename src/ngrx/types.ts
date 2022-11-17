export interface User {
  userId: string;
  cart: string[];
}

export interface AppState {
  users: User;
}
