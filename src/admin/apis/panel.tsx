
const route = '/admin'
const product = '/product'

const adminApis = {
    routes: {
        login: route,
        register: 'register',
    },

    admin: {
        dashboard: 'dashboard',
    },

    items: {
        create: 'create' + product,
        view:  'view' + product
    },

    orders : {
        create: route + '/orders',
        view: route + '/all/orders'
    },

    trades : {
        create: route + '/trades',
        view: route + '/all/orders'
    },

}
const { routes, admin, items,  orders, trades } = adminApis; 

export { routes, admin, items, orders, trades}