//每次调用$.get或者$.post或者$.ajax的时候，都会调用ajaxPrefilter这个函数
//在这个函数中，我们可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options){
    
    options.url = 'http://www.liulongbin.top:3007' + options.url

})