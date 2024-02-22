import {createContext} from 'react';

interface AuthStackContextSignature {
  triggerOutAnimation: ((toValue?: number) => void) | null;
}

export const AuthStackContext = createContext<AuthStackContextSignature>({
  triggerOutAnimation: null,
});
