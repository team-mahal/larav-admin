(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{25:function(t,r,s){"use strict";s.r(r);var o=s(2),a=s.n(o);function e(t,r,s,o,a,e,i){try{var n=t[e](i),m=n.value}catch(t){return void s(t)}n.done?r(m):Promise.resolve(m).then(o,a)}var i={middleware:"guest",metaInfo:function(){return{title:this.$t("reset_password")}},data:function(){return{status:"",form:new a.a({token:"",email:"",password:"",password_confirmation:""})}},created:function(){this.form.email=this.$route.query.email,this.form.token=this.$route.params.token},methods:{reset:function(){var t,r=this;return(t=regeneratorRuntime.mark((function t(){var s,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.form.post("/api/password/reset");case 2:s=t.sent,o=s.data,r.status=o.status,r.form.reset();case 6:case"end":return t.stop()}}),t)})),function(){var r=this,s=arguments;return new Promise((function(o,a){var i=t.apply(r,s);function n(t){e(i,o,a,n,m,"next",t)}function m(t){e(i,o,a,n,m,"throw",t)}n(void 0)}))})()}}},n=s(0),m=Object(n.a)(i,(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 m-auto"},[s("card",{attrs:{title:t.$t("reset_password")}},[s("form",{on:{submit:function(r){return r.preventDefault(),t.reset(r)},keydown:function(r){return t.form.onKeydown(r)}}},[s("alert-success",{attrs:{form:t.form,message:t.status}}),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),s("div",{staticClass:"col-md-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email",readonly:""},domProps:{value:t.form.email},on:{input:function(r){r.target.composing||t.$set(t.form,"email",r.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),s("div",{staticClass:"col-md-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(r){r.target.composing||t.$set(t.form,"password",r.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),s("div",{staticClass:"col-md-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.form.password_confirmation},on:{input:function(r){r.target.composing||t.$set(t.form,"password_confirmation",r.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"password_confirmation"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-9 ml-md-auto"},[s("v-button",{attrs:{loading:t.form.busy}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("reset_password"))+"\n\t\t\t\t\t\t")])],1)])],1)])],1)])}),[],!1,null,null,null);r.default=m.exports}}]);