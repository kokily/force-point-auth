import AuthForm from "./components/AuthForm";
import AuthTemplate from "./components/AuthTemplate";
import useAuth from "./hooks/useAuth";

function App() {
  const { id, password, onChange, onSubmit } = useAuth();

  return (
    <AuthTemplate>
      <AuthForm
        id={id}
        password={password}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </AuthTemplate>
  );
}

export default App;