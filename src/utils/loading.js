/*
 * @Loading函数
 * @text 显示文本
 * @delay 多少秒之后自动清除loading
 */
import '@/styles/loading.less'

let timer = null

export function showLoading({ delay = 3000, text = '' } = {}) {
  if (typeof document === 'undefined') return
  if (timer) clearTimeout(timer)
  let container = document.getElementById('loading')
  if (!container) {
    container = document.createElement('div')
    container.id = 'loading'
    document.body.appendChild(container)
  }
  container.innerHTML = `
    <div style="height:100%;width:100%;display:flex;justify-content:center;align-items:center;">
      <div class="yan-spin yan-spin-lg yan-spin-spinning">
        <span class="yan-spin-dot yan-spin-dot-spin">
          <i class="yan-spin-dot-item"></i>
          <i class="yan-spin-dot-item"></i>
          <i class="yan-spin-dot-item"></i>
          <i class="yan-spin-dot-item"></i>
        </span>
        <div class="yan-spin-text">${text}</div>
      </div>
    </div>
  `
  container.style.width = '100%'
  container.style.height = '100%'
  container.style.position = 'fixed'
  container.style.left = '0'
  container.style.top = '0'
  container.style.zIndex = '9999999'
  container.style.display = 'flex'
  //timer = setTimeout(hideLoading, delay)
}
export function hideLoading() {
  if (typeof document === 'undefined') return
  const container = document.getElementById('loading')
  if (container) {
    document.body.removeChild(container)
  }
}