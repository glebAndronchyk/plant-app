import {useContext} from 'react';
import {AuthStackContext} from '../settings.ts';

export const useAuthStackContext = () => useContext(AuthStackContext);
