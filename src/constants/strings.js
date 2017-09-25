/* @flow */
import { format } from 'currency-formatter';

export const USERNAME = 'Uživatelské jméno';
export const PASSWORD = 'Heslo';
export const SIGN_IN = 'Přihlásit se';

export const NAVBAR_TITLE = 'ZONKY';
export const RATING = 'RATING';
export const INTEREST_RATE = 'ÚROK';
export const REPAYMENT_PERIOD = 'DOBA';
export const INVESTORS_COUNT = 'INVESTOVALO';
export const REMAINING_TIME = 'ZBÝVAJICÍ ČAS';

const formatCzkAmount = (amount: number) => format(amount, { code: 'CZK', precision: 0 });

export const loanProgressTitleFormatter = (invested: number, amount: number) =>
  `Investováno ${formatCzkAmount(invested)} z ${formatCzkAmount(amount)}`;
