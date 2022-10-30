// db.ts
import Dexie, { Table } from "dexie";

export class MyDexie extends Dexie {
  resumes!: Table<IDexResume>;

  constructor() {
    super("madeCV");
    this.version(1).stores({
      resumes: "++id, holder, resume",
    });
  }
}

export const db = new MyDexie();
