const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keydown",function(event) {
    if(event.code == "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;
    console.log(searchInput)
    window.location.href="https://www.google.com/search?q=" + input  +"&sca_esv=f684702dde6df33f&sxsrf=ADLYWIJqgAwiE1S9CeYZ5fqn12Bjk0lZbw%3A1731765261966&source=hp&ei=DaQ4Z6y3N7GUseMP74z2gQs&iflsig=AL9hbdgAAAAAZziyHVkp-1i3OGpNT5wQo3RBeq4D43s5&ved=0ahUKEwjs8ZSqgOGJAxUxSmwGHW-GPbAQ4dUDCBg&uact=5&oq=" + input +"&gs_lp=Egdnd3Mtd2l6IgVoZWxsbzIEECMYJzIIEC4YgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIKEC4YgAQYAhjLATIIEAAYgAQYsQMyCxAuGIAEGLEDGNQCMgUQABiABDIFEAAYgAQyBRAAGIAESNgIUABYkAZwAHgAkAEAmAGdAaABxAWqAQMwLjW4AQPIAQD4AQGYAgWgAtwFwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxjRAxjHAZgDAJIHAzAuNaAH-jw&sclient=gws-wiz"
}