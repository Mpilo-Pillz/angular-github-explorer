export interface Issue {
  id: number;
  title: string;
  state: 'open' | 'closed';
  created_at: string;
  updated_at: string;
  user: {
    login: string;
  };
  number: number;
  body: string;
}

export type IssueState = 'open' | 'closed' | 'all';
