/*
  Image data JSON, I'm using an object to preserve ordering because arrays can lose order
  in some cases and I'm relying on their ordering for correct placement in the page.
*/

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

export default {
  one: {
    title: 'MONSOON III',
    image: img1,
    content: "Reef careen grapple pink trysail black jack hulk brigantine chase yardarm. Bowsprit Barbary Coast gunwalls handsomely lugsail Pirate Round prow parrel long boat crack Jennys tea cup. Reef line spanker chase guns ahoy Chain Shot interloper trysail spike lad.Six pounders grog rutters chandler brig heave to Davy Jones' Locker coxswain.",
  },
  two: {
    title: 'BEAMS',
    image: img2,
    content: "Chase bilge interloper strike colors topmast squiffy Davy Jones' Locker hang the jib spirits take a caulk. Topgallant coffer gun Sea Legs quarterdeck dead men tell no tales Nelsons folly scuppers bring a spring upon her cable spirits. Grog blossom parley Letter of Marque line sutler holystone jury mast list long boat Chain Shot.",
  },
  three: {
    title: 'Move 2',
    image: img3,
    content: 'Reef careen grapple pink trysail black jack hulk brigantine chase yardarm. Bowsprit Barbary Coast gunwalls handsomely lugsail Pirate Round prow parrel long boat men tell no tales Nelsons folly scuppers bring a spring upon her cable spirits. Grog blossom parley Letter of Marque line sutler holystone jury mast list long boat Chain Shot.',
  },
};
