requestIdleCallback(() => {
  document.body.innerHTML = document.body.innerHTML.replaceAll(/。|、|！|？/g, () => ("&#x1f" + (1024 + (Math.floor(Math.random() * 64))).toString(16).slice(-3)));
})
