// Bootstrap components built with React.
import Container from 'react-bootstrap/Container';

// Internationalization
import { useTranslation } from '@/app/i18n';

export default async function Page({ params: { lng } }: { params: { lng: string } }): Promise<JSX.Element> {
  const { t } = await useTranslation(lng);

  return (
    <Container>
      <h1 className="mb-0">{t('Hello, World!')}</h1>
    </Container>
  );
}
