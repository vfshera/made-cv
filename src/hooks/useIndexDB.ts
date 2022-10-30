import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";

const useIndexDB = () => {
  const addCv: (cv: Omit<IDexResume, "id">) => Promise<IResponse> = async (
    cv
  ) => {
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
  const removeCv: (id: number) => Promise<IResponse> = async (id) => {
    const deleteCount = await db.resumes.where("id").equals(id).delete();

    return { message: `Deleted ${deleteCount} Resume`, code: 200 };
  };

  const getDB = () => useLiveQuery(() => db.resumes.toArray());

  return { addCv, getDB, removeCv };
};

export default useIndexDB;
