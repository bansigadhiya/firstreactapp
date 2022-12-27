import React from 'react';
import * as Yup from 'yup';

export let RegisterSchema = Yup.object({
    name : Yup.string().required(),
});

export default RegisterSchema;
