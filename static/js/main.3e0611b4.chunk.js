(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,n){e.exports={logoBanner:"Header_logoBanner__3oYGm",cancel:"Header_cancel__3Uho3"}},161:function(e,t,n){e.exports={footerButton:"Footer_footerButton__2Mo8_"}},258:function(e,t,n){e.exports=n.p+"static/media/logo.c8d5ff02.svg"},260:function(e,t,n){e.exports={datasourceCheckbox:"Datasource_datasourceCheckbox__3nbEj"}},265:function(e,t,n){e.exports=n(639)},471:function(e,t,n){},638:function(e,t,n){},639:function(e,t,n){"use strict";n.r(t);n(266),n(275);var a=n(0),o=n.n(a),s=n(257),l=n.n(s),r=(n(471),n(30)),c=n(53),i=n(264),u=n(28),d=n(160),g=n.n(d),f=n(258),m=n.n(f);var p=function(e){var t=e.cancelHandler;return o.a.createElement("div",{id:"topHeader"},o.a.createElement("div",{className:g.a.logoBanner},o.a.createElement("img",{style:{height:20},src:m.a,alt:"The Information Lab"})),o.a.createElement("p",{className:g.a.cancel,onClick:t},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))};var b=function(e){return console.log("[ToggleButton.js renders]",e),o.a.createElement("div",null,o.a.createElement(u.Button,{kind:e.onItem?"primary":"outline",onClick:function(){return e.updateHandler(!0)}},"On"),o.a.createElement(u.Button,{kind:e.onItem?"outline":"destructive",onClick:function(){return e.updateHandler(!1)}},"Off"))},h=[{value:"Seconds"},{value:"Minutes"}],v=function(e,t){return o.a.createElement("option",{disabled:e.disabled||e.separator,key:t,value:e.value},e.value)};var E=function(e){var t={value:e.intervalValue};return o.a.createElement("div",null,o.a.createElement(u.Stepper,{min:0,max:1e3,step:1,pageSteps:1,value:e.stepperValue,onValueChange:function(t){e.stepperHandler(t),console.log(t)}}),o.a.createElement(u.DropdownSelect,Object.assign({},t,{kind:"outline",onChange:function(n){console.log(t),e.intervalHandler(n.target.value)}}),h.map(v)))},j=n(161),S=n.n(j);var O=function(e){var t=e.applySettingsHandler,n=e.resetSettingsHandler,a=e.disableButton;return o.a.createElement("div",null,o.a.createElement(u.Button,{disabled:a,className:S.a.footerButton,onClick:n},"Reset"),o.a.createElement(u.Button,{className:S.a.footerButton,kind:"primary",onClick:t},"Apply"))},x=n(259);var C=function(e){var t=e.updateHandler,n=e.pickerVisible,a=e.handleChangeComplete,s=e.background,l={height:"35px",width:"35px",backgroundColor:s,borderRadius:"50%",display:"inline-block",marginTop:"10px",border:"#ffffff"===s?"1px solid black":"0px solid black"};return o.a.createElement("div",null,o.a.createElement("span",{style:l,onClick:t}),n&&o.a.createElement("div",{style:{position:"absolute"}},o.a.createElement(x.CompactPicker,{color:s,onChangeComplete:a})))},k=n(260),H=n.n(k);var y=o.a.memo(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.Checkbox,{className:H.a.datasourceCheckbox,checked:e.datasource.checked,onChange:e.toggleHandler},e.datasource.data.name),o.a.createElement("br",null))}),N=o.a.memo(function(e){var t=e.datasources,n=e.toggleHandler;return console.log("[Datasources.js] renders"),o.a.createElement("div",null,t.length<1?o.a.createElement("p",null,"No datasources.."):o.a.createElement(function(){return t.map(function(e,t){return o.a.createElement(y,{key:t,datasource:e,toggleHandler:function(){n(t)}})})},null))}),w=function(){return new Promise(function(e,t){console.log("[func.js] Initialise Tableau");var n=[],a={},o=tableau.extensions.dashboardContent.dashboard.worksheets.map(function(e){return n.push(e.getDataSourcesAsync()),n});console.log("[func.js] Found ".concat(o.length," sheets")),Promise.all(n).then(function(t){t.forEach(function(e){e.forEach(function(e){a[e.id]||(a[e.id]=e)})}),console.log("[func.js] Meta initialised"),e(a)})})},J=function(e,t){return"Minutes"===e?60*t:t};var B=function(e){var t=Object(a.useState)(),n=Object(r.a)(t,2),s=n[0],l=n[1],c=Object(a.useState)(30),d=Object(r.a)(c,2),g=d[0],f=d[1],m=Object(a.useState)(),h=Object(r.a)(m,2),v=h[0],j=h[1],S=Object(a.useState)(!1),x=Object(r.a)(S,2),k=x[0],H=x[1],y=Object(a.useState)(!1),J=Object(r.a)(y,2),B=J[0],T=J[1],D=Object(a.useState)(!1),_=Object(r.a)(D,2),A=_[0],V=_[1],M=Object(a.useState)("#000"),R=Object(r.a)(M,2),I=R[0],L=R[1];function z(){console.log("[Configure.js] Applying Settings");var t=s.map(function(e){return{data:{name:e.data.name},checked:e.checked}}),n=0===t.filter(function(e){return e.checked}).length?JSON.stringify(!1):JSON.stringify(e.on);tableau.extensions.settings.set("dataSourceList",JSON.stringify(t)),tableau.extensions.settings.set("timeRefresh",JSON.stringify(g)),tableau.extensions.settings.set("intervalValue",JSON.stringify(v)),tableau.extensions.settings.set("updateToggle",n),tableau.extensions.settings.set("timerColour",JSON.stringify(I)),tableau.extensions.settings.set("updateColourPicker",JSON.stringify(A)),tableau.extensions.settings.saveAsync().then(function(){console.log("[Configure.js] Saved settings!")})}return Object(a.useEffect)(function(){return console.log("[Configure.js] Initialise Config Screen",e),tableau.extensions.initializeDialogAsync().then(function(t){var n=tableau.extensions.settings.get("updateToggle"),a=tableau.extensions.settings.get("dataSourceList"),o=tableau.extensions.settings.get("timeRefresh"),s=tableau.extensions.settings.get("intervalValue"),r=tableau.extensions.settings.get("timerColour"),c=tableau.extensions.settings.get("updateColourPicker");n&&null!==n?(console.log("[Configure.js] Got toggle data from wb",n),e.updateHandler(JSON.parse(n))):e.updateHandler(!1),o&&null!==o?(console.log("[Configure.js] Got stepper data from wb: ",o),f(JSON.parse(o))):f(30),s&&null!==s?(console.log("[Configure.js] Got timeInterval data from wb: ",s),j(JSON.parse(s))):j("Seconds"),r&&null!==r?(console.log("[Configure.js] Got background colour from wb: ",r),L(JSON.parse(r))):L("#000"),c&&null!==c?(console.log("[Configure.js] Got colour picker info from wb: ",c),V(JSON.parse(c))):V(!1),w().then(function(e){var t=Object.keys(e).map(function(t){return{data:e[t],checked:!1}});l(a&&null!=a?JSON.parse(a):t)})}),function(){console.log("[Configure.js] Unmounting the component!")}},[]),o.a.createElement("div",null,o.a.createElement(p,{cancelHandler:function(){console.log("[Configure.js] closing the config window..."),z(),tableau.extensions.ui.closeDialog()}}),s?o.a.createElement("div",{className:"main"},o.a.createElement("h4",null,"Select ",1===s.length?o.a.createElement("span",null,"Datasource"):o.a.createElement("span",null,"Datasources")," to refresh"),o.a.createElement(N,{datasources:s,toggleHandler:function(e){var t=!s[e].checked,n={data:s[e].data,checked:t},a=Object(i.a)(s);a[e]=n,l(a)}}),o.a.createElement("h4",null,"Select Refresh Time"),o.a.createElement(E,{stepperValue:g,stepperHandler:function(e){f(e)},intervalValue:v,intervalHandler:function(e){j(e)}}),o.a.createElement("h4",null,"Refresh Toggle"),o.a.createElement(b,{onItem:e.on,updateHandler:function(t){e.updateHandler(t),tableau.extensions.settings.set("updateToggle",t),tableau.extensions.settings.saveAsync().then(function(){console.log("[Configure.js] Saved settings!")})}}),o.a.createElement("h4",null,"Display Countdown"),o.a.createElement(b,{onItem:A,updateHandler:function(){V(function(e){return!e}),console.log("[Config.js] changing colour picker state")}}),A&&o.a.createElement(C,{updateHandler:function(){console.log("[Configure.js] changing the picker state",B),T(function(e){return!e})},pickerVisible:B,background:I,handleChangeComplete:function(e){L(e.hex),console.log("[Configure.js] colour set to",I)}}),o.a.createElement("h4",null,"Summary:"),o.a.createElement(function(){var t=s.filter(function(e){return e.checked});console.log(t.length);var n=t.length>0?t.length:0;return(0!==n||e.on)&&e.on&&n>0&&e.on?o.a.createElement("p",null,"You are refreshing"," ",1===n?o.a.createElement("span",null,"1 datasource"):o.a.createElement("span",null,n," datasources"),", every"," ",g," ",v):o.a.createElement("p",null,"You are not refreshing any datasource")},null)):o.a.createElement("div",{className:"spinner","aria-busy":!0},o.a.createElement(u.Spinner,null)),o.a.createElement("div",{className:"footer"},o.a.createElement(O,{applySettingsHandler:z,resetSettingsHandler:function(){H(!0),console.log("[Configure.js] reset Settings called"),tableau.extensions.settings.erase("dataSourceList"),tableau.extensions.settings.erase("updateToggle"),e.updateHandler(!1),f(30),j("seconds"),L("#000"),V(!1),w().then(function(e){var t=Object.keys(e).map(function(t){return{data:e[t],checked:!1}});l(t)}),tableau.extensions.settings.saveAsync().then(function(){console.log("[Configure.js] Settings! erased"),H(!1)})},disableButton:k})))},T=n(114),D=n(261),_=n.n(D);var A=function(e){return o.a.useEffect(function(){console.log("[Counter.js] received props",e)},[e]),o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{key:e.state.completions,paused:e.paused,showMilliseconds:e.state.showMilliseconds,pausedText:e.state.pausedText,seconds:e.state.seconds,color:e.state.color,alpha:e.state.alpha,size:e.state.size,bool:e.state.bool,onComplete:e.stateHandler,onClick:e.clickHandler}),o.a.createElement("p",null,e.state.bool))};var V=function(e){var t=Object(a.useState)({completions:1,seconds:10,showMilliseconds:!1,pausedText:"\u2590\u2590 ",color:"#000",alpha:.9,size:70}),n=Object(r.a)(t,2),s=n[0],l=n[1],c=Object(a.useState)(!0),i=Object(r.a)(c,2),u=i[0],d=i[1];function g(){var t="".concat(window.location.origin,"/configure");tableau.extensions.ui.displayDialogAsync(t,"",{height:540,width:400}).then(function(e){console.log("Config window closed"),m()}).catch(function(t){switch(t.errorCode){case tableau.ErrorCodes.DialogClosedByUser:console.log("[Home.js] Dialog was closed by user"),m(),console.log("[Home.js] Config window closed",e);break;default:console.error("[Home.js]",t.message)}})}function f(){var e=tableau.extensions.settings.get("dataSourceList");if(e)return JSON.parse(e).filter(function(e){return e.checked})}function m(){console.log("[Home.js] refreshing settings",e);var t=tableau.extensions.settings.get("timeRefresh"),n=tableau.extensions.settings.get("updateToggle"),a=tableau.extensions.settings.get("intervalValue"),o=tableau.extensions.settings.get("timerColour");n&&(e.updateHandler(JSON.parse(n)),d(!JSON.parse(n))),n&&a&&t&&l(function(e){return Object(T.a)({},e,{seconds:J(JSON.parse(a),JSON.parse(t)),color:JSON.parse(o)})})}return Object(a.useEffect)(function(){console.log("[Home.js] Props Changed",e)},[e]),Object(a.useEffect)(function(){tableau.extensions.initializeAsync({configure:g}).then(function(){console.log("[Home.js] Opening..."),console.log("[Home.js] checked data source list:",f());var t=tableau.extensions.settings.get("updateToggle"),n=tableau.extensions.settings.get("dataSourceList"),a=tableau.extensions.settings.get("timeRefresh"),o=tableau.extensions.settings.get("intervalValue"),s=tableau.extensions.settings.get("timerColour");if(t&&null!==t)if(e.updateHandler(JSON.parse(t)),n&&null!==n){console.log("[Home.js] ".concat(JSON.parse(n).length," datasources found")),console.log("[Home.js] Every ".concat(JSON.parse(a)," ").concat(JSON.parse(o)," going to refresh")),console.log("[Home.js] Received Colour ".concat(JSON.parse(s)));var r=JSON.parse(o)?JSON.parse(o):"Seconds";d(!JSON.parse(t)),l(function(e){return Object(T.a)({},e,{seconds:J(r,JSON.parse(a)),color:JSON.parse(s)})})}else console.log("[Home.js] no data sources saved!"),e.updateHandler(!1),d(!0)})},[e]),o.a.createElement(o.a.Fragment,null,o.a.createElement(A,{state:s,stateHandler:function(){d(function(e){return!e});var e=tableau.extensions.dashboardContent.dashboard,t=[],n={};e.worksheets.map(function(e){t.push(e.getDataSourcesAsync())}),Promise.all(t).then(function(e){e.forEach(function(e){e.forEach(function(e){n[e.id]||(n[e.id]=e)})}),f().map(function(e){var t=function(t){var a=e.data.name,o=n[t];o.name===a&&o.refreshAsync().then(function(){console.log("[Home.js] Refreshed ",o)})};for(var a in n)t(a)}),setTimeout(function(){d(function(e){return!e})},5e3)}),console.log("[Home.js] countdown finished!"),l(function(e){return Object(T.a)({},e,{completions:e.completions+1})})},paused:u,clickHandler:function(){var e=tableau.extensions.settings.get("updateToggle"),t=tableau.extensions.settings.get("dataSourceList");e&&t&&d(function(e){return!e})}}))};var M=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],s=t[1];function l(e){s(e)}return Object(a.useEffect)(function(){console.log("[Main.js] mounts"),s(!0)},[]),o.a.createElement("section",null,o.a.createElement(c.a,{path:"/",exact:!0,render:function(){return o.a.createElement(V,{on:n,updateHandler:l})}}),o.a.createElement(c.a,{path:"/configure/",exact:!0,render:function(){return o.a.createElement(B,{on:n,updateHandler:l})}}))},R=n(159);n(638);var I=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(R.a,null,o.a.createElement(M,null)))};l.a.render(o.a.createElement(I,null),document.getElementById("root"))}},[[265,1,2]]]);
//# sourceMappingURL=main.3e0611b4.chunk.js.map