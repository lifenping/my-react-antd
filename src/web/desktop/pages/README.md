# markdown 练习
--------
## 标题



### 标题

> test
>> test

使用```表示代码块

```javascript
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
```

使用``表示行内代码
> 这是`javascript`代码

使用![Alt text](/path/to/img.jpg "Optional title")导入图片。其中：

Alt text为如果图片无法显示时显示的文字；
/path/to/img.jpg为图片所在路径；
Optional title为显示标题。显示效果为在你将鼠标放到图片上后，会显示一个小框提示，提示的内容就是 Optional title里的内容。

> 示例
![Markdown](http://images.cnitblog.com/blog/404392/201501/122257231047591.jpg)

1.6.3 注意

导入的图片路径可以使用绝对路径也可以使用相对路径，建议使用相对路径。
我通常的做法是Markdown文档的同级目录下建立一个pictures文件夹，里面放置所有所需的图片，如果图片多的话，你也可以在pictures文件夹里建立子文件夹归类。

使用1. 2. 3.表示有序列表，使用*或-或+表示无序列表。


使用 ** 或者 __ 表示粗体。
使用 * 或者 _ 表示斜体。

**粗体1**    __粗体2__
 *斜体1*    _斜体2_

 ------:为右对齐。
:------为左对齐。
:------:为居中对齐。
-------为使用默认居中对齐。

|         序号    |    交易名    |    交易说明    |    备注    |
|    ------: |    :-------:    |    :---------   |    ------    |
|    1    |    prfcfg    |    菜单配置    |    可以通过此交易查询到所有交易码和菜单的对应关系    |
|    2    |    gentmo    |    编译所有交易    |    |
|    100000    |    sysdba    |    数据库表模型汇总    |    |

使用---或者***或者* * *表示水平分割线。



