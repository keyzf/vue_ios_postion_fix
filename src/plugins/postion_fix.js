const pos_fix = {};

pos_fix.install = function(Vue,options){
    Vue.prototype.pos_fix_time_handle = null;

    document.body.addEventListener('focus',function(e){
        if(e.target.nodeName.toLocaleLowerCase() == 'input'){
            clearTimeout(Vue.prototype.pos_fix_time_handle)
        }
    },true)

    Vue.directive('pos_fix',{
        bind:function(el){
           el.addEventListener('blur',function(){
               const _this = this
                Vue.prototype.pos_fix_time_handle = setTimeout(function(){
                    console.log('debugger',document.activeElement,document.body,document.activeElement != document.body)
                    if(document.activeElement == document.body){
                        const h = document.documentElement.scrollTop
                        window.scrollTo(0, h+1);
                    }
                },200)
            })
        }
    })
    
}

export default pos_fix