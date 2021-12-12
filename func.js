class Func {
    getAttr = props => {
        const [ selector, attributes ] = props;
        return document.querySelector(selector).getAttribute(attributes);
    }
    setAttr = props => {
        const [selector, nameAttibute, attributes] = props;
        return document.querySelector(selector).setAttribute(nameAttibute, attributes);
    }
    data = props => {
        const [ type, selector , index ] = props;
        switch (type) {
            case 'get':
                return document.querySelector(selector).getAttribute(`data-${index}`);
            case 'set':
                return document.querySelector(selector).setAttribute(`data-${index}`);
            default:
                return document.querySelector(selector).getAttribute(`data-${index}`);
        }
    }
    element = props => {
        const selector = props;
        return document.querySelector(selector);
    }
    elements = props => {
        const selector = props;
        return document.querySelectorAll(selector);
    }
    innerText = props => {
        const [ selector, text ] = props;
        return document.querySelector(selector).textContent = text;
    }
    insertText = props => {
        const selector = props;
        return document.querySelector(selector).textContent;
    }
    value = props => {
        const selector = props;
        return document.querySelector(selector).value;
    }
    forEach = props => {
        const [ selector, func ] = props;
        document.querySelectorAll(selector).forEach(func);
    }
    elementsLength = props => {
        const selector = props;
        return document.querySelectorAll(selector).length;
    }
    valueLength = props => {
        const selector = props;
        return document.querySelector(selector).value.length
    }
    duplicateArray = props => {
        const array = props;
        return array.filter((item, index) => { return array.indexOf(item) === index });
    }
    local = props => {
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
    urlParam = props => {
        return new Url().searchParams.get(props);
    }
    // getFetch(props) {
    //     const { url, before, success } = props
    //     req = function () {
    //         before();
    //         return fetch.apply(this, arguments);
    //     }
    //     req(url).then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         success(data);
    //     });
    // }
    json = (type, prop) => {
        switch(type) {
            case 'pack':
                return JSON.stringify(prop);
            case 'unpack':
                return JSON.parse(prop);   
            default:
                return console.log('Не указан тип или не правильные данные')
        }
    };
    curDateTime = props => {
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
    event = props => {
        const [ selector, event, func ] = props;
        return document.querySelector(selector).addEventListener(event, func, false);
    };
    tRowLen = (selector) => {
        return document.querySelector(selector).rows.length;
    };
    tBodyLen = (selector) => {
        return document.querySelector(selector).rows.length - 1;
    }


}