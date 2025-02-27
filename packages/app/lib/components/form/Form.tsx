import "../../index.css";
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
  return render({state});
}
