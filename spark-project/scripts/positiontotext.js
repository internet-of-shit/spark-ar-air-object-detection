/**
 * (c) geckse
 */

// load in modules
const FaceTracking = require('FaceTracking');
const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const Reactive = require('Reactive');


// our target text box
const face = FaceTracking.face(0);
const label = Scene.root.findFirst('positionLabel');
const faceTracker = Scene.root.findFirst('faceTracker0');
const faceTransform = face.cameraTransform;

label.then((textObj)=>{
  textObj.text = faceTransform.position.x.mul(100).format('x {:.1f} ')
              .concat(faceTransform.position.y.mul(100).format('y {:.1f} '))
              .concat(faceTransform.position.y.mul(100).format('z {:.1f}'));
});
