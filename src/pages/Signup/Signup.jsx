import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { registerUser } from '../../services/authService';
import FormField from '../../components/AuthForm/FormField';
import StatusAlert from '../../components/AuthForm/StatusAlert';

const Signup = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = t('signup.errors.nameRequired');
    }

    if (!form.apellido.trim()) {
      newErrors.apellido = t('signup.errors.lastNameRequired');
    }

    if (!form.email.trim()) {
      newErrors.email = t('signup.errors.emailRequired');
    }

    if (!form.password.trim()) {
      newErrors.password = t('signup.errors.passwordRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus({ type: 'error', message: t('signup.status.requiredFields') });
      return;
    }

    setLoading(true);
    const result = await registerUser(form);
    setLoading(false);

    if (result.status === 201) {
      setStatus({ type: 'success', message: t('signup.status.success') });
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 1400);
      return;
    }

    if (result.status === 400) {
      setStatus({ type: 'error', message: result.error || t('signup.status.invalidData') });
      return;
    }

    if (result.status === 409) {
      setStatus({ type: 'error', message: result.error || t('signup.status.alreadyRegistered') });
      return;
    }

    setStatus({ type: 'error', message: result.error || t('signup.status.genericError') });
  };

  return (
    <div className="bg-primary min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-accent/20 bg-secondary/90 p-8 shadow-2xl shadow-black/10 sm:p-10">
          <div className="mb-8 text-center">
            <p className="text-accent text-sm uppercase tracking-[0.35em] font-semibold mb-3">
              {t('signup.kicker')}
            </p>
            <h1 className="text-4xl font-serif font-bold text-contrast sm:text-5xl">
              {t('signup.title')}
            </h1>
            <p className="mt-4 text-contrast/70">
              {t('signup.description')}
            </p>
          </div>

          <StatusAlert type={status.type} message={status.message} />

          <form className="space-y-6 mt-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                label={t('signup.fields.name')}
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder={t('signup.placeholders.name')}
                required
                error={errors.nombre}
              />
              <FormField
                label={t('signup.fields.lastName')}
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                placeholder={t('signup.placeholders.lastName')}
                required
                error={errors.apellido}
              />
            </div>

            <FormField
              label={t('signup.fields.email')}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('signup.placeholders.email')}
              required
              error={errors.email}
            />

            <FormField
              label={t('signup.fields.password')}
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={t('signup.placeholders.password')}
              required
              error={errors.password}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary transition hover:bg-contrast disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? t('signup.buttons.loading') : t('signup.buttons.submit')}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-contrast/70">
            <p>
              {t('signup.loginPrompt')}{' '}
              <Link to="/login" className="font-semibold text-accent hover:text-contrast">
                {t('signup.loginLink')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
