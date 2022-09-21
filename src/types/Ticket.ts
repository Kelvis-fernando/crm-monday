export interface Ticket {
  id: string;
  category: string;
  title: string;
  owner: string;
  avatar: string;
  status: string;
  progress: number;
  description: string;
  timestemp: Date;
}
