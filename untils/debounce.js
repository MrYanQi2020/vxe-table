/**
 * 防抖
 *
 * @param fn 原函数
 * @param delay 延迟时间（单位: ms）
 * @param immediate 是否需要立即执行（即第一次调用防抖函数时，是否需要先执行一次fn）
 */
export function debounce(fn, delay, immediate = false) {
  let timer = null
  let isInvoke = false

  // 真正执行的函数
  const _debounce = function (...args) {
    return new Promise(resolve => {
      // 取消上次定时器
      if (timer) clearTimeout(timer)
      // 判断是否需要立即执行
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args)
        isInvoke = true
        resolve(result)
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          timer = null
          isInvoke = false
          resolve(result)
        }, delay)
      }
    })
  }

  // 封装取消执行功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}