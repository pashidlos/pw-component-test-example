import { extname } from "path";

export function validateFileExtension(
  file: File,
): string {
  return extname(file.name);
}

