;(function($,window){'use strict';$.plugin('swCaptcha',{defaults:{autoLoad:false,src:'',hasError:false},init:function(){var me=this,$el=me.$el;me.applyDataAttributes(true);if(!me.opts.src.length){return;}
if(me.opts.hasError){window.setTimeout($.proxy(me.sendRequest,me),1000);return;}
if(me.opts.autoLoad){me.sendRequest();}else{me.$form=$el.closest('form');me.$formInputs=me.$form.find(':input:not([name="__csrf_token"], select)');me._on(me.$formInputs,'focus',$.proxy(me.onInputFocus,me));}},onInputFocus:function(){var me=this;me._off(me.$formInputs,'focus');me.sendRequest();},sendRequest:function(){var me=this,$el=me.$el;$.ajax({url:me.opts.src,cache:false,success:function(response){$el.html(response);$.publish('plugin/swCaptcha/onSendRequestSuccess',[me]);}});$.publish('plugin/swCaptcha/onSendRequest',[me]);}});})(jQuery,window);