"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <p>Welcome, {user?.name}!</p>
        <Button className="bg-black hover:bg-gray-200 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log out
        </Button>
      </div>
    );
  }

  return <Button className="bg-black hover:bg-gray-200 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300" onClick={() => loginWithRedirect()}>Log in</Button>;
};

export default LoginButton;