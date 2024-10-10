"use client";

import { ReactNode } from 'react';
import Auth0ProviderWrapper from '../authWrapper/AuthProviderWrapper';


const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return <Auth0ProviderWrapper>{children}</Auth0ProviderWrapper>;
};

export default ClientWrapper;   