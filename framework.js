const html = elementByTagName('html')
const head = elementByTagName('head')
const body = elementByTagName('body')

function element(str) {
    return document.createElement(str.toUpperCase())
}

function hierarchy() {
    for(var i = 0; i < arguments.length-1; i++) {
        arguments[i].appendChild(arguments[i+1])
    }
    return arguments[0]
}

function querySelector(query) {
    return document.querySelectorAll(query)
}

function onclick(element, fun) {
    element.onclick = fun
    return element
}

function append(element, el) {
    element.appendChild(el)
    return element
}

function add(element) {
    for(var i = 1; i < arguments.length; i++) {
        append(element, arguments[i])
    }
    return element
}

function setAttribute(element, attr, val) {
    element.setAttribute(attr, val);
    return element
}

function setAttributes(element) {
    for(var i = 1; i < arguments.length-1; i += 2) {
        setAttribute(element, arguments[i], arguments[i+1])
    }
    return element
}

function getAttribute(element, str) {
    return element.getAttribute(str)
}

function removeAttribute(element, str) {
    element.removeAttribute(str)
    return element
}

function elementsByTagName(str) {
    return document.getElementsByTagName(str)
}

function elementById(id) {
    return document.getElementById(id)
}

function elementByTagName(str) {
    return elementsByTagName(str)[0]
}

function text(element, str) {
    element.innerText = str
    return element
}

function addClass(element, className) {
    return setClass(element, element.className + className)
}

function setClass(element, className) {
    element.className = className
    return element
}

function setId(element, id) {
    return setAttribute(element, 'id', id)
}

function onload(element, fun) {
    element.onload = fun
    return element
}

function addStyle(path) {
    var link = element('link')
    setAttribute(link, 'rel', 'stylesheet')
    setAttribute(link, 'href', path)
    add(
        head,
        link
    )
    return document.querySelector('html')
}
