(window.webpackJsonpwolf_judge=window.webpackJsonpwolf_judge||[]).push([[0],{112:function(e,a,t){e.exports=t(134)},117:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),o=(t(117),t(4)),i=t(20),s=t(35),u=t(189),d=t(174),m=t(190),p=t(191),b=t(179),f=t(94),g=t.n(f),E=t(196),h=t(199),y=t(180),v=t(192),_=t(193),k=t(194),j=t(195),O=t(95),w=t.n(O),x={key:"wolf",isGood:!1,isGod:!1,src:"wolf.jpg"},S={key:"predictor",isGood:!0,isGod:!0,src:"predictor.jpg"},N={key:"witch",isGood:!0,isGod:!0,src:"witch.jpg"},C={key:"hunter",isGood:!0,isGod:!0,src:"hunter.jpg"},W={key:"villager",isGood:!0,isGod:!1,src:"villager.jpg"},G=t(181),P=t(197),U=t(198),T=t(178),K=t(176),F=t(177),I=Object(d.a)(function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)},group:{margin:e.spacing(1,0)}}}),B=function(e){var a=I(),t=Object(i.b)().t,n=e.playerNumber,r=e.setPlayerNumber,c=e.wolfNumber,o=e.setWolfNumber,s=e.isUsePredictor,u=e.setIsUsePredictor,d=e.isUseWitch,m=e.setIsUseWitch,p=e.isUseHunter,b=e.setIsUseHunter,f=e.handleStart,g=e.isKillKind,E=e.setIsKillKind;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(K.a,{component:"fieldset",className:a.formControl},l.a.createElement(F.a,{component:"legend"},t("player_number")),l.a.createElement(U.a,{row:!0,className:a.group,value:n,onChange:function(e){r(1*e.target.value)}},l.a.createElement(T.a,{value:6,control:l.a.createElement(P.a,null),label:"6"}),l.a.createElement(T.a,{value:7,control:l.a.createElement(P.a,null),label:"7"}),l.a.createElement(T.a,{value:8,control:l.a.createElement(P.a,null),label:"8"}),l.a.createElement(T.a,{value:9,control:l.a.createElement(P.a,null),label:"9"}),l.a.createElement(T.a,{value:10,control:l.a.createElement(P.a,null),label:"10"}),l.a.createElement(T.a,{value:11,control:l.a.createElement(P.a,null),label:"11"}),l.a.createElement(T.a,{value:12,control:l.a.createElement(P.a,null),label:"12"})))),l.a.createElement("div",null,l.a.createElement(K.a,{component:"fieldset",className:a.formControl},l.a.createElement(F.a,{component:"legend"},t("wolf_number")),l.a.createElement(U.a,{row:!0,className:a.group,value:c,onChange:function(e){o(1*e.target.value)}},l.a.createElement(T.a,{value:1,control:l.a.createElement(P.a,null),label:"1"}),l.a.createElement(T.a,{value:2,control:l.a.createElement(P.a,null),label:"2"}),l.a.createElement(T.a,{value:3,control:l.a.createElement(P.a,null),label:"3"})))),l.a.createElement("div",null,l.a.createElement(K.a,{component:"fieldset",className:a.formControl},l.a.createElement(F.a,{component:"legend"},t("is_kill_kind")),l.a.createElement(U.a,{row:!0,className:a.group,value:g,onChange:function(e){E("true"===e.target.value)}},l.a.createElement(T.a,{value:!0,control:l.a.createElement(P.a,null),label:t("yes")}),l.a.createElement(T.a,{value:!1,control:l.a.createElement(P.a,null),label:t("no")})))),l.a.createElement(y.a,null),l.a.createElement("div",null,l.a.createElement(K.a,{component:"fieldset",className:a.formControl},l.a.createElement(F.a,{component:"legend"},t("predictor")),l.a.createElement(U.a,{row:!0,className:a.group,value:s,onChange:function(e){u("true"===e.target.value)}},l.a.createElement(T.a,{value:!0,control:l.a.createElement(P.a,null),label:t("yes")}),l.a.createElement(T.a,{value:!1,control:l.a.createElement(P.a,null),label:t("no")})))),l.a.createElement("div",null,l.a.createElement(K.a,{component:"fieldset",className:a.formControl},l.a.createElement(F.a,{component:"legend"},t("witch")),l.a.createElement(U.a,{row:!0,className:a.group,value:d,onChange:function(e){m("true"===e.target.value)}},l.a.createElement(T.a,{value:!0,control:l.a.createElement(P.a,null),label:t("yes")}),l.a.createElement(T.a,{value:!1,control:l.a.createElement(P.a,null),label:t("no")})))),l.a.createElement("div",null,l.a.createElement(K.a,{component:"fieldset",className:a.formControl},l.a.createElement(F.a,{component:"legend"},t("hunter")),l.a.createElement(U.a,{row:!0,className:a.group,value:p,onChange:function(e){b("true"===e.target.value)}},l.a.createElement(T.a,{value:!0,control:l.a.createElement(P.a,null),label:t("yes")}),l.a.createElement(T.a,{value:!1,control:l.a.createElement(P.a,null),label:t("no")})))),l.a.createElement(y.a,null),l.a.createElement(G.a,{style:{marginTop:"20px",marginBottom:"20px"},onClick:f,variant:"contained",color:"secondary"},t("finished")))},A=t(98),H=t(182),L=t(186),Y=t(184),z=t(185),M=t(183),J=t(71),R=t.n(J),D=t(72),V=t.n(D),$=t(73),q=t.n($),Q=t(74),X=t.n(Q),Z=t(75),ee=t.n(Z),ae=Object(d.a)(function(e){return{root:{padding:e.spacing(3,2),margin:"10px"},isChecked:{color:"red"},role:{textAlign:"center",fontSize:"30px"}}}),te=function(e){var a=e.sit,t=Object(i.b)().t,r=ae(),c=Object(n.useState)(!1),u=Object(o.a)(c,2),d=u[0],m=u[1],p=Object(n.useState)(!1),b=Object(o.a)(p,2),f=b[0],g=b[1],E=null;switch(a.role.key){case"wolf":E=R.a;break;case"predictor":E=V.a;break;case"witch":E=q.a;break;case"hunter":E=X.a;break;case"villager":E=ee.a}return l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{className:r.root,onClick:function(){d||g(!0)}},l.a.createElement(s.a,{variant:"h5",component:"h3"},t("sit_number",{index:a.index})),l.a.createElement(s.a,{component:"p"},d?l.a.createElement("span",{className:r.isChecked},t("is_checked")):t("check_role"))),l.a.createElement(H.a,{fullWidth:!0,open:f,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},t("your_role")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},l.a.createElement("div",{className:r.role},t(a.role.key)),l.a.createElement("img",{src:E,width:"100%"}))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){g(!1),m(!0)},color:"primary",variant:"contained"},t("confirm")))))},ne=function(e){var a=Object(i.b)().t,t=e.list,n=e.handleStartGame;return l.a.createElement(l.a.Fragment,null,t.map(function(e){return l.a.createElement("div",null,l.a.createElement(te,{sit:e}))}),l.a.createElement(y.a,{style:{marginTop:"20px"}}),l.a.createElement(G.a,{style:{marginTop:"20px",marginBottom:"20px"},onClick:n,variant:"contained",color:"secondary"},a("start")))},le=t(13),re=t(60),ce=t.n(re),oe=t(188),ie=t(187),se=t(56),ue=t(22),de=t.n(ue),me=t(45),pe=t.n(me),be=t(76),fe=t.n(be),ge=t(77),Ee=t.n(ge),he=t(78),ye=t.n(he),ve=t(79),_e=t.n(ve),ke=t(80),je=t.n(ke),Oe=t(81),we=t.n(Oe),xe=t(82),Se=t.n(xe),Ne=t(83),Ce=t.n(Ne),We=t(84),Ge=t.n(We),Pe=t(85),Ue=t.n(Pe),Te=t(86),Ke=t.n(Te),Fe=t(87),Ie=t.n(Fe),Be=t(88),Ae=t.n(Be),He=t(89),Le=t.n(He),Ye=t(90),ze=t.n(Ye),Me=t(91),Je=t.n(Me),Re=t(92),De=t.n(Re),Ve=t(93),$e=t.n(Ve),qe="DAY",Qe="NIGHT",Xe=l.a.memo(function(e){var a=e.url,t=e.onFinishedPlaying;return l.a.createElement(ce.a,{url:a,playStatus:ce.a.status.PLAYING,onFinishedPlaying:t})}),Ze=Object(d.a)({avatar:{margin:10,color:"#fff",backgroundColor:"#4DB6AC"},pinkAvatar:{margin:10,color:"#fff",backgroundColor:se.a[500]},dead:{margin:10,color:"#fff",backgroundColor:"#9E9E9E"},good:{fontSize:"30px"},bad:{fontSize:"30px",color:"red"}}),ea=function(e){var a=Ze(),t=e.list,r=e.isUsePredictor,c=e.isUseWitch,s=e.isUseHunter,u=e.playerNumber,d=e.wolfNumber,m=e.isKillKind;console.log("===== Role List ====="),t.forEach(function(e){console.log("".concat(e.index," - ").concat(e.role.key))}),console.log("=====================");var p=Object(i.b)().t,b=Object(n.useState)(1),f=Object(o.a)(b,2),g=f[0],E=f[1],h=Object(n.useState)(!1),v=Object(o.a)(h,2),_=v[0],k=v[1],j=Object(n.useState)(null),O=Object(o.a)(j,2),w=O[0],P=O[1],U=Object(n.useState)(null),T=Object(o.a)(U,2),K=T[0],F=T[1],I=Object(n.useState)(!1),B=Object(o.a)(I,2),A=B[0],J=B[1],R=Object(n.useState)(!1),D=Object(o.a)(R,2),V=D[0],$=D[1],q=Object(n.useState)(!1),Q=Object(o.a)(q,2),X=Q[0],Z=Q[1],ee=Object(n.useState)(!1),ae=Object(o.a)(ee,2),te=ae[0],ne=ae[1],re=Object(n.useState)(!1),ce=Object(o.a)(re,2),se=ce[0],ue=ce[1],me=Object(n.useState)(!1),be=Object(o.a)(me,2),ge=be[0],he=be[1],ve=Object(n.useState)(null),ke=Object(o.a)(ve,2),Oe=ke[0],xe=ke[1],Ne=Object(n.useState)(!1),We=Object(o.a)(Ne,2),Pe=We[0],Te=We[1],Fe=Object(n.useState)(!1),Be=Object(o.a)(Fe,2),He=Be[0],Ye=Be[1],Me=Object(n.useState)(1),Re=Object(o.a)(Me,2),Ve=Re[0],ea=Re[1],aa=Object(n.useState)(Qe),ta=Object(o.a)(aa,2),na=ta[0],la=ta[1],ra=Object(n.useState)([]),ca=Object(o.a)(ra,2),oa=ca[0],ia=ca[1],sa=Object(n.useState)(!1),ua=Object(o.a)(sa,2),da=ua[0],ma=ua[1],pa=Object(n.useState)(null),ba=Object(o.a)(pa,2),fa=ba[0],ga=ba[1],Ea=Object(n.useState)([]),ha=Object(o.a)(Ea,2),ya=ha[0],va=ha[1],_a=Object(n.useState)(!1),ka=Object(o.a)(_a,2),ja=ka[0],Oa=ka[1],wa=Object(n.useState)(""),xa=Object(o.a)(wa,2),Sa=xa[0],Na=xa[1],Ca=Object(n.useState)(!1),Wa=Object(o.a)(Ca,2),Ga=Wa[0],Pa=Wa[1],Ua=Object(n.useState)(null),Ta=Object(o.a)(Ua,2),Ka=Ta[0],Fa=Ta[1],Ia=Object(n.useState)(!1),Ba=Object(o.a)(Ia,2),Aa=Ba[0],Ha=Ba[1],La=Object(n.useState)(!1),Ya=Object(o.a)(La,2),za=Ya[0],Ma=Ya[1],Ja=Object(n.useState)(!1),Ra=Object(o.a)(Ja,2),Da=Ra[0],Va=Ra[1],$a=Object(n.useState)(!1),qa=Object(o.a)($a,2),Qa=qa[0],Xa=qa[1],Za=Object(n.useState)(!1),et=Object(o.a)(Za,2),at=et[0],tt=et[1],nt=Object(n.useState)(!1),lt=Object(o.a)(nt,2),rt=lt[0],ct=lt[1],ot=Object(n.useState)(!1),it=Object(o.a)(ot,2),st=it[0],ut=it[1],dt=Object(n.useCallback)(function(){switch(g){case 1:E(2);break;case 2:E(3);break;case 3:E(4);break;case 4:k(!0);break;case 5:E(c?6:r?12:s?16:18);break;case 6:E(7);break;case 7:at||J(!0),E(8);break;case 8:at&&setTimeout(function(){E(9)},2e3);break;case 9:at||$(!0),E(10);break;case 10:at&&setTimeout(function(){E(11)},2e3);break;case 11:E(r?12:s?16:18);break;case 12:E(13);break;case 13:Qa?setTimeout(function(){E(14)},2e3):he(!0);break;case 14:Qa&&setTimeout(function(){E(15)},2e3);break;case 15:E(s?16:18);break;case 16:rt?setTimeout(function(){E(17)},2e3):Va(!0);break;case 17:E(18);break;case 18:Ye(!0)}},[g]),mt=function(e){J(!1),E(9),e&&setTimeout(function(){Z(!0),ne(!0),P(null)},500)},pt=function(e){$(!1),E(11),se||setTimeout(function(){ue(e)},500),e?(console.log("witchDeadNumber.role.key",K.role.key),null!==K&&K.role.key===C.key&&Ma(!0)):F(null)},bt=Object(n.useMemo)(function(){var e=null;switch(g){case 1:e=fe.a;break;case 2:e=Ee.a;break;case 3:e=ye.a;break;case 4:e=_e.a;break;case 5:e=je.a;break;case 6:e=we.a;break;case 7:e=Se.a;break;case 8:e=Ce.a;break;case 9:e=Ge.a;break;case 10:e=Ue.a;break;case 11:e=Ke.a;break;case 12:e=Ie.a;break;case 13:e=Ae.a;break;case 14:e=Le.a;break;case 15:e=ze.a;break;case 16:e=Je.a;break;case 17:e=De.a;break;case 18:e=$e.a}return e},[g]),ft=function(){var e=null;if(null===w&&null===K)return e=p("christmas_eve");var a=[];return null!==w&&a.push(w.index),null!==K&&null!==w&&K.index!==w.index&&a.push(K.index),a.sort(function(e,a){return e-a}),a.forEach(function(t,n){e+=t,2===a.length&&n!==a.length-1&&(e+=", ")}),p("dead_player",{returnMessage:e})},gt=function(e){var n=null,r=null;switch(e){case x.key:n=w,r=P;break;case N.key:n=K,r=F;break;case S.key:n=Oe,r=xe;break;case C.key:n=Ka,r=Fa;break;default:n=fa,r=ga}return l.a.createElement(ie.a,{container:!0,justify:"center",alignItems:"center"},l.a.createElement(ie.a,{container:!0,justify:"center",alignItems:"center"},t.map(function(e){var t=a.avatar;n&&n.index===e.index&&(t=a.pinkAvatar);var c=ya.some(function(a){return a.index===e.index});return l.a.createElement(l.a.Fragment,null,c?l.a.createElement(oe.a,{className:a.dead},e.index):l.a.createElement(oe.a,{className:t,onClick:function(){r(e)}},e.index))})))},Et=function(e){if(la(qe),ma(!1),e){var a=[].concat(Object(le.a)(ya),[fa]);e?(va(a),ia([].concat(Object(le.a)(oa),["".concat(p("n_day",{day:Ve})).concat(fa.index)]))):ia([].concat(Object(le.a)(oa),["".concat(p("n_day",{day:Ve})).concat(p("give_up_vote"))]));var t=yt(a);if(t.isFinished)Oa(!0),Na(t.message);else ht(a)?Ha(!0):ut(!0)}else ut(!0)},ht=function(e){var a=!1;return!s||Ga||za||rt||(a=e.some(function(e){return e.role.key===C.key})),a},yt=function(e){r&&e.some(function(e){return e.role.key===S.key})&&Xa(!0),c&&e.some(function(e){return e.role.key===N.key})&&tt(!0),s&&e.some(function(e){return e.role.key===C.key})&&ct(!0),console.log("dead",e),console.log("wolfNumber",d);var a=0;if(e.forEach(function(e){e.role.key===x.key&&(a+=1)}),console.log("deadWolf",a),a===d)return{isFinished:!0,message:p("good_win")};if(console.log("playerNumber",u),u-e.length<=2*(d-a))return{isFinished:!0,message:p("bad_win")};if(console.log("isKillKind",m),m){var n=0,l=0,o=0,i=0;if(t.forEach(function(e){e.role.isGood&&(e.role.isGod?n+=1:l+=1)}),e.forEach(function(e){e.role.isGood&&(e.role.isGod?o+=1:i+=1)}),console.log("gods",n),console.log("villagers",l),console.log("deadGods",o),console.log("deadVillagers",i),0!==o&&n===o||0!==i&&l===i)return{isFinished:!0,message:p("bad_win_kind")}}return{isFinished:!1,message:""}},vt=function(e){if(Ha(!1),Pa(!0),e){var a=[].concat(Object(le.a)(ya),[Ka]);va(a),ia([].concat(Object(le.a)(oa),[p("hunter_shoot_player",{index:Ka.index})]));var t=yt(a);t.isFinished?(Oa(!0),Na(t.message)):_t(na===qe)}else _t(na===qe)},_t=function(e){P(null),F(null),xe(null),ga(null),Z(!1),Fa(null),e?(ea(Ve+1),la(Qe),E(1)):la(qe)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{paddingTop:"20px"}},p("gaming")),l.a.createElement("div",{style:{paddingTop:"20px"}},p("dead_message")),l.a.createElement("div",{style:{textAlign:"left",marginLeft:"10%"}},l.a.createElement("ul",null,oa.map(function(e){return l.a.createElement("li",null,e)}))),l.a.createElement("div",null,na===qe&&l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{style:{marginBottom:"20px"}}),l.a.createElement(G.a,{onClick:function(){return ma(!0)},variant:"contained",color:"secondary"},p("start_vote")))),l.a.createElement(Xe,{url:bt,onFinishedPlaying:dt}),l.a.createElement(H.a,{fullWidth:!0,open:_,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("wolf_kill")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},gt(x.key))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){k(!1),E(5)},color:"primary",disabled:null===w,variant:"contained"},p("confirm"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:A,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("witch_save")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},te?l.a.createElement("span",{className:a.good},p("save_used")):l.a.createElement("span",{className:a.good},p("dead_person",{index:w?w.index:null})))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){mt(!1)},color:"primary",variant:"outlined"},p("no"),l.a.createElement(pe.a,null)),l.a.createElement(G.a,{onClick:function(){mt(!0)},color:"primary",variant:"contained",disabled:te},p("yes"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:V,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("witch_poison")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},se?l.a.createElement("span",{className:a.good},p("poison_used")):X?l.a.createElement("span",{className:a.good},p("is_use_save")):gt(N.key))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){pt(!1)},color:"primary",variant:"outlined"},p("no"),l.a.createElement(pe.a,null)),l.a.createElement(G.a,{disabled:X||null===K||se,onClick:function(){pt(!0)},color:"primary",variant:"contained"},p("yes"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:ge,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("predictor_select")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},gt(S.key))),l.a.createElement(L.a,null,l.a.createElement(G.a,{disabled:null===Oe,onClick:function(){he(!1),Te(!0),E(14)},color:"primary",variant:"contained"},p("confirm"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:Pe,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("role_result")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},Oe&&"wolf"===Oe.role.key?l.a.createElement("span",{className:a.bad},p("is_wolf")):l.a.createElement("span",{className:a.good},p("not_wolf")))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){Te(!1),E(15)},color:"primary",variant:"contained"},p("confirm"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:He,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("yesterday_dead")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},l.a.createElement("span",{className:a.bad},ft()))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){Ye(!1),ia([].concat(Object(le.a)(oa),["".concat(p("n_night",{day:Ve})).concat(ft())]));var e=[];null!==w&&e.push(w),c&&null!==K&&w.index!==K.index&&e.push(K);var a=[].concat(Object(le.a)(ya),e);e.length>0&&va(a);var t=yt(a);t.isFinished?(Oa(!0),Na(t.message)):ht(a)?Ha(!0):setTimeout(function(){_t(!1)},500)},color:"primary",variant:"contained"},p("confirm"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:da,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("start_vote")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},gt(""))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){Et(!1)},color:"primary",variant:"outlined"},p("give_up"),l.a.createElement(pe.a,null)),l.a.createElement(G.a,{onClick:function(){Et(!0)},color:"primary",variant:"contained"},p("confirm"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:ja,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("game_over")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},l.a.createElement("span",{className:a.good},Sa),l.a.createElement("ul",null,l.a.createElement("li",null,"".concat(p("wolf"),": ").concat(function(){var e="",a=t.filter(function(e){return e.role.key===x.key});return a.forEach(function(t,n){e+=t.index,a.length-1!==n&&(e+=", ")}),e}())),r&&l.a.createElement("li",null,"".concat(p("predictor"),": ").concat(t.find(function(e){return e.role.key===S.key}).index)),c&&l.a.createElement("li",null,"".concat(p("witch"),": ").concat(t.find(function(e){return e.role.key===N.key}).index)),s&&l.a.createElement("li",null,"".concat(p("hunter"),": ").concat(t.find(function(e){return e.role.key===C.key}).index)),l.a.createElement("li",null,"".concat(p("villager"),": ").concat(function(){var e="",a=t.filter(function(e){return e.role.key===W.key});return a.forEach(function(t,n){e+=t.index,a.length-1!==n&&(e+=", ")}),e}()))))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){window.location.reload()},color:"primary",variant:"contained"},p("confirm"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:Aa,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("huner_shoot")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},gt(C.key))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){vt(!1)},color:"primary",variant:"outlined"},p("no"),l.a.createElement(pe.a,null)),l.a.createElement(G.a,{onClick:function(){vt(!0)},color:"primary",variant:"contained",disabled:null===Ka},p("yes"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:Da,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("could_shoot")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},za?l.a.createElement("span",{className:a.bad},p("cant_shoot")):l.a.createElement("span",{className:a.good},p("can_shoot")))),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){Va(!1),E(17)},color:"primary",variant:"contained"},p("confirm"),l.a.createElement(de.a,null)))),l.a.createElement(H.a,{fullWidth:!0,open:st,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(M.a,{id:"alert-dialog-title"},p("last_words")),l.a.createElement(Y.a,null,l.a.createElement(z.a,{id:"alert-dialog-description"},"...")),l.a.createElement(L.a,null,l.a.createElement(G.a,{onClick:function(){ut(!1),_t(!0)},color:"primary",variant:"contained"},p("to_night")))))},aa=Object(d.a)(function(e){return{container:{paddingLeft:"0px",paddingRight:"0px",height:"100vh"},toolbar:e.mixins.toolbar,drawer:{width:240},drawerPaper:{width:240},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"left"},list:{width:250},fullList:{width:"auto"}}}),ta=function(e){var a=Object(n.useState)(0),t=Object(o.a)(a,2),r=t[0],c=t[1],d=Object(n.useState)([]),f=Object(o.a)(d,2),O=f[0],G=f[1],P=Object(n.useState)(6),U=Object(o.a)(P,2),T=U[0],K=U[1],F=Object(n.useState)(2),I=Object(o.a)(F,2),A=I[0],H=I[1],L=Object(n.useState)(!1),Y=Object(o.a)(L,2),z=Y[0],M=Y[1],J=Object(n.useState)(!0),R=Object(o.a)(J,2),D=R[0],V=R[1],$=Object(n.useState)(!1),q=Object(o.a)($,2),Q=q[0],X=q[1],Z=Object(n.useState)(!1),ee=Object(o.a)(Z,2),ae=ee[0],te=ee[1],le=Object(n.useState)(!1),re=Object(o.a)(le,2),ce=re[0],oe=re[1],ie=Object(i.b)(),se=ie.t,ue=ie.i18n,de=aa(),me=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&oe(e)}},pe=function(){return Math.floor(Math.random()*T)};return l.a.createElement("div",{style:{height:"100vh"}},l.a.createElement(u.a,{maxWidth:"sm",className:de.container},l.a.createElement(s.a,{component:"div"},l.a.createElement(m.a,{position:"static"},l.a.createElement(p.a,null,l.a.createElement(b.a,{edge:"start",className:de.menuButton,color:"inherit","aria-label":"menu",onClick:me(!0)},l.a.createElement(g.a,null)),l.a.createElement(s.a,{variant:"h6",className:de.title},se("title")),l.a.createElement(E.a,{color:"inherit",native:!0,onChange:function(e){return a=e.target.value,void ue.changeLanguage(a);var a},inputProps:{name:"age",id:"age-native-simple"}},l.a.createElement("option",{value:"zh-TW"},"\u7e41\u9ad4\u4e2d\u6587"),l.a.createElement("option",{value:"en-US"},"English")))),l.a.createElement(h.a,{anchor:"left",open:ce,onClose:me(!1),className:de.drawer,classes:{paper:de.drawerPaper}},l.a.createElement("div",{className:de.toolbar}),l.a.createElement(y.a,null),l.a.createElement(v.a,null,l.a.createElement(_.a,{button:!0,key:se("restart"),onClick:function(){window.location.reload()}},l.a.createElement(k.a,null,l.a.createElement(w.a,null)),l.a.createElement(j.a,{primary:se("restart")})))),0===r&&l.a.createElement(B,{playerNumber:T,setPlayerNumber:K,wolfNumber:A,setWolfNumber:H,isUsePredictor:z,setIsUsePredictor:M,isUseWitch:D,setIsUseWitch:V,isUseHunter:Q,setIsUseHunter:X,handleStart:function(){for(var e=function(e,a){for(var t=[a],n=[];e>0;)1&e&&(n=n.concat(t)),t=t.concat(t),e>>>=1;return n}(T,null),a=0;a<A;a+=1){for(var t=null;t=pe(),null!==e[t];);e[t]={index:t+1,role:x}}if(z){for(var n=null;n=pe(),null!==e[n];);e[n]={index:n+1,role:S}}if(D){for(var l=null;l=pe(),null!==e[l];);e[l]={index:l+1,role:N}}if(Q){for(var r=null;r=pe(),null!==e[r];);e[r]={index:r+1,role:C}}e.forEach(function(a,t){null===a&&(e[t]={index:t+1,role:W})}),G(e),c(1)},isKillKind:ae,setIsKillKind:te}),1===r&&l.a.createElement(ne,{list:O,handleStartGame:function(){c(2)}}),2===r&&l.a.createElement(ea,{list:O,isUsePredictor:z,isUseWitch:D,isUseHunter:Q,playerNumber:T,wolfNumber:A,isKillKind:ae,setIsKillKind:te}))))},na=(t(133),t(61)),la=t(96),ra=t(97);na.a.use(i.a).init({resources:{"en-US":{translations:la},"zh-TW":{translations:ra}},lng:localStorage.getItem("language")||"zh-TW",fallbackLng:"zh-TW",debug:!0,ns:["translations"],defaultNS:"translations",interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});na.a;var ca=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(ta,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ca,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,a,t){e.exports=t.p+"static/media/wolf.9caa04d0.jpg"},72:function(e,a,t){e.exports=t.p+"static/media/predictor.473d5f28.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/witch.4dc6d5d2.jpg"},74:function(e,a,t){e.exports=t.p+"static/media/hunter.5cf4e8f1.jpg"},75:function(e,a,t){e.exports=t.p+"static/media/villager.fa735092.jpg"},76:function(e,a,t){e.exports=t.p+"static/media/step_1.6751b7d1.mp3"},77:function(e,a,t){e.exports=t.p+"static/media/step_2.264c120e.mp3"},78:function(e,a,t){e.exports=t.p+"static/media/step_3.3f6f4aa3.mp3"},79:function(e,a,t){e.exports=t.p+"static/media/step_4.a75253e4.mp3"},80:function(e,a,t){e.exports=t.p+"static/media/step_5.2e36d3c2.mp3"},81:function(e,a,t){e.exports=t.p+"static/media/step_6.dc038730.mp3"},82:function(e,a,t){e.exports=t.p+"static/media/step_7.84ea5c11.mp3"},83:function(e,a,t){e.exports=t.p+"static/media/step_8.4898a6d4.mp3"},84:function(e,a,t){e.exports=t.p+"static/media/step_9.83e9ca3e.mp3"},85:function(e,a,t){e.exports=t.p+"static/media/step_10.b4e6486e.mp3"},86:function(e,a,t){e.exports=t.p+"static/media/step_11.9f00d56d.mp3"},87:function(e,a,t){e.exports=t.p+"static/media/step_12.b3d32d1f.mp3"},88:function(e,a,t){e.exports=t.p+"static/media/step_13.488a98a4.mp3"},89:function(e,a,t){e.exports=t.p+"static/media/step_14.02591e0a.mp3"},90:function(e,a,t){e.exports=t.p+"static/media/step_15.5cf29b44.mp3"},91:function(e,a,t){e.exports=t.p+"static/media/step_16.99894c39.mp3"},92:function(e,a,t){e.exports=t.p+"static/media/step_17.e7d96e3e.mp3"},93:function(e,a,t){e.exports=t.p+"static/media/step_18.a7d9ef5f.mp3"},96:function(e){e.exports=JSON.parse('{"title":"Wolf Judge","gaming":"Judge hosting...","restart":"Restart","resetting":"Re Setting","player_number":"Player Number","wolf_number":"Wolf Number","wolf":"Wolf","predictor":"Predictor","witch":"Witch","hunter":"Hunter","villager":"Villager","yes":"Yes","no":"No","finished":"Finished","start":"Start Game","sit_number":"Player No. {{index}}","check_role":"Click and check the role.","is_checked":"The player is checked.","confirm":"Confirm","your_role":"Your role is...","dead_person":"Player No. {{index}} is dead.","is_use_save":"Could\'t use two skill in the term.","wolf_kill":"Kill someone","witch_save":"Use Antidote\uff1f","witch_poison":"Use Poison?","predictor_select":"Check","role_result":"The player is","is_wolf":"Bad guy","not_wolf":"Good guy","yesterday_dead":"Last night is","christmas_eve":"Safety night","dead_player":"Player NO.{{ returnMessage }} was dead.","dead_message":"Game Message","n_day":"Night {{day}}: ","n_night":"Day {{day}}: ","start_vote":"Start Voting","give_up":"Give up","give_up_vote":"Give up","save_used":"You used it.","poison_used":"You used it.","game_over":"Game Over","good_win":"Good guy win","bad_win":"Bad guy win","huner_shoot":"Shoot","could_shoot":"Can you shoot?","can_shoot":"You can","cant_shoot":"You can\'t","hunter_shoot_player":"Hunter shooted: {{index}}","last_words":"Publish last words","to_night":"Close your eyes","is_kill_kind":"Kill kind","bad_win_kind":"Bad guy win"}')},97:function(e){e.exports=JSON.parse('{"title":"\u72fc\u4eba\u6bba\u6cd5\u5b98","gaming":"\u6cd5\u5b98\u4e3b\u6301\u4e2d...","restart":"\u91cd\u65b0\u958b\u59cb","resetting":"\u91cd\u65b0\u8a2d\u5b9a","player_number":"\u904a\u6232\u4eba\u6578","wolf_number":"\u72fc\u4eba\u6578\u91cf","wolf":"\u72fc\u4eba","predictor":"\u9810\u8a00\u5bb6","witch":"\u5973\u5deb","hunter":"\u7375\u4eba","villager":"\u6751\u6c11","yes":"\u662f","no":"\u5426","finished":"\u5b8c\u6210","start":"\u958b\u59cb\u904a\u6232","sit_number":"{{index}} \u865f\u73a9\u5bb6","check_role":"\u8acb\u9ede\u9078, \u4e26\u78ba\u8a8d\u8eab\u4efd.","is_checked":"\u8a72\u73a9\u5bb6\u5df2\u78ba\u8a8d\u8eab\u4efd.","confirm":"\u78ba\u8a8d","your_role":"\u4f60\u7684\u89d2\u8272\u662f...","dead_person":"{{index}} \u865f\u73a9\u5bb6\u88ab\u6bba\u6b7b.","is_use_save":"\u6b64\u56de\u5408\u5df2\u4f7f\u7528\u89e3\u85e5, \u4e0d\u80fd\u4f7f\u7528\u6bd2\u85e5","wolf_kill":"\u72fc\u4eba\u8acb\u6bba\u4eba","witch_save":"\u4f60\u8981\u4f7f\u7528\u89e3\u85e5\u55ce\uff1f","witch_poison":"\u4f60\u8981\u4f7f\u7528\u6bd2\u85e5\u55ce\uff1f","predictor_select":"\u4f60\u8981\u67e5\u9a57\u7684\u5c0d\u8c61\u662f\uff1f","role_result":"\u9019\u4f4d\u73a9\u5bb6\u7684\u8eab\u4efd\u662f","is_wolf":"\u72fc\u4eba","not_wolf":"\u597d\u4eba","yesterday_dead":"\u6628\u591c\u7684\u60c5\u6cc1\u662f","christmas_eve":"\u5e73\u5b89\u591c","dead_player":"{{ returnMessage }} \u865f\u73a9\u5bb6\u6b7b\u4ea1","dead_message":"\u904a\u6232\u8a0a\u606f","n_day":"\u7b2c {{day}} \u5929\u767d\u5929: ","n_night":"\u7b2c {{day}} \u5929\u591c\u665a: ","start_vote":"\u958b\u59cb\u6295\u7968","give_up":"\u653e\u68c4","give_up_vote":"\u68c4\u7968","save_used":"\u4f60\u5df2\u4f7f\u7528\u89e3\u85e5","poison_used":"\u4f60\u5df2\u4f7f\u7528\u6bd2\u85e5","game_over":"\u904a\u6232\u7d50\u675f","good_win":"\u6b63\u7fa9\u806f\u76df\u7372\u52dd","bad_win":"\u90aa\u60e1\u9663\u71df\u7372\u52dd","huner_shoot":"\u7375\u4eba\u8acb\u767c\u52d5\u6280\u80fd","could_shoot":"\u7375\u4eba\u662f\u5426\u53ef\u4ee5\u958b\u69cd","can_shoot":"\u53ef\u4ee5","cant_shoot":"\u4e0d\u53ef\u4ee5","hunter_shoot_player":"\u7375\u4eba\u5c04\u6bba: {{index}}","last_words":"\u8acb\u767c\u8868\u907a\u8a00","to_night":"\u5929\u9ed1\u8acb\u9589\u773c","is_kill_kind":"\u5c60\u908a\u5c40","bad_win_kind":"\u90aa\u60e1\u9663\u71df\u7372\u52dd, \u5c60\u908a\u6210\u529f."}')}},[[112,1,2]]]);
//# sourceMappingURL=main.c4da392b.chunk.js.map