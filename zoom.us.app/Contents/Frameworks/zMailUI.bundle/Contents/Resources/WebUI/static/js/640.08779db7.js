"use strict";(self["webpackChunk_zoom_client_email_desktop"]=self["webpackChunk_zoom_client_email_desktop"]||[]).push([[640],{53640:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("zm-dialog",{ref:"unsubscribeDialog",attrs:{title:e.title||e.$t("common.dialogTitle"),modal:"","modal-append-to-body":"","append-to-body":"","lock-scroll":"",center:"","close-on-press-escape":e.closeOnPressEscape,"custom-class":"mc-unsubscribe-dialog-container",visible:e.visible,width:e.width,"aria-labelledby":e.labelledById,"aria-describedby":e.describedById},on:{close:e.onCancel}},[e.labelledById?t("p",{staticClass:"zm-sr-only",attrs:{id:e.labelledById}},[e._v(" "+e._s(e.title)+" ")]):e._e(),e.describedById?t("p",{staticClass:"zm-sr-only",attrs:{id:e.describedById}},[e._v(" "+e._s(e.$t("subscription.confirm",[e.unsubscribeInfo.email]))+" ")]):e._e(),e.unsubscribeInfo?e._t("default",(function(){return[t("div",{staticClass:"content"},[t("i18n",{attrs:{path:"subscription.confirm"},scopedSlots:e._u([{key:"0",fn:function(){return[t("span",{staticClass:"has-bold"},[e._v(e._s(e.unsubscribeInfo.email))])]},proxy:!0}],null,!1,3343194768)}),e.unsubscribeInfo.externalLink?t("i18n",{attrs:{path:"subscription.externalConfirm"}}):e._e(),e.unsubscribeInfo.externalLink?t("div",{staticClass:"external-link"},[t("br"),t("div",{staticClass:"external-link-url"},[e._v(" "+e._s(e.unsubscribeInfo.externalLink)+" ")])]):e._e()],1)]})):e._e(),e.actions.length>0?e._t("footer",(function(){return[t("div",{staticClass:"actions"},[t("div",{staticClass:"btn-group"},e._l(e.actions,(function(n){var s=n.id,i=n.handler,l=n.text,a=n.className,r=n.type,o=n.disabled,c=n.link,u=n.zmTa;return t("zm-button",{key:s,class:a,attrs:{type:r,disabled:o,href:c,"zm-ta":u,tabindex:"0"},on:{click:function(e){return e.stopPropagation(),i.apply(null,arguments)}}},[e._v(" "+e._s(l)+" ")])})),1)])]})):e._e()],2)},i=[],l={name:"UnsubscribeDialog",inheritAttrs:!0,props:{title:{type:String,default:""},visible:{type:Boolean,default:function(){return!1}},actions:{type:Array,default:function(){return[]}},unsubscribeInfo:{type:Object,default:function(){}},hasExternal:{type:Object,default:function(){}},width:{type:String,default:""},closeOnPressEscape:{type:Boolean,default:!1},labelledById:{type:String,default:""},describedById:{type:String,default:""}},methods:{onCancel:function(){this.$emit("close")}}},a=l,r=n(93483),o=(0,r.Z)(a,s,i,!1,null,"3ed9ea0f",null),c=o.exports}}]);