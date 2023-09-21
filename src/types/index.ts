import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components/native';
import { RuleSet } from 'styled-components/native/dist/types';

export type CSS = (theme: DefaultTheme) => RuleSet;
export type RDC = Record<string, unknown>;
// export type SSP<P = RDC> = (props: WithTheme<P, DefaultTheme>) => RuleSet;