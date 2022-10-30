import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";

const useIndexDB = () => {
  const setDB: (cv: IDexResume) => Promise<IResponse> = async (cv) => {
    const current = await db.resumes
      .where("holder")
      .equalsIgnoreCase(cv.holder)
      .first();

    if (!current) {
      db.resumes.add(cv);

      return { message: `Added ${cv.holder} Resume to DB`, code: 200 };
    }

    db.resumes.update(current.id, cv);

    return { message: `Updated ${cv.holder} Resume`, code: 201 };
  };

  const getDB = () => useLiveQuery(() => db.resumes.toArray());

  return { setDB, getDB };
};

export default useIndexDB;
