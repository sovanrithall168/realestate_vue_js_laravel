(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{423:function(e,t,i){"use strict";i.r(t);var n={data:function(){return{snackbar:!1,isError:!1,message:"",clientselections:[],editedClient:{id:null,name:"",email:"",phone:"",user_id:null},viewClient:{lands:[],user:null},filterByUser:0,editedIndex:0,clientId:null,dialogClient:!1,dialogCategory:!1,itemsPerPage:10,footerprops:{"items-per-page-options":[5,10,15,100]},search:"",selected:[],showSelect:!0,totalClients:0,clients:[],loading:!0,options:{},headers:[{text:this.$t("form.name"),align:"left",sortable:!0,value:"name"},{text:this.$t("form.email"),value:"email",sortable:!1},{text:this.$t("form.phone"),value:"phone",sortable:!1},{text:this.$t("form.actions"),value:"action",sortable:!1}]}},watch:{options:{handler:function(){var e=this;this.fetchClientFromServer().then((function(t){e.clients=t.items,e.totalClients=t.total}))},deep:!0}},methods:{fetchClientFromServer:function(){var e=this;this.loading=!0;var t="/api/clients/";return"number"==typeof this.options.itemsPerPage&&(t+="?paginate=".concat(this.options.itemsPerPage),this.options.page&&(console.log("page ".concat(this.options.page)),t+="&&page=".concat(this.options.page))),void 0!==this.options.sortBy[0]&&(t+="&&sortBy=".concat(this.options.sortBy[0])),this.options.sortDesc.length>0&&(console.log(this.options.sortDesc),t+="&&sortDesc=".concat(this.options.sortDesc[0])),console.log(this.filterByUser),this.filterByUser>0&&(t+="&&filerByField=user_id&&filerByValue=".concat(this.filterByUser)),void 0!==this.search[0]&&(t="/api/clients/?search=".concat(this.search)),console.log("loaded"),new Promise((function(i,n){axios.get(t).then((function(t){var n=e.options,s=(n.sortBy,n.sortDesc,n.page,n.itemsPerPage,[]);void 0!==t.data.data&&(s=t.data.data);var a=0;void 0!==t.data.meta?(a=t.data.meta.total,e.footerprops["items-per-page-options"]=[5,10,15,100,a]):(a=t.data.data.length,e.footerprops["items-per-page-options"]=[a]),e.loading=!1,i({items:s,total:a})})).catch((function(e){console.log(e),n(e)}))}))},initClient:function(){this.editedClient={id:null,name:"",email:"",phone:"",user_id:null},this.viewClient={lands:[],user:null},this.filterByUser=0,this.clientId=null,this.dialogClient=!0,this.fetchClientSelections()},onSaveClient:function(){var e=this,t=this.editedClient,i={name:t.name,email:t.email,phone:t.phone,user_id:t.user_id};null==this.clientId?axios.post("/api/clients",i).then((function(t){e.clients.push(t.data.data),e.snackbar=!0,e.isError=!1,e.message=e.$t("clients.created")})).catch((function(t){e.snackbar=!0,e.isError=!0,e.message=t.response.data.message})):axios.put("/api/clients/".concat(this.clientId),i).then((function(t){Object.assign(e.clients[e.editedIndex],t.data.data),e.snackbar=!0,e.isError=!1,e.message=e.$t("clients.updated")})).catch((function(t){console.log(t.response),e.snackbar=!0,e.isError=!0,e.message=t.response.data.message})),this.dialogClient=!1},deleteItem:function(e){var t=this,i=this.clients.indexOf(e);confirm("Are you sure you want to delete this client?")&&axios.delete("/api/clients/".concat(e.id)).then((function(e){t.clients.splice(i,1),t.snackbar=!0,t.isError=!1,t.message=t.$t("clients.deleted")})).catch((function(e){t.snackbar=!0,t.isError=!0,t.message=e.response.data.message})),console.log(e)},onSearchClient:function(){var e=this;this.fetchClientFromServer().then((function(t){e.clients=t.items,e.totalClients=t.total}))},onCancelSearch:function(){var e=this;this.search="",this.fetchClientFromServer().then((function(t){e.clients=t.items,e.totalClients=t.total}))},cancel:function(){this.dialogClient=!1,this.initClient(),console.log("canceled")},close:function(){this.dialogClient=!1,console.log("closed")},editItem:function(e){this.editedIndex=this.clients.indexOf(e),this.clientId=e.id,this.editedClient=Object.assign({},e),this.dialogClient=!0,console.log(e),this.fetchClientSelections()},viewItem:function(e){var t=this;axios.get("/api/clients/".concat(e.id)).then((function(e){console.log(e),t.viewClient=e.data.data})).catch((function(e){console.log(e)}))},fetchClientSelections:function(){var e=this;axios.get("/api/users/selections").then((function(t){console.log(t),e.clientselections=t.data})).catch((function(e){console.log(e)}))},onFilterByUser:function(e){var t=this;this.filterByUser=e,console.log(e),this.fetchClientFromServer().then((function(e){t.clients=e.items,t.totalClients=e.total}))}}},s=i(6),a=i(13),o=i.n(a),l=i(430),c=i(63),r=i(96),d=i(4),v=i(103),m=i(431),u=i(432),p=i(418),h=i(412),f=i(102),C=i(90),_=i(99),g=i(64),b=i(5),k=i(58),x=i(104),y=i(433),w=i(82),V=i(50),S=i(434),$=i(435),I=i(47),B=i(25),E=i(19),P=Object(s.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{staticClass:"px-3"},[i("v-row",[i("v-col",{attrs:{cols:"12",lg:"9"}},[i("v-card",{staticClass:"border-top border-primary"},[i("v-data-table",{attrs:{headers:e.headers,items:e.clients,options:e.options,"server-items-length":e.totalClients,loading:e.loading,"items-per-page":e.itemsPerPage,"footer-props":e.footerprops,"show-select":e.showSelect,"loading-text":"Loading... Please wait"},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{color:"white",flat:""}},[i("v-toolbar-title",[i("v-icon",{attrs:{size:45}},[e._v("\n                                    mdi-account-multiple\n                                ")]),e._v("\n                                "+e._s(e.$t("client"))+"\n                            ")],1),e._v(" "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),i("v-spacer"),e._v(" "),i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",rounded:"",dark:""},on:{click:e.initClient}},[i("v-icon",[e._v("mdi-plus")]),e._v("\n                                "+e._s(e.$t("New Client")))],1),e._v(" "),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogClient,callback:function(t){e.dialogClient=t},expression:"dialogClient"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(null!=e.editedClient.id?e.$t("Edit Client"):e.$t("New Client")))])]),e._v(" "),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{attrs:{label:e.$t("form.name")},model:{value:e.editedClient.name,callback:function(t){e.$set(e.editedClient,"name",t)},expression:"\n                                                            editedClient.name\n                                                        "}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{attrs:{type:"email",label:e.$t("form.email")},model:{value:e.editedClient.email,callback:function(t){e.$set(e.editedClient,"email",t)},expression:"\n                                                            editedClient.email\n                                                        "}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{attrs:{type:"number",label:e.$t("form.phone")},model:{value:e.editedClient.phone,callback:function(t){e.$set(e.editedClient,"phone",t)},expression:"\n                                                            editedClient.phone\n                                                        "}})],1),e._v(" "),i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-select",{attrs:{chips:"","menu-props":{maxHeight:"400"},dense:"",items:e.clientselections,label:e.$t("Reference by"),"item-text":"name","item-value":"id"},model:{value:e.editedClient.user_id,callback:function(t){e.$set(e.editedClient,"user_id",t)},expression:"\n                                                            editedClient.user_id\n                                                        "}})],1)],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(e._s(e.$t("form.cancel")))]),e._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.onSaveClient}},[e._v(e._s(e.$t("form.save")))])],1)],1)],1),e._v(" "),i("v-menu",{attrs:{"offset-y":"",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{icon:""}},n),[i("v-icon",[e._v("\n                                            mdi-menu-down\n                                        ")])],1)]}}])},[e._v(" "),i("v-list",[i("v-list-item",{attrs:{dense:""}},[i("v-list-item-icon",[i("v-icon",[e._v("\n                                                mdi-file-excel-outline\n                                            ")])],1),e._v(" "),i("v-list-item-content",{attrs:{left:""}},[i("v-list-item-title",[e._v("\n                                                Exports Excel\n                                            ")])],1)],1)],1)],1)],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{label:"Search","single-line":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearchClient(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[""!=e.search?i("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",icon:""},on:{click:e.onCancelSearch}},[i("v-icon",[e._v("mdi-close")])],1):e._e(),e._v(" "),i("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",icon:""},on:{click:e.onSearchClient}},[i("v-icon",[e._v(" mdi-crosshairs ")])],1)]},proxy:!0}]),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.selected",fn:function(t){var n=t.item;return[i("v-simple-checkbox",{attrs:{color:"green"},model:{value:n.selected,callback:function(t){e.$set(n,"selected",t)},expression:"item.selected"}})]}},{key:"item.action",fn:function(t){var n=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewItem(n)}}},[e._v("\n                            mdi-eye\n                        ")]),e._v(" "),i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("\n                            mdi-pencil\n                        ")]),e._v(" "),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("\n                            mdi-trash-can-outline\n                        ")])]}},{key:"item.name",fn:function(t){var n=t.item;return[i("v-icon",{staticClass:"mr-5",attrs:{color:"primary"}},[e._v("\n                            mdi-account-circle-outline\n                        ")]),e._v(" "),i("span",{staticClass:"caption"},[e._v(e._s(n.name))])]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1),e._v(" "),i("v-col",{attrs:{cols:"12",lg:"3"}},[i("v-card",{staticClass:"border-top border-blue"},[i("v-card-title",{attrs:{"primary-title":""}},[e._v("\n                    "+e._s(e.$t("Referenced by").toUpperCase())+"\n                ")]),e._v(" "),i("v-card-text",[null!=e.viewClient.user?i("v-chip",{on:{click:function(t){return e.onFilterByUser(e.viewClient.user.id)}}},[e._v("\n                        "+e._s(e.viewClient.user.name)+"\n                    ")]):e._e()],1)],1),e._v(" "),i("v-card",{staticClass:"border-top border-blue mt-3"},[i("v-card-title",{attrs:{"primary-title":""}},[e._v("\n                    "+e._s(e.$t("Lands").toUpperCase())+"\n                ")]),e._v(" "),i("v-card-text",[e.viewClient.lands.length>0?i("v-list",e._l(e.viewClient.lands,(function(t,n){return i("v-list-item",{key:n},[i("v-list-item-content",[i("v-list-item-title",[i("v-icon",{attrs:{size:15}},[e._v(" mdi-map-marker ")]),e._v(" "+e._s(t.name)+"\n                                ")],1),e._v(" "),i("v-list-item-subtitle",[i("v-icon",{attrs:{size:15}},[e._v(" mdi-currency-usd ")]),e._v(" "+e._s(t.price)+"\n                                ")],1)],1)],1)})),1):e._e()],1)],1)],1)],1),e._v(" "),i("v-snackbar",{attrs:{color:e.isError?"error":"success"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n        "+e._s(e.message)+"\n        "),i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:""},on:{click:function(t){e.snackbar=!e.snackbar}}},[e._v("close")])],1)],1)}),[],!1,null,null,null);t.default=P.exports;o()(P,{VApp:l.a,VBtn:c.a,VCard:r.a,VCardActions:d.a,VCardText:d.b,VCardTitle:d.c,VChip:v.a,VCol:m.a,VContainer:u.a,VDataTable:p.a,VDialog:h.a,VDivider:f.a,VIcon:C.a,VList:_.a,VListItem:g.a,VListItemContent:b.a,VListItemIcon:k.a,VListItemSubtitle:b.b,VListItemTitle:b.c,VMenu:x.a,VRow:y.a,VSelect:w.a,VSimpleCheckbox:V.a,VSnackbar:S.a,VSpacer:$.a,VTextField:I.a,VToolbar:B.a,VToolbarTitle:E.a})}}]);