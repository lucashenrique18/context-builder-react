let requiredModules = ["Init", "Hangup", "Encerramento"];

let optionalModules = [
  "Localização",
  "Negociação",
  "Preventiva",
  "Valida celular",
  "Valida CPF",
  "Transferência",
  "Mensagem",
  "Pesquisa"
];

let customModules = ["Bloco Custom"];

let customComponents = [
  "Playback",
  "TTS",
  "Saudação",
  "Read",
  "Falar Valor",
  "Falar Data",
  "Falar Dia",
  "Falar Dia Semana",
  "Verifica CPF",
  "Wait",
  "SayDigits",
  "RecVoz",
  "Set",
  "AGI",
  "System",
  "Add Days",
  "Persona",
  "Custom"
];

export const Required = {
  getValue: () => requiredModules,
  setValue: v => (requiredModules = v)
};

export const Optional = {
  getValue: () => optionalModules,
  setValue: v => (optionalModules = v)
};

export const Custom = {
  getValue: () => customModules,
  setValue: v => (customModules = v)
};

export const Components = {
  getValue: () => customComponents,
  setValue: v => (customComponents = v)
};
