(function (doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if (clientWidth >= 750) {
              docEl.style.fontSize = '100px';
          } else {
              docEl.style.fontSize = 16 * (clientWidth / 375) + 'px';
          }
          var html = document.getElementsByTagName('html')[0];
          var settedFs = settingFs = parseInt(16 * (clientWidth / 375));
          var whileCount = 0;
          while (true) {
              var realFs = parseInt(window.getComputedStyle(html).fontSize);
              var delta = realFs - settedFs;
              //不相等
              if (Math.abs(delta) >= 1) {
                  if (delta > 0)
                      settingFs--;
                  else
                      settingFs++;
                  html.setAttribute('style', 'font-size:' + settingFs + 'px!important');
              } else
                  break;
              if (whileCount++ > 100)
                  break
          }
      };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

const testPic = "../../FEassets/icon/200251-15825457711dd7.jpg"
const testTitle = "正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正正"
const testTime = "2020-20-20 20:20"
const testTimeShort = "2020-20-20"
const testLebal = "正正正正正正正"
const testName = "正正正"
const testLebalMini = "正正"
const testPhone = "18888888888"

