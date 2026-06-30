import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router'; // Sumamos useLocation
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import { loginUser } from '../../services/authService';
import FormField from '../../components/AuthForm/FormField';
import StatusAlert from '../../components/AuthForm/StatusAlert';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation(); // Atrapamos la ruta actual y sus datos ocultos
  
  const { iniciarSesion } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  
  // MAGIA ACÁ: Si viene un mensaje desde el botón de favoritos, lo ponemos como estado inicial
  const [status, setStatus] = useState({ 
    type: location.state?.mensaje ? 'error' : '', // Podés cambiar 'error' por 'info' si tu StatusAlert lo soporta
    message: location.state?.mensaje || '' 
  });
  
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = t('login.errors.emailRequired', 'El email es obligatorio');
    }

    if (!form.password.trim()) {
      newErrors.password = t('login.errors.passwordRequired', 'La contraseña es obligatoria');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    // Al escribir, se limpia la alerta (incluyendo el mensaje que mandamos desde Favoritos)
    setStatus({ type: '', message: '' }); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus({ type: 'error', message: t('login.status.requiredFields', 'Completá los campos requeridos') });
      return;
    }

    setLoading(true);
    const result = await loginUser(form);
    setLoading(false);

    if (result.status === 200) {
      iniciarSesion(result.data.token, result.data.usuario);
      navigate('/', { replace: true });
      return;
    }

    if (result.status === 401 || result.status === 400) {
      setStatus({ type: 'error', message: result.error || t('login.status.invalidCredentials', 'Credenciales inválidas') });
      return;
    }

    setStatus({ type: 'error', message: result.error || t('login.status.genericError', 'Ocurrió un error inesperado') });
  };

  return (
    <div className="bg-primary min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-accent/20 bg-secondary/90 p-8 shadow-2xl shadow-black/10 sm:p-10">
          <div className="mb-8 text-center">
            <p className="text-accent text-sm uppercase tracking-[0.35em] font-semibold mb-3">
              {t('login.kicker', 'BIENVENIDO')}
            </p>
            <h1 className="text-4xl font-serif font-bold text-contrast sm:text-5xl">
              {t('login.title', 'Iniciar Sesión')}
            </h1>
            <p className="mt-4 text-contrast/70">
              {t('login.description', 'Ingresá tus credenciales para continuar')}
            </p>
          </div>

          {/* Tu StatusAlert ahora va a mostrar el mensaje si venía del botón de favoritos */}
          <StatusAlert type={status.type} message={status.message} />

          <form className="space-y-6 mt-6" onSubmit={handleSubmit} noValidate>
            
            <FormField
              label={t('login.fields.email', 'Email')}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('login.placeholders.email', 'tu@email.com')}
              required
              error={errors.email}
            />

            <FormField
              label={t('login.fields.password', 'Contraseña')}
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={t('login.placeholders.password', '••••••••')}
              required
              error={errors.password}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary transition hover:bg-contrast disabled:cursor-not-allowed disabled:opacity-60 mt-4"
            >
              {loading ? t('login.buttons.loading', 'Cargando...') : t('login.buttons.submit', 'Ingresar')}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-contrast/70">
            <p>
              {t('login.signupPrompt', '¿No tenés una cuenta?')}{' '}
              <Link to="/registro" className="font-semibold text-accent hover:text-contrast">
                {t('login.createAccount', 'Crear cuenta')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;