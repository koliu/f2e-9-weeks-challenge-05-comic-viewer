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
    behavior: 'smooth', //[auto], instant, smooth
    block: 'center', //start, [center], end, nearest
    inline: 'center', //start, center, end, [nearest]
  });
```

這個設定的確可以讓縮圖部份平滑滾動到中間，但整個視窗的垂直部份，也會滾動到縮圖容器上。
- [scrollIntoView() shifting the complete page](https://stackoverflow.com/questions/22062845/scrollintoview-shifting-the-complete-page)
- [ScrollIntoView() causing the whole page to move](https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move)

