///will work over the same cookie, which will be read as an array later, 
function get_cookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
function add_values_to_cookie(name, type){
        console.log(get_cookie(type));
        let cookie = get_cookie(type);
        if (cookie != null ){
                if (cookie.includes(",")){
                        let array_cookies = cookie.split(",");
                        let after_cookie = [];
                        after_cookie = type + "=" + array_cookies[0];
                        console.log("value to add: " , name );
                        for (let i = 1;i < array_cookies.length;i++){
                                after_cookie = after_cookie + "," + array_cookies[i];
                                console.log(after_cookie);
                        }
                        after_cookie = after_cookie + "," + name;
                        document.cookie=after_cookie;
                        console.log("cookie:" , after_cookie);
                        } else {
                                document.cookie=type  + "=" + cookie + "," + name;
                                console.log(type  + "=" + cookie + "," + name);
                        }
        } else {
                document.cookie=type + "=" + name;
        }

}
