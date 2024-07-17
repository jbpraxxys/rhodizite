<template><div></div></template>
<script>
export default {
  setup() {
    onMounted(() => {
    //   const { initialize } = useGtag();
    //   initialize();
    //   setupTawkTo();
    //   printConsoleMessage();
    });
  },
};

function setupTawkTo() {
  (window.Tawk_API = window.Tawk_API || {}),
    (window.Tawk_LoadStart = new Date());
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5714b32b0702fb561cdad46b/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  document.querySelectorAll(".show-chat-button").forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
      // console.log("clicking");
      if (window.Tawk_API && window.Tawk_API.maximize) {
        window.Tawk_API.maximize();
      }
    });
  });
}
</script>
