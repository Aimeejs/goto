const url = require('url');
const isMobile = require('isMobile');

class Goto {
    constructor() {
        this.args = url('?') || {}
    }

    // For Mobile client
    computer(url) {
        this.url = url;
        this.isMobileSite = true;
        this.__delay();
        return this;
    }

    // For Computer client
    mobile(url) {
        this.url = url;
        this.isMobileSite = false;
        this.__delay();
        return this;
    }

    filter(key, value) {
        this.filter.key = key;
        this.filter.value = value;
    }

    __delay() {
        setTimeout(e => this.__change(), 0)
    }

    __change() {
        if(
            // 跳转规则检查
            // PC设备访问Mobile网站 => false
            // Mobile设备访问PC网站 => false
            isMobile.any !== this.isMobileSite &&
            // 过滤规则检查
            (!this.filter.key || this.filter.key && this.args[this.filter.key] !== this.filter.value)
        ){
            location.href = this.url
        }
    }
}

module.exports = new Goto;
