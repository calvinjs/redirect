const toURL = (url, params) => url.includes('?') ? url : url + params;

module.exports = (table = {}) => {
  return {
    reset(newTable = {}) {
      table = newTable;
    },

    handle(req, res, next) {
      const url = req.url;
      const host = req.host;
      const hostname = req.hostname;
      const params = req.search || '';

      if (table[url]) {
        res.status(301).redirect(toURL(table[url], params));
      } else if (table[hostname + url]) {
        res.status(301).redirect(toURL(table[hostname + url], params));
      } else if (table[host + url]) {
        res.status(301).redirect(toURL(table[host + url], params));
      } else if (table[hostname]) {
        res.status(301).redirect(toURL(table[hostname] + url, params));
      } else if (table[host]) {
        res.status(301).redirect(toURL(table[host] + url, params));
      } else {
        next();
      }
    }
  }
}
