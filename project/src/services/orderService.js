// This is the order service that fetches from the Order Management API.

import http from './httpService';
import { apiUrl } from '../config.json';

export function getOrders() {
    return http.get(apiUrl + '/orders');
}

export function getOrder(orderId) {
    return http.get(apiUrl + '/orders/' + orderId);
}

export function saveOrder(order) {
    if (order._id) {
        const body = { ...order };
        delete body._id;
        return http.put(apiUrl + '/orders/' + order._id, body);
    }
    return http.post(apiUrl + '/orders', order);
}

export function deleteOrder(orderId) {
    return http.delete(apiUrl + '/orders/' + orderId);
}

export default {
    getOrders,
    getOrder,
    saveOrder,
    deleteOrder
}