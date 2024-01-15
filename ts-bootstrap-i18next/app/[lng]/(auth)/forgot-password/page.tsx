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

// Internationalization
import { useTranslation } from '@/app/i18n/client';

const FormSchema = z.object({
  email: z.string().trim().nonempty('Email is required').email({ message: 'Invalid email address' }),
});

const FormValues = {
  email: '',
};

type FormTypes = z.infer<typeof FormSchema>;

export default function Page({ params: { lng } }: { params: { lng: string } }): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation(lng, 'authentication');
  const {
    register,
    handleSubmit,
    getFieldState,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormTypes>({
    resolver: zodResolver(FormSchema),
    defaultValues: FormValues,
  });

  const onSubmit = (data: FormTypes) => {
    console.log(data);
    reset();
    router.push(`/${lng}/reset-password`);
  };

  return (
    <>
      <Area className="main-area">
        <Container>
          <h1 className="mb-4 text-center display-1">{t('Forgot Password')}</h1>

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

            <Button type="submit" className="w-100" variant="primary" disabled={isSubmitting}>
              {t('Reset Password')}
            </Button>
          </Form>

          <Nav className="mb-5 justify-content-center">
            <Nav.Link as={Link} href={`/${lng}/signin`}>
              &#183; {t('Already have an account?')}
            </Nav.Link>
            <Nav.Link as={Link} href={`/${lng}/forgot-username`}>
              &#183; {t('Forgot your username?')}
            </Nav.Link>
          </Nav>
        </Container>
      </Area>
      <Footer />
    </>
  );
}
