let url = "const url = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash'";

const getUrlParams = (url)=>{
    const arr = url.split('?').pop().split('#').shift().split('&');
    const obj = {}
    arr.forEach(item => {
        const [key,val] = item.split('=');
        obj[key] = val;
    });
    return obj;
}

console.log(getUrlParams(url));
