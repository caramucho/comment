$('#element').mousedown(function(event) {
    switch (event.which) {
        case 1:
            alert('Left mouse button pressed');
            break;
        case 2:
            alert('Middle mouse button pressed');
            break;
        case 3:
            alert('Right mouse button pressed');
            break;
        default:
            alert('You have a strange mouse');
    }
});


---------------------------------------------------------------------------------------------------
jQueryで要素(セレクタ)座標top,leftの取得
AddClips ブックマークに登録
 
よく忘れるので、メモ書きです。

jQueryには、offset()という関数があり、それを使ってtopとleftの座標を取得することが出来ます。
right、bottomは残念ならが取れません。


それぞれ以下のように取得出来ます。

$("#Hoge").offset().top

$("#Hoge").offset().left

返ってくる値は、ページ全体の絶対位置のようです。

---------------------------------------------------------------------------------------------------

jQueryでページ上の座標（X座標／Y座標）を取得する方法【ページ全体の場合】

ページ上のX座標・Y座標を取得するには
—————————–
X座標 = e.pageX
Y座標 = e.pageY
—————————–
を使って値を取得することができます。

各座標の値を取得するサンプルとして
ページ上のクリックされた位置のX座標／Y座標を取得してみると。

---------------------------------------------------------------------------------------------------
<script type="text/javascript">
$(function(){
  $('html').click(function(e){
    var x = e.pageX;
    var y = e.pageY;
    alert('X = ' + x + 'px, Y = ' + y + 'px');
    $('#locatedpoint').css({top:(y),left:(x),display:'block'}).attr('title','TOP : '+(y)+'px | LEFT : '+(x)+'px');
  });
});
</script>


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
  $('html').click(function(e){
    var x = e.pageX;
    var y = e.pageY;
    alert('X = ' + x + 'px, Y = ' + y + 'px');
    $('#locatedpoint').css({top:(y),left:(x),display:'block'}).attr('title','TOP : '+(y)+'px | LEFT : '+(x)+'px');
  });
});
</script>
