export interface NavbarProps {
    user: {
      id: number;
      userName: string;
      email: string;
      token:string;
    }
    userId: number | null;
  }