<template>
  <div id="container">
     <div class="register">
           <form @submit="SubmitRegister" method="post"  >
               <legend>{{title}}</legend>
               <div class="form-group">
                   <label for="">Username</label>
                   <br>
                   <input type="text" @blur="Check(register.username)" name="username" v-model="register.username" placeholder="UserName...">
               </div>
               <div class="form-group">
                   <label for="">password</label>
                   <br>
                   <input type="password" name="password" v-model="register.password"  placeholder="password...">
               </div>
               <div class="form-group">
                   <label for="">Confirm password</label>
                   <br>
                   <input type="password" name="confirm_password" v-model="register.confirm_password"  placeholder="Confirm password...">
               </div>
               <button type="submit" :disabled="isActive">Register</button>
           </form>
     </div>
</div>
</template>

<script>
export default {
  name: 'Register',
  props:["username"],
  data(){
      return{
          title:'Register form', 
          isActive:true,
          path:'/login',
          register:{
              username:null,
              password:null,
              confirm_password:null,
          },
          getdata:null,
      }
  },
  mounted(){
      fetch('http://localhost:3000/register',this.username)
      .then(res=>res.json())
      .then(data=>this.getdata=data)
      .catch(err=>console.log(err.message))
  },
  methods:{
      SubmitRegister(e){
             this.axios.post('http://localhost:3000/register',this.register)
             .then((result)=>{
             console.warn(result);
             alert('successfully registered');
             this.$router.push("/login");
            })
           e.preventDefault();
      },
      Check(e){
          for(let a of this.getdata){
              if(e == a.username){
                   this.isActive = true;
                   break;
              }else{
                  this.isActive=false;
              }
          }
      }
  },
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
.register{
    width:100%;
    height:auto;
}
.register form{
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
    background-color:aqua;
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
