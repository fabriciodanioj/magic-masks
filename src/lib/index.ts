/**
 * Functions
 */
import cpf from './cpf';
import phone from './phone';
import rg from './rg';
import unmask from './unmask';
import zipCode from './zipCode';

export { default as cpf } from './cpf';
export { default as phone } from './phone';
export { default as rg } from './rg';
export { default as unmask } from './unmask';
export { default as zipCode } from './zipCode';

export default {
  cpf,
  rg,
  unmask,
  zipCode,
  phone,
};
