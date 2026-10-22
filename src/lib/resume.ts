import { existsSync } from "node:fs";
import path from "node:path";

export const hasResume = () =>
  existsSync(path.join(process.cwd(), "public", "Resume.pdf"));