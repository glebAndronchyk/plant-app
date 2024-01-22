import {SvgProps} from 'react-native-svg';
import {ReactElement} from 'react';

export type SVGComponent = (props: SvgProps) => ReactElement | null;
