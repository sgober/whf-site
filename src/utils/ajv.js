import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addKeywords from 'ajv-keywords';

const ajv = new Ajv.default({ allErrors: true, $data: true, strict: false, useDefaults: true });
addKeywords(ajv);
addFormats(ajv);

ajv.addKeyword({
  keyword: 'isNotNull',
  type: 'null',
  validate: (schema, data) => data !== null,
  errors: false
});

ajv.addKeyword({
  keyword: 'isNotEmptyString',
  type: 'string',
  validate: (schema, data) => data !== '',
  errors: false
});

export { ajv };
