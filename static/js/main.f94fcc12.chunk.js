(window.webpackJsonpwolf_judge=window.webpackJsonpwolf_judge||[]).push([[0],{111:function(e,a,t){e.exports=t(133)},116:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),i=(t(116),t(6)),o=t(19),s=t(34),m=t(190),u=t(176),d=t(191),p=t(192),b=t(181),f=t(91),E=t.n(f),g=t(198),h=t(201),v=t(194),k=t(193),y=t(195),_=t(196),j=t(197),w=t(93),x=t.n(w),O=t(92),N=t.n(O),S={key:"wolf",isDead:!1,isGood:!1,src:"wolf.jpg"},C={key:"predictor",isDead:!1,isGood:!0,isGod:!0,src:"predictor.jpg"},U={key:"witch",isDead:!1,isGood:!0,isGod:!0,src:"witch.jpg"},P={key:"hunter",isDead:!1,isGood:!0,isGod:!0,src:"hunter.jpg"},W={key:"villager",isDead:!1,isGood:!0,isGod:!1,src:"villager.jpg"},G=t(182),I=t(199),F=t(200),z=t(180),A=t(178),H=t(179),T=Object(u.a)(function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)},group:{margin:e.spacing(1,0)}}}),B=function(e){var a=T(),t=Object(o.b)().t,n=e.playerNumber,r=e.setPlayerNumber,c=e.wolfNumber,i=e.setWolfNumber,s=e.isUsePredictor,m=e.setIsUsePredictor,u=e.isUseWitch,d=e.setIsUseWitch,p=e.isUseHunter,b=e.setIsUseHunter,f=e.handleStart;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(A.a,{component:"fieldset",className:a.formControl},l.a.createElement(H.a,{component:"legend"},t("player_number")),l.a.createElement(F.a,{row:!0,className:a.group,value:n,onChange:function(e){r(1*e.target.value)}},l.a.createElement(z.a,{value:6,control:l.a.createElement(I.a,null),label:"6"}),l.a.createElement(z.a,{value:7,control:l.a.createElement(I.a,null),label:"7"}),l.a.createElement(z.a,{value:8,control:l.a.createElement(I.a,null),label:"8"}),l.a.createElement(z.a,{value:9,control:l.a.createElement(I.a,null),label:"9"}),l.a.createElement(z.a,{value:10,control:l.a.createElement(I.a,null),label:"10"}),l.a.createElement(z.a,{value:11,control:l.a.createElement(I.a,null),label:"11"}),l.a.createElement(z.a,{value:12,control:l.a.createElement(I.a,null),label:"12"})))),l.a.createElement("div",null,l.a.createElement(A.a,{component:"fieldset",className:a.formControl},l.a.createElement(H.a,{component:"legend"},t("wolf_number")),l.a.createElement(F.a,{row:!0,className:a.group,value:c,onChange:function(e){i(1*e.target.value)}},l.a.createElement(z.a,{value:1,control:l.a.createElement(I.a,null),label:"1"}),l.a.createElement(z.a,{value:2,control:l.a.createElement(I.a,null),label:"2"}),l.a.createElement(z.a,{value:3,control:l.a.createElement(I.a,null),label:"3"})))),l.a.createElement("div",null,l.a.createElement(A.a,{component:"fieldset",className:a.formControl},l.a.createElement(H.a,{component:"legend"},t("predictor")),l.a.createElement(F.a,{row:!0,className:a.group,value:s,onChange:function(e){m("true"===e.target.value)}},l.a.createElement(z.a,{value:!0,control:l.a.createElement(I.a,null),label:t("yes")}),l.a.createElement(z.a,{value:!1,control:l.a.createElement(I.a,null),label:t("no")})))),l.a.createElement("div",null,l.a.createElement(A.a,{component:"fieldset",className:a.formControl},l.a.createElement(H.a,{component:"legend"},t("witch")),l.a.createElement(F.a,{row:!0,className:a.group,value:u,onChange:function(e){d("true"===e.target.value)}},l.a.createElement(z.a,{value:!0,control:l.a.createElement(I.a,null),label:t("yes")}),l.a.createElement(z.a,{value:!1,control:l.a.createElement(I.a,null),label:t("no")})))),l.a.createElement("div",null,l.a.createElement(A.a,{component:"fieldset",className:a.formControl},l.a.createElement(H.a,{component:"legend"},t("hunter")),l.a.createElement(F.a,{row:!0,className:a.group,value:p,onChange:function(e){b("true"===e.target.value)}},l.a.createElement(z.a,{value:!0,control:l.a.createElement(I.a,null),label:t("yes")}),l.a.createElement(z.a,{value:!1,control:l.a.createElement(I.a,null),label:t("no")})))),l.a.createElement(G.a,{style:{marginBottom:"20px"},onClick:f,variant:"contained",color:"secondary"},t("finished")))},D=t(96),J=t(183),L=t(187),R=t(185),M=t(186),Y=t(184),V=t(68),$=t.n(V),q=t(69),K=t.n(q),Q=t(70),X=t.n(Q),Z=t(71),ee=t.n(Z),ae=t(72),te=t.n(ae),ne=Object(u.a)(function(e){return{root:{padding:e.spacing(3,2),margin:"10px"},isChecked:{color:"red"},role:{textAlign:"center",fontSize:"30px"}}}),le=function(e){var a=e.sit,t=Object(o.b)().t,r=ne(),c=Object(n.useState)(!1),m=Object(i.a)(c,2),u=m[0],d=m[1],p=Object(n.useState)(!1),b=Object(i.a)(p,2),f=b[0],E=b[1],g=function(){E(!1),d(!0)},h=null;switch(a.role.key){case"wolf":h=$.a;break;case"predictor":h=K.a;break;case"witch":h=X.a;break;case"hunter":h=ee.a;break;case"villager":h=te.a}return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,{className:r.root,onClick:function(){u||E(!0)}},l.a.createElement(s.a,{variant:"h5",component:"h3"},t("sit_number",{index:a.index})),l.a.createElement(s.a,{component:"p"},u?l.a.createElement("span",{className:r.isChecked},t("is_checked")):t("check_role"))),l.a.createElement(J.a,{open:f,onClose:g,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(Y.a,{id:"alert-dialog-title"},t("your_role")),l.a.createElement(R.a,null,l.a.createElement(M.a,{id:"alert-dialog-description"},l.a.createElement("img",{src:h,width:"100vh"}),l.a.createElement("div",{className:r.role},t(a.role.key)))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:g,color:"primary"},t("confirm")))))},re=function(e){var a=Object(o.b)().t,t=e.list,n=e.handleStartGame;ne();return l.a.createElement(l.a.Fragment,null,t.map(function(e){return l.a.createElement("div",null,l.a.createElement(le,{sit:e}))}),l.a.createElement(G.a,{style:{marginBottom:"20px"},onClick:n,variant:"contained",color:"secondary"},a("start")))},ce=t(57),ie=t.n(ce),oe=t(189),se=t(188),me=t(53),ue=t(73),de=t.n(ue),pe=t(74),be=t.n(pe),fe=t(75),Ee=t.n(fe),ge=t(76),he=t.n(ge),ve=t(77),ke=t.n(ve),ye=t(78),_e=t.n(ye),je=t(79),we=t.n(je),xe=t(80),Oe=t.n(xe),Ne=t(81),Se=t.n(Ne),Ce=t(82),Ue=t.n(Ce),Pe=t(83),We=t.n(Pe),Ge=t(84),Ie=t.n(Ge),Fe=t(85),ze=t.n(Fe),Ae=t(86),He=t.n(Ae),Te=t(87),Be=t.n(Te),De=t(88),Je=t.n(De),Le=t(89),Re=t.n(Le),Me=t(90),Ye=t.n(Me),Ve=l.a.memo(function(e){var a=e.url,t=e.onFinishedPlaying;return l.a.createElement(ie.a,{url:a,playStatus:ie.a.status.PLAYING,onFinishedPlaying:t})}),$e=Object(u.a)({avatar:{margin:10},pinkAvatar:{margin:10,color:"#fff",backgroundColor:me.a[500]},good:{fontSize:"30px"},bad:{fontSize:"30px",color:"red"}}),qe=function(e){var a=$e(),t=e.list,r=e.isUsePredictor,c=e.isUseWitch,s=e.isUseHunter,m=Object(o.b)().t,u=Object(n.useState)(1),d=Object(i.a)(u,2),p=d[0],b=d[1],f=Object(n.useState)(!1),E=Object(i.a)(f,2),g=E[0],h=E[1],v=Object(n.useState)(null),k=Object(i.a)(v,2),y=k[0],_=k[1],j=Object(n.useState)(null),w=Object(i.a)(j,2),x=w[0],O=w[1],N=Object(n.useState)(!1),S=Object(i.a)(N,2),C=S[0],U=S[1],P=Object(n.useState)(!1),W=Object(i.a)(P,2),I=W[0],F=W[1],z=Object(n.useState)(!1),A=Object(i.a)(z,2),H=A[0],T=A[1],B=Object(n.useState)(!1),D=Object(i.a)(B,2),V=D[0],$=D[1],q=Object(n.useState)(null),K=Object(i.a)(q,2),Q=K[0],X=K[1],Z=Object(n.useState)(!1),ee=Object(i.a)(Z,2),ae=ee[0],te=ee[1],ne=Object(n.useState)(!1),le=Object(i.a)(ne,2),re=le[0],ce=le[1],ie=Object(n.useState)([]),me=Object(i.a)(ie,2),ue=(me[0],me[1],Object(n.useCallback)(function(){switch(p){case 1:b(2);break;case 2:b(3);break;case 3:b(4);break;case 4:h(!0);break;case 5:b(c?6:r?12:s?16:18);break;case 6:b(7);break;case 7:U(!0),b(8);break;case 8:break;case 9:F(!0),b(10);break;case 10:break;case 11:b(r?12:s?16:18);break;case 12:b(13);break;case 13:$(!0);break;case 14:break;case 15:b(s?16:18);break;case 16:b(17);break;case 17:b(18);break;case 18:ce(!0)}},[p])),pe=function(e){e&&(T(!0),_(null)),U(!1),b(9)},fe=function(e){e||O(null),F(!1),b(11)},ge=Object(n.useMemo)(function(){var e=null;switch(p){case 1:e=de.a;break;case 2:e=be.a;break;case 3:e=Ee.a;break;case 4:e=he.a;break;case 5:e=ke.a;break;case 6:e=_e.a;break;case 7:e=we.a;break;case 8:e=Oe.a;break;case 9:e=Se.a;break;case 10:e=Ue.a;break;case 11:e=We.a;break;case 12:e=Ie.a;break;case 13:e=ze.a;break;case 14:e=He.a;break;case 15:e=Be.a;break;case 16:e=Je.a;break;case 17:e=Re.a;break;case 18:e=Ye.a}return e},[p]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{paddingTop:"20px"}},m("gaming")),l.a.createElement(Ve,{url:ge,onFinishedPlaying:ue}),l.a.createElement(J.a,{open:g,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(Y.a,{id:"alert-dialog-title"},m("wolf_kill")),l.a.createElement(R.a,null,l.a.createElement(M.a,{id:"alert-dialog-description"},l.a.createElement(se.a,{container:!0,justify:"center",alignItems:"center"},t.map(function(e){var t=a.avatar;return y&&y.index===e.index&&(t=a.pinkAvatar),l.a.createElement(l.a.Fragment,null,l.a.createElement(oe.a,{className:t,onClick:function(){_(e)}},e.index))})))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){h(!1),b(5)},color:"primary",disabled:null===y},m("confirm")))),l.a.createElement(J.a,{open:C,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(Y.a,{id:"alert-dialog-title"},m("witch_save")),l.a.createElement(R.a,null,l.a.createElement(M.a,{id:"alert-dialog-description"},l.a.createElement(se.a,{container:!0,justify:"center",alignItems:"center"},m("dead_person",{index:y?y.index:null})))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){pe(!0)},color:"primary"},m("yes")),l.a.createElement(G.a,{onClick:function(){pe(!1)},color:"primary"},m("no")))),l.a.createElement(J.a,{open:I,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(Y.a,{id:"alert-dialog-title"},m("witch_poison")),l.a.createElement(R.a,null,l.a.createElement(M.a,{id:"alert-dialog-description"},l.a.createElement(se.a,{container:!0,justify:"center",alignItems:"center"},H?m("is_use_save"):l.a.createElement(se.a,{container:!0,justify:"center",alignItems:"center"},t.map(function(e){var t=a.avatar;return x&&x.index===e.index&&(t=a.pinkAvatar),l.a.createElement(l.a.Fragment,null,l.a.createElement(oe.a,{className:t,onClick:function(){O(e)}},e.index))}))))),l.a.createElement(L.a,null,l.a.createElement(G.a,{disabled:H||null===x,onClick:function(){fe(!0)},color:"primary"},m("yes")),l.a.createElement(G.a,{onClick:function(){fe(!1)},color:"primary"},m("no")))),l.a.createElement(J.a,{open:V,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(Y.a,{id:"alert-dialog-title"},m("predictor_select")),l.a.createElement(R.a,null,l.a.createElement(M.a,{id:"alert-dialog-description"},l.a.createElement(se.a,{container:!0,justify:"center",alignItems:"center"},l.a.createElement(se.a,{container:!0,justify:"center",alignItems:"center"},t.map(function(e){var t=a.avatar;return Q&&Q.index===e.index&&(t=a.pinkAvatar),l.a.createElement(l.a.Fragment,null,l.a.createElement(oe.a,{className:t,onClick:function(){X(e)}},e.index))}))))),l.a.createElement(L.a,null,l.a.createElement(G.a,{disabled:null===Q,onClick:function(){$(!1),te(!0),b(14)},color:"primary"},m("yes")))),l.a.createElement(J.a,{open:ae,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(Y.a,{id:"alert-dialog-title"},m("role_result")),l.a.createElement(R.a,null,l.a.createElement(M.a,{id:"alert-dialog-description"},Q&&"wolf"===Q.role.key?l.a.createElement("span",{className:a.bad},m("is_wolf")):l.a.createElement("span",{className:a.good},m("not_wolf")))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){te(!1),b(15)},color:"primary"},m("confirm")))),l.a.createElement(J.a,{open:re,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(Y.a,{id:"alert-dialog-title"},m("yesterday_dead")),l.a.createElement(R.a,null,l.a.createElement(M.a,{id:"alert-dialog-description"},null===y&&null===x?m("christmas_eve"):l.a.createElement(l.a.Fragment,null,y.index,null!==x&&x.index!==y.index&&", ".concat(x.index)))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){ce(!1)},color:"primary"},m("confirm")))))},Ke=Object(u.a)(function(e){return{container:{paddingLeft:"0px",paddingRight:"0px",height:"100vh"},toolbar:e.mixins.toolbar,drawer:{width:240},drawerPaper:{width:240},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}),Qe=function(e){var a=Object(n.useState)(0),t=Object(i.a)(a,2),r=t[0],c=t[1],u=Object(n.useState)([]),f=Object(i.a)(u,2),w=f[0],O=f[1],G=Object(n.useState)(6),I=Object(i.a)(G,2),F=I[0],z=I[1],A=Object(n.useState)(2),H=Object(i.a)(A,2),T=H[0],D=H[1],J=Object(n.useState)(!1),L=Object(i.a)(J,2),R=L[0],M=L[1],Y=Object(n.useState)(!0),V=Object(i.a)(Y,2),$=V[0],q=V[1],K=Object(n.useState)(!1),Q=Object(i.a)(K,2),X=Q[0],Z=Q[1],ee=Object(n.useState)(!1),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],le=Object(o.b)(),ce=le.t,ie=le.i18n,oe=Ke(),se=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&ne(e)}},me=function(){return Math.floor(Math.random()*F)};return l.a.createElement("div",{style:{height:"100vh"}},l.a.createElement(m.a,{maxWidth:"sm",className:oe.container},l.a.createElement(s.a,{component:"div"},l.a.createElement(d.a,{position:"static"},l.a.createElement(p.a,null,l.a.createElement(b.a,{edge:"start",className:oe.menuButton,color:"inherit","aria-label":"menu",onClick:se(!0)},l.a.createElement(E.a,null)),l.a.createElement(s.a,{variant:"h6",className:oe.title},ce("title")),l.a.createElement(g.a,{color:"inherit",native:!0,onChange:function(e){return a=e.target.value,void ie.changeLanguage(a);var a},inputProps:{name:"age",id:"age-native-simple"}},l.a.createElement("option",{value:"zh-TW"},"\u7e41\u9ad4\u4e2d\u6587"),l.a.createElement("option",{value:"en-US"},"English")))),l.a.createElement(h.a,{anchor:"left",open:te,onClose:se(!1),className:oe.drawer,classes:{paper:oe.drawerPaper}},l.a.createElement("div",{className:oe.toolbar}),l.a.createElement(v.a,null),l.a.createElement(k.a,null,l.a.createElement(y.a,{button:!0,key:ce("restart"),onClick:function(){ne(!1)}},l.a.createElement(_.a,null,l.a.createElement(N.a,null)),l.a.createElement(j.a,{primary:ce("restart")})),l.a.createElement(y.a,{button:!0,key:ce("resetting"),onClick:function(){ne(!1)}},l.a.createElement(_.a,null,l.a.createElement(x.a,null)),l.a.createElement(j.a,{primary:ce("resetting")})))),0===r&&l.a.createElement(B,{playerNumber:F,setPlayerNumber:z,wolfNumber:T,setWolfNumber:D,isUsePredictor:R,setIsUsePredictor:M,isUseWitch:$,setIsUseWitch:q,isUseHunter:X,setIsUseHunter:Z,handleStart:function(){for(var e=function(e,a){for(var t=[a],n=[];e>0;)1&e&&(n=n.concat(t)),t=t.concat(t),e>>>=1;return n}(F,null),a=0;a<T;a+=1){for(var t=null;t=me(),null!==e[t];);e[t]={index:t+1,role:S}}if(R){for(var n=null;n=me(),null!==e[n];);e[n]={index:n+1,role:C}}if($){for(var l=null;l=me(),null!==e[l];);e[l]={index:l+1,role:U}}if(X){for(var r=null;r=me(),null!==e[r];);e[r]={index:r+1,role:P}}e.forEach(function(a,t){null===a&&(e[t]={index:t+1,role:W})}),O(e),c(1)}}),1===r&&l.a.createElement(re,{list:w,handleStartGame:function(){c(2)}}),2===r&&l.a.createElement(qe,{list:w,isUsePredictor:R,isUseWitch:$,isUseHunter:X}))))},Xe=(t(132),t(58)),Ze=t(94),ea=t(95);Xe.a.use(o.a).init({resources:{"en-US":{translations:Ze},"zh-TW":{translations:ea}},lng:localStorage.getItem("language")||"zh-TW",fallbackLng:"zh-TW",debug:!0,ns:["translations"],defaultNS:"translations",interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});Xe.a;var aa=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(Qe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(aa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,a,t){e.exports=t.p+"static/media/wolf.9caa04d0.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/predictor.473d5f28.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/witch.4dc6d5d2.jpg"},71:function(e,a,t){e.exports=t.p+"static/media/hunter.5cf4e8f1.jpg"},72:function(e,a,t){e.exports=t.p+"static/media/villager.fa735092.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/step_1.6751b7d1.mp3"},74:function(e,a,t){e.exports=t.p+"static/media/step_2.264c120e.mp3"},75:function(e,a,t){e.exports=t.p+"static/media/step_3.3f6f4aa3.mp3"},76:function(e,a,t){e.exports=t.p+"static/media/step_4.a75253e4.mp3"},77:function(e,a,t){e.exports=t.p+"static/media/step_5.2e36d3c2.mp3"},78:function(e,a,t){e.exports=t.p+"static/media/step_6.dc038730.mp3"},79:function(e,a,t){e.exports=t.p+"static/media/step_7.84ea5c11.mp3"},80:function(e,a,t){e.exports=t.p+"static/media/step_8.4898a6d4.mp3"},81:function(e,a,t){e.exports=t.p+"static/media/step_9.83e9ca3e.mp3"},82:function(e,a,t){e.exports=t.p+"static/media/step_10.b4e6486e.mp3"},83:function(e,a,t){e.exports=t.p+"static/media/step_11.9f00d56d.mp3"},84:function(e,a,t){e.exports=t.p+"static/media/step_12.b3d32d1f.mp3"},85:function(e,a,t){e.exports=t.p+"static/media/step_13.488a98a4.mp3"},86:function(e,a,t){e.exports=t.p+"static/media/step_14.02591e0a.mp3"},87:function(e,a,t){e.exports=t.p+"static/media/step_15.5cf29b44.mp3"},88:function(e,a,t){e.exports=t.p+"static/media/step_16.99894c39.mp3"},89:function(e,a,t){e.exports=t.p+"static/media/step_17.e7d96e3e.mp3"},90:function(e,a,t){e.exports=t.p+"static/media/step_18.a7d9ef5f.mp3"},94:function(e){e.exports=JSON.parse('{"title":"Wolf Judge","gaming":"\u6cd5\u5b98\u4e3b\u6301\u4e2d...","restart":"Re Start","resetting":"Re Setting","player_number":"Player Number","wolf_number":"Wolf Number","wolf":"Wolf","predictor":"Predictor","witch":"Witch","hunter":"Hunter","villager":"Villager","yes":"Yes","no":"No","finished":"Finished","start":"Start Game","sit_number":"Player No. {{index}}","check_role":"Click and check the role.","is_checked":"The player is checked.","confirm":"Confirm","your_role":"Your role is...","dead_person":"Player No. {{index}} is dead.","is_use_save":"\u6b64\u56de\u5408\u5df2\u4f7f\u7528\u89e3\u85e5, \u4e0d\u80fd\u4f7f\u7528\u6bd2\u85e5","wolf_kill":"\u72fc\u4eba\u8acb\u6bba\u4eba","witch_save":"\u4f60\u8981\u4f7f\u7528\u89e3\u85e5\u55ce\uff1f","witch_poison":"\u4f60\u8981\u4f7f\u7528\u6bd2\u85e5\u55ce\uff1f","predictor_select":"\u4f60\u8981\u67e5\u9a57\u7684\u5c0d\u8c61\u662f\uff1f","role_result":"\u9019\u4f4d\u73a9\u5bb6\u7684\u8eab\u4efd\u662f","is_wolf":"\u72fc\u4eba","not_wolf":"\u597d\u4eba","yesterday_dead":"\u6628\u5929\u6b7b\u6389\u7684\u4eba\u662f","christmas_eve":"\u5e73\u5b89\u591c"}')},95:function(e){e.exports=JSON.parse('{"title":"\u72fc\u4eba\u6bba\u6cd5\u5b98","gaming":"\u6cd5\u5b98\u4e3b\u6301\u4e2d...","restart":"\u91cd\u65b0\u958b\u59cb","resetting":"\u91cd\u65b0\u8a2d\u5b9a","player_number":"\u904a\u6232\u4eba\u6578","wolf_number":"\u72fc\u4eba\u6578\u91cf","wolf":"\u72fc\u4eba","predictor":"\u9810\u8a00\u5bb6","witch":"\u5973\u5deb","hunter":"\u7375\u4eba","villager":"\u6751\u6c11","yes":"\u662f","no":"\u5426","finished":"\u5b8c\u6210","start":"\u958b\u59cb\u904a\u6232","sit_number":"{{index}} \u865f\u73a9\u5bb6","check_role":"\u8acb\u9ede\u9078, \u4e26\u78ba\u8a8d\u8eab\u4efd.","is_checked":"\u8a72\u73a9\u5bb6\u5df2\u78ba\u8a8d\u8eab\u4efd.","confirm":"\u78ba\u8a8d","your_role":"\u4f60\u7684\u89d2\u8272\u662f...","dead_person":"{{index}} \u865f\u73a9\u5bb6\u88ab\u6bba\u6b7b.","is_use_save":"\u6b64\u56de\u5408\u5df2\u4f7f\u7528\u89e3\u85e5, \u4e0d\u80fd\u4f7f\u7528\u6bd2\u85e5","wolf_kill":"\u72fc\u4eba\u8acb\u6bba\u4eba","witch_save":"\u4f60\u8981\u4f7f\u7528\u89e3\u85e5\u55ce\uff1f","witch_poison":"\u4f60\u8981\u4f7f\u7528\u6bd2\u85e5\u55ce\uff1f","predictor_select":"\u4f60\u8981\u67e5\u9a57\u7684\u5c0d\u8c61\u662f\uff1f","role_result":"\u9019\u4f4d\u73a9\u5bb6\u7684\u8eab\u4efd\u662f","is_wolf":"\u72fc\u4eba","not_wolf":"\u597d\u4eba","yesterday_dead":"\u6628\u5929\u6b7b\u6389\u7684\u4eba\u662f","christmas_eve":"\u5e73\u5b89\u591c"}')}},[[111,1,2]]]);
//# sourceMappingURL=main.f94fcc12.chunk.js.map