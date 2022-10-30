interface UserLinks {
  title: string;
  url: string;
}

interface Work {
  title: string;
  duration: { from: string; to: ?string };
  summary: string;
  points: ?string[];
}

//TABLES
interface IResume {
  stacks: string[];
  skills: string[];
  links: UserLinks[];
  work: Work[];
  header: { name: string; summary: string };
}

interface IDexResume {
  holder: string;
  resume: IResume;
}

interface IResponse {
  message: string;
  code: number;
}
