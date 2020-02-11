const storage = localStorage;

const get = key => storage.getItem(key);
const set = ({ key, value }) => storage.setItem(key, value);
const remove = key => storage.removeItem(key);

export default {
  get, set, remove
}