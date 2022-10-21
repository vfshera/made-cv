interface UserLinks {
  title: string;
  url: string;
}

interface Work {
  title: string;
  duration: { from: string; to: ?string };
  summary: string;
  points: string[];
}
