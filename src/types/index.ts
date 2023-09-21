import { DefaultTheme } from "styled-components/native";
import { RuleSet } from "styled-components/native/dist/types";
import { IMutation, IQuery } from "~/apollo/types";

export type CSS = (theme: DefaultTheme) => RuleSet;
export type RDC = Record<string, unknown>;
// export type SSP<P = RDC> = (props: WithTheme<P, DefaultTheme>) => RuleSet;
export type IQueryFilter<T extends keyof IQuery> = Pick<IQuery, T>;
export type IMutationFilter<T extends keyof IMutation> = Pick<IMutation, T>;
