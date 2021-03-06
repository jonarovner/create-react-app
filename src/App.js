import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  console.log('process: ', process)

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout
  } = useAuth0()

  if (isLoading){
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    console.log(JSON.stringify(user))
    return (
      <div>
        Hello {user.nickname}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}

export default App;
