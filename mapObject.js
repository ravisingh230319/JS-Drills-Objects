export function mapObject(obj, cb) {
    Object.keys(obj).forEach((key) => {
      obj[key] = cb(obj[key]);
    });
    return obj;
}