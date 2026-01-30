import { Check, Copy, createElement } from 'lucide'
import './index.css'

/**
 * 代码块复制按钮
 * 隐藏原生工具栏，手动创建复制按钮
 */
export function codeCopyButton() {
  const createCopyButton = (block: HTMLPreElement) => {
    const code = block.querySelector('code')
    if (!code) return

    const btn = document.createElement('button')
    btn.className = 'code-copy-btn'
    btn.type = 'button'
    btn.setAttribute('aria-label', '复制代码')
    btn.appendChild(createElement(Copy, { 'stroke-width': 2 }))

    btn.addEventListener('click', async () => {
      const text = code.textContent || ''
      await navigator.clipboard.writeText(text)

      btn.innerHTML = ''
      btn.appendChild(createElement(Check, { 'stroke-width': 2 }))
      btn.classList.add('copied')

      setTimeout(() => {
        btn.innerHTML = ''
        btn.appendChild(createElement(Copy, { 'stroke-width': 2 }))
        btn.classList.remove('copied')
      }, 1500)
    })

    block.style.position = 'relative'
    block.appendChild(btn)
  }

  const initCopyButtons = () => {
    const codeBlocks = document.querySelectorAll<HTMLPreElement>(
      'pre[highlighted="true"]',
    )

    for (const block of codeBlocks) {
      createCopyButton(block)
    }
  }

  if (document.readyState === 'complete') {
    setTimeout(initCopyButtons, 100)
  } else {
    window.addEventListener('load', () => setTimeout(initCopyButtons, 100))
  }
}
