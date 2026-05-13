export type Poll = {
  id: string;
  question: string;
  options: string[];
  tallies: number[];
  total_votes: number;
  created_at: string; // ISO
  ends_at: string;    // ISO
};

export type CreatePollInput = {
  question: string;
  options: string[];
  durationHours: number;
};

export type VoteInput = {
  voterId: string;
  optionIndex: number;
};
