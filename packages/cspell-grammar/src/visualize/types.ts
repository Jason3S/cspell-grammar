import { Scope, Token } from '../grammar';


export type ScopeColorizer = (text: string, scopes: Scope) => string;
export type LineColorizer = (text: string, tokens: Token[]) => string;
