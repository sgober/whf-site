const getSchema = fields => {
  let schema = {
    type: 'object',
    properties: {},
    required: [],
    errorMessage: {
      required: {}
    },
    additionalProperties: false
  };

  fields.forEach(field => {
    schema.properties[field.id] = {
      type: 'string',
      format: field.format,
      isNotEmptyString: field.required,
      isNotNull: field.required,
      nullable: true,
      errorMessage: {
        ...(field.format && { format: `Must be a valid ${field.format}` }),
        ...(field.required && { isNotEmptyString: 'This field is required' }),
        ...(field.required && { isNotNull: 'This field is required' })
      }
    };

    if (field.required) {
      schema.required.push(field.id);
      schema.errorMessage.required[field.id] = 'This field is required';
    }
  });

  return schema;
};

export { getSchema };
