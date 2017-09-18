$(function(){
//alert($('#box').html());
    //alert($('#box').text());  //text获取的是文本，有html会自动被清理

  //  $('div').html($('div').html()+'<em>www.li.cc</em>');   //替换HTML内容，HTML内容会自动解析、
    //$('#box').text('<em>www.li.cc</em>');  替换文本内容，有html会自动转义

    //alert($('input').val());
    //$('input').val('hello Jquery');
    //$('input').val(['男','女','web']);

    //alert($('#box').attr('id')); //获取某个元素key属性的元素值
   // $('div').attr('title','MyName');
    /*$('div').attr({
        'title':'MyName',
        'class':'red',  //calss 不建议用attr来设置，后面有功能强大更丰富的方法代替
        'date':'balck'
    });*/

/*$('div').attr('title',function(){
    return '我是域名';            //通过匿名函数返回属性值
});

$('div').attr('title',function (index,value) {
    return '原来的title是：'+ value + ',现在的title是：我是'+(index+1) +'号域名';
});;*/

$('div').html(function (index,value) {           //追加
    return value + '<em>www.li.cc</em>';
});

//$('div').removeAttr('title');
});
