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
    state: yup.object({
      value: yup.string().required('Please select a country'),
    }),
    picture: yup
      .mixed<FileList>()
      .required()
      .test('required', 'Please select a file ', (value: FileList) => {
        return value?.length > 0;
      })
      .test('fileSize', 'The file is too large ', (value) => {
        return value && value[0] && value[0].size < 100000;
      })
      .test('type', 'We only support jpeg/png', function (value) {
        return (
          value &&
          value[0] &&
          (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
        );
      }),

    terms: yup.boolean().oneOf([true], 'You must agree before submitting.'),
  })
  .required();
