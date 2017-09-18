/**
 * Created by Administrator on 2017/9/3.
 */
$(function () {
    //$('#box').css('color','blue');
    //$('#box').nextAll('strong').css('color','red');     box 下的strong标签被选中
    //$('#box').prevAll('strong').css('color','pink');
    //$('#box').siblings('p').css('color','pink');        box上下的p标签被选中
    //$('#box').nextUntil('p').css('color','pink');         box遇到p标签即停止
   // $('#box').prevUntil('p').css('color','pink')

    // $('li:first').css('color','yellow');
    // $('li:last').css('color','green');
    //$('li:not(.red)').css('color','green');
    // $('li:even').css('color','whitesmoke');             偶数
    //$('li:odd').css('color','red') ;             奇数
    //$('li:eq(2)').css('color','red');

   // $('input').get(0).focus();
    //$(':focus').css('background','red');

    //$('div:hidden').css('backgroundcolor','#ccc').show(1000);
    //alert($('div:hidden').size());
    //alert($('li').size());
    //alert($('div:visible').size());

    //$('li:first-child').css('background','#ccc');  每个父元素的第一个li元素
    //$('li:last-child').css('background','#ccc');
    //$('li:only-child').css('background','#ccc');     每个父元素只有一个li元素
    //$('li:nth-child(odd)').css('background','#ccc');    每个父元素奇数li元素
    //$('li:nth-child(even)').css('background','#ccc');    每个父元素偶数li元素
    //$('li:nth-child(2n+1)').css('background','#ccc');
    //alert($('.red').is('li'));               true 选择器，检测class是否为red        is 即为bool
    //alert($('.red').is($('li')));  true jQuery 对象集合，同上
   //alert($('.red').is($('li').eq(2)));  true jQuery 对象单个，同上
    //alert($('.red').is($('li').get(2)));  true jQuery DOM对象，同上

    /*alert($('.red').is(function () {
        //return $(this).attr('title') == '过滤器3';
        //注意：必须使用$(this)来表示要判断的元素，否则，不管function里面是否返回true或false都和调用的元素无关
    }));*/

    //alert($('li').eq(2).hasClass('red'));  // 和is一样，只不过只能传递class
    //alert($('li').eq(4).hasClass('red'));   //li标签下第四个是否含有class red
    //$('li').slice(0,2).css('background','#ccc');  //li标签前两个颜色改变

    //$('li').slice(0,-2).css('background','#ccc'); //从倒数第三个每个li标签都选中

   //$('li').filter('.red , :first , :last').css('background','#ccc');

    /*$('li').filter(function () {
        return $(this).attr('class')=='red'&&$(this).attr('title')=='过滤器3';
    }).css('background','#ccc');;*/

    //$('#first').next('ul').end().css('background','#ccc');
});

