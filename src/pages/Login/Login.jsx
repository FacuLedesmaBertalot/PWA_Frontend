import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-accent/20 bg-secondary/90 p-8 shadow-2xl shadow-black/10 sm:p-10 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.35em] font-semibold mb-3">
            {t('login.kicker')}
          </p>
          <h1 className="text-4xl font-serif font-bold text-contrast sm:text-5xl mb-4">
            {t('login.title')}
          </h1>
          <p className="text-contrast/70 mb-6">
            {t('login.description')}
          </p>
          <Link
            to="/registro"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary transition hover:bg-contrast"
          >
            {t('login.createAccount')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
