import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player-react/dist/controls.css';

// const asset = 'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd';

const awsUrl = 'https://d2rt1ano725ami.cloudfront.net'
const assetUrl = `${awsUrl}/frag_bunny/output.mpd`


const ShakaPlayerComponent = () => {
  // const controllerRef = useRef(null);

  // useEffect(() => {
  //   const {
  //     /** @type {shaka.Player} */ player,
  //     /** @type {shaka.ui.Overlay} */ ui,
  //     /** @type {HTMLVideoElement} */ videoElement
  //   } = controllerRef.current;

  //   async function loadAsset() {
  //     if(player) {
  //       // Load an asset.
  //       await player.load(assetUrl);

  //       // Trigger play.
  //       videoElement.play();
  //     } 
  //     console.log('xxxxxxxxxxxxx', player)
  //   }

  //   loadAsset();
  // }, [controllerRef]);

  return <div>
    <ShakaPlayer autoPlay src={assetUrl} />
  </div>
}

export default ShakaPlayerComponent
