
const data = {};

export function set(newData) {
  Object.assign(data, newData);
}

export function get(prop) {
  return data[prop];
}
