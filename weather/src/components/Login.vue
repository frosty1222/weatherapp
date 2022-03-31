<template>
<div id="container">
     <div class="login">
           <form @submit.prevent="ConfirmLogin">
               <legend>{{title}}</legend>
               <div class="form-group">
                   <label for="">Username</label>
                   <input type="text" v-model="username" name="username"  placeholder="UserName...">
               </div>
               <div class="form-group">
                   <label for="">password</label>
                   <input type="password"  v-model="password" name="password" placeholder="Password...">
               </div>
               <button type="submit" class="btn btn-primary">Login</button>
           </form>
     </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data(){
      return{
         title: 'Login Form',
         username:'',
         password:'',
         register:[
         ],
         errords:{
             username:false,
             password:false,
         }
      }
  },
  mounted(){
      fetch('http://localhost:3000/register')
      .then(res=>res.json())
      .then(data=>this.register=data)
      .catch(err=>console.log(err.message))
  },
  methods:{
      ConfirmLogin(){
          for(let a of this.register){
             if(this.username ==a.username && this.password == a.password){
                    this.$router.push("/");
                    alert('login successfully');
                    document.cookie= "username="+this.username;
                    document.cookie ="password="+this.password;
                    break;
             }else{
                 alert('please try again');
             }
          }
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
    position:relative;
    width:100%;
    height:1000px;
    text-align:center;
}
.login{
    width:100%;
    height:auto;
}
.login form{
    width:500px;
    height:auto;
    padding-top:100px;
    margin-left:auto;
    margin-right:auto;
    display:block;
    text-align:center;
}
form legend{
    width:100%;
    padding:15px 0px;
    background-color:rgba(225,225,225,0.5);
    color:#333;
    text-transform: uppercase;
    font-weight:800px;
}
form .form-group{
    display: flex;
    width:100%;
    overflow: hidden;
}
form .form-group input{
    width:70%;
    margin-left:20px;
    margin:5px;
    padding:10px 0px;
    outline:none;
}
form .form-group label{
    width: 30%;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 10px;
}
form button{
    padding:5px 10px;
    background-color:rgba(225,223,224,0.5);
    outline:none;
    margin-left:150px;
    margin-right: auto;
    border:none;
    text-transform: uppercase;
}
::placeholder{
    padding-left:5px;
}
</style>
