import { bell } from '@lp-labs/bell-numbers';
if (bell(7) !== 877n) throw new Error('Sequence');
// @ts-expect-error invalid argument must be rejected by declarations
bell('2');
