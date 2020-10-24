# ScrollTrigger

#### scrollTrigger 設定值

##### toggleActions
```
  toggleActions: 'play none none none'  // default
```
**param1**<br>
物件進入視區時，從 scroll-end -> start<br>
**param2**<br>
如果完全超過被 trigger 物件 endpoint 時<br>
**param3**<br>
如果物件又反向，回到視區時 scroll-end -> end (反向)<br>
**param4**<br>
如果物件又反向 完全超過 start 線時 scroll-start -> start(反向)<br>

###### action 可帶入的值
- play
- pause
- resume
- reverse
- restart
- reset
- complete
- none

##### start
```
start: top center
```

**param1**<br>
trigger 物件的觸發設定<br>
**param2**<br>
視區的觸發設定<br>

##### scrub
```
scrub: true
```
物件會隨著 scroll 的比例移動。原本的動畫，只要一 trigger，就會開始執行。可是設定 scrub 之後，動畫就會依 scroll 的比例，跑到相對應的進程。

scrub 也可以給定數字，例如
```
scrub: 1
```
數字越大表示有越久的時間緩衝到相對應的動畫。

##### pin
```
pin: true
pin: {element}
```
pin 的意思是指，設定為 pin 的這個物件，會被固定在 trigger 的 scroller-start這條線上，直到 end。

預設 scrolltrigger 會在 pin element 的下方加上 padding。

##### snap

##### onEnter
當 scroller-start 從正向經過 start 時

##### onLeave
當 scroller-end 從正向經過 end 時

##### id
可以讓 marker 顯示該 scrollTrigger 的名稱。方便有多個 markers 的時候。

也可以透過
```
ScrollTrigger.getById()
```
取得該 trigger 物件

##### scroller
預設 scroller 是 window。如果要更改，也可以設定此值。


##### 建議
使用 scrollTrigger 最好的方式是在`外層時間軸`或是`獨立的時間軸`
