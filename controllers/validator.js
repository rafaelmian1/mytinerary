const joi = require("joi");
const validator = (req, res, next) => {
  const schema = joi.object({
    first_name: joi.string().trim().min(1).max(15).pattern(new RegExp('g[a-zA-Z]$')).required().message({
        'string.empty': 'Name field must be completed',
        'string.pattern.base':'Name field must not contain numbers',
    }),
    last_name: joi.string().trim().min(1).max(15).pattern(new RegExp('g[a-zA-Z]$')).required().message({
        'string.empty': 'Name field must be completed',
        'string.pattern.base':'Name field must not contain numbers',
    }),
    email: joi.string().trim().required().email().message({
        'string.empty': 'Email field must be completed',
        'string.pattern.base':'Email must be a valid email',
    }),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().message({
        'string.empty':'Password field must be completed',
        'string.pattern.base': 'Password must be at least 8 characters with uppercase letters'
    }),
    repeat_password: Joi.ref('password'),
    img: joi.string().required().message({
        'string.empty': 'Image fiedl must be completed'
    }),
    country: joi.string().invalid("choose"),
  });
  const validation = schema.validate(req.body, {abortEarly=false});
  if (!validation.error) {
    next();
  } else {
      console.log(validation)
  }
};
module.exports = validator;
