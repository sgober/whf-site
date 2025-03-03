const parseErrors = (errors, property, schema) => {
  return errors
    ?.filter(error => error?.params?.missingProperty === property || error?.instancePath.includes(property))
    ?.map(error => translateError(error, schema));
};

const getSchemaFromPath = (path, schema) => {
  if (path.length > 0) {
    const [property, ...remainingPath] = path;
    return getSchemaFromPath(remainingPath, schema[property]);
  } else {
    return schema;
  }
};

const translateError = (error, schema) => {
  const errorKey = error.keyword;
  const schemaPath = error.schemaPath.split('/').filter(p => p !== '#' && p !== errorKey);
  const subSchema = getSchemaFromPath(schemaPath, schema);

  let errorMessage = subSchema.errorMessage[errorKey];
  if (error?.params?.missingProperty) {
    errorMessage = errorMessage[error.params.missingProperty];
  }

  return errorMessage || error.message;
};

export { parseErrors };
