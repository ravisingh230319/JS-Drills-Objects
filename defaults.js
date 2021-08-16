export function defaults(obj, defaultProps) {
    Object.keys(defaultProps).forEach((properties) => {
      if (Object.prototype.hasOwnProperty.call(obj, properties)) 
        return;
      else
        obj[properties] = defaultProps[properties];
    });
    return obj;
}