import { FieldValues, ValidationTest, ValidationTestResult } from "./types";

export function mapObjectToObject(
  obj: { [key: string]: any },
  mapper: (objectKey: string, objectValue?: any) => any
) {
  const returnObj: { [key: string]: any } = {};

  Object.keys(obj).forEach((key) => {
    returnObj[key] = mapper(key, obj[key]);
  });
  return returnObj;
}

export function runValidationTests(
  tests: ValidationTest[],
  fieldValues: FieldValues
): ValidationTestResult {
  let feedback;
  const passAll = !tests.some((test) => {
    const pass = test.exec(fieldValues);
    feedback = pass ? undefined : test.feedback;
    return !pass;
  });
  return { isValid: passAll, feedback };
}
