!function(){"use strict";var e=Object.defineProperty,t=(t,i,s)=>(((t,i,s)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s})(t,"symbol"!=typeof i?i+"":i,s),s);const i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,s=/^-?[0-9]\d*$/,l=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,r=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,o=e=>"string"!=typeof e||""===e;var a=(e=>(e.Required="required",e.Email="email",e.MinLength="minLength",e.MaxLength="maxLength",e.Password="password",e.Number="number",e.Integer="integer",e.MaxNumber="maxNumber",e.MinNumber="minNumber",e.StrongPassword="strongPassword",e.CustomRegexp="customRegexp",e.MinFilesCount="minFilesCount",e.MaxFilesCount="maxFilesCount",e.Files="files",e))(a||{}),n=(e=>(e.Required="required",e))(n||{}),d=(e=>(e.Label="label",e.LabelArrow="labelArrow",e))(d||{});const c=[{key:a.Required,dict:{en:"The field is required"}},{key:a.Email,dict:{en:"Email has invalid format"}},{key:a.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:a.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:a.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:a.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:a.Number,dict:{en:"Value should be a number"}},{key:a.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:a.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:a.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:a.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:a.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],u=e=>"object"==typeof e&&null!==e&&"then"in e&&"function"==typeof e.then,h=e=>Array.isArray(e)?e.filter((e=>e.length>0)):"string"==typeof e&&e.trim()?[...e.split(" ").filter((e=>e.length>0))]:[],f=e=>e instanceof Element||e instanceof HTMLDocument,g={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1,submitFormAutomatically:!1};class b{constructor(e,i,s){t(this,"form",null),t(this,"fields",{}),t(this,"groupFields",{}),t(this,"errors",{}),t(this,"isValid",!1),t(this,"isSubmitted",!1),t(this,"globalConfig",g),t(this,"errorLabels",{}),t(this,"successLabels",{}),t(this,"eventListeners",[]),t(this,"dictLocale",c),t(this,"currentLocale","en"),t(this,"customStyleTags",{}),t(this,"onSuccessCallback"),t(this,"onFailCallback"),t(this,"onValidateCallback"),t(this,"tooltips",[]),t(this,"lastScrollPosition"),t(this,"isScrollTick"),t(this,"fieldIds",new Map),t(this,"getKeyByFieldSelector",(e=>this.fieldIds.get(e))),t(this,"getFieldSelectorByKey",(e=>{for(const[t,i]of this.fieldIds)if(e===i)return t})),t(this,"getCompatibleFields",(()=>{const e={};return Object.keys(this.fields).forEach((t=>{let i=t;const s=this.getFieldSelectorByKey(t);"string"==typeof s&&(i=s),e[i]={...this.fields[t]}})),e})),t(this,"setKeyByFieldSelector",(e=>{if(this.fieldIds.has(e))return this.fieldIds.get(e);const t=String(this.fieldIds.size+1);return this.fieldIds.set(e,t),t})),t(this,"refreshAllTooltips",(()=>{this.tooltips.forEach((e=>{e.refresh()}))})),t(this,"handleDocumentScroll",(()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame((()=>{this.refreshAllTooltips(),this.isScrollTick=!1})),this.isScrollTick=!0)})),t(this,"formSubmitHandler",(e=>{e.preventDefault(),this.isSubmitted=!0,this.validateHandler(e)})),t(this,"handleFieldChange",(e=>{let t;for(const i in this.fields)if(this.fields[i].elem===e){t=i;break}t&&(this.fields[t].touched=!0,this.validateField(t,!0))})),t(this,"handleGroupChange",(e=>{let t;for(const i in this.groupFields)if(this.groupFields[i].elems.find((t=>t===e))){t=i;break}t&&(this.groupFields[t].touched=!0,this.validateGroup(t,!0))})),t(this,"handlerChange",(e=>{e.target&&(this.handleFieldChange(e.target),this.handleGroupChange(e.target),this.renderErrors())})),this.initialize(e,i,s)}initialize(e,t,i){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=g,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en","string"==typeof e){const t=document.querySelector(e);if(!t)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(t)}else{if(!(e instanceof HTMLFormElement))throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");this.setForm(e)}if(this.globalConfig={...g,...t},i&&(this.dictLocale=[...i,...c]),this.isTooltip()){const e=document.createElement("style");e.textContent=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",this.customStyleTags[d.Label]=document.head.appendChild(e),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,t,i){var s;const l=null!=i?i:e;let r=null==(s=this.dictLocale.find((e=>e.key===l)))?void 0:s.dict[this.currentLocale];if(r||i&&(r=i),r&&void 0!==t)switch(e){case a.MaxLength:case a.MinLength:case a.MaxNumber:case a.MinNumber:case a.MinFilesCount:case a.MaxFilesCount:r=r.replace(":value",String(t))}return r||i||"Value is incorrect"}getFieldErrorMessage(e,t){const i="function"==typeof e.errorMessage?e.errorMessage(this.getElemValue(t),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,i)}getFieldSuccessMessage(e,t){const i="function"==typeof e?e(this.getElemValue(t),this.fields):e;return this.getLocalisedString(void 0,void 0,i)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,t){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(t,this.fields[e].elem)}setFieldValid(e,t){this.fields[e].isValid=!0,void 0!==t&&(this.fields[e].successMessage=this.getFieldSuccessMessage(t,this.fields[e].elem))}setGroupInvalid(e,t){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(t)}setGroupValid(e,t){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(t)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,t,i){i.rule===n.Required&&(t.every((e=>!e.checked))?this.setGroupInvalid(e,i):this.setGroupValid(e,i))}validateFieldRule(e,t,n,d=!1){const c=n.value,h=this.getElemValue(t);var f;if(n.plugin)n.plugin(h,this.getCompatibleFields())||this.setFieldInvalid(e,n);else switch(n.rule){case a.Required:(e=>{let t=e;return"string"==typeof e&&(t=e.trim()),!t})(h)&&this.setFieldInvalid(e,n);break;case a.Email:if(o(h))break;f=h,i.test(f)||this.setFieldInvalid(e,n);break;case a.MaxLength:if(void 0===c){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof c){console.error(`Value for ${n.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(o(h))break;((e,t)=>e.length>t)(h,c)&&this.setFieldInvalid(e,n);break;case a.MinLength:if(void 0===c){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof c){console.error(`Value for ${n.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(o(h))break;((e,t)=>e.length<t)(h,c)&&this.setFieldInvalid(e,n);break;case a.Password:if(o(h))break;(e=>l.test(e))(h)||this.setFieldInvalid(e,n);break;case a.StrongPassword:if(o(h))break;(e=>r.test(e))(h)||this.setFieldInvalid(e,n);break;case a.Number:if(o(h))break;(e=>"string"==typeof e&&!isNaN(+e)&&!isNaN(parseFloat(e)))(h)||this.setFieldInvalid(e,n);break;case a.Integer:if(o(h))break;(e=>s.test(e))(h)||this.setFieldInvalid(e,n);break;case a.MaxNumber:{if(void 0===c){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof c){console.error(`Value for ${n.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(o(h))break;const t=+h;(Number.isNaN(t)||((e,t)=>e>t)(t,c))&&this.setFieldInvalid(e,n);break}case a.MinNumber:{if(void 0===c){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof c){console.error(`Value for ${n.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(o(h))break;const t=+h;(Number.isNaN(t)||((e,t)=>e<t)(t,c))&&this.setFieldInvalid(e,n);break}case a.CustomRegexp:{if(void 0===c)return console.error(`Value for ${n.rule} rule for [${e}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(e,n);let t;try{t=new RegExp(c)}catch(t){console.error(`Value for ${n.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,n);break}const i=String(h);""===i||t.test(i)||this.setFieldInvalid(e,n);break}case a.MinFilesCount:if(void 0===c){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof c){console.error(`Value for ${n.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(Number.isFinite(null==h?void 0:h.length)&&h.length<c){this.setFieldInvalid(e,n);break}break;case a.MaxFilesCount:if(void 0===c){console.error(`Value for ${n.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,n);break}if("number"!=typeof c){console.error(`Value for ${n.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,n);break}if(Number.isFinite(null==h?void 0:h.length)&&h.length>c){this.setFieldInvalid(e,n);break}break;case a.Files:{if(void 0===c)return console.error(`Value for ${n.rule} rule for [${e}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(e,n);if("object"!=typeof c)return console.error(`Value for ${n.rule} rule for [${e}] field should be an object. This field will be always invalid.`),void this.setFieldInvalid(e,n);const t=c.files;if("object"!=typeof t)return console.error(`Value for ${n.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),void this.setFieldInvalid(e,n);const i=(e,t)=>{const i=Number.isFinite(t.minSize)&&e.size<t.minSize,s=Number.isFinite(t.maxSize)&&e.size>t.maxSize,l=Array.isArray(t.names)&&!t.names.includes(e.name),r=Array.isArray(t.extensions)&&!t.extensions.includes(e.name.split(".")[e.name.split(".").length-1]),o=Array.isArray(t.types)&&!t.types.includes(e.type);return i||s||l||r||o};if("object"==typeof h&&null!==h)for(let s=0,l=h.length;s<l;++s){const l=h.item(s);if(!l){this.setFieldInvalid(e,n);break}if(i(l,t)){this.setFieldInvalid(e,n);break}}break}default:{if("function"!=typeof n.validator)return console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),void this.setFieldInvalid(e,n);const t=n.validator(h,this.getCompatibleFields());if("boolean"!=typeof t&&"function"!=typeof t&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),"function"==typeof t){if(!d){this.fields[e].asyncCheckPending=!1;const i=t();return u(i)?i.then((t=>{t||this.setFieldInvalid(e,n)})).catch((()=>{this.setFieldInvalid(e,n)})):(console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),void this.setFieldInvalid(e,n))}this.fields[e].asyncCheckPending=!0}t||this.setFieldInvalid(e,n)}}}isFormValid(){let e=!0;for(let t=0,i=Object.values(this.fields).length;t<i;++t){const i=Object.values(this.fields)[t];if(void 0===i.isValid){e=void 0;break}if(!1===i.isValid){e=!1;break}}for(let t=0,i=Object.values(this.groupFields).length;t<i;++t){const i=Object.values(this.groupFields)[t];if(void 0===i.isValid){e=void 0;break}if(!1===i.isValid){e=!1;break}}return e}validateField(e,t=!1){var i;const s=this.fields[e];s.isValid=!0;const l=[];return[...s.rules].reverse().forEach((i=>{const r=this.validateFieldRule(e,s.elem,i,t);u(r)&&l.push(r)})),s.isValid&&this.setFieldValid(e,null==(i=s.config)?void 0:i.successMessage),Promise.allSettled(l).finally((()=>{var e;t&&(null==(e=this.onValidateCallback)||e.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))}))}revalidateField(e){if("string"!=typeof e&&!f(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return t&&this.fields[t]?new Promise((e=>{this.validateField(t,!0).finally((()=>{this.clearFieldStyle(t),this.clearFieldLabel(t),this.renderFieldError(t,!0),e(!!this.fields[t].isValid)}))})):(console.error("Field not found. Check the field selector."),Promise.reject())}revalidateGroup(e){if("string"!=typeof e&&!f(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return t&&this.groupFields[t]?new Promise((e=>{this.validateGroup(t).finally((()=>{this.clearFieldLabel(t),this.renderGroupError(t,!0),e(!!this.groupFields[t].isValid)}))})):(console.error("Group not found. Check the group selector."),Promise.reject())}validateGroup(e,t=!1){const i=this.groupFields[e],s=[];return[...i.rules].reverse().forEach((t=>{const l=this.validateGroupRule(e,i.elems,t);u(l)&&s.push(l)})),Promise.allSettled(s).finally((()=>{var e;t&&(null==(e=this.onValidateCallback)||e.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))}))}focusInvalidField(){for(const e in this.fields){const t=this.fields[e];if(!t.isValid){setTimeout((()=>t.elem.focus()),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise((t=>{const i=[];Object.keys(this.fields).forEach((e=>{const t=this.validateField(e);u(t)&&i.push(t)})),Object.keys(this.groupFields).forEach((e=>{const t=this.validateGroup(e);u(t)&&i.push(t)})),Promise.allSettled(i).then((()=>{var s;this.afterSubmitValidation(e),null==(s=this.onValidateCallback)||s.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),t(!!i.length)}))}))}revalidate(){return new Promise((e=>{this.validateHandler(void 0,!0).finally((()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)}))}))}validateHandler(e,t=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(t).finally((()=>{var t,i,s;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?(null==(t=this.onSuccessCallback)||t.call(this,e),this.globalConfig.submitFormAutomatically&&(null==(i=null==e?void 0:e.currentTarget)||i.submit())):null==(s=this.onFailCallback)||s.call(this,this.getCompatibleFields(),this.groupFields)}))}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,t,i){t.addEventListener(e,i),this.eventListeners.push({type:e,elem:t,func:i})}removeListener(e,t,i){t.removeEventListener(e,i),this.eventListeners=this.eventListeners.filter((i=>i.type!==e||i.elem!==t))}addField(e,t,i){if("string"!=typeof e&&!f(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let s;if(s="string"==typeof e?this.form.querySelector(e):e,!s)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(t)||!t.length)throw Error("Rules argument should be an array and should contain at least 1 element.");t.forEach((e=>{if(!("rule"in e||"validator"in e||"plugin"in e))throw Error("Rules argument must contain at least one rule or validator property.");if(!(e.validator||e.plugin||e.rule&&Object.values(a).includes(e.rule)))throw Error(`Rule should be one of these types: ${Object.values(a).join(", ")}. Provided value: ${e.rule}`)}));const l=this.setKeyByFieldSelector(e);return this.fields[l]={elem:s,rules:t,isValid:void 0,touched:!1,config:i},this.setListeners(s),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(l),this}removeField(e){if("string"!=typeof e&&!f(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);if(!t||!this.fields[t])return console.error("Field not found. Check the field selector."),this;const i=this.getListenerType(this.fields[t].elem.type);return this.removeListener(i,this.fields[t].elem,this.handlerChange),this.clearErrors(),delete this.fields[t],this}removeGroup(e){if("string"!=typeof e)throw Error("Group selector is not valid. Please specify a string selector.");const t=this.getKeyByFieldSelector(e);return t&&this.groupFields[t]?(this.groupFields[t].elems.forEach((e=>{const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange)})),this.clearErrors(),delete this.groupFields[t],this):(console.error("Group not found. Check the group selector."),this)}addRequiredGroup(e,t,i,s){if("string"!=typeof e&&!f(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let l;if(l="string"==typeof e?this.form.querySelector(e):e,!l)throw Error("Group selector not found! Please check the group selector.");const r=l.querySelectorAll("input"),o=Array.from(r).filter((e=>{const t=((e,t)=>{const i=[...t].reverse();for(let t=0,s=i.length;t<s;++t){const s=i[t];for(const t in e){const i=e[t];if(i.groupElem===s)return[t,i]}}return null})(this.groupFields,(e=>{let t=e;const i=[];for(;t;)i.unshift(t),t=t.parentNode;return i})(e));return!t||t[1].elems.find((t=>t!==e))})),a=this.setKeyByFieldSelector(e);return this.groupFields[a]={rules:[{rule:n.Required,errorMessage:t,successMessage:s}],groupElem:l,elems:o,touched:!1,isValid:void 0,config:i},r.forEach((e=>{this.setListeners(e)})),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange),this.addListener(t,e,this.handlerChange)}clearFieldLabel(e){var t,i;null==(t=this.errorLabels[e])||t.remove(),null==(i=this.successLabels[e])||i.remove()}clearFieldStyle(e){var t,i,s,l;const r=this.fields[e],o=(null==(t=r.config)?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(o).forEach((e=>{r.elem.style[e]=""}));const a=(null==(i=r.config)?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(a).forEach((e=>{r.elem.style[e]=""})),r.elem.classList.remove(...h((null==(s=r.config)?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...h((null==(l=r.config)?void 0:l.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,t;Object.keys(this.errorLabels).forEach((e=>this.errorLabels[e].remove())),Object.keys(this.successLabels).forEach((e=>this.successLabels[e].remove()));for(const e in this.fields)this.clearFieldStyle(e);for(const i in this.groupFields){const s=this.groupFields[i],l=(null==(e=s.config)?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(l).forEach((e=>{s.elems.forEach((t=>{var i;t.style[e]="",t.classList.remove(...h((null==(i=s.config)?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}))}));const r=(null==(t=s.config)?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(r).forEach((e=>{s.elems.forEach((t=>{var i;t.style[e]="",t.classList.remove(...h((null==(i=s.config)?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass))}))}))}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,i=e.length;t<i;++t)e[t].setAttribute("data-just-validate-fallback-disabled",e[t].disabled?"true":"false"),e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webkitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,i=e.length;t<i;++t)"true"!==e[t].getAttribute("data-just-validate-fallback-disabled")&&e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webkitFilter="",e[t].style.filter=""}renderTooltip(e,t,i){var s;const{top:l,left:r,width:o,height:a}=e.getBoundingClientRect(),n=t.getBoundingClientRect(),d=i||(null==(s=this.globalConfig.tooltip)?void 0:s.position);switch(d){case"left":t.style.top=l+a/2-n.height/2+"px",t.style.left=r-n.width-5+"px";break;case"top":t.style.top=l-n.height-5+"px",t.style.left=r+o/2-n.width/2+"px";break;case"right":t.style.top=l+a/2-n.height/2+"px",t.style.left=`${r+o+5}px`;break;case"bottom":t.style.top=`${l+a+5}px`,t.style.left=r+o/2-n.width/2+"px"}return t.dataset.direction=d,{refresh:()=>{this.renderTooltip(e,t,i)}}}createErrorLabelElem(e,t,i){const s=document.createElement("div");s.innerHTML=t;const l=this.isTooltip()?null==i?void 0:i.errorLabelStyle:(null==i?void 0:i.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(s.style,l),s.classList.add(...h((null==i?void 0:i.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(s.dataset.tooltip="true"),this.globalConfig.testingMode&&(s.dataset.testId=`error-label-${e}`),this.errorLabels[e]=s,s}createSuccessLabelElem(e,t,i){if(void 0===t)return null;const s=document.createElement("div");s.innerHTML=t;const l=(null==i?void 0:i.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(s.style,l),s.classList.add(...h((null==i?void 0:i.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(s.dataset.testId=`success-label-${e}`),this.successLabels[e]=s,s}renderErrorsContainer(e,t){const i=t||this.globalConfig.errorsContainer;if("string"==typeof i){const t=this.form.querySelector(i);if(t)return t.appendChild(e),!0;console.error(`Error container with ${i} selector not found. Errors will be rendered as usual`)}return i instanceof Element?(i.appendChild(e),!0):(void 0!==i&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,t,i,s){!s&&this.renderErrorsContainer(t,i)||e.appendChild(t)}renderFieldLabel(e,t,i,s){var l,r,o,a,n,d,c;if(s||!this.renderErrorsContainer(t,i))if("checkbox"===e.type||"radio"===e.type){const i=document.querySelector(`label[for="${e.getAttribute("id")}"]`);"label"===(null==(r=null==(l=e.parentElement)?void 0:l.tagName)?void 0:r.toLowerCase())?null==(a=null==(o=e.parentElement)?void 0:o.parentElement)||a.appendChild(t):i?null==(n=i.parentElement)||n.appendChild(t):null==(d=e.parentElement)||d.appendChild(t)}else null==(c=e.parentElement)||c.appendChild(t)}showLabels(e,t){Object.keys(e).forEach(((i,s)=>{const l=e[i],r=this.getKeyByFieldSelector(i);if(!r||!this.fields[r])return void console.error("Field not found. Check the field selector.");const o=this.fields[r];o.isValid=!t,this.clearFieldStyle(r),this.clearFieldLabel(r),this.renderFieldError(r,!1,l),0===s&&this.globalConfig.focusInvalidField&&setTimeout((()=>o.elem.focus()),0)}))}showErrors(e){if("object"!=typeof e)throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if("object"!=typeof e)throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,t=!1,i){var s,l,r,o,a,n;const d=this.fields[e];if(!1===d.isValid&&(this.isValid=!1),void 0===d.isValid||!t&&!this.isSubmitted&&!d.touched&&void 0===i)return;if(d.isValid){if(!d.asyncCheckPending){const t=this.createSuccessLabelElem(e,void 0!==i?i:d.successMessage,d.config);t&&this.renderFieldLabel(d.elem,t,null==(s=d.config)?void 0:s.errorsContainer,!0),d.elem.classList.add(...h((null==(l=d.config)?void 0:l.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}d.elem.classList.add(...h((null==(r=d.config)?void 0:r.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const c=this.createErrorLabelElem(e,void 0!==i?i:d.errorMessage,d.config);this.renderFieldLabel(d.elem,c,null==(o=d.config)?void 0:o.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(d.elem,c,null==(n=null==(a=d.config)?void 0:a.tooltip)?void 0:n.position))}renderGroupError(e,t=!0){var i,s,l,r;const o=this.groupFields[e];if(!1===o.isValid&&(this.isValid=!1),void 0===o.isValid||!t&&!this.isSubmitted&&!o.touched)return;if(o.isValid){o.elems.forEach((e=>{var t,i;Object.assign(e.style,(null==(t=o.config)?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle),e.classList.add(...h((null==(i=o.config)?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass))}));const t=this.createSuccessLabelElem(e,o.successMessage,o.config);return void(t&&this.renderGroupLabel(o.groupElem,t,null==(i=o.config)?void 0:i.errorsContainer,!0))}this.isValid=!1,o.elems.forEach((e=>{var t,i;Object.assign(e.style,(null==(t=o.config)?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle),e.classList.add(...h((null==(i=o.config)?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}));const a=this.createErrorLabelElem(e,o.errorMessage,o.config);this.renderGroupLabel(o.groupElem,a,null==(s=o.config)?void 0:s.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(o.groupElem,a,null==(r=null==(l=o.config)?void 0:l.tooltip)?void 0:r.position))}renderErrors(e=!1){if(this.isSubmitted||e||this.globalConfig.validateBeforeSubmitting){this.clearErrors(),this.isValid=!0;for(const e in this.groupFields)this.renderGroupError(e);for(const e in this.fields)this.renderFieldError(e)}}destroy(){this.eventListeners.forEach((e=>{this.removeListener(e.type,e.elem,e.func)})),Object.keys(this.customStyleTags).forEach((e=>{this.customStyleTags[e].remove()})),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach((e=>{const t=this.getFieldSelectorByKey(e);t&&this.addField(t,[...this.fields[e].rules],this.fields[e].config)}))):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){"string"==typeof e||void 0===e?(this.currentLocale=e,this.isSubmitted&&this.validate()):console.error("Current locale should be a string")}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}onValidate(e){return this.onValidateCallback=e,this}}document.addEventListener("DOMContentLoaded",(async function(){!function(){const e=new b("#form",{validateBeforeSubmitting:!0,tooltip:{position:"top"}});e.addField("#name",[{rule:"required"}]).addField("#email",[{rule:"required"},{rule:"email"}]).addField("#phone",[{rule:"required"},{rule:"number"}]).addField("#city",[{rule:"required"}]).addField("#comment",[{validator:e=>void 0!==e&&e.length>16,errorMessage:"Message should be more than 16 letters."}]).addField("#file",[{rule:"minFilesCount",value:1},{rule:"files",value:{files:{extensions:["jpeg","jpg","png","ico","gif","raw","tiff","bmp","psd","webp","heif","avif","svg","pdf","eps","ai","cdr"],types:["image/jpeg","image/jpg","image/png","image/ico","image/gif","image/raw","image/tiff","image/bmp","image/psd","image/webp","image/heif","image/avif","image/svg","image/pdf","image/eps","image/ai","image/cdr"]}},errorMessage:"Upload file should be only image type"}]).addField("#last-name",[{rule:"required"}]);const t=document.querySelectorAll(".button-trriger"),i=document.querySelector(".modal"),s=document.querySelector(".modal__form"),l=document.querySelector(".modal__close"),r=document.getElementById("modal-first-button"),o=document.getElementById("modal-second-button"),a=document.querySelector(".modal__request"),n=document.querySelector("body"),d=document.querySelectorAll(".change-box__file"),c=document.querySelector(".change-box__file-label"),u=document.querySelector(".change-box__file-label-value"),h=document.querySelector(".change-box__file-label-add"),f=document.querySelectorAll(".change-box__text");i.addEventListener("click",(e=>{e.composedPath().includes(s)||(i.classList.remove("modal_active"),s.classList.remove("modal__form_active"),n.classList.remove("body_lock"))})),t.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),console.log("click"),i.classList.add("modal_active"),n.classList.add("body_lock"),s.classList.add("modal__form_active"),a.classList.remove("modal__request_active")}))})),l.addEventListener("click",(e=>{e.preventDefault(),i.classList.remove("modal_active"),s.classList.remove("modal__form_active"),n.classList.remove("body_lock")})),r.addEventListener("click",(()=>{!0===e.isValid&&(s.classList.remove("modal__form_active"),a.classList.add("modal__request_active"))})),o.addEventListener("click",(()=>{i.classList.remove("modal_active"),n.classList.remove("body_lock")})),d.forEach((function(e){let t=e.nextElementSibling,i=t.innerHTML;e.addEventListener("change",(function(e){let s=e.target.value.split("\\").pop();s?(u.innerHTML=`${s} was added`,u.classList.add("change-box__file-label-value_active"),h.classList.add("change-box__file-label-add_checked"),f.forEach((e=>{e.classList.add("change-box__text_hide")}))):(t.innerHTML=i,h.classList.remove("change-box__file-label-add_checked"))}))})),c.addEventListener("click",(()=>{h.classList.contains("change-box__file-label-add_checked")?(h.classList.remove("change-box__file-label-add_checked"),u.innerHTML="",d[0].setAttribute("disabled",""),f.forEach((e=>{e.classList.remove("change-box__text_hide")}))):d[0].removeAttribute("disabled")}))}(),function(){const e=document.querySelector("body"),t=document.querySelector(".preloader"),i=document.querySelector(".preloader__loader"),s=document.querySelector(".preloader__percents");({disabledScroll(){e.classList.add("body_lock")},enableScroll(){}}).disabledScroll(),window.addEventListener("load",(()=>{t.classList.add("preloader_hidden"),e.classList.remove("body_lock"),setTimeout((()=>{t.remove()}),2e3)}));const l=document.querySelectorAll("img");let r=0,o=l.length;console.log(o);const a=document.getElementById("percents");function n(){console.log(o),r++,a.innerText=parseInt(r/o*100),100===parseInt(r/o*100)&&(a.innerText="LIGHT",i.classList.add("preloader__loader_isload"),s.innerText=s.innerText.slice(0,5)),console.log("yes")}0===o&&(a.innerText="LIGHT",s.innerText=s.innerText.slice(0,5),i.classList.add("preloader__loader_isload"));for(let e=0;e<o;e++){let t=new Image;t.onload=n,t.src=l[e].src}}(),function(){document.querySelector(".dropdown");const e=document.querySelectorAll(".dropdown__box"),t=document.querySelectorAll(".dropdown__menu"),i=document.querySelectorAll(".dropdown__menu-item"),s=document.querySelectorAll(".dropdown__svg-arrow"),l=document.querySelectorAll(".dropdown__text");e.forEach((e=>{e.addEventListener("click",(()=>{s.forEach((e=>{e.classList.toggle("dropdown__svg-arrow_rotate")})),t.forEach((e=>{e.classList.toggle("dropdown__menu_open")}))}))})),i.forEach((e=>{e.addEventListener("click",(()=>{l.forEach((t=>{t.innerText=e.innerText})),t.forEach((e=>{e.classList.remove("dropdown__menu_open")})),s.forEach((e=>{e.classList.remove("dropdown__svg-arrow_rotate")})),i.forEach((e=>{e.classList.remove("dropdown__menu-item_active")})),e.classList.add("dropdown__menu-item_active")}))}))}(),document.querySelector(".background-trriger").classList.add("header__white-background"),document.querySelector(".button-trriger").classList.add("header__white-button"),document.querySelectorAll(".text-trriger").forEach((e=>{e.classList.add("header__white-text")})),document.querySelectorAll(".footer__text-trriger").forEach((e=>{e.classList.add("footer__white-text")})),document.querySelector(".background-trriger-tr").classList.add("header__transperent"),function(){const e=document.querySelector(".header"),t=document.querySelector(".header__burger-icon"),i=document.querySelector(".header__burger-background"),s=document.querySelector(".header__button"),l=document.querySelector(".header__logo"),r=document.querySelector(".header__language"),o=document.body;window.addEventListener("scroll",(function(){this.window.scrollY>0?e.classList.add("header_black"):e.classList.remove("header_black")})),t.addEventListener("click",(function(){t.classList.toggle("header__burger-icon_active"),i.classList.toggle("header__burger-background_active"),s.classList.toggle("header__button_active"),l.classList.toggle("header__logo_active"),r.classList.toggle("header__language_active"),o.classList.toggle("block")}))}()}))}();