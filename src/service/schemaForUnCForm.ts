import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required('Required name! ')
      .matches(/^[A-Z][a-zA-Z]+$/, 'Only letters. First uppercased!'),
    age: yup
      .number()
      .required('Required age!')
      .positive('From 1')
      .integer('Integer numbers')
      .transform((value) => (isNaN(value) ? undefined : value)),
    email: yup
      .string()
      .email('must be a valid email')
      .required('Required email! '),
    password: yup
      .string()
      .required('Password is required ')
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).*$/,
        '1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
      ),
    confirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must confirmation')
      .required('Password is required '),
    gender: yup.string().required(),
    state1: yup.string().required('Please select a country'),
    terms1: yup
      .string()
      .required('You must agree before submitting.')
      .oneOf(['on'], 'You must agree before submitting.'),

    picture1: yup
      .mixed<File>()
      .required('Please select a file')
      .test('required', 'Please select a file ', (value) => {
        if (value.size !== 0) {
          return true;
        }
      })
      .test('fileSize', 'The file is too large ', (value) => {
        return value.size < 100000;
      })
      .test('type', 'We only support jpeg/png', (value) => {
        return value.type === 'image/jpeg' || value.type === 'image/png';
      }),
  })
  .required();
