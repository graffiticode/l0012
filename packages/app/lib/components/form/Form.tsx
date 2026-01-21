import "../../index.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function renderErrors(errors: { message: string; from: number; to: number }[]) {
  return (
    <div className="flex flex-col gap-2">
      {errors.map((error, i) => (
        <div
          key={i}
          className="rounded-md p-3 border text-sm bg-red-50 border-red-200 text-red-800"
        >
          {error.message}
        </div>
      ))}
    </div>
  );
}

function renderJSON(data) {
  return (
    <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
  );
}

function render({ state }) {
  const { data } = state;
  return renderJSON(data);
}

export const Form = ({ state }) => {
  if (Array.isArray(state.data.errors) && state.data.errors.length > 0) {
    return renderErrors(state.data.errors);
  }
  return render({state});
}
