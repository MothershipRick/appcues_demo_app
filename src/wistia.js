import React from "react";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const wistia = () => {
  return (
    <div className="app-content">
    <script src="https://fast.wistia.com/embed/medias/lzp27p7kc2.jsonp" async></script>
    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
    <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
    <div class="wistia_embed wistia_async_lzp27p7kc2 videoFoam=true" style="height:100%;position:relative;width:100%">
    <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
    <img src="https://fast.wistia.com/embed/medias/lzp27p7kc2/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
    </div></div></div></div>
  </div>
  );
};

export default wistia;