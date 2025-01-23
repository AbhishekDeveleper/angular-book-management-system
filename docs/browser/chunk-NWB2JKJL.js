import{K as N,P as _,R as k,U as c,V as E,W as r,X as F,Y as P,Z as g,_ as d,aa as q,ba as I,ca as G,d as w,da as L,e as x,ha as V,i as y,ia as R,j as l,ja as A,l as b,m as h,n as a,p as v,s as t,t as o,u,v as S,w as f,x as C,y as i}from"./chunk-5D2HOQLE.js";function M(s,m){if(s&1){let n=S();t(0,"div",0)(1,"p",20),i(2," User with this Id already exists . please Login "),o(),t(3,"button",21),f("click",function(){w(n);let p=C();return x(p.closeBtn())}),i(4,"X"),o()()}}function T(s){return s.get("password")?.value===s.get("confirmPassword")?.value?null:{notEqualPassword:!0}}var D=class s{userStatus=!1;signupForm=new g({userName:new d("",[r.required]),emailId:new d("",[r.required,r.email]),passwords:new g({password:new d("",[r.required,r.minLength(8)]),confirmPassword:new d("",[r.required,r.minLength(8)])},{validators:[T]})});get emailId(){return this.signupForm.get("emailId")}get userName(){return this.signupForm.get("userName")}get password(){return this.signupForm.get("passwords.password")}get confirmPassword(){return this.signupForm.get("passwords.confirmPassword")}alreadyExists=y(!1);closeBtn(){this.alreadyExists.set(!1)}submitButton(){let{emailId:m,passwords:n,userName:e}=this.signupForm.value;this.userStatus=c.some(p=>p.emailId===m),this.userStatus?this.alreadyExists.set(!0):c.push({userName:e,emailId:m,role:"user",password:n?.password}),this.signupForm.reset()}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=b({type:s,selectors:[["app-signup"]],decls:44,vars:6,consts:[[1,"flex","w-full","justify-center","items-center"],[1,"flex","min-h-full","flex-col","justify-center","px-6","py-12","lg:px-8"],[1,"sm:mx-auto","sm:w-full","sm:max-w-sm"],[1,"mt-10","text-center","text-2xl/9","font-bold","tracking-tight","text-gray-900"],[1,"mt-10","sm:mx-auto","sm:w-full","sm:max-w-sm"],["action","#","method","POST",1,"space-y-6",3,"formGroup"],["for","email",1,"block","text-sm/6","font-medium","text-gray-900"],[1,"mt-2"],["formControlName","userName","type","text","name","email","id","email","autocomplete","email","required","",1,"block","w-full","rounded-md","bg-white","px-3","py-1.5","text-base","text-gray-900","outline","outline-1","-outline-offset-1","outline-gray-300","placeholder:text-gray-400","focus:outline","focus:outline-2","focus:-outline-offset-2","focus:outline-indigo-600","sm:text-sm/6"],[3,"hidden"],["for","user_name",1,"block","text-sm/6","font-medium","text-gray-900"],["formControlName","emailId","type","email","name","email","id","user_name","autocomplete","email","required","",1,"block","w-full","rounded-md","bg-white","px-3","py-1.5","text-base","text-gray-900","outline","outline-1","-outline-offset-1","outline-gray-300","placeholder:text-gray-400","focus:outline","focus:outline-2","focus:-outline-offset-2","focus:outline-indigo-600","sm:text-sm/6"],["formGroupName","passwords"],["for","password",1,"block","text-sm/6","font-medium","text-gray-900"],["formControlName","password","type","password","name","email","id","password","autocomplete","email","required","",1,"block","w-full","rounded-md","bg-white","px-3","py-1.5","text-base","text-gray-900","outline","outline-1","-outline-offset-1","outline-gray-300","placeholder:text-gray-400","focus:outline","focus:outline-2","focus:-outline-offset-2","focus:outline-indigo-600","sm:text-sm/6"],["for","confirm_passw",1,"block","text-sm/6","font-medium","text-gray-900"],["formControlName","confirmPassword","type","password","name","email","id","confirm_passw","autocomplete","email","required","",1,"block","w-full","rounded-md","bg-white","px-3","py-1.5","text-base","text-gray-900","outline","outline-1","-outline-offset-1","outline-gray-300","placeholder:text-gray-400","focus:outline","focus:outline-2","focus:-outline-offset-2","focus:outline-indigo-600","sm:text-sm/6"],["type","submit",1,"flex","w-full","justify-center","rounded-md","bg-indigo-600","px-3","py-1.5","text-sm/6","font-semibold","text-white","shadow-sm","hover:bg-indigo-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click"],[1,"mt-10","text-center","text-sm/6","text-gray-500"],["routerLink","/login",1,"font-semibold","text-indigo-600","hover:text-indigo-500"],[1,"bg-red-400","tracking-widest","w-[80%]","p-4","flex","justify-center","items-center"],[1,"w-fit","p-4","cursor-pointer","text-white","bg-black",3,"click"]],template:function(n,e){n&1&&(h(0,M,5,0,"div",0),t(1,"div",1)(2,"div",2)(3,"h2",3),i(4,"Sign in to your account"),o()(),t(5,"div",4)(6,"form",5)(7,"div")(8,"label",6),i(9,"User Name"),o(),t(10,"div",7),u(11,"input",8),t(12,"p",9),i(13," Username is required"),o()()(),t(14,"div")(15,"label",10),i(16,"Email address"),o(),t(17,"div",7),u(18,"input",11),t(19,"p",9),i(20," Email is required"),o()()(),t(21,"div",12)(22,"div")(23,"label",13),i(24,"Password"),o(),t(25,"div",7),u(26,"input",14),t(27,"p",9),i(28," Password is required"),o()()(),t(29,"div")(30,"label",15),i(31,"Confirm Password"),o(),t(32,"div",7),u(33,"input",16),t(34,"p",9),i(35," Confirmpassword is required"),o()()()(),t(36,"div")(37,"button",17),f("click",function(){return e.submitButton()}),i(38,"Register"),o()()(),t(39,"p",18),i(40," Already a member? "),t(41,"a",19),i(42,"Login"),o()()()(),u(43,"router-outlet")),n&2&&(v(e.alreadyExists()?0:-1),l(6),a("formGroup",e.signupForm),l(6),a("hidden",(e.userName==null?null:e.userName.valid)||(e.userName==null?null:e.userName.untouched)),l(7),a("hidden",(e.emailId==null?null:e.emailId.valid)||(e.emailId==null?null:e.emailId.untouched)),l(8),a("hidden",(e.password==null?null:e.password.valid)||(e.password==null?null:e.password.untouched)),l(7),a("hidden",(e.confirmPassword==null?null:e.confirmPassword.valid)||(e.confirmPassword==null?null:e.confirmPassword.untouched)))},dependencies:[N,A,q,E,F,P,V,I,L,G,R,_,k],encapsulation:2})};export{D as SignupComponent};
