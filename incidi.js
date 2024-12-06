function mergeConfig(...configs) {
  const result = {};
  for (const config of configs) {
    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        result[key] = config[key];
      }
    }
  }
  return result;
}
