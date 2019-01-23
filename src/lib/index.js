import ToastComponent from './vue2toast.vue';

let Toast = {};
Toast.install = function (Vue, options) {
    let opt = {
        duration: 3000, // 时长
    };
    let callback = ''; // 回调函数

    // 设置用户自定义配置项
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            const element = options[key];
            opt[key] = element;
        }
    }

    Vue.prototype.$toast = function (message, options) {
        if (typeof options == 'object') {
            for (const key in options) {
                if (options.hasOwnProperty(key)) {
                    const element = options[key];
                    opt[key] = element;
                }
            }
        } else if (typeof options == 'function') {
            callback = options;
        }
        const ToastController = Vue.extend(ToastComponent);
        const instance = new ToastController().$mount(document.createElement('div'));
        instance.message = message;
        instance.visible = true;
        document.body.appendChild(instance.$el);
        setTimeout(() => {
            instance.visible = false;
            setTimeout(() => {
                document.body.removeChild(instance.$el);
                callback && callback();
            }, 0);
        }, opt.duration);
    }

    // 扩展自定义配置项
    Vue.prototype.$toast['show'] = function (message, options) {
        return Vue.prototype.$toast(message, options);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Toast);
}

export default Toast;