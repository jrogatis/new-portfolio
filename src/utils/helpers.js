import Moment from 'moment';
import 'moment/locale/pt-br';
import queryString from 'query-string';
import uuidv4 from 'uuid/v4';
import isEqual from 'react-fast-compare';
Moment.locale('pt-BR');

export const currIsEqual = val1 => val2 => val1 === val2;

export const formatCurrency = value =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export const removeEmpty = obj => {
  const newObject = Object.assign({}, obj);
  Object.keys(newObject).forEach(
    key =>
      (newObject[key] && typeof newObject[key] === 'object' && removeEmpty(newObject[key])) ||
      (((!newObject[key] && newObject[key] !== undefined) ||
        (!newObject[key] && newObject[key] !== null)) &&
        delete newObject[key]),
  );
  return newObject;
};

export const unMask = value => value.replace(/[^0-9]+/g, '');

export const removeSpaces = stringValue => stringValue.replace(/\s/g, '');

export const cleanObject = objs => objs.map(obj => obj.value);

export const getInitials = (name = '') => {
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
};

export const formatDate = date => Moment(date).format('DD/MM/YY [às] HH:MM');
export const dateFromNow = date => Moment(date, 'YYYYMMDD').fromNow();
export const getDay = date => Moment(date).date();
export const randColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

export const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result))),
  );

export const parseJwt = token => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

export const decode_utf8 = string => decodeURIComponent(escape(string));

export const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1);

export const arrayFromNumber = number => Array.apply(null, { length: number });

const suffixes = ['REQUEST', 'FULFILLED', 'REJECTED'];

export const getTypes = type =>
  suffixes.reduce((acc, curr) => ({ ...acc, [`${type}_${curr}`]: `${type}_${curr}` }), {});

export const isEmptyObj = (obj = {}) => Object.values(obj).filter(Boolean).length === 0;
export const isEqualObj = (obj1, obj2) => isEqual(obj1, obj2);

export const mapDispatchToProps = actions => dispatch => ({
  actions: Object.entries(actions).reduce(
    (acc, [actionName, action]) => ({
      ...acc,
      [actionName]: (...args) => dispatch(action(...args)),
    }),
    {},
  ),
});

export const queryStringParse = stringValue => queryString.parse(stringValue);

function* getColor(colors, reset = 0) {
  let index = reset;
  while (true) {
    yield colors[index];
    index = (index + 1) % colors.length;
  }
}
export const colorGen = (colors = []) => getColor(colors);

export const idGen = () => uuidv4();

export const isRequestOK = status => [200, 201, 208, 300].includes(status);

export const formValidation = {
  isRequired: (field, value) => !value && { [field]: 'campo obrigatório' },
  length: (field, value, length, message) =>
    value.length !== length && {
      [field]: message || `${field} deve conter ${length} caracteres`,
    },
};

export const replaceAllButDigits = (stringValue = '') => stringValue.replace(/[^0-9.]/g, '');
export const replaceAllButDigitsWithoutPoint = (stringValue = '') =>
  stringValue.replace(/[^0-9]/g, '');

export const productsTypeEnum = ['INTERNET_FIXA', 'TV', 'TELEFONE_FIXO', 'TELEFONE_MOVEL'];

export const findProductByType = (products, typeProduct) =>
  products.filter(product => product.typeProduct === typeProduct)[0];

export const orderProductsByType = products =>
  productsTypeEnum.map(typeProduct => findProductByType(products, typeProduct));

export const alphabeticalSortByProp = prop => (a, b) => {
  if (a[prop] < b[prop]) return -1;
  if (a[prop] > b[prop]) return 1;
  return 0;
};

export const alphabeticalSortArray = array =>
  array.sort((a, b) => {
    return a.firstname.localeCompare(b.firstname);
  });

export const filterNonEmptyKeys = obj =>
  Object.keys(obj).reduce(
    (acc, current) => (obj[current] ? { ...acc } : { ...acc, [current]: obj[current] }),
    {},
  );

export const isObject = maybeAnObject => Object(maybeAnObject) === maybeAnObject;

const filterObjectHelper = obj => Object.keys(obj).filter(key => !obj[key]);

export const filterObject = (obj, msg = '') => {
  const filteredObjectedKeys = filterObjectHelper(obj);
  return filteredObjectedKeys.reduce((acc, current) => ({ ...acc, [current]: msg }), {});
};

export const filterObjectByKey = (obj, key) =>
  Object.keys(obj).reduce(
    (acc, current) => (current === key ? { ...acc } : { ...acc, [current]: obj[current] }),
    {},
  );

export const isANumberValue = value => {
  return /^\d*$/.test(value);
};
