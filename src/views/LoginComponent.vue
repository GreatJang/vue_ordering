<template>
    <div class="container">
        <div class="page-header">
          <h1>로그인</h1>
        </div>
        <div id="update-form" class="mt-4">
      <!-- submit 은 기본적으로 폼 제출시 페이지를 새로고침한다. > 막기위해 prevent 사용 -->
          <form @submit.prevent="doLogin"> 
            <div class="form-group">
              <label for="email">email: </label>
              <input class="form-control" v-model="email" type="text" >
            </div>
      
            <div class="form-group">
              <label for="password">비번: </label>
              <input class="form-control" v-model="password" type="password">
            </div>
      
            <button class="btn btn-primary" type="submit" value="로그인">로그인</button>
          </form>
        </div>
      </div>
</template>

<script>
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
export default {
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
      async doLogin(){
        // 2가지의 예외가능성

        // 1. 200번대 상태값 + 토큰x 
        // 2. 200번대 상태값x -> 분기처리
      try{
        const loginData = {email:this.email, password:this.password};
        const response = await axios.post("http://localhost:8080/doLogin",loginData);
        const token = response.data.result.token
        if(token){
          const decoded = jwtDecode(token)
          localStorage.setItem("token",token) // 로그인 성공시
          localStorage.setItem("role",decoded.role)
          
          this.$router.push("/") // 홈으로 보냄
        }else{
          alert("Loign failed")
        }
        
      }catch(error){
        const error_message = error.response.data.error_message
        if (error_message){
          console.log(error_message)
          alert(error_message)
        }
        else{
          console.log(error)
          alert("Loign failed")
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>