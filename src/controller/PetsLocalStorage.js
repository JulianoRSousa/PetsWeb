const PetsLocalStorage = {
  getItem(item) {
    var JSONitem = JSON.parse(localStorage.getItem(item + ""));
    return JSONitem;
  },
  setItem(name, value) {
    var JSONValue = JSON.stringify(value);
    localStorage.setItem(name + "", JSONValue);
  },
  clear() {
    return localStorage.clear();
  },
};

export default PetsLocalStorage;
