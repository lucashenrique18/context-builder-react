let Clientes = ['Paschoalotto', 'Meireles e Freitas', 'Fama', 'Bulk', 'Liderança', 'Egg', 'Azimute', 'Sercom', 'CobCred', 'Talkeen'];

export default {
  getValue: () => Clientes,
  setValue: v => (Clientes = v)
};
