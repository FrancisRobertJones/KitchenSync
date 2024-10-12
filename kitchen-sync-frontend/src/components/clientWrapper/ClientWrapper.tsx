"use client";

import { ReactNode } from 'react';
import Auth0ProviderWrapper from '../auth/AuthProviderWrapper';



const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return <Auth0ProviderWrapper>{children}</Auth0ProviderWrapper>;
};

export default ClientWrapper;   