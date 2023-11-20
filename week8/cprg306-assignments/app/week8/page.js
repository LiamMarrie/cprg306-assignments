'use client';
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut}>Sign Out</button>
          <a href="./shopping-list/page.js">Go to Shopping List</a>
        </div>
      ) : (
        <button onClick={handleGitHubSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
};

export default LandingPage;
