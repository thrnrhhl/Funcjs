
const getAttr = props => {
    const [selector, attributes] = props;
    return document.querySelector(selector).getAttribute(attributes);
}
const setAttr = props => {
    const [selector, nameAttibute, attributes] = props;
    return document.querySelector(selector).setAttribute(nameAttibute, attributes);
}
const data = props => {
    const [type, selector, index] = props;
    switch (type) {
        case 'get':
            return document.querySelector(selector).getAttribute(`data-${index}`);
        case 'set':
            return document.querySelector(selector).setAttribute(`data-${index}`);
        default:
            return document.querySelector(selector).getAttribute(`data-${index}`);
    }
}
const element = props => {
    const selector = props;
    return document.querySelector(selector);
}
const elements = props => {
    const selector = props;
    return document.querySelectorAll(selector);
}
const innerText = props => {
    const [selector, text] = props;
    return document.querySelector(selector).textContent = text;
}
const insertText = props => {
    const selector = props;
    return document.querySelector(selector).textContent;
}
const value = props => {
    const selector = props;
    return document.querySelector(selector).value;
}
const forEach = props => {
    const [selector, func] = props;
    document.querySelectorAll(selector).forEach(func);
}
const elementsLength = props => {
    const selector = props;
    return document.querySelectorAll(selector).length;
}
const valueLength = props => {
    const selector = props;
    return document.querySelector(selector).value.length
}
const duplicateArray = props => {
    const array = props;
    return array.filter((item, index) => { return array.indexOf(item) === index });
}
const local = props => {
    const [type, name, data] = props;
    switch (type) {
        case 'set':
            return localStorage.setItem(name, data);
        case 'get':
            return localStorage.getItem(name);
        default:
            return localStorage.setItem(name, data);
    }
}
const urlParam = props => {
    return new Url().searchParams.get(props);
}
const json = (type, prop) => {
    switch (type) {
        case 'pack':
            return JSON.stringify(prop);
        case 'unpack':
            return JSON.parse(prop);
        default:
            return console.log('Не указан тип или не правильные данные')
    }
};
const curDateTime = props => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let hour = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    switch (props) {
        case 'db':
            return `${year}-${month}-${day}T${hour}:${minutes}`
        case '/':
            return `${day}/${month}/${year} ${hour}:${minutes}`
        case 'standart':
            return `${day} ${month} ${year} ${hour}:${minutes}`
        case '.':
            return `${day}.${month}.${year} ${hour}:${minutes}`
        default:
            return `${day}.${month}.${year} ${hour}:${minutes}`
    }
};
const event = props => {
    const [selector, event, func] = props;
    return document.querySelector(selector).addEventListener(event, func, false);
};
const tRowLen = (selector) => {
    return document.querySelector(selector).rows.length;
};
const tBodyLen = (selector) => {
    return document.querySelector(selector).rows.length - 1;
}


