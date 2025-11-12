// sound.js - centralised sound assets and helpers for CalmSpace
// ------------------ REPLACE_SOUND_URLS START ------------------
// If you want to replace sounds later, change the URL strings below.
// They are intentionally grouped here for easy editing.
const SOUND_ASSETS = {
  click: "https://actions.google.com/sounds/v1/foley/wood_click.ogg",
  pop:   "https://actions.google.com/sounds/v1/cartoon/pop.ogg",
  bubble:"https://actions.google.com/sounds/v1/ambiences/bubble_wrap_pop.ogg",
  switch:"https://actions.google.com/sounds/v1/foley/light_switch.ogg",
  type:  "https://actions.google.com/sounds/v1/keyboard/keyboard_typing.ogg"
};
// ------------------ REPLACE_SOUND_URLS END ------------------

const Sounds = (function(){
  const audio = {};
  Object.keys(SOUND_ASSETS).forEach(k=>{
    const a = new Audio(SOUND_ASSETS[k]);
    a.preload = "auto";
    audio[k] = a;
  });
  return {
    play(name){
      if(audio[name]){
        // clone to allow overlapping sounds in some cases
        const clone = audio[name].cloneNode();
        clone.play().catch(()=>{ /* ignore autoplay block when not user initiated */});
      }
    }
  };
})();
