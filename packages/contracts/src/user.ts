export interface UserType {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: "admin" | "editor" | "user";
  phone?: string;
  company?: string;
  profileImage?: string;
  bio?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  updatedBy?: string;
}
