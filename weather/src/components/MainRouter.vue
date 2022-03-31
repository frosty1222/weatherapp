<template>
    <div id="main-home">
        <router-link class="link"  to="/login" v-if="!this.username">
            <p class="item-menu">
                Login
            </p>
        </router-link>
        <router-link class="link" to="/register" v-if="!this.username">
            <p class="item-menu">
                Register
            </p>
        </router-link>
        <router-link class="link" to="/">
            <p class="item-menu">
                Weather
            </p>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:this.getCookie("username"),
        }
    },
    methods:{
        getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
        }
    }
}
</script>
<style scoped>
#main-home{
    margin-left:auto;
    margin-right:auto;
    width:auto;
    background-color:rgba(225, 225,225, 0.5);
    display:flex;
    padding:15px;
    position: absolute;
    top:25px;
    right:0px;
    border-radius: 0px 16px 0px 16px;
    border-top-left-radius: 0px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 16px;
    vertical-align: middle;
    text-align: center;
}
#main-home .link .item-menu{
  color:#fff;
  font-weight:800;
  padding:0px 30px;
}
#main-home .link{
    text-decoration: none;
}
</style>