import{$ as me,A as M,B as Q,C as W,D as $,E as C,F as v,G as Me,H as z,I as ae,J,K as le,L as Ne,M as Fe,N as Pe,O as Ve,P as w,Q as V,R as Y,S as Le,T as Oe,U as X,V as L,W as S,X as O,Y as se,Z as de,_ as D,a as N,aa as ce,b as H,ba as pe,c as ne,d as k,da as ue,e as x,ea as Z,f as Se,fa as K,g as Be,ga as ee,h as we,ha as Ge,i as u,ia as T,j as l,ja as be,k as y,l as g,m as b,n as _,o as Ae,p as f,q as F,r as P,s as t,t as o,u as p,v as E,w as h,x as c,y as i,z as d}from"./chunk-5D2HOQLE.js";var fe=class n{Message="";isVisible=u(!1);hideMessage(){this.isVisible.set(!0)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-notification"]],inputs:{Message:"Message"},decls:3,vars:3,consts:[[1,"w-full","flex","justify-center","items-center"]],template:function(e,a){e&1&&(t(0,"div")(1,"p",0),i(2),o()()),e&2&&(Ae("fixed w-full bg-red-400 p-4 flex justify-center items-center mb-1 tracking-widest"),l(2),d(a.Message))},encapsulation:2})};var A=class n{constructor(){}setItem(r,e){try{localStorage.setItem(r,e)}catch{throw new Error("facing error in using localStorage")}}getItem(r){try{let e=localStorage.getItem(r);return e?JSON.parse(e):null}catch{return null}}removeItem(r){try{localStorage.removeItem(r)}catch(e){console.error("Error removing from localStorage",e)}}clearItem(){try{localStorage.clear()}catch(r){console.error("Error clearing localStorage",r)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac,providedIn:"root"})};var j=class n{constructor(r){this.local_storage=r}router=ne(V);emailId=null;roleBasedRoute(){let r=this.local_storage.getItem("userData");typeof r===null?console.warn(r):this.emailId=r?.emailId,this.emailId?X.find((e,a)=>e.emailId===this.emailId)?.role=="admin"?this.router.navigateByUrl("addbook"):this.router.navigateByUrl("bookstore"):this.router.navigateByUrl("login")}static \u0275fac=function(e){return new(e||n)(H(A))};static \u0275prov=N({token:n,factory:n.\u0275fac,providedIn:"root"})};function We(n,r){n&1&&p(0,"app-notification",0),n&2&&_("Message","Invalid Credentials ! Please provde right credentials.")}var he=class n{constructor(r,e){this.router=r;this.routeUrl=e}wrongCredentials=!1;ngOnInit(){this.routeUrl.roleBasedRoute()}userStatus=!1;userStatusPassword=!1;user=u({emailId:null,password:null,role:null,userId:null,userName:null});userForm=new de({emailId:new D("",[S.required,S.email]),password:new D("",[S.minLength(8),S.required])});get emailId(){return this.userForm.get("emailId")}get password(){return this.userForm.get("password")}submitButton(){let{emailId:r,password:e}=this.userForm.value;if(this.userStatus=X.some(a=>a.emailId===r),this.userStatusPassword=X.some(a=>a.password===e),this.userStatus&&this.userStatusPassword){let a=X.find(s=>s.emailId===r);a&&typeof a!=null&&this.user.set(a)}if(this.userStatus&&this.userStatusPassword){this.user().role==="user"?this.router.navigateByUrl("bookstore"):this.user().role==="admin"?this.router.navigateByUrl("addbook"):console.warn("Unauthorized");let{emailId:a,userName:s,userId:m}=this.user();localStorage.setItem("userData",JSON.stringify({emailId:a,userName:s,userId:m}))}else this.wrongCredentials=!0}static \u0275fac=function(e){return new(e||n)(y(V),y(j))};static \u0275cmp=g({type:n,selectors:[["app-login"]],decls:33,vars:5,consts:[[3,"Message"],[1,"flex","min-h-full","flex-col","justify-center","px-6","py-12","lg:px-8"],[1,"sm:mx-auto","sm:w-full","sm:max-w-sm"],[1,"mt-10","text-center","text-2xl/9","font-bold","tracking-tight","text-gray-900"],[1,"mt-10","sm:mx-auto","sm:w-full","sm:max-w-sm"],["action","#","method","POST",1,"space-y-6",3,"formGroup"],["for","email",1,"block","text-sm/6","font-medium","text-gray-900"],[1,"mt-2"],["formControlName","emailId","type","email","name","email","id","email","autocomplete","email","required","",1,"block","w-full","rounded-md","bg-white","px-3","py-1.5","text-base","text-gray-900","outline","outline-1","-outline-offset-1","outline-gray-300","placeholder:text-gray-400","focus:outline","focus:outline-2","focus:-outline-offset-2","focus:outline-indigo-600","sm:text-sm/6"],[1,"text-red-500","text-sm","mt-1",3,"hidden"],[1,"flex","items-center","justify-between"],["for","password",1,"block","text-sm/6","font-medium","text-gray-900"],[1,"text-sm"],["href","#",1,"font-semibold","text-indigo-600","hover:text-indigo-500"],["type","password","formControlName","password","name","password","id","password","autocomplete","current-password","required","",1,"block","w-full","rounded-md","bg-white","px-3","py-1.5","text-base","text-gray-900","outline","outline-1","-outline-offset-1","outline-gray-300","placeholder:text-gray-400","focus:outline","focus:outline-2","focus:-outline-offset-2","focus:outline-indigo-600","sm:text-sm/6"],["type","submit",1,"flex","w-full","justify-center","rounded-md","bg-indigo-600","px-3","py-1.5","text-sm/6","font-semibold","text-white","shadow-sm","hover:bg-indigo-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click","disabled"],[1,"mt-10","text-center","text-sm/6","text-gray-500"],["routerLink","/signup",1,"font-semibold","text-indigo-600","hover:text-indigo-500"]],template:function(e,a){e&1&&(b(0,We,1,1,"app-notification",0),t(1,"div",1)(2,"div",2)(3,"h2",3),i(4,"Sign in to your account"),o()(),t(5,"div",4)(6,"form",5)(7,"div")(8,"label",6),i(9,"Email address"),o(),t(10,"div",7),p(11,"input",8),t(12,"p",9),i(13," Email is required"),o()()(),t(14,"div")(15,"div",10)(16,"label",11),i(17,"Password"),o(),t(18,"div",12)(19,"a",13),i(20,"Forgot password?"),o()()(),t(21,"div",7),p(22,"input",14),t(23,"p",9),i(24,"Password minimum length 8 "),o()()(),t(25,"div")(26,"button",15),h("click",function(){return a.submitButton()}),i(27,"Sign in"),o()()(),t(28,"p",16),i(29," Not a member? "),t(30,"a",17),i(31,"Create Account"),o()()()(),p(32,"router-outlet")),e&2&&(f(a.wrongCredentials?0:-1),l(6),_("formGroup",a.userForm),l(6),_("hidden",(a.emailId==null?null:a.emailId.valid)||(a.emailId==null?null:a.emailId.untouched)),l(11),_("hidden",(a.password==null?null:a.password.valid)||(a.password==null?null:a.password.untouched)),l(3),_("disabled",!a.userForm.valid))},dependencies:[le,T,ce,L,O,se,Ge,be,pe,ue,w,Y,fe],encapsulation:2})};var ke=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-page-not-found"]],decls:16,vars:0,consts:[[1,"grid","min-h-full","place-items-center","bg-white","px-6","py-24","sm:py-32","lg:px-8"],[1,"text-center"],[1,"text-base","font-semibold","text-indigo-600"],[1,"mt-4","text-balance","text-5xl","font-semibold","tracking-tight","text-gray-900","sm:text-7xl"],[1,"mt-6","text-pretty","text-lg","font-medium","text-gray-500","sm:text-xl/8"],[1,"mt-10","flex","items-center","justify-center","gap-x-6"],["href","/login",1,"rounded-md","bg-indigo-600","px-3.5","py-2.5","text-sm","font-semibold","text-white","shadow-sm","hover:bg-indigo-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600"],["href","#",1,"text-sm","font-semibold","text-gray-900"],["aria-hidden","true"]],template:function(e,a){e&1&&(t(0,"main",0)(1,"div",1)(2,"p",2),i(3,"404"),o(),t(4,"h1",3),i(5,"Page not found"),o(),t(6,"p",4),i(7,"Sorry, we couldn\u2019t find the page you\u2019re looking for."),o(),t(8,"div",5)(9,"a",6),i(10,"Go back home"),o(),t(11,"a",7),i(12,"Contact support "),t(13,"span",8),i(14,"\u2192"),o()()()()(),p(15,"router-outlet"))},dependencies:[w],encapsulation:2})};function $e(n,r){if(n&1){let e=E();t(0,"div",26)(1,"a",31),i(2,"Your Profile"),o(),t(3,"a",32),i(4,"Settings"),o(),t(5,"a",33),h("click",function(){k(e);let s=c();return x(s.signOutButton())}),i(6,"Sign out"),o()()}}var U=class n{constructor(r){this.router=r}show=u(!1);showDialog(){this.show.set(!this.show())}signOutButton(){localStorage.clear(),this.router.navigateByUrl("login")}static \u0275fac=function(e){return new(e||n)(y(V))};static \u0275cmp=g({type:n,selectors:[["app-navbar"]],decls:50,vars:1,consts:[[1,"bg-gray-800"],[1,"mx-auto","max-w-7xl","px-2","sm:px-6","lg:px-8"],[1,"relative","flex","h-16","items-center","justify-between"],[1,"absolute","inset-y-0","left-0","flex","items-center","sm:hidden"],["type","button","aria-controls","mobile-menu","aria-expanded","false",1,"relative","inline-flex","items-center","justify-center","rounded-md","p-2","text-gray-400","hover:bg-gray-700","hover:text-white","focus:outline-none","focus:ring-2","focus:ring-inset","focus:ring-white"],[1,"absolute","-inset-0.5"],[1,"sr-only"],["fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","aria-hidden","true","data-slot","icon",1,"block","size-6"],["stroke-linecap","round","stroke-linejoin","round","d","M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"],["fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","aria-hidden","true","data-slot","icon",1,"hidden","size-6"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18 18 6M6 6l12 12"],[1,"flex","flex-1","items-center","justify-center","sm:items-stretch","sm:justify-start"],[1,"flex","shrink-0","items-center"],["src","https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500","alt","Your Company",1,"h-8","w-auto"],[1,"hidden","sm:ml-6","sm:block"],[1,"flex","space-x-4"],["aria-current","page",1,"rounded-md","bg-gray-900","px-3","py-2","text-sm","font-medium","text-white"],[1,"rounded-md","px-3","py-2","text-sm","font-medium","text-gray-300","hover:bg-gray-700","hover:text-white"],[1,"absolute","inset-y-0","right-0","flex","items-center","pr-2","sm:static","sm:inset-auto","sm:ml-6","sm:pr-0"],["type","button",1,"relative","rounded-full","bg-gray-800","p-1","text-gray-400","hover:text-white","focus:outline-none","focus:ring-2","focus:ring-white","focus:ring-offset-2","focus:ring-offset-gray-800"],[1,"absolute","-inset-1.5"],["fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","aria-hidden","true","data-slot","icon",1,"size-6"],["stroke-linecap","round","stroke-linejoin","round","d","M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"],[1,"relative","ml-3"],["type","button","id","user-menu-button","aria-expanded","false","aria-haspopup","true",1,"relative","flex","rounded-full","bg-gray-800","text-sm","focus:outline-none","focus:ring-2","focus:ring-white","focus:ring-offset-2","focus:ring-offset-gray-800",3,"click"],["src","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80","alt","",1,"size-8","rounded-full"],["role","menu","aria-orientation","vertical","aria-labelledby","user-menu-button","tabindex","-1",1,"absolute","right-0","z-10","mt-2","w-48","origin-top-right","rounded-md","bg-white","py-1","shadow-lg","ring-1","ring-black/5","focus:outline-none"],["id","mobile-menu",1,"sm:hidden"],[1,"space-y-1","px-2","pb-3","pt-2"],["aria-current","page",1,"block","rounded-md","bg-gray-900","px-3","py-2","text-base","font-medium","text-white"],[1,"block","rounded-md","px-3","py-2","text-base","font-medium","text-gray-300","hover:bg-gray-700","hover:text-white"],["role","menuitem","tabindex","-1","id","user-menu-item-0 ",1,"block","px-4","py-2","text-sm","text-gray-700","cursor-pointer"],["role","menuitem","tabindex","-1","id","user-menu-item-1 ",1,"block","px-4","py-2","text-sm","text-gray-700","cursor-pointer"],["role","menuitem","tabindex","-1","id","user-menu-item-2",1,"block","px-4","py-2","text-sm","text-gray-700","cursor-pointer",3,"click"]],template:function(e,a){e&1&&(t(0,"nav",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),p(5,"span",5),t(6,"span",6),i(7,"Open main menu"),o(),Se(),t(8,"svg",7),p(9,"path",8),o(),t(10,"svg",9),p(11,"path",10),o()()(),Be(),t(12,"div",11)(13,"div",12),p(14,"img",13),o(),t(15,"div",14)(16,"div",15)(17,"a",16),i(18,"Dashboard"),o(),t(19,"a",17),i(20,"Team"),o(),t(21,"a",17),i(22,"My books"),o(),t(23,"a",17),i(24,"Calendar"),o()()()(),t(25,"div",18)(26,"button",19),p(27,"span",20),t(28,"span",6),i(29,"View notifications"),o(),Se(),t(30,"svg",21),p(31,"path",22),o()(),Be(),t(32,"div",23)(33,"div")(34,"button",24),h("click",function(){return a.showDialog()}),p(35,"span",20),t(36,"span",6),i(37,"Open user menu"),o(),p(38,"img",25),o()(),b(39,$e,7,0,"div",26),o()()()(),t(40,"div",27)(41,"div",28)(42,"a",29),i(43,"Dashboard"),o(),t(44,"a",30),i(45,"Team"),o(),t(46,"a",30),i(47,"Projects"),o(),t(48,"a",30),i(49,"Calendar"),o()()()()),e&2&&(l(39),f(a.show()?39:-1))},encapsulation:2})};function ze(n,r){if(n&1&&(t(0,"small",14),i(1),o()),n&2){let e=c();l(),M(" ",e.bookIsbnMessage," ")}}function Je(n,r){if(n&1&&(t(0,"small",14),i(1),o()),n&2){let e=c();l(),M(" ",e.priceMessage," ")}}function Ye(n){return/^\d+$/.test(n.value)?null:{icludeCharacterAlso:!0}}var xe=class n{constructor(r){this.local_Storage=r;if(this.loginUserDetail=r.getItem("userData"),this.editData=r.getItem("editBookId"),this.editData){let{bookAuthor:e,bookGenere:a,bookTitle:s,bookIsbn:m,publishedDate:B,price:R}=this.editData;this.bookForm.setValue({bookAuthor:e,bookTitle:s,bookPrice:R,bookPublishDate:B,bookIsbn:m,bookCategory:a})}}bookDetail=new we;closeModelValue=u(!1);closeBtnOutput=new we;editData=null;editModeValue=!1;priceMessage="";priceDiscount=10;bookIsbnMessage="";loginUserDetail;ngOnInit(){this.bookForm.patchValue({bookAuthor:this.loginUserDetail?.userName}),this.bookForm.valueChanges.subscribe({next:r=>{let{bookPrice:e,bookTitle:a,bookAuthor:s,bookIsbn:m}=r,B=/^[0-9]+$/;B.test(m)||(this.bookIsbnMessage="Book Isbn must be a number"),B.test(e)||(this.priceMessage="Price must be anumber"),B.test(e)&&(Number(e)>=1e3?this.priceDiscount=1.5:this.priceDiscount=.5,console.log(this.priceDiscount))}})}bookForm=new de({bookAuthor:new D("",[S.required]),bookTitle:new D("",[S.required]),bookPrice:new D("",[S.required,S.pattern("^[0-9]+$")]),bookPublishDate:new D("",[S.required]),bookIsbn:new D("",[S.required,Ye,S.pattern("^[0-9]+$")]),bookCategory:new D("Science",[S.required])});addBookBtn(){console.log(this.bookForm.value),this.bookDetail.emit(this.bookForm.value),this.bookForm.reset()}get bookIsbn(){return this.bookForm.get("bookIsbn")}get bookAuthor(){return this.bookForm.get("bookAuthor")}get bookTitle(){return this.bookForm.get("bookTitle")}get bookPrice(){return this.bookForm.get("bookPrice")}get bookCategory(){return this.bookForm.get("bookCategory")}get bookPublishDate(){return this.bookForm.get("bookPublishDate")}closeModel(){this.closeBtnOutput.emit(!0)}static \u0275fac=function(e){return new(e||n)(y(A))};static \u0275cmp=g({type:n,selectors:[["app-add-book"]],inputs:{editModeValue:"editModeValue"},outputs:{bookDetail:"bookDetail",closeBtnOutput:"closeBtnOutput"},decls:59,vars:10,consts:[[1,"modal-wrapper","fixed","top-0","left-0","w-full","h-full","bg-black","bg-opacity-50","z-50","flex","justify-center","items-center"],[1,"modal-content","bg-white","rounded-md","shadow-xl","w-full","max-w-xl","p-5","flex","flex-col","justify-center","items-center","relative"],[1,"absolute","top-3","right-3","bg-white","p-2","rounded-full","shadow-md","hover:bg-gray-200","text-xl","font-bold",3,"click"],[1,"text-xl","font-semibold","mb-5"],[1,"w-full","flex","justify-center","flex-col","items-center","space-y-4",3,"formGroup"],[1,"w-full","grid","grid-cols-1","md:grid-cols-2","gap-4"],[1,"flex","flex-col"],["for","authorname",1,"mb-1"],["type","text","id","authorname","formControlName","bookAuthor","placeholder","Enter book authorname.....",1,"outline-none","border","border-gray-400","rounded-md","p-2"],[1,"text-red-500","text-sm","mt-1",3,"hidden"],["for","booktitle",1,"mb-1"],["type","text","id","booktitle","formControlName","bookTitle","placeholder","Enter book title....",1,"outline-none","border","border-gray-400","rounded-md","p-2"],["for","bookisbn",1,"mb-1"],["type","text","id","bookisbn","formControlName","bookIsbn","placeholder","Enter book Isbn number...",1,"outline-none","border","border-gray-400","rounded-md","p-2"],[1,"text-red-500","text-sm","mt-1"],["for","publishdate",1,"mb-1"],["type","date","id","publishdate","formControlName","bookPublishDate",1,"outline-none","border","border-gray-400","rounded-md","p-2"],["for","bookprice",1,"mb-1"],["type","text","id","bookprice","formControlName","bookPrice","placeholder","Enter book price...",1,"outline-none","border","border-gray-400","rounded-md","p-2"],["for","bookcategory",1,"mb-1"],["name","bookCategory","id","bookCategory","formControlName","bookCategory",1,"outline-none","border","border-gray-400","rounded-md","p-2"],["value","Science"],["value","History"],["value","Politics"],["value","Fiction"],["value","Geography"],[1,"w-full","flex","justify-center","items-center","mt-5"],[1,"h-9","w-full","p-4","bg-sky-800","rounded-md","flex","justify-center","items-center","text-white","cursor-pointer",3,"click","disabled"]],template:function(e,a){e&1&&(t(0,"div",0)(1,"div",1)(2,"button",2),h("click",function(){return a.closeModel()}),i(3," X "),o(),t(4,"h2",3),i(5,"Enter Book Details"),o(),t(6,"form",4)(7,"div",5)(8,"div",6)(9,"label",7),i(10,"Author Name"),o(),p(11,"input",8),t(12,"p",9),i(13," Author Name is required "),o()(),t(14,"div",6)(15,"label",10),i(16,"Book Title"),o(),p(17,"input",11),t(18,"p",9),i(19," Book title is mandatory "),o()(),t(20,"div",6)(21,"label",12),i(22,"Book ISBN"),o(),p(23,"input",13),t(24,"p",9),i(25," It's must be filled "),o(),b(26,ze,2,1,"small",14),o(),t(27,"div",6)(28,"label",15),i(29,"Book Publish Date"),o(),p(30,"input",16),t(31,"p",9),i(32," This field is mandatory "),o()(),t(33,"div",6)(34,"label",17),i(35,"Book Price"),o(),p(36,"input",18),t(37,"p",9),i(38," Field is required "),o(),b(39,Je,2,1,"small",14),o(),t(40,"div",6)(41,"label",19),i(42,"Book Category"),o(),t(43,"select",20)(44,"option",21),i(45,"Science"),o(),t(46,"option",22),i(47,"History"),o(),t(48,"option",23),i(49,"Politics"),o(),t(50,"option",24),i(51,"Fiction"),o(),t(52,"option",25),i(53,"Geography"),o()(),t(54,"p",9),i(55," Book category is required "),o()()(),t(56,"div",26)(57,"button",27),h("click",function(){return a.addBookBtn()}),i(58," Submit "),o()()()()()),e&2&&(l(6),_("formGroup",a.bookForm),l(6),_("hidden",a.bookAuthor.valid||a.bookAuthor.untouched),l(6),_("hidden",a.bookTitle.valid||a.bookTitle.untouched),l(6),_("hidden",a.bookIsbn.valid||a.bookIsbn.untouched),l(2),f(a.bookIsbn.hasError("pattern")?26:-1),l(5),_("hidden",a.bookPublishDate.valid||a.bookPublishDate.untouched),l(6),_("hidden",a.bookPrice.valid||a.bookPrice.untouched),l(2),f(a.bookPrice.hasError("pattern")?39:-1),l(15),_("hidden",a.bookCategory.valid||a.bookCategory.untouched),l(3),_("disabled",!a.bookForm.valid))},dependencies:[be,ce,K,ee,L,Z,O,se,pe,ue,T,le],encapsulation:2})};var te=class n{constructor(r){this.localStorage=r;this.bookData.set(Oe),this.currentUser.set(r.getItem("userData"))}dataLoading=u(!0);editBookData=u({bookAuthor:null,bookGenere:null,bookIsbn:null,bookTitle:null,id:null,price:null,publishedDate:null});searchQuery=u("");searchByGener=u("All");matchedBook=u([{bookAuthor:null,bookGenere:null,bookIsbn:null,bookTitle:null,id:1,price:null,publishedDate:""}]);filterData=[{bookAuthor:"",bookGenere:"",bookIsbn:1,bookTitle:"",id:1,price:1,publishedDate:""}];currentUser=u({emailId:null,userId:null,userName:null});editMode=!1;addBookBtnVisibility=u(!0);bookData=u([]);editBook(r){this.editBookData.set(this.bookData().find((e,a)=>e.id===r)),this.filterData=this.bookData().filter((e,a)=>e.id!=r),this.addBookBtnVisibility.set(!1),this.localStorage.setItem("editBookId",JSON.stringify(this.editBookData())),this.editMode=!0}delete(r){this.bookData.set(this.bookData().filter((e,a)=>e.id!=r)),this.matchedBook.set(this.bookData().filter((e,a)=>e.id!=r)),this.searchByGener.set("All"),this.searchQuery.set("")}addBook(r){if(this.editMode){let{bookAuthor:e,bookTitle:a,bookIsbn:s,bookPrice:m,bookPublishDate:B,bookCategory:R}=r,{emailId:oe}=JSON.parse(localStorage.getItem("userData")),ie=(new Date().getDay()+new Date().getSeconds())*10;this.bookData.set([{emailId:oe,id:ie,bookAuthor:e,bookTitle:a,publishedDate:B,bookGenere:R,price:m,bookIsbn:s},...this.filterData]),this.editMode=!1,this.addBookBtnVisibility.set(!this.addBookBtnVisibility())}else{let{bookAuthor:e,bookTitle:a,bookIsbn:s,bookPrice:m,bookPublishDate:B,bookCategory:R}=r,{emailId:oe}=JSON.parse(localStorage.getItem("userData")),ie=(new Date().getDay()+new Date().getSeconds())*10;this.bookData.set([{emailId:oe,id:ie,bookAuthor:e,bookTitle:a,publishedDate:B,bookGenere:R,price:m,bookIsbn:s},...this.bookData()]),this.addBookBtnVisibility.set(!this.addBookBtnVisibility())}this.searchByGener.set("All"),this.searchQuery.set("")}toggleAddBookBtnVisibility(){this.addBookBtnVisibility.set(!this.addBookBtnVisibility()),this.localStorage.removeItem("editBookId")}closeModel(r){this.addBookBtnVisibility.set(r),this.editMode=!r}calculateBookAge(r){let e=r.split("-"),[a,s,m]=e,B=new Date,R=Number(a)-B.getFullYear(),oe=Number(s)-(B.getMonth()+1),ie=Number(m)-B.getDate(),q=R*365+oe*30+ie,re;return q>0?re=`Publishing after ${q} days`:q==0?re="Published Today":(q=q*-1,re=`Published before ${q} days`),re}filterBooks(){let r=this.searchQuery();this.searchByGener()!="All"&&r?this.matchedBook.set(this.bookData().filter((e,a)=>e.bookTitle.toLowerCase().includes(r.toLowerCase())).filter((e,a)=>e.bookGenere.toLowerCase().includes(this.searchByGener().toLowerCase()))):this.searchByGener()!="All"?this.matchedBook.set(this.bookData().filter((e,a)=>e.bookGenere.toLowerCase().includes(this.searchByGener().toLowerCase()))):r&&this.matchedBook.set(this.bookData().filter((e,a)=>e.bookTitle.toLowerCase().includes(r.toLowerCase())))}static \u0275fac=function(e){return new(e||n)(H(A))};static \u0275prov=N({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ue=(n,r)=>r.id;function Xe(n,r){if(n&1){let e=E();t(0,"app-add-book",16),h("bookDetail",function(s){k(e);let m=c(2);return x(m.addBook(s))})("closeBtnOutput",function(s){k(e);let m=c(2);return x(m.closeModel(s))}),o()}if(n&2){let e=c(2);_("editModeValue",e.book_service.editMode)}}function Ze(n,r){if(n&1){let e=E();t(0,"p",17),h("click",function(){k(e);let s=c(2);return x(s.toggleAddBookBtnVisibility())}),i(1,"Add Book"),o()}}function Ke(n,r){n&1&&(t(0,"p",19),i(1,"Issued by you"),o())}function et(n,r){n&1&&(t(0,"p",20),i(1,"Available"),o())}function tt(n,r){n&1&&(t(0,"p",21),i(1,"Issued By Other"),o())}function ot(n,r){if(n&1){let e=E();t(0,"tr",15)(1,"td",18),i(2),o(),t(3,"td",18),i(4),C(5,"titlecase"),o(),t(6,"td",18),i(7),o(),t(8,"td",18),i(9),o(),t(10,"td",18),i(11),C(12,"date"),o(),t(13,"td",18),i(14),o(),t(15,"td",18),i(16),C(17,"currency"),o(),t(18,"td",18),b(19,Ke,2,0,"p",19)(20,et,2,0,"p",20)(21,tt,2,0,"p",21),o(),t(22,"td")(23,"button",22),h("click",function(){let s=k(e).$implicit,m=c(3);return x(m.editBook(s.id))}),i(24,"Edit"),o(),t(25,"button",23),h("click",function(){let s=k(e).$implicit,m=c(3);return x(m.deleteBook(s.id))}),i(26,"Delete"),o()()()}if(n&2){let e=r.$implicit,a=c(3);l(2),d(e.bookAuthor),l(2),M("",v(5,8,e.bookTitle)," "),l(3),d(e.bookGenere),l(2),d(e.bookIsbn),l(2),d(v(12,10,e.publishedDate)),l(3),d(a.calculateBookAge(e.publishedDate)),l(2),d(v(17,12,e.price)),l(3),f((e==null?null:e.userId)===a.book_service.currentUser().userId?19:e.userId?21:20)}}function it(n,r){if(n&1&&F(0,ot,27,14,"tr",15,Ue),n&2){let e=c(2);P(e.book_service.bookData())}}function nt(n,r){n&1&&(t(0,"p",19),i(1,"Issued by you"),o())}function rt(n,r){n&1&&(t(0,"p",20),i(1,"Available"),o())}function at(n,r){n&1&&(t(0,"p",21),i(1,"Issued By Other"),o())}function lt(n,r){if(n&1){let e=E();t(0,"tr",15)(1,"td",18),i(2),o(),t(3,"td",18),i(4),C(5,"titlecase"),o(),t(6,"td",18),i(7),o(),t(8,"td",18),i(9),o(),t(10,"td",18),i(11),C(12,"date"),o(),t(13,"td",18),i(14),o(),t(15,"td",18),i(16),C(17,"currency"),o(),t(18,"td",18),b(19,nt,2,0,"p",19)(20,rt,2,0,"p",20)(21,at,2,0,"p",21),o(),t(22,"td")(23,"button",22),h("click",function(){let s=k(e).$implicit,m=c(3);return x(m.editBook(s.id))}),i(24,"Edit"),o(),t(25,"button",23),h("click",function(){let s=k(e).$implicit,m=c(3);return x(m.deleteBook(s.id))}),i(26,"Delete"),o()()()}if(n&2){let e=r.$implicit,a=c(3);l(2),d(e.bookAuthor),l(2),d(v(5,8,e.bookTitle)),l(3),d(e.bookGenere),l(2),d(e.bookIsbn),l(2),d(v(12,10,e.publishedDate)),l(3),d(a.calculateBookAge(e.publishedDate)),l(2),d(v(17,12,e.price)),l(3),f(e.userId===a.book_service.currentUser().userId?19:e.userId?21:20)}}function st(n,r){if(n&1&&F(0,lt,27,14,"tr",15,Ue),n&2){let e=c(2);P(e.book_service.matchedBook())}}function dt(n,r){if(n&1){let e=E();t(0,"div",0),b(1,Xe,1,1,"app-add-book",1),t(2,"div",2),b(3,Ze,2,0,"p",3),o(),t(4,"table",4)(5,"caption",5)(6,"input",6),$("ngModelChange",function(s){k(e);let m=c();return W(m.book_service.searchQuery,s)||(m.book_service.searchQuery=s),x(s)}),h("input",function(){k(e);let s=c();return x(s.filterBooks())}),o(),t(7,"select",7),$("ngModelChange",function(s){k(e);let m=c();return W(m.book_service.searchByGener,s)||(m.book_service.searchByGener=s),x(s)}),h("change",function(){k(e);let s=c();return x(s.filterBooks())}),t(8,"option",8),i(9,"All"),o(),t(10,"option",9),i(11,"Science"),o(),t(12,"option",10),i(13,"History"),o(),t(14,"option",11),i(15,"Politics"),o(),t(16,"option",12),i(17,"Fiction"),o(),t(18,"option",13),i(19,"Geography"),o()(),t(20,"a",14),i(21,"Other Book source ->"),o()(),t(22,"tr")(23,"th",15),i(24,"Book Author "),o(),t(25,"th",15),i(26,"Title"),o(),t(27,"th",15),i(28,"Category"),o(),t(29,"th",15),i(30,"Book ISBN "),o(),t(31,"th",15),i(32,"Published Date"),o(),t(33,"th"),i(34,"Book age"),o(),t(35,"th"),i(36,"Book Price"),o(),t(37,"th",15),i(38,"Book Status"),o(),t(39,"th"),i(40,"Operation"),o()(),b(41,it,2,0)(42,st,2,0),o()()}if(n&2){let e=c();l(),f(e.book_service.addBookBtnVisibility()?-1:1),l(2),f(e.book_service.addBookBtnVisibility()?3:-1),l(3),Q("ngModel",e.book_service.searchQuery),l(),Q("ngModel",e.book_service.searchByGener),l(34),f(!e.book_service.searchQuery()&&e.book_service.searchByGener()==="All"?41:e.book_service.searchByGener()||e.book_service.searchQuery()!="All"?42:-1)}}var ge=class n{constructor(r,e){this.book_service=r;this.roleChecked=e;this.roleChecked.roleBasedRoute()}calculateBookAge(r){return this.book_service.calculateBookAge(r)}addBook(r){this.book_service.addBook(r)}closeModel(r){this.book_service.closeModel(r)}editBook(r){this.book_service.editBook(r)}deleteBook(r){this.book_service.delete(r)}toggleAddBookBtnVisibility(){this.book_service.toggleAddBookBtnVisibility()}filterBooks(){this.book_service.filterBooks()}static \u0275fac=function(e){return new(e||n)(y(te),y(j))};static \u0275cmp=g({type:n,selectors:[["app-libarian"]],decls:3,vars:1,consts:[[1,"flex","flex-col","justify-center","border","items-center","md:w-[90%]","w-full","min-h-fit","m-auto","pl-4","pr-4","pb-6","mt-12","shadow-md","rounded-md"],[3,"editModeValue"],[1,"flex","justify-between","items-center","mb-4","mt-4","pr-12","w-full"],[1,"text-lg","font-mono","bg-sky-400","h-8","rounded-md","cursor-pointer","flex","justify-center","items-center","text-white","p-2"],[1,"border-collapse","table-auto","w-full","min-h-fit","p-10"],[1,"caption-top","mb-8"],["type","search","name","","id","search-input","placeholder","Search by book title",1,"outline-none","rounded-md","border-2","border-gray-50","mb-5","p-2","shadow-2xl",3,"ngModelChange","input","ngModel"],["name","","id","",1,"outline-none","p-2","ml-4","shadow-xl","rounded-md",3,"ngModelChange","change","ngModel"],["value","All"],["value","Science"],["value","History"],["value","Politics"],["value","Fiction"],["value","Geography"],["routerLink","/otherbook",1,"ml-5","text-sky-400"],[1,""],[3,"bookDetail","closeBtnOutput","editModeValue"],[1,"text-lg","font-mono","bg-sky-400","h-8","rounded-md","cursor-pointer","flex","justify-center","items-center","text-white","p-2",3,"click"],[1,"border-t","text-center","h-16"],[1,"cursor-pointer","font-bold","text-red-600"],[1,"cursor-pointer","font-bold","text-blue-600"],[1,"cursor-pointer","font-bold","text-green-600"],[1,"bg-green-400","w-fit","p-2","mr-2","rounded-md",3,"click"],[1,"bg-red-500","w-fit","p-2","rounded-md",3,"click"]],template:function(e,a){e&1&&(p(0,"app-navbar"),b(1,dt,43,5,"div",0),p(2,"router-outlet")),e&2&&(l(),f(a.book_service.bookData()?1:-1))},dependencies:[w,U,xe,J,ae,z,T,K,ee,L,Z,O,me,Y],encapsulation:2})};var Re=(n,r)=>r.id;function mt(n,r){n&1&&(t(0,"p",14),i(1,"Issued by you"),o())}function ct(n,r){n&1&&(t(0,"p",15),i(1,"Available"),o())}function pt(n,r){n&1&&(t(0,"p",16),i(1,"Issued By Other"),o())}function ut(n,r){if(n&1&&(t(0,"tr",12)(1,"td",13),i(2),o(),t(3,"td",13),i(4),C(5,"titlecase"),o(),t(6,"td",13),i(7),o(),t(8,"td",13),i(9),o(),t(10,"td",13),i(11),C(12,"date"),o(),t(13,"td",13),i(14),o(),t(15,"td",13),i(16),C(17,"currency"),o(),t(18,"td",13),b(19,mt,2,0,"p",14)(20,ct,2,0,"p",15)(21,pt,2,0,"p",16),o()()),n&2){let e=r.$implicit,a=c(3);l(2),d(e.bookAuthor),l(2),M("",v(5,8,e.bookTitle)," "),l(3),d(e.bookGenere),l(2),d(e.bookIsbn),l(2),d(v(12,10,e.publishedDate)),l(3),d(a.calcuateBookAge(e.publishedDate)),l(2),d(v(17,12,e.price)),l(3),f(e.userId===a.bookservice.currentUser().userId?19:e.userId?21:20)}}function bt(n,r){if(n&1&&F(0,ut,22,14,"tr",12,Re),n&2){let e=c(2);P(e.bookservice.bookData())}}function ft(n,r){n&1&&(t(0,"p",14),i(1,"Issued by you"),o())}function ht(n,r){n&1&&(t(0,"p",15),i(1,"Available"),o())}function kt(n,r){n&1&&(t(0,"p",16),i(1,"Issued By Other"),o())}function xt(n,r){if(n&1&&(t(0,"tr",12)(1,"td",13),i(2),o(),t(3,"td",13),i(4),C(5,"titlecase"),o(),t(6,"td",13),i(7),o(),t(8,"td",13),i(9),o(),t(10,"td",13),i(11),C(12,"date"),o(),t(13,"td",13),i(14),o(),t(15,"td",13),i(16),C(17,"currency"),o(),t(18,"td",13),b(19,ft,2,0,"p",14)(20,ht,2,0,"p",15)(21,kt,2,0,"p",16),o()()),n&2){let e=r.$implicit,a=c(3);l(2),d(e.bookAuthor),l(2),d(v(5,8,e.bookTitle)),l(3),d(e.bookGenere),l(2),d(e.bookIsbn),l(2),d(v(12,10,e.publishedDate)),l(3),d(a.calcuateBookAge(e.publishedDate)),l(2),d(v(17,12,e.price)),l(3),f(e.userId===a.bookservice.currentUser().userId?19:e.userId?21:20)}}function gt(n,r){if(n&1&&F(0,xt,22,14,"tr",12,Re),n&2){let e=c(2);P(e.bookservice.matchedBook())}}function _t(n,r){if(n&1){let e=E();t(0,"div",0)(1,"table",1)(2,"caption",2)(3,"input",3),$("ngModelChange",function(s){k(e);let m=c();return W(m.bookservice.searchQuery,s)||(m.bookservice.searchQuery=s),x(s)}),h("input",function(){k(e);let s=c();return x(s.filterBooks())}),o(),t(4,"select",4),$("ngModelChange",function(s){k(e);let m=c();return W(m.bookservice.searchByGener,s)||(m.bookservice.searchByGener=s),x(s)}),h("change",function(){k(e);let s=c();return x(s.filterBooks())}),t(5,"option",5),i(6,"All"),o(),t(7,"option",6),i(8,"Science"),o(),t(9,"option",7),i(10,"History"),o(),t(11,"option",8),i(12,"Politics"),o(),t(13,"option",9),i(14,"Fiction"),o(),t(15,"option",10),i(16,"Geography"),o()(),t(17,"a",11),i(18,"Other Book Link ->"),o()(),t(19,"tr")(20,"th",12),i(21,"Author Name"),o(),t(22,"th",12),i(23,"Book Title"),o(),t(24,"th",12),i(25,"Book Category"),o(),t(26,"th",12),i(27,"Book ISBN Number"),o(),t(28,"th",12),i(29,"Published Date"),o(),t(30,"th"),i(31,"Book Age"),o(),t(32,"th"),i(33,"Book Price"),o(),t(34,"th",12),i(35,"Issue Book"),o()(),b(36,bt,2,0)(37,gt,2,0),o()()}if(n&2){let e=c();l(3),Q("ngModel",e.bookservice.searchQuery),l(),Q("ngModel",e.bookservice.searchByGener),l(32),f(!e.bookservice.searchQuery()&&e.bookservice.searchByGener()==="All"?36:e.bookservice.searchByGener()||e.bookservice.searchQuery()!="All"?37:-1)}}var _e=class n{constructor(r,e){this.bookservice=r;this.roleChecked=e;this.roleChecked.roleBasedRoute()}dataLoading=u(!0);calcuateBookAge(r){return this.bookservice.calculateBookAge(r)}filterBooks(){this.bookservice.filterBooks()}static \u0275fac=function(e){return new(e||n)(y(te),y(j))};static \u0275cmp=g({type:n,selectors:[["app-bookstore"]],decls:3,vars:1,consts:[[1,"flex","justify-center","items-center","w-[90%]","min-h-fit","m-auto","pl-4","pr-4","pb-6","mt-12","shadow-xl"],[1,"border-collapse","table-auto","w-full","min-h-fit","p-10"],[1,"caption-top","mb-8"],["type","search","name","","id","search-input","placeholder","Search by book title",1,"outline-none","rounded-md","border-2","border-gray-50","mb-5","p-2","shadow-2xl",3,"ngModelChange","input","ngModel"],["name","","id","",1,"outline-none","p-2","ml-4","shadow-xl","rounded-md",3,"ngModelChange","change","ngModel"],["value","All"],["value","Science"],["value","History"],["value","Politics"],["value","Fiction"],["value","Geography"],["routerLink","/otherbook",1,"ml-5","text-sky-400"],[1,""],[1,"border-t","text-center","h-16"],[1,"cursor-pointer","font-bold","text-red-600"],[1,"cursor-pointer","font-bold","text-blue-600"],[1,"cursor-pointer","font-bold","text-green-600"]],template:function(e,a){e&1&&(p(0,"app-navbar"),b(1,_t,38,3,"div",0),p(2,"router-outlet")),e&2&&(l(),f(a.bookservice.bookData()?1:-1))},dependencies:[w,U,J,ae,z,T,K,ee,L,Z,O,me,Y],encapsulation:2})};var Ce=class n{constructor(r){this.http=r}getbook(){return this.http.get("https://openlibrary.org/subjects/science.json")}static \u0275fac=function(e){return new(e||n)(H(Ne))};static \u0275prov=N({token:n,factory:n.\u0275fac,providedIn:"root"})};var vt=(n,r)=>r.id;function yt(n,r){if(n&1&&(t(0,"tr",3)(1,"td",4),i(2),o(),t(3,"td",4),i(4),C(5,"titlecase"),o(),t(6,"td",4),i(7),o(),t(8,"td",4),i(9),o(),t(10,"td",4),i(11),o(),t(12,"td",4),i(13),C(14,"currency"),o()()),n&2){let e=r.$implicit;l(2),d(e.authors[0].name),l(2),M("",v(5,6,e.title)," "),l(3),d(e.subject[2]),l(2),d(e.cover_id),l(2),d(e.first_publish_year),l(2),d(v(14,8,e.edition_count))}}function St(n,r){if(n&1&&(t(0,"div",0)(1,"table",2)(2,"tr")(3,"th",3),i(4,"Author Name"),o(),t(5,"th",3),i(6,"Book Title"),o(),t(7,"th",3),i(8,"Book Category"),o(),t(9,"th",3),i(10,"Book ISBN Number"),o(),t(11,"th",3),i(12,"Published Date"),o(),t(13,"th"),i(14,"Book Price"),o()(),F(15,yt,15,10,"tr",3,vt),o()()),n&2){let e=c();l(15),P(e.bookData())}}function Bt(n,r){n&1&&(t(0,"p",1),i(1,"Data Loading Please Wait...."),o())}var ve=class n{constructor(r){this.apiRequest=r}dataLoading=!0;bookData=u("");searchbyBookGener="all";ngOnInit(){this.apiRequest.getbook().subscribe({next:r=>{console.log(r),console.log(this.searchbyBookGener),r.works&&(this.bookData.set(r.works),this.dataLoading=!1)},complete:()=>{this.dataLoading=!1}})}static \u0275fac=function(e){return new(e||n)(y(Ce))};static \u0275cmp=g({type:n,selectors:[["app-othe-book"]],decls:4,vars:1,consts:[[1,"flex","justify-center","items-center","w-[90%]","min-h-fit","m-auto","pl-4","pr-4","pb-6","mt-12","shadow-xl"],[1,"w-full","h-lvh","text-red-500","text-2xl","flex","justify-center","items-center"],[1,"border-collapse","table-auto","w-full","min-h-fit","p-10"],[1,""],[1,"border-t","text-center","h-16"]],template:function(e,a){e&1&&(p(0,"app-navbar"),b(1,St,17,0,"div",0)(2,Bt,2,0,"p",1),p(3,"router-outlet")),e&2&&(l(),f(a.bookData()&&!a.dataLoading?1:2))},dependencies:[w,U,J,z,T],encapsulation:2})};var Te=(n,r)=>{let e=ne(V);return ne(A).getItem("userData")!=null?!0:(e.navigateByUrl("login"),!1)};var qe=[{path:"login",component:he},{path:"signup",loadComponent:()=>import("./chunk-NWB2JKJL.js").then(n=>n.SignupComponent)},{path:"addbook",component:ge,canActivate:[Te],title:"libarian"},{path:"bookstore",component:_e,canActivate:[Te]},{path:"otherbook",component:ve},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",component:ke}];var He={providers:[Me({eventCoalescing:!0}),Le(qe),Fe(Pe())]};var ye=class n{title="angular_bms";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,a){e&1&&p(0,"router-outlet")},dependencies:[w],encapsulation:2})};Ve(ye,He).catch(n=>console.error(n));
