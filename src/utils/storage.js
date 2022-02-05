import {
    isPrimitive
} from './index'

export function getItem(name) {
    return JSON.parse(localStorage.getItem(name))
}

export function setItem(name, value) {
    if (!isPrimitive(value)) {
        localStorage.setItem(name, JSON.stringify(value))
        return true
    }
    return false
}

export function setPrimitiveItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value))
    return true
}

export function clearItem(name) {
    localStorage.clear(name)
    return true
}