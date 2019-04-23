const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function getSource(source, type) {
  const regex = new RegExp(`<${type}[^>]*>`);
  let openingTag = source.match(regex);

  if (!openingTag) {
    return '';
  }

  openingTag = openingTag[0];


  return source.slice(
    source.indexOf(openingTag) + openingTag.length,
    source.lastIndexOf(`</${type}>`),
  );
}

function getUuid(length = 16) {
  const charSetLen = charSet.length;
  let outStr = '';
  for (let i = 0; i < length; i++) {
    outStr = outStr.concat(
      charSet.charAt(Math.floor(Math.random(0, 1) * charSetLen)),
    );
  }
  return outStr;
}

const on = (function () {
  return function (element, event, handler) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  };
}());

const off = (function () {
  return function (element, event, handler) {
    if (element && event) {
      element.removeEventListener(event, handler, false);
    }
  };
}());

export {
  on,
  off,
  getSource,
  getUuid,
};
