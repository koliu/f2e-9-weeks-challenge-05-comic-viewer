# No.5 Comic Viewer

---

## [DEMO](dist/)

## [spec](https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer)

## Note

### 圖片遮照

```css
filter: brightness(90%);
```

### 水平滾動至中心

#### [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

```js
document.querySelector(selector).scrollIntoView({
  behavior: "smooth", //[auto], instant, smooth
  block: "center", //start, [center], end, nearest
  inline: "center" //start, center, end, [nearest]
});
```

這個設定的確可以讓縮圖部份平滑滾動到中間，但整個視窗的垂直部份，也會滾動到縮圖容器上。

- [scrollIntoView() shifting the complete page](https://stackoverflow.com/questions/22062845/scrollintoview-shifting-the-complete-page)
- [ScrollIntoView() causing the whole page to move](https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move)

#### 自行計算

> 主要使用 element.offsetLeft 來取得各節點所在左邊界，計算後透過 parent.scrollLeft 來移動 scroll bar

[Demo](https://codepen.io/KOLiu/pen/gjYMgP?editors=0100)

參考：

- [圖解 offsetLeft、offsetTop、offsetWidth 和 offsetHeight](http://emn178.pixnet.net/blog/post/95297028-%E5%9C%96%E8%A7%A3offsetleft%E3%80%81offsettop%E3%80%81offsetwidth%E5%92%8Coffsetheight)
- [圖解 clientLeft, clientTop, clientWidth 和 clientHeight](http://emn178.pixnet.net/blog/post/95101386)
- [圖解 scrollLeft, scrollTop, scrollWidth, scrollHeight 和 scrollIntoView](http://emn178.pixnet.net/blog/post/95137696)
- [getClientRects() 和 getBoundingClientRect() 的用法和区别](http://www.webhek.com/post/getclientrects-getboundingclientrect.html)

平滑滾動: [CSS: pure CSS scroll animation](https://stackoverflow.com/questions/17631417/css-pure-css-scroll-animation)

```scss
.parent {
  scroll-behavior: smooth;
}
```

```js
scrollTo(selector) {
  const target = document.querySelector(selector);
  const parent = target.parentElement;

  const childWidth = target.offsetWidth;
  const scrollCenter = 0.5 * (parent.offsetWidth - childWidth);
  const targetLeft = target.offsetLeft;
  const parentLeft = parent.offsetLeft;
  // 元素左邊界 - 父層容器的X軸滾動中點 - 父層容器左邊界(如果上層 position 非預設時可能得再調整)
  const newLeft = targetLeft - scrollCenter - parentLeft;

  if (newLeft !== parent.scrollLeft) {
    parent.scrollLeft = newLeft;
  }
}
```

讓每個 item 都能置中

```scss
.item {
  /* 讓每個元素都能置中 */
  &:first-child {
    padding-left: 258px;
  }
  &:last-child {
    padding-right: 258px;
  }
}
```
