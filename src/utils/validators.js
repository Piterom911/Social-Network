export const required = value => (value ? undefined : "This field is required");
export const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
export const minValue = min => value => value && value.length >= min ? undefined : `Should be greater than ${min}`;
export const maxValue = max => value => value && value.length <= max ? undefined : `Too long text! Max length should be less than ${max} symbols`;
export const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);