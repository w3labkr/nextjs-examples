'use client';

// The React Framework.
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// React Hooks for form state management and validation (Web + React Native).
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Bootstrap components built with React.
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

// Custom components
import { Asterisk } from '@/components/form';
import { Area, Footer } from '@/components/layout';

// Firebase provides the tools and infrastructure you need to develop, grow, and earn money from your app.
import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

// Internationalization
import { useTranslation } from '@/app/i18n/client';

const FormSchema = z
  .object({
    email: z.string().trim().nonempty('Email is required').email({ message: 'Invalid email address' }),
    password: z
      .string()
      .trim()
      .nonempty('Password is required')
      .min(8, { message: 'Must be 8 or more characters long' })
      .max(20, { message: 'Must be 20 or fewer characters long' }),
    confirmPassword: z.string().trim().nonempty('Confirm password is required'),
    terms: z.boolean().refine((val) => val === true),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match',
  });

const FormValues = {
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
};

type FormTypes = z.infer<typeof FormSchema>;

export default function Page({ params: { lng } }: { params: { lng: string } }): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation(lng, 'authentication');
  const {
    register,
    handleSubmit,
    getFieldState,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormTypes>({
    resolver: zodResolver(FormSchema),
    defaultValues: FormValues,
  });

  const onSubmit = (data: FormTypes) => {
    const { email, password } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        reset();
        router.push(`/${lng}/welcome`);
      })
      .catch((error: AuthError) => {
        // An error happened.
        console.log(t(`firebase:${error.code}`));
        setError('email', { message: t(`firebase:${error.code}`) });
      });
  };

  return (
    <>
      <Area className="main-area">
        <Container>
          <h1 className="mb-4 text-center display-1">{t('Sign Up')}</h1>

          <Form className="mb-4 mx-auto" onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 320 }}>
            <Form.Group className="mb-3">
              <Form.Label>
                {t('Email')} <Asterisk />
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                isValid={getFieldState('email').isDirty && !errors.email?.message}
                isInvalid={!!errors.email?.message}
                {...register('email')}
              />
              {errors.email?.message && (
                <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                {t('Password')} <Asterisk />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder={t('Password')}
                autoComplete="off"
                isValid={getFieldState('password').isDirty && !errors.password?.message}
                isInvalid={!!errors.password?.message}
                {...register('password')}
              />
              {errors.password?.message && (
                <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                {t('Confirm Password')} <Asterisk />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder={t('Confirm Password')}
                autoComplete="off"
                isValid={getFieldState('confirmPassword').isDirty && !errors.confirmPassword?.message}
                isInvalid={!!errors.confirmPassword?.message}
                {...register('confirmPassword')}
              />
              {errors.confirmPassword?.message && (
                <Form.Control.Feedback type="invalid">{errors.confirmPassword?.message}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check>
                <Form.Check.Input
                  type="checkbox"
                  isValid={getFieldState('terms').isDirty && !errors.terms?.message}
                  isInvalid={!!errors.terms?.message}
                  {...register('terms')}
                />
                <Form.Check.Label>{t('Agree to terms and conditions')}</Form.Check.Label>
              </Form.Check>
            </Form.Group>

            <Button type="submit" className="w-100" variant="primary" disabled={isSubmitting}>
              {t('Submit')}
            </Button>
          </Form>

          <Nav className="mb-5 justify-content-center">
            <Nav.Link as={Link} href={`/${lng}/signin`}>
              &#183;{t('Already have an account?')}
            </Nav.Link>
            <Nav.Link as={Link} href={`/${lng}/forgot-password`}>
              &#183; {t('Forgot your password?')}
            </Nav.Link>
          </Nav>
        </Container>
      </Area>
      <Footer />
    </>
  );
}
