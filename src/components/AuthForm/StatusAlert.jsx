const StatusAlert = ({ type, message }) => {
  if (!message) {
    return null;
  }

  const baseClasses = 'rounded-xl border px-4 py-3 text-sm font-medium';
  const style =
    type === 'success'
      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100'
      : 'bg-red-500/10 border-red-500/30 text-red-100';

  return <div className={`${baseClasses} ${style}`}>{message}</div>;
};

export default StatusAlert;
