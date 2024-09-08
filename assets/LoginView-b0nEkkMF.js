import{u as c,r as u,c as m,a as s,w as e,v as n,b as d,d as v,t as k,e as y,F as x,o as p}from"./index-bJfqvb7K.js";import{a as f}from"./axios-BimPEqV4.js";const U={id:"loginPage",class:"bg-yellow"},V={class:"container loginPage vhContainer"},h={key:0},I={class:"formControls",action:"index.html"},q={key:1},$={class:"formControls",action:"index.html"},P={id:"signUpPage",class:"bg-yellow"},L={__name:"LoginView",setup(S){const w=c(),a=u("login"),g=u("https://todolist-api.hexschool.io"),t=u({email:"",password:"",passwordCheck:"",nickname:""}),r=u({email:"",password:""});async function b(){const i=`${g.value}/users/sign_in`;try{const o=await f.post(i,r.value);document.cookie=`maxToken=${o.data.token}`,w.push("/todo")}catch(o){alert(o)}}async function C(){if(t.value.passwordCheck!=t.value.password){alert("密碼不相符，請重新輸入。");return}const i=`${g.value}/users/sign_up`;try{const o=await f.post(i,t.value);alert("註冊成功!"),a.value="login"}catch(o){alert(o.response.data.message)}}return(i,o)=>(p(),m(x,null,[s("div",U,[s("div",V,[o[19]||(o[19]=s("div",{class:"side"},[s("a",{href:"#"},[s("img",{class:"logoImg",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png",alt:""})]),s("img",{class:"d-m-n",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png",alt:"workImg"})],-1)),a.value!="signUp"?(p(),m("div",h,[s("form",I,[o[10]||(o[10]=s("h2",{class:"formControls_txt"},"最實用的線上代辦事項服務",-1)),o[11]||(o[11]=s("label",{class:"formControls_label",for:"email"},"Email",-1)),e(s("input",{class:"formControls_input",type:"text",id:"email",name:"email",placeholder:"請輸入email",required:"","onUpdate:modelValue":o[0]||(o[0]=l=>r.value.email=l)},null,512),[[n,r.value.email]]),o[12]||(o[12]=s("span",null,"此欄位不可留空",-1)),o[13]||(o[13]=s("label",{class:"formControls_label",for:"pwd"},"密碼",-1)),e(s("input",{class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":o[1]||(o[1]=l=>r.value.password=l)},null,512),[[n,r.value.password]]),s("input",{class:"formControls_btnSubmit",type:"button",value:"登入",onClick:o[2]||(o[2]=d(l=>b(),["prevent"]))}),s("a",{class:"formControls_btnLink",onClick:o[3]||(o[3]=d(()=>a.value="signUp",["prevent"]))},"註冊帳號")])])):v("",!0),a.value=="signUp"?(p(),m("div",q,[s("form",$,[o[14]||(o[14]=s("h2",{class:"formControls_txt"},"註冊帳號",-1)),o[15]||(o[15]=s("label",{class:"formControls_label",for:"email"},"Email",-1)),e(s("input",{class:"formControls_input",type:"text",id:"email",name:"email",placeholder:"請輸入 email",required:"","onUpdate:modelValue":o[4]||(o[4]=l=>t.value.email=l)},null,512),[[n,t.value.email]]),o[16]||(o[16]=s("label",{class:"formControls_label",for:"name"},"您的暱稱",-1)),e(s("input",{class:"formControls_input",type:"text",name:"name",id:"name",placeholder:"請輸入您的暱稱","onUpdate:modelValue":o[5]||(o[5]=l=>t.value.nickname=l)},null,512),[[n,t.value.nickname]]),o[17]||(o[17]=s("label",{class:"formControls_label",for:"pwd"},"密碼",-1)),e(s("input",{class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":o[6]||(o[6]=l=>t.value.password=l)},null,512),[[n,t.value.password]]),o[18]||(o[18]=s("label",{class:"formControls_label",for:"pwd"},"再次輸入密碼",-1)),e(s("input",{class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請再次輸入密碼",required:"","onUpdate:modelValue":o[7]||(o[7]=l=>t.value.passwordCheck=l)},null,512),[[n,t.value.passwordCheck]]),s("input",{class:"formControls_btnSubmit",type:"button",value:"註冊帳號",onClick:o[8]||(o[8]=l=>C())}),s("a",{class:"formControls_btnLink",onClick:o[9]||(o[9]=d(()=>a.value="login",["prevent"]))},"登入")])])):v("",!0)])]),s("div",P,[s("div",null,k(t.value),1),o[20]||(o[20]=y('<div class="container signUpPage vhContainer"><div class="side"><a href="#"><img class="logoImg" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png" alt=""></a><img class="d-m-n" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png" alt="workImg"></div></div>',1))])],64))}};export{L as default};
