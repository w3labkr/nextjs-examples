'use client';

import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSchema } from './schema';

// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '@/lib/firebase/config';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';

export default function Page() {
  const router = useRouter();
  const t = useTranslations('auth/signin');
  const { schema, defaultValues } = useSchema();
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    console.log(data);

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     reset();
    //     router.push('/dashboard');
    //   })
    //   .catch((error) => {
    //     // An error happened.
    //     setError('password', { message: t(`firebase:${error.code}`) });
    //   });
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Typography component="h1" variant="h5" align="center">
          {t('title')}
        </Typography>
        <Typography
          component="p"
          variant="body2"
          color="text.secondary"
          align="center"
          className="whitespace-pre-line mt-1"
        >
          {t('description')}
        </Typography>
      </div>
      <div className="mt-6">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              required
              control={control}
              name="email"
              type="email"
              label={t('email')}
              autoComplete="email"
              autoFocus
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              required
              control={control}
              name="password"
              type="password"
              label={t('password')}
              autoComplete="current-password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Checkbox control={control} name="rememberMe" label={t('remember-me')} />
          </Grid>
        </Grid>
      </div>
      <div className="mt-6">
        <Button type="submit" disabled={isSubmitting} variant="contained" size="large" fullWidth>
          {t('submit')}
        </Button>
      </div>
    </form>
  );
}
