(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,M=33777,te=33778,ne=33779,N=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37488,P=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,Ne=2300,F=2301,Pe=2302,Fe=2303,Ie=2400,I=2401,Le=2402,L=3200,Re=`srgb`,R=`srgb-linear`,ze=`linear`,Be=`srgb`,Ve=7680,He=35044,Ue=2e3;function We(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ge(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}var Je={};function Ye(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ze(...e){let t=e.join(` `);t in Je||(Je[t]=!0,z(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nt=1234567,rt=Math.PI/180,it=180/Math.PI;function at(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tt[e&255]+tt[e>>8&255]+tt[e>>16&255]+tt[e>>24&255]+`-`+tt[t&255]+tt[t>>8&255]+`-`+tt[t>>16&15|64]+tt[t>>24&255]+`-`+tt[n&63|128]+tt[n>>8&255]+`-`+tt[n>>16&255]+tt[n>>24&255]+tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t){return(e%t+t)%t}function st(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ct(e,t,n){return e===t?0:(n-e)/(t-e)}function lt(e,t,n){return(1-n)*e+n*t}function ut(e,t,n,r){return lt(e,t,1-Math.exp(-n*r))}function dt(e,t=1){return t-Math.abs(ot(e,t*2)-t)}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function mt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ht(e,t){return e+Math.random()*(t-e)}function gt(e){return e*(.5-Math.random())}function _t(e){e!==void 0&&(nt=e);let t=nt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vt(e){return e*rt}function yt(e){return e*it}function bt(e){return!(e&e-1)&&e!==0}function xt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function St(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ct(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Tt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Et={DEG2RAD:rt,RAD2DEG:it,generateUUID:at,clamp:V,euclideanModulo:ot,mapLinear:st,inverseLerp:ct,lerp:lt,damp:ut,pingpong:dt,smoothstep:ft,smootherstep:pt,randInt:mt,randFloat:ht,randFloatSpread:gt,seededRandom:_t,degToRad:vt,radToDeg:yt,isPowerOfTwo:bt,ceilPowerOfTwo:xt,floorPowerOfTwo:St,setQuaternionFromProperEuler:Ct,normalize:Tt,denormalize:wt},H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ot.copy(this).projectOnVector(e),this.sub(Ot)}reflect(e){return this.sub(Ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ot=new U,kt=new Dt,W=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ze(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(At.makeScale(e,t)),this}rotate(e){return Ze(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(At.makeRotation(-e)),this}translate(e,t){return Ze(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(At.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},At=new W,jt=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mt=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nt(){let e={enabled:!0,workingColorSpace:R,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[R]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var Pt=Nt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=Ke(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=at(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new U,Wt=class r extends et{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=at(),this.name=``,this.source=new Bt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=new Wt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],te=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*N,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*N,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*N,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new U,Qt=new Xt,$t=new U(0,0,0),en=new U(1,1,1),tn=new U,nn=new U,rn=new U,an=new Xt,on=new Dt,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},ln=0,un=new U,dn=new Dt,fn=new Xt,pn=new U,mn=new U,hn=new U,gn=new Dt,_n=new U(1,0,0),vn=new U(0,1,0),yn=new U(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=at(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new sn,r=new Dt,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new W}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};wn.DEFAULT_UP=new U(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},En={type:`move`},Dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(En)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},On={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},An={h:0,s:0,l:0};function jn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Mn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Pt.workingColorSpace){if(e=ot(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jn(i,r,e+1/3),this.g=jn(i,r,e),this.b=jn(i,r,e-1/3)}return Pt.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=On[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return Pt.workingToColorSpace(Nn.copy(this),e),Math.round(V(Nn.r*255,0,255))*65536+Math.round(V(Nn.g*255,0,255))*256+Math.round(V(Nn.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,r=Nn.g,i=Nn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Re){Pt.workingToColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,r=Nn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(An);let n=lt(kn.h,An.h,t),r=lt(kn.s,An.s,t),i=lt(kn.l,An.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new Mn;Mn.NAMES=On;var Pn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new U,In=new U,Ln=new U,Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new Gt,Kn=new Gt,qn=new Gt,Jn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fn.subVectors(r,t),In.subVectors(n,t),Ln.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(In),s=Fn.dot(Ln),c=In.dot(In),l=In.dot(Ln),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)!==null&&Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Rn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Rn.x),s.addScaledVector(a,Rn.y),s.addScaledVector(o,Rn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gn.setScalar(0),Kn.setScalar(0),qn.setScalar(0),Gn.fromBufferAttribute(e,t),Kn.fromBufferAttribute(e,n),qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gn,i.x),a.addScaledVector(Kn,i.y),a.addScaledVector(qn,i.z),a}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),In.subVectors(e,t),Fn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Fn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zn.subVectors(r,n),Bn.subVectors(i,n),Hn.subVectors(e,n);let s=zn.dot(Hn),c=Bn.dot(Hn);if(s<=0&&c<=0)return t.copy(n);Un.subVectors(e,r);let l=zn.dot(Un),u=Bn.dot(Un);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(zn,a);Wn.subVectors(e,i);let f=zn.dot(Wn),p=Bn.dot(Wn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zn):Zn.fromBufferAttribute(r,t),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qn.copy(e.boundingBox)),Qn.applyMatrix4(e.matrixWorld),this.union(Qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),or.subVectors(this.max,ar),$n.subVectors(e.a,ar),er.subVectors(e.b,ar),tr.subVectors(e.c,ar),nr.subVectors(er,$n),rr.subVectors(tr,er),ir.subVectors($n,tr);let t=[0,-nr.z,nr.y,0,-rr.z,rr.y,0,-ir.z,ir.y,nr.z,0,-nr.x,rr.z,0,-rr.x,ir.z,0,-ir.x,-nr.y,nr.x,0,-rr.y,rr.x,0,-ir.y,ir.x,0];return!lr(t,$n,er,tr,or)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,$n,er,tr,or))?!1:(sr.crossVectors(nr,rr),t=[sr.x,sr.y,sr.z],lr(t,$n,er,tr,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,Qn=new Yn,$n=new U,er=new U,tr=new U,nr=new U,rr=new U,ir=new U,ar=new U,or=new U,sr=new U,cr=new U;function lr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){cr.fromArray(e,a);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),s=t.dot(cr),c=n.dot(cr),l=r.dot(cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ur=new U,dr=new H,fr=0,pr=class extends et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=He,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix4(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyNormalMatrix(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.transformDirection(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},mr=class extends pr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hr=class extends pr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},G=class extends pr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Yn,_r=new U,vr=new U,yr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new Xt,Sr=new wn,Cr=new U,wr=new Yn,Tr=new Yn,Er=new U,Dr=class e extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=at(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(We(e)?hr:mr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new G(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new pr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new pr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pr(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=0,kr=class extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Or++}),this.uuid=at(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ve,this.stencilZFail=Ve,this.stencilZPass=Ve,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ar=new U,jr=new U,Mr=new U,Nr=new U,Pr=new U,Fr=new U,Ir=new U,Lr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){jr.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(jr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Mr),o=Nr.dot(this.direction),s=-Nr.dot(Mr),c=Nr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(jr).addScaledVector(Mr,d),f}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);let n=Ar.dot(this.direction),r=Ar.dot(Ar)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,n,r,i){Pr.subVectors(t,e),Fr.subVectors(n,e),Ir.crossVectors(Pr,Fr);let a=this.direction.dot(Ir),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nr.subVectors(this.origin,e);let s=o*this.direction.dot(Fr.crossVectors(Nr,Fr));if(s<0)return null;let c=o*this.direction.dot(Pr.cross(Nr));if(c<0||s+c>a)return null;let l=-o*Nr.dot(Ir);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rr=class extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Mn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zr=new Xt,Br=new Lr,Vr=new yr,Hr=new U,Ur=new U,Wr=new U,Gr=new U,Kr=new U,qr=new U,Jr=new U,Yr=new U,K=class extends wn{constructor(e=new Dr,t=new Rr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){qr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Kr.fromBufferAttribute(s,e),a?qr.addScaledVector(Kr,r):qr.addScaledVector(Kr.sub(t),r))}t.add(qr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(i),Br.copy(e.ray).recast(e.near),!(Vr.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Vr,Hr)===null||Br.origin.distanceToSquared(Hr)>(e.far-e.near)**2))&&(zr.copy(i).invert(),Br.copy(e.ray).applyMatrix4(zr),(n.boundingBox===null||Br.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Zr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Zr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Zr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Zr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Xr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Yr.copy(s),Yr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Yr);return l<n.near||l>n.far?null:{distance:l,point:Yr.clone(),object:e}}function Zr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ur),e.getVertexPosition(c,Wr),e.getVertexPosition(l,Gr);let u=Xr(e,t,n,r,Ur,Wr,Gr,Jr);if(u){let e=new U;Jn.getBarycoord(Jr,Ur,Wr,Gr,e),i&&(u.uv=Jn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=Jn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=Jn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};Jn.getNormal(Ur,Wr,Gr,t.normal),u.face=t,u.barycoord=e}return u}var Qr=class extends Wt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$r=class extends pr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ei=new Xt,ti=new Xt,ni=[],ri=new Yn,ii=new Xt,ai=new K,oi=new yr,si=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ii)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ei),ri.copy(e.boundingBox).applyMatrix4(ei),this.boundingBox.union(ri)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ei),oi.copy(e.boundingSphere).applyMatrix4(ei),this.boundingSphere.union(oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ai.geometry=this.geometry,ai.material=this.material,ai.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oi.copy(this.boundingSphere),oi.applyMatrix4(n),e.ray.intersectsSphere(oi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ei),ti.multiplyMatrices(n,ei),ai.matrixWorld=ti,ai.raycast(e,ni);for(let e=0,n=ni.length;e<n;e++){let n=ni[e];n.instanceId=i,n.object=this,t.push(n)}ni.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qr(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ci=new U,li=new U,ui=new W,di=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ci.subVectors(n,t).cross(li.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ci),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ui.getNormalMatrix(e),r=this.coplanarPoint(ci).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new yr,pi=new H(.5,.5),mi=new U,hi=class{constructor(e=new di,t=new di,n=new di,r=new di,i=new di,a=new di){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ue,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476+pi.distanceTo(e.center),fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(mi.x=r.normal.x>0?e.max.x:e.min.x,mi.y=r.normal.y>0?e.max.y:e.min.y,mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gi=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_i=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vi=class extends Wt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},yi=class extends vi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},bi=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xi=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Si=class e extends Dr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new U,g=new U;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new G(o,3)),this.setAttribute(`normal`,new G(s,3)),this.setAttribute(`uv`,new G(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ci=class e extends Dr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new G(a,3)),this.setAttribute(`normal`,new G(o,3)),this.setAttribute(`uv`,new G(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wi=class e extends Dr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ti=class e extends Dr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new G(i,3)),this.setAttribute(`normal`,new G(i.slice(),3)),this.setAttribute(`uv`,new G(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ei=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){z(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new U);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],i=[],a=[],o=new U,s=new Xt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new U)}i[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(V(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(V(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Di=class extends Ei{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new H){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oi=class extends Di{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ki(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ai=new U,ji=new U,Mi=new ki,Ni=new ki,Pi=new ki,Fi=class extends Ei{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ji.subVectors(r[0],r[1]).add(r[0]),c=ji);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ai.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ai),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Mi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ni.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Pi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Mi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ni.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Pi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Mi.calc(s),Ni.calc(s),Pi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ii(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Li(e,t){let n=1-e;return n*n*t}function Ri(e,t){return 2*(1-e)*e*t}function zi(e,t){return e*e*t}function Bi(e,t,n,r){return Li(e,t)+Ri(e,n)+zi(e,r)}function Vi(e,t){let n=1-e;return n*n*n*t}function Hi(e,t){let n=1-e;return 3*n*n*e*t}function Ui(e,t){return 3*(1-e)*e*e*t}function Wi(e,t){return e*e*e*t}function Gi(e,t,n,r,i){return Vi(e,t)+Hi(e,n)+Ui(e,r)+Wi(e,i)}var Ki=class extends Ei{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,r.x,i.x,a.x,o.x),Gi(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qi=class extends Ei{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,r.x,i.x,a.x,o.x),Gi(e,r.y,i.y,a.y,o.y),Gi(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ji=class extends Ei{constructor(e=new H,t=new H){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yi=class extends Ei{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xi=class extends Ei{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Bi(e,r.x,i.x,a.x),Bi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zi=class extends Ei{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Bi(e,r.x,i.x,a.x),Bi(e,r.y,i.y,a.y),Bi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qi=class extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ii(o,s.x,c.x,l.x,u.x),Ii(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},$i=Object.freeze({__proto__:null,ArcCurve:Oi,CatmullRomCurve3:Fi,CubicBezierCurve:Ki,CubicBezierCurve3:qi,EllipseCurve:Di,LineCurve:Ji,LineCurve3:Yi,QuadraticBezierCurve:Xi,QuadraticBezierCurve3:Zi,SplineCurve:Qi}),ea=class extends Ei{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new $i[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new $i[n.type]().fromJSON(n))}return this}},ta=class extends ea{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ji(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Xi(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ki(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Qi([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Di(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},na=class extends ta{constructor(e){super(e),this.uuid=at(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ta().fromJSON(n))}return this}};function ra(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ia(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=da(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return oa(a,o,n,s,c,l,0),o}function ia(e,t,n,r,i){let a;if(i===Fa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ma(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ma(i/r|0,e[i],e[i+1],a);return a&&wa(a,a.next)&&(Na(a),a=a.next),a}function aa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(wa(n,n.next)||Ca(n.prev,n,n.next)===0)){if(Na(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function oa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ga(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ca(e,r,i,a):sa(e)){t.push(c.i,e.i,l.i),Na(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=la(aa(e),t),oa(e,t,n,r,i,a,2)):o===2&&ua(e,t,n,r,i,a):oa(aa(e),t,n,r,i,a,1);break}}}function sa(e){let t=e.prev,n=e,r=e.next;if(Ca(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&xa(i,s,a,c,o,l,m.x,m.y)&&Ca(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ca(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ca(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=va(p,m,t,n,r),v=va(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&xa(s,u,c,d,l,f,y.x,y.y)&&Ca(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&xa(s,u,c,d,l,f,b.x,b.y)&&Ca(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&xa(s,u,c,d,l,f,y.x,y.y)&&Ca(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&xa(s,u,c,d,l,f,b.x,b.y)&&Ca(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function la(e,t){let n=e;do{let r=n.prev,i=n.next.next;!wa(r,i)&&Ta(r,n,n.next,i)&&ka(r,i)&&ka(i,r)&&(t.push(r.i,n.i,i.i),Na(n),Na(n.next),n=e=i),n=n.next}while(n!==e);return aa(n)}function ua(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Sa(o,e)){let s=ja(o,e);o=aa(o,o.next),s=aa(s,s.next),oa(o,t,n,r,i,a,0),oa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function da(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ia(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ya(o))}i.sort(fa);for(let e=0;e<i.length;e++)n=pa(i[e],n);return n}function fa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function pa(e,t){let n=ma(e,t);if(!n)return t;let r=ja(n,e);return aa(r,r.next),aa(n,n.next)}function ma(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(wa(e,n))return n;do{if(wa(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ba(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);ka(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ha(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ha(e,t){return Ca(e.prev,e,t.prev)<0&&Ca(t.next,e,e.next)<0}function ga(e,t,n,r){let i=e;do i.z===0&&(i.z=va(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,_a(i)}function _a(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function va(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ya(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ba(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function xa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ba(e,t,n,r,i,a,o,s)}function Sa(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Oa(e,t)&&(ka(e,t)&&ka(t,e)&&Aa(e,t)&&(Ca(e.prev,e,t.prev)||Ca(e,t.prev,t))||wa(e,t)&&Ca(e.prev,e,e.next)>0&&Ca(t.prev,t,t.next)>0)}function Ca(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function wa(e,t){return e.x===t.x&&e.y===t.y}function Ta(e,t,n,r){let i=Da(Ca(e,t,n)),a=Da(Ca(e,t,r)),o=Da(Ca(n,r,e)),s=Da(Ca(n,r,t));return!!(i!==a&&o!==s||i===0&&Ea(e,n,t)||a===0&&Ea(e,r,t)||o===0&&Ea(n,e,r)||s===0&&Ea(n,t,r))}function Ea(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Da(e){return e>0?1:e<0?-1:0}function Oa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ta(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ka(e,t){return Ca(e.prev,e,e.next)<0?Ca(e,t,e.next)>=0&&Ca(e,e.prev,t)>=0:Ca(e,t,e.prev)<0||Ca(e,e.next,t)<0}function Aa(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ja(e,t){let n=Pa(e.i,e.x,e.y),r=Pa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ma(e,t,n,r){let i=Pa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Na(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Pa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ia=class{static triangulate(e,t,n=2){return ra(e,t,n)}},La=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ra(e),za(n,e);let a=e.length;t.forEach(Ra);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,za(n,t[e]);let o=Ia.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ra(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function za(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ba=class e extends Ti{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Va=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ha=class e extends Dr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new U,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new G(s,3)),this.setAttribute(`normal`,new G(c,3)),this.setAttribute(`uv`,new G(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ua=class e extends Dr{constructor(e=new na([new H(0,.5),new H(-.5,-.5),new H(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new G(r,3)),this.setAttribute(`normal`,new G(i,3)),this.setAttribute(`uv`,new G(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;La.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];La.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=La.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Wa(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Wa(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Ga=class e extends Dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ka=class e extends Dr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},qa=class e extends Dr{constructor(e=new Zi(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,s=new U,c=new H,l=new U,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new $i[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ja(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Xa(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Xa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ya(e){let t={};for(let n=0;n<e.length;n++){let r=Ja(e[n]);for(let e in r)t[e]=r[e]}return t}function Xa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Za(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Qa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}var $a={clone:Ja,merge:Ya},eo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,to=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,no=class extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eo,this.fragmentShader=to,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=Za(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Mn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ro=class extends no{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},io=class extends kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Mn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ao=class extends kr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Mn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oo=class extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=L,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},so=class extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function co(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var lo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},uo=class extends lo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case I:i=e,o=2*t-n;break;case Le:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case I:a=e,s=2*n-t;break;case Le:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},fo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},po=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mo=class extends lo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},ho=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case F:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return F;case this.InterpolantFactoryMethodSmooth:return Pe;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ge(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ho.prototype.ValueTypeName=``,ho.prototype.TimeBufferType=Float32Array,ho.prototype.ValueBufferType=Float32Array,ho.prototype.DefaultInterpolation=F;var go=class extends ho{constructor(e,t,n){super(e,t,n)}};go.prototype.ValueTypeName=`bool`,go.prototype.ValueBufferType=Array,go.prototype.DefaultInterpolation=Ne,go.prototype.InterpolantFactoryMethodLinear=void 0,go.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends ho{constructor(e,t,n,r){super(e,t,n,r)}};_o.prototype.ValueTypeName=`color`;var vo=class extends ho{constructor(e,t,n,r){super(e,t,n,r)}};vo.prototype.ValueTypeName=`number`;var yo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Dt.slerpFlat(i,0,a,c-o,a,c,s);return i}},bo=class extends ho{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}};bo.prototype.ValueTypeName=`quaternion`,bo.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends ho{constructor(e,t,n){super(e,t,n)}};xo.prototype.ValueTypeName=`string`,xo.prototype.ValueBufferType=Array,xo.prototype.DefaultInterpolation=Ne,xo.prototype.InterpolantFactoryMethodLinear=void 0,xo.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends ho{constructor(e,t,n,r){super(e,t,n,r)}};So.prototype.ValueTypeName=`vector`;var Co=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Mn(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wo=class extends Co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},To=new Xt,Eo=new U,Do=new U,Oo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hi,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Eo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eo),Do.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Do),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ko=new U,Ao=new Dt,jo=new U,Mo=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ue,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,Ao,jo),jo.x===1&&jo.y===1&&jo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ao,jo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ko,Ao,jo),jo.x===1&&jo.y===1&&jo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ao,jo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},No=new U,Po=new H,Fo=new H,Io=class extends Mo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=it*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return it*2*Math.atan(Math.tan(rt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){No.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(No.x,No.y).multiplyScalar(-e/No.z),No.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(No.x,No.y).multiplyScalar(-e/No.z)}getViewSize(e,t){return this.getViewBounds(e,Po,Fo),t.subVectors(Fo,Po)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lo=class extends Oo{constructor(){super(new Io(90,1,.5,500)),this.isPointLightShadow=!0}},Ro=class extends Co{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Lo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},zo=class extends Mo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bo=class extends Oo{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends Co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Bo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ho=-90,Uo=1,Wo=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Io(Ho,Uo,e,t);r.layers=this.layers,this.add(r);let i=new Io(Ho,Uo,e,t);i.layers=this.layers,this.add(i);let a=new Io(Ho,Uo,e,t);a.layers=this.layers,this.add(a);let o=new Io(Ho,Uo,e,t);o.layers=this.layers,this.add(o);let s=new Io(Ho,Uo,e,t);s.layers=this.layers,this.add(s);let c=new Io(Ho,Uo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Go=class extends Io{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ko=`\\[\\]\\.:\\/`,qo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Jo=`[^\\[\\]\\.:\\/]`,Yo=`[^`+Ko.replace(`\\.`,``)+`]`,Xo=`((?:WC+[\\/:])*)`.replace(`WC`,Jo),Zo=`(WCOD+)?`.replace(`WCOD`,Yo),Qo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Jo),$o=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Jo),es=RegExp(`^`+Xo+Zo+Qo+$o+`$`),ts=[`material`,`materials`,`bones`,`map`],ns=class{constructor(e,t,n){let r=n||rs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(qo,``)}static parseTrackName(e){let t=es.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ts.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rs.Composite=ns,rs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},rs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},rs.prototype.GetterByBindingType=[rs.prototype._getValue_direct,rs.prototype._getValue_array,rs.prototype._getValue_arrayElement,rs.prototype._getValue_toArray],rs.prototype.SetterByBindingTypeAndVersioning=[[rs.prototype._setValue_direct,rs.prototype._setValue_direct_setNeedsUpdate,rs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rs.prototype._setValue_array,rs.prototype._setValue_array_setNeedsUpdate,rs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rs.prototype._setValue_arrayElement,rs.prototype._setValue_arrayElement_setNeedsUpdate,rs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rs.prototype._setValue_fromArray,rs.prototype._setValue_fromArray_setNeedsUpdate,rs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var is=new Xt,as=class{constructor(e,t,n=0,r=1/0){this.ray=new Lr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):B(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return is.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(is),this}intersectObject(e,t=!0,n=[]){return ss(e,this,n,t),n.sort(os),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)ss(e[r],this,n,t);return n.sort(os),n}};function os(e,t){return e.distance-t.distance}function ss(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)ss(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function cs(e,t,n,r){let i=ls(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case te:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case N:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ls(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function us(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ds(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new Mn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Mn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new Mn(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},fs={basic:{uniforms:Ya([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:Ya([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Mn(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:Ya([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Mn(0)},specular:{value:new Mn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:Ya([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new Mn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:Ya([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new Mn(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:Ya([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:Ya([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:Ya([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:Ya([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:Ya([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:Ya([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:Ya([J.common,J.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:Ya([J.lights,J.fog,{color:{value:new Mn(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};fs.physical={uniforms:Ya([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new Mn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new Mn(0)},specularColor:{value:new Mn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var ps={r:0,b:0,g:0},ms=new Xt,hs=new W;hs.set(-1,0,0,0,1,0,0,0,1);function gs(e,t,n,r,i,a){let o=new Mn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new K(new xi(1,1,1),new no({name:`BackgroundCubeMaterial`,uniforms:Ja(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ms.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hs),l.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Be,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new K(new Va(2,2),new no({name:`BackgroundMaterial`,uniforms:Ja(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ps,Qa(e)),n.buffers.color.setClear(ps.r,ps.g,ps.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function _s(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function vs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ys(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function bs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new di,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var xs=4,Ss=[.125,.215,.35,.446,.526,.582],Cs=20,ws=256,Ts=new zo,Es=new Mn,Ds=null,Os=0,ks=0,As=!1,js=new U,Ms=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=js}=i;Ds=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,Os,ks),this._renderer.xr.enabled=As,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:R,depthBuffer:!1},r=Ps(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ps(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ns(r)),this._blurMaterial=Ls(r,e,t),this._ggxMaterial=Is(r,e,t)}return r}_compileMaterial(e){let t=new K(new Dr,e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,r,i){let a=new Io(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Es),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new xi,new Rr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Es),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Fs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Fs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ts)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-xs?n-d+xs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Fs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ts),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Fs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ts)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&B(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Cs;m>Cs&&z(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);let h=[],g=0;for(let e=0;e<Cs;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Fs(t,3*v*(r>_-xs?r-_+xs:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ts)}};function Ns(e){let t=[],n=[],r=[],i=e,a=e-xs+1+Ss.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-xs?s=Ss[o-e+xs-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Dr;h.setAttribute(`position`,new pr(f,3)),h.setAttribute(`uv`,new pr(p,2)),h.setAttribute(`faceIndex`,new pr(m,1)),r.push(new K(h,null)),i>xs&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Ps(e,t,n){let r=new qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Fs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Is(e,t,n){return new no({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ls(e,t,n){let r=new Float32Array(Cs),i=new U(0,1,0);return new no({name:`SphericalGaussianBlur`,defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rs(){return new no({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zs(){return new no({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vs=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xi(5,5,5),i=new no({name:`CubemapFromEquirect`,uniforms:Ja(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Wo(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Hs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Vs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ms(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ms(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Us(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ws(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?hr:mr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Gs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ks(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function qs(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Jt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Js(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ys={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Xs(e,t,n,r,i,a){let o=new qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new vi(t,n):void 0}),s=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Dr;c.setAttribute(`position`,new G([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new G([0,2,0,0,2,0],2));let l=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new K(c,l),d=new zo(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Pt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Ys[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(u,d),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Zs=new Wt,Qs=new vi(1,1),$s=new Jt,ec=new Yt,tc=new gi,nc=[],rc=[],ic=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function sc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=nc[i];if(a===void 0&&(a=new Float32Array(i),nc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function cc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function lc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function uc(e,t){let n=rc[t];n===void 0&&(n=new Int32Array(t),rc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function dc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cc(n,t))return;e.uniform2fv(this.addr,t),lc(n,t)}}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(cc(n,t))return;e.uniform3fv(this.addr,t),lc(n,t)}}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cc(n,t))return;e.uniform4fv(this.addr,t),lc(n,t)}}function hc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(cc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),lc(n,t)}else{if(cc(n,r))return;oc.set(r),e.uniformMatrix2fv(this.addr,!1,oc),lc(n,r)}}function gc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(cc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),lc(n,t)}else{if(cc(n,r))return;ac.set(r),e.uniformMatrix3fv(this.addr,!1,ac),lc(n,r)}}function _c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(cc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),lc(n,t)}else{if(cc(n,r))return;ic.set(r),e.uniformMatrix4fv(this.addr,!1,ic),lc(n,r)}}function vc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cc(n,t))return;e.uniform2iv(this.addr,t),lc(n,t)}}function bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cc(n,t))return;e.uniform3iv(this.addr,t),lc(n,t)}}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cc(n,t))return;e.uniform4iv(this.addr,t),lc(n,t)}}function Sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cc(n,t))return;e.uniform2uiv(this.addr,t),lc(n,t)}}function wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cc(n,t))return;e.uniform3uiv(this.addr,t),lc(n,t)}}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cc(n,t))return;e.uniform4uiv(this.addr,t),lc(n,t)}}function Ec(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Qs.compareFunction=n.isReversedDepthBuffer()?518:515,a=Qs):a=Zs,n.setTexture2D(t||a,i)}function Dc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ec,i)}function Oc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||tc,i)}function kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||$s,i)}function Ac(e){switch(e){case 5126:return dc;case 35664:return fc;case 35665:return pc;case 35666:return mc;case 35674:return hc;case 35675:return gc;case 35676:return _c;case 5124:case 35670:return vc;case 35667:case 35671:return yc;case 35668:case 35672:return bc;case 35669:case 35673:return xc;case 5125:return Sc;case 36294:return Cc;case 36295:return wc;case 36296:return Tc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ec;case 35679:case 36299:case 36307:return Dc;case 35680:case 36300:case 36308:case 36293:return Oc;case 36289:case 36303:case 36311:case 36292:return kc}}function jc(e,t){e.uniform1fv(this.addr,t)}function Mc(e,t){let n=sc(t,this.size,2);e.uniform2fv(this.addr,n)}function Nc(e,t){let n=sc(t,this.size,3);e.uniform3fv(this.addr,n)}function Pc(e,t){let n=sc(t,this.size,4);e.uniform4fv(this.addr,n)}function Fc(e,t){let n=sc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ic(e,t){let n=sc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Lc(e,t){let n=sc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Rc(e,t){e.uniform1iv(this.addr,t)}function zc(e,t){e.uniform2iv(this.addr,t)}function Bc(e,t){e.uniform3iv(this.addr,t)}function Vc(e,t){e.uniform4iv(this.addr,t)}function Hc(e,t){e.uniform1uiv(this.addr,t)}function Uc(e,t){e.uniform2uiv(this.addr,t)}function Wc(e,t){e.uniform3uiv(this.addr,t)}function Gc(e,t){e.uniform4uiv(this.addr,t)}function Kc(e,t,n){let r=this.cache,i=t.length,a=uc(n,i);cc(r,a)||(e.uniform1iv(this.addr,a),lc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Qs:Zs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function qc(e,t,n){let r=this.cache,i=t.length,a=uc(n,i);cc(r,a)||(e.uniform1iv(this.addr,a),lc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ec,a[e])}function Jc(e,t,n){let r=this.cache,i=t.length,a=uc(n,i);cc(r,a)||(e.uniform1iv(this.addr,a),lc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||tc,a[e])}function Yc(e,t,n){let r=this.cache,i=t.length,a=uc(n,i);cc(r,a)||(e.uniform1iv(this.addr,a),lc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||$s,a[e])}function Xc(e){switch(e){case 5126:return jc;case 35664:return Mc;case 35665:return Nc;case 35666:return Pc;case 35674:return Fc;case 35675:return Ic;case 35676:return Lc;case 5124:case 35670:return Rc;case 35667:case 35671:return zc;case 35668:case 35672:return Bc;case 35669:case 35673:return Vc;case 5125:return Hc;case 36294:return Uc;case 36295:return Wc;case 36296:return Gc;case 35678:case 36198:case 36298:case 36306:case 35682:return Kc;case 35679:case 36299:case 36307:return qc;case 35680:case 36300:case 36308:case 36293:return Jc;case 36289:case 36303:case 36311:case 36292:return Yc}}var Zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ac(t.type)}},Qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xc(t.type)}},$c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},el=/(\w+)(\])?(\[|\.)?/g;function tl(e,t){e.seq.push(t),e.map[t.id]=t}function nl(e,t,n){let r=e.name,i=r.length;for(el.lastIndex=0;;){let a=el.exec(r),o=el.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){tl(n,l===void 0?new Zc(s,e,t):new Qc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new $c(s),tl(n,e)),n=e}}}var rl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);nl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function il(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var al=37297,ol=0;function sl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var cl=new W;function ll(e){Pt._getMatrix(cl,Pt.workingColorSpace,e);let t=`mat3( ${cl.elements.map(e=>e.toFixed(4))} )`;switch(Pt.getTransfer(e)){case ze:return[t,`LinearTransferOETF`];case Be:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ul(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+sl(e.getShaderSource(t),r)}return i}function dl(e,t){let n=ll(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var fl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function pl(e,t){let n=fl[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ml=new U;function hl(){return Pt.getLuminanceCoefficients(ml),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ml.x.toFixed(4)}, ${ml.y.toFixed(4)}, ${ml.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function gl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(yl).join(`
`)}function _l(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function vl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function yl(e){return e!==``}function bl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(e){return e.replace(Sl,Tl)}var wl=new Map;function Tl(e,t){let n=q[t];if(n===void 0){let e=wl.get(t);if(e!==void 0)n=q[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Cl(n)}var El=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(e){return e.replace(El,Ol)}function Ol(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function kl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Al={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function jl(e){return Al[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ml={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Nl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ml[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Pl={302:`ENVMAP_MODE_REFRACTION`};function Fl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Pl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Il={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ll(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Il[e.combine]||`ENVMAP_BLENDING_NONE`}function Rl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function zl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=jl(n),l=Nl(n),u=Fl(n),d=Ll(n),f=Rl(n),p=gl(n),m=_l(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(yl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(yl).join(`
`),_.length>0&&(_+=`
`)):(g=[kl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(yl).join(`
`),_=[kl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:pl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,dl(`linearToOutputTexel`,n.outputColorSpace),hl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(yl).join(`
`)),o=Cl(o),o=bl(o,n),o=xl(o,n),s=Cl(s),s=bl(s,n),s=xl(s,n),o=Dl(o),s=Dl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=il(i,i.VERTEX_SHADER,y),S=il(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ul(i,x,`vertex`),n=ul(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new rl(i,h),T=vl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,al)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ol++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Bl=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hl(e),t.set(e,n)),n}},Hl=class{constructor(e){this.id=Bl++,this.code=e,this.usedTimes=0}};function Ul(e){return e===1030||e===37490||e===36285}function Wl(e,t,n,r,i,a){let o=new cn,s=new Vl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=fs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=de&&!!i.anisotropyMap,ve=fe&&!!i.clearcoatMap,ye=fe&&!!i.clearcoatNormalMap,be=fe&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,Ne=!!i.alphaHash,F=!!i.extensions,Pe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Ul(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:_e,clearcoat:fe,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:Ne,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&Pt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:F&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(F&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=fs[t];n=$a.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new zl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Gl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Kl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ql(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Kl),r.length>1&&r.sort(t||ql),i.length>1&&i.sort(t||ql),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Yl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Jl,e.set(t,[i])):n>=r.length?(i=new Jl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Xl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new U,color:new Mn};break;case`SpotLight`:n={position:new U,direction:new U,color:new Mn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new Mn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new Mn,groundColor:new Mn};break;case`RectAreaLight`:n={color:new Mn,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function Zl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ql=0;function $l(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function eu(e){let t=new Xl,n=Zl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new Xt,o=new Xt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort($l);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Ql++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function tu(e){let t=new eu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function nu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new tu(e),t.set(n,[a])):r>=i.length?(a=new tu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ru=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,au=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ou=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],su=new Xt,cu=new U,lu=new U;function uu(e,t,n){let i=new hi,a=new H,s=new H,c=new Gt,l=new oo,u=new so,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new no({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:ru,fragmentShader:iu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Dr;y.setAttribute(`position`,new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new K(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){z(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new qt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new vi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Vs(a.x),p.map.depthTexture=new yi(a.x,m)):(p.map=new qt(a.x,a.y),p.map.depthTexture=new vi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),cu.setFromMatrixPosition(d.matrixWorld),e.position.copy(cu),lu.copy(e.position),lu.add(au[t]),e.up.copy(ou[t]),e.lookAt(lu),e.updateMatrixWorld(),n.makeTranslation(-cu.x,-cu.y,-cu.z),su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(su,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);i=p.getFrustum(),E(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new qt(a.x,a.y,{format:k,type:g})),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value=n.mapSize,_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value=n.mapSize,v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function du(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$e[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Mn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Gt().fromArray(ie),se=new Gt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(M&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function we(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function R(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Mn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:R}}function fu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ke(`canvas`)}function T(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?ze:Pt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),re(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function re(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=p.maxTextures&&z(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(e,t){let n=f.get(e);if(e.isVideoTexture&&F(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){be(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){be(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){xe(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let pe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},me={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},he={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ge(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,pe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,pe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,pe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,me[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,me[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,he[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function _e(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,M));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=le(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ve(r.start,t.width,4),c=ve(n.start,t.width,4);r.start<=o+1&&s===c&&ve(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function be(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=_e(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Pt.getPrimaries(Pt.workingColorSpace),n=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Pe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ge(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ye(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=cs(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data)}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=cs(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Fe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Fe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n){if(t.image.length!==6)return;let r=_e(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Pt.getPrimaries(Pt.workingColorSpace),o=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Pe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);ge(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Fe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Me(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Ne(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Me(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Me(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Ne(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Me(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Me(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function we(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,M)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else P(t.depthTexture,0);let a=i.__webglTexture,o=Me(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)we(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?we(t.__webglFramebuffer[0],e,0):we(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ce(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ce(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){let r=f.get(e);t!==void 0&&Se(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Te(e)}function De(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,te);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Ne(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Me(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ce(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Se(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ge(o,r),Se(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ge(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Se(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&Te(e)}function Oe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let ke=[],Ae=[];function je(e){if(e.samples>0){if(Ne(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(ke.length=0,Ae.length=0,ke.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(ke.push(a),Ae.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Ae)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,ke))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Me(e){return Math.min(p.maxSamples,e.samples)}function Ne(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function F(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Pt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function pu(e,t){function n(n,r=``){let i,a=Pt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var mu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new bi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new no({vertexShader:mu,fragmentShader:hu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new Va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new gu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new H,k=null,A=new Io;A.viewport=new Gt;let ee=new Io;ee.viewport=new Gt;let j=[A,ee],M=new Go,te=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getHandSpace()};function N(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}te=null,ne=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new vi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ae=new U,oe=new U;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=ee.near=A.near=t,M.far=ee.far=A.far=n,(te!==M.near||ne!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),te=M.near,ne=M.far),M.layers.mask=e.layers.mask|6,A.layers.mask=M.layers.mask&-5,ee.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;ce(M,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(M,A,ee):M.projectionMatrix.copy(A.projectionMatrix),le(e,M,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=it*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let P=null;function ue(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=j[n];o===void 0&&(o=new Io,o.layers.enable(n),o.viewport=new Gt,j[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new bi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}P&&P(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new us;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){P=e},this.dispose=function(){}}},vu=new Xt,yu=new W;yu.set(-1,0,0,0,1,0,0,0,1);function bu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Qa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(vu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(yu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function xu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Su=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cu=null;function wu(){return Cu===null&&(Cu=new Qr(Su,16,16,k,g),Cu.name=`DFG_LUT`,Cu.minFilter=o,Cu.magFilter=o,Cu.wrapS=t,Cu.wrapT=t,Cu.generateMipmaps=!1,Cu.needsUpdate=!0),Cu}var Tu=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new U,k=null,j=null,M=[],te=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=Re;let ce=0,le=0,P=null,ue=-1,de=null,fe=new Gt,pe=new Gt,me=null,he=new Mn(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new Gt(0,0,_e,ve),Ce=new Gt(0,0,_e,ve),we=!1,Te=new hi,Ee=!1,De=!1,Oe=new Xt,ke=new U,Ae=new Gt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw B(`WebGLRenderer: `+e.message),e}let Fe,Ie,I,Le,L,R,ze,Be,Ve,He,We,Ge,Ke,Je,Xe,Ze,$e,et,tt,nt,rt,it,at;function V(){Fe=new Us(F),Fe.init(),rt=new pu(F,Fe),Ie=new ys(F,Fe,e,rt),I=new du(F,Fe),Ie.reversedDepthBuffer&&h&&I.buffers.depth.setReversed(!0),ae=F.createFramebuffer(),oe=F.createFramebuffer(),se=F.createFramebuffer(),Le=new Ks(F),L=new Gl,R=new fu(F,Fe,I,L,Ie,rt,Le),ze=new Hs(N),Be=new ds(F),it=new _s(F,Be),Ve=new Ws(F,Be,Le,it),He=new Js(F,Ve,Be,it,Le),et=new qs(F,Ie,R),Xe=new bs(L),We=new Wl(N,ze,Fe,Ie,it,Xe),Ge=new bu(N,L),Ke=new Yl,Je=new nu(Fe),$e=new gs(N,ze,I,He,x,s),Ze=new uu(N,He,Ie),at=new xu(F,Le,Ie,I),tt=new vs(F,Fe,Le),nt=new Gs(F,Fe,Le),Le.programs=We.programs,N.capabilities=Ie,N.extensions=Fe,N.properties=L,N.renderLists=Ke,N.shadowMap=Ze,N.state=I,N.info=Le}V(),S!==1009&&(ne=new Xs(S,t.width,t.height,o,r,i));let ot=new _u(N,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){if(ot.isPresenting){z(`WebGLRenderer: Can't change size while VR device is presenting.`);return}_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),$e.dispose(),Ke.dispose(),Je.dispose(),L.dispose(),ze.dispose(),He.dispose(),it.dispose(),at.dispose(),We.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),Ye(`WebGLRenderer: Context Lost.`),re=!0}function ct(){Ye(`WebGLRenderer: Context Restored.`),re=!1;let e=Le.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;V(),Le.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function lt(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),L.remove(e)}function ft(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Be.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,n),e.side=0,e.needsUpdate=!0,wt(e,t,n),e.side=2):wt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),j=Je.get(n),j.init(t),te.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];pt(a,n,e),r.add(a)}else pt(t,n,e),r.add(t)}}),j=te.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){L.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new us;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=ne!==null&&(P===null||n)&&ne.begin(N,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,P),j=Je.get(e,te.length),j.init(t),j.state.textureUnits=R.getTextureUnits(),te.push(j),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,Ue,t.reversedDepth),De=this.localClippingEnabled,Ee=Xe.init(this.clippingPlanes,De),k=Ke.get(e,M.length),k.init(),M.push(k),ot.enabled===!0&&ot.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,N.sortObjects)}yt(e,t,0,N.sortObjects),k.finish(),N.sortObjects===!0&&k.sort(be,xe,t.reversedDepth),Me=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Me&&$e.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Xe.beginShadows();let i=j.state.shadowsArray;if(Ze.render(i,e,t),Ee===!0&&Xe.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Me&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(k,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Me&&$e.render(e),bt(k,e,t)}P!==null&&le===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),it.resetDefaultState(),ue=-1,de=null,te.pop(),te.length>0?(j=te[te.length-1],R.setTextureUnits(j.state.textureUnits),Ee===!0&&Xe.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,M.pop(),k=M.length>0?M[M.length-1]:null,ie!==null&&ie.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Te.intersectsSprite(e)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let t=He.update(e),i=e.material;i.visible&&k.push(e,t,i,n,Ae.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Te.intersectsObject(e))){let t=He.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ae.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&k.push(e,t,s,n,Ae.z,o)}}else i.visible&&k.push(e,t,i,n,Ae.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Ee===!0&&Xe.setGlobalState(N.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(he),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),Me&&$e.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Ee===!0&&Xe.setGlobalState(N.clippingPlanes,r),St(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(he,ge),p!==void 0&&(r.viewport=p),N.toneMapping=f}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=We.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Et(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=rl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function H(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=je),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=j.state.lights;if(Ee===!0&&(De===!0||e!==de)){let t=e===de&&r.id===ue;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ue&&(ue=r.id,C=!0),v.needsLights){let e=H(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,R),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,R),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,R)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,R),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,R),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&et.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=wu()),C){if(T.setValue(F,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Ot(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ye,ve,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}rl.upload(F,Tt(v),E,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(rl.upload(F,Tt(v),E,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,x),at.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ae),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(c)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ie.textureTypeReadable(l)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ie.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0);let f=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,f);let p=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qe(F,p,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(d),F.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,oe),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}},Eu=globalThis.document?.documentElement?.dataset??{},Du=Eu.portrait||`./assets/mother-baby.png`,Ou=Eu.customerMoods||`data:image/webp;base64,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`,ku=class extends Pn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new xi;e.deleteAttribute(`uv`);let t=new io({side:1}),n=new io,r=new Ro(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new K(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new si(e,n,6),o=new wn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new K(e,Au(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new K(e,Au(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new K(e,Au(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new K(e,Au(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new K(e,Au(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new K(e,Au(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Au(e){return new ao({color:0,emissive:16777215,emissiveIntensity:e})}var ju=new U;function Mu(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;ju.copy(t),ju[r]=0,ju.normalize();let l=.5*o/(o+s),u=1-ju.angleTo(e)/c;return Math.sign(ju[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Nu=class e extends xi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new U,c=new U,l=new U(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new U,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Mu(m,c,`z`,`y`,i,n),f[a+1]=1-Mu(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Mu(m,c,`z`,`y`,i,n),f[a+1]=1-Mu(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Mu(m,c,`x`,`z`,i,e),f[a+1]=Mu(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Mu(m,c,`x`,`z`,i,e),f[a+1]=1-Mu(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Mu(m,c,`x`,`y`,i,e),f[a+1]=1-Mu(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Mu(m,c,`x`,`y`,i,e),f[a+1]=1-Mu(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function Pu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Dr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Fu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Fu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Fu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new pr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Iu={coffee:{x:-5,z:4.75,serviceZ:3.1},cake:{x:-2,z:4.75,serviceZ:3.1},toast:{x:1,z:4.75,serviceZ:3.1},"toast-pickup":{x:4,z:4.75,serviceZ:3.1}},Lu=[-4.5,-.3,3.9],Ru={x:5.6,z:-3.85},zu={minX:5.18,maxX:6.02,minZ:-4.25,maxZ:-3.38},Bu={x:Ru.x,z:Ru.z+.48},Vu=2.7,Hu={left:-10,right:10,nearZ:-7.95,farZ:-8.9,maxPassers:4},Uu=[2.5,19.4,22],Wu=[0,2.6,0];function Gu(){let t=new Tn,n={},r=[],i=(e,t={})=>new io({color:e,roughness:.72,...t}),a={cream:i(`#fff1d7`),sage:i(`#8ba99b`),dark:i(`#395c51`),wood:i(`#c88c54`),oak:i(`#e5b67d`),peach:i(`#eeac94`),white:i(`#fff9e9`),gold:i(`#cda45e`,{metalness:.65,roughness:.3}),soil:i(`#584533`),green:i(`#698458`),leaf:i(`#86a568`),glass:i(`#d9eee7`,{transparent:!0,opacity:.2,roughness:.1}),black:i(`#34413c`)};function o(e,t,n,r=0,i=0,a=0){let o=new K(t,n);return o.position.set(r,i,a),o.castShadow=!0,o.receiveShadow=!0,e.add(o),o}function s(e,t,n,r,i,a,s,c,l=.055){return o(e,new Nu(t,n,r,2,l),i,a,s,c)}function c(e,t,n,r,i,a,s,c,l=32){return o(e,new wi(t,n,r,l),i,a,s,c)}function l(e,t,n,r,i,a,s=[1,1,1]){let c=o(e,new Ga(t,16,12),n,r,i,a);return c.scale.set(...s),c}function u(e,r,i,a,o,s){let c=new Tn;return c.userData.target=e,t.add(c),n[e]={position:new U(r,i,a),service:new U(o,0,s)},c}s(t,14.35,.36,11.35,a.cream,0,-.25,0,.15);let d=new Nu(1.965,.075,.575,1,.009),f=[[],[]],p=new Xt;for(let e=-5.2;e<5.4;e+=.61)for(let t=-6;t<7;t+=2)f[+(Math.round(e*10+t)%3==0)].push([t,-.04,e]);f.forEach((e,n)=>{let r=new si(d,n?a.wood:a.oak,e.length);e.forEach((e,t)=>{p.makeTranslation(...e),r.setMatrixAt(t,p)}),r.receiveShadow=!0,r.instanceMatrix.needsUpdate=!0,t.add(r)});for(let[e,n]of[[-6.875,.55],[-2.3,.7],[2.3,.7],[6.875,.55]])s(t,n,4.3,.28,a.cream,e,2.1,-5.6,.045),s(t,n+.06,.12,.36,a.oak,e,.11,-5.6,.025);s(t,14.3,.4,.31,a.cream,0,4.1,-5.6,.055);for(let e of[-4.625,4.625])s(t,3.95,.91,.25,a.cream,e,.455,-5.6,.035),s(t,3.95,.54,.035,a.sage,e,.36,-5.447,.025),s(t,4.15,.13,.5,a.white,e,1,-5.57,.05);s(t,.24,.64,11.15,a.cream,-7,.32,0,.05),s(t,.32,.09,11.15,a.oak,-7,.685,0,.035);for(let e of[-5.6,-.9,4.65])s(t,.23,2.7,.23,a.cream,-7,1.35,e,.035);let m=(e,t)=>{let n=Iu[e];return u(e,n.x,t,n.z+.2,n.x,n.serviceZ)},h=m(`coffee`,2.15),g=m(`cake`,2),_=m(`toast`,2),v=m(`toast-pickup`,1.37);s(h,1.45,.88,.81,a.cream,-4.9,1.63,-3.5,.12),s(h,1.25,.37,.08,a.black,-4.9,1.47,-3.05),s(h,1.5,.07,.88,a.gold,-4.9,1.22,-3.45);for(let e of[-5.22,-4.65])c(h,.14,.14,.19,a.gold,e,1.6,-3.03),s(h,.08,.08,.3,a.dark,e,1.59,-2.88),c(h,.115,.08,.18,a.white,e,1.31,-3.06),c(h,.16,.13,.11,a.white,e,2.12,-3.5);c(g,.79,.77,.1,a.oak,-2.1,1.25,-3.37),c(g,.39,.4,.38,a.peach,-2.1,1.48,-3.38),c(g,.4,.4,.07,a.white,-2.1,1.69,-3.38);for(let e=0;e<6;e++){let t=e*Math.PI/3;l(g,.065,i(`#bc6461`),-2.1+Math.cos(t)*.25,1.77,-3.38+Math.sin(t)*.25)}c(g,.65,.65,.78,a.glass,-2.1,1.65,-3.37),l(g,.07,a.gold,-2.1,2.09,-3.37),s(_,1.42,.75,.78,a.cream,.7,1.57,-3.5,.12),s(_,1.11,.47,.05,a.black,.7,1.52,-3.08,.04),s(_,.87,.32,.05,a.glass,.7,1.5,-3.045,.03),s(_,.76,.045,.1,a.gold,.7,1.8,-2.98,.02);let y=l(_,.045,i(`#9ca687`,{emissive:`#ffcc65`,emissiveIntensity:0}),1.3,1.84,-3.08);y.name=`toast-indicator`,y.userData.dynamic=!0;let b=new Tn;b.name=`ready-toast`,b.userData.dynamic=!0,b.userData.readyCount=0,b.visible=!1,v.add(b);let x=[];for(let e=0;e<Lu.length;e++){let t=Lu[e],n=u(`table`+e,t,1.7,1.1,t,2.35);c(n,.78,.78,.12,a.oak,t,.86,1.1),c(n,.11,.14,.77,a.sage,t,.42,1.1),c(n,.43,.45,.08,a.dark,t,.07,1.1),s(n,.75,.14,.65,a.peach,t,.51,.08,.14),s(n,.73,.62,.14,a.peach,t,.86,-.25,.12);for(let e of[-.25,.25])for(let r of[-.15,.25])c(n,.035,.04,.45,a.oak,t+e,.25,.08+r);c(n,.11,.08,.22,a.white,t+.42,1.03,1.13),l(n,.12,a.peach,t+.42,1.2,1.13,[1,.7,1]),s(n,.22,.015,.3,a.cream,t-.49,.93,1.32,.01)}let S=u(`baby`,Ru.x,1.2,Ru.z,Bu.x,Bu.z),C=c(S,1.38,1.38,.035,a.peach,5,.025,3.7);C.scale.z=.85,c(S,1.15,1.15,.04,a.cream,5,.047,3.7).scale.z=.85,s(S,.6,.2,.55,a.sage,5.8,.19,3.95,.13),s(S,.55,.19,.48,a.peach,4.42,.18,4.18,.12);let w=new Tn;w.position.set(5,0,3.7),S.add(w),s(w,2.62,.36,.13,a.sage,0,.24,-1.1,.06),s(w,2.65,.095,.16,a.cream,0,.445,-1.1,.045);for(let e of[-1,1]){s(w,.13,.36,2.18,a.cream,e*1.31,.24,0,.06),s(w,.16,.095,2.18,a.sage,e*1.31,.445,0,.045),s(w,.64,.36,.13,a.sage,e*.98,.24,1.1,.06),s(w,.65,.095,.16,a.cream,e*.98,.445,1.1,.045);for(let t of[-1.1,1.1])c(w,.085,.085,.47,a.peach,e*1.31,.255,t,12);c(w,.065,.065,.47,a.peach,e*.685,.255,1.1,12)}for(let e=0;e<3;e++){let t=s(S,.2,.2,.2,[a.sage,a.peach,a.oak][e],4.4+e*.24,.14,3.02,.025);t.rotation.y=e*.5}function T(e,n,r=1){let i=new Tn;i.position.set(e,0,n),i.scale.setScalar(r),t.add(i),c(i,.28,.2,.44,a.white,0,.23,0),c(i,.24,.24,.035,a.soil,0,.46,0);for(let e=0;e<8;e++){let t=e*2.4,n=.65+e*.08;c(i,.012,.014,n-.45,a.dark,Math.cos(t)*.08,n/2+.225,Math.sin(t)*.08,6),l(i,.25,e%2?a.green:a.leaf,Math.cos(t)*.22,n,Math.sin(t)*.22,[.7,1.6,.32]).rotation.set(Math.cos(t)*.7,t,Math.sin(t)*.5)}}T(-6.25,3.85,1.8),T(-8.2,-4.1,1.4),T(-6.3,-4.6,.95);function E(){let n=document.createElement(`canvas`);n.width=128,n.height=512;let u=n.getContext(`2d`);u.fillStyle=`#f3d3a7`,u.fillRect(0,0,128,512);let d=917,f=()=>(d=d*16807%2147483647,(d-1)/2147483646);for(let e=0;e<150;e++){let t=f()*128;u.strokeStyle=`rgba(126,77,38,`+(.02+f()*.085)+`)`,u.lineWidth=.4+f()*.9,u.beginPath(),u.moveTo(t,0);for(let n=0;n<520;n+=16)u.lineTo(t+Math.sin(n*.015+e)*(.8+f()*3),n);u.stroke()}let p=new _i(n);p.colorSpace=Re,p.wrapS=p.wrapT=e,p.anisotropy=4,a.oak.map=p,a.oak.needsUpdate=!0,a.wood.map=p,a.wood.needsUpdate=!0;let m=i(`#819da0`),y=i(`#75925f`,{roughness:.9}),C=i(`#e9ddc8`),w=i(`#a9bd84`);function T(e,n,r,i,o,c=!1){let l=new Tn;l.position.set(e,n,-5.64),l.rotation.y=-o*1.2,t.add(l);let u=-o*r/2;for(let e of[0,-o*r])s(l,.095,i,.1,a.white,e,i/2,0,.02);for(let e of[.055,i-.055])s(l,r,.11,.1,a.white,u,e,0,.02);s(l,.045,i-.15,.065,a.white,u,i/2,0,.012),s(l,r-.1,.055,.065,a.white,u,i*.55,0,.012),c&&(s(l,r-.13,.45,.08,a.sage,u,.31,0,.025),s(l,.045,.2,.075,a.gold,-o*(r-.15),1.05,.07,.018))}for(let e of[-4.625,4.625]){for(let n of[-1,1]){s(t,.14,2.93,.17,a.oak,e+n*1.94,2.46,-5.54,.025),T(e+n*1.87,1.09,1.82,2.7,n),s(t,.3,2.61,.12,a.white,e+n*1.86,2.62,-5.22,.085);for(let r=0;r<3;r++)s(t,.035,2.49,.04,a.cream,e+n*1.86+(r-1)*.085,2.62,-5.139,.015);s(t,.34,.075,.16,a.peach,e+n*1.86,1.96,-5.21,.025)}s(t,4.02,.14,.18,a.oak,e,3.89,-5.54,.035),c(t,.022,.022,4.28,a.gold,e,4.035,-5.22).rotation.z=Math.PI/2}for(let e of[-1,1])s(t,.16,3.95,.21,a.oak,e*1.96,1.98,-5.53,.028),T(e*1.87,.035,1.78,3.76,e,!0);s(t,4.08,.16,.22,a.oak,0,3.93,-5.53,.035),s(t,4.12,.07,.85,C,0,-.02,-5.71,.08),s(t,21.3,.19,8.45,y,0,-.17,-9.66,.2),s(t,2.5,.16,11.4,y,-8.25,-.185,-.02,.16),s(t,21.1,.06,2.1,C,0,-.045,-8.45,.12),s(t,2.25,.06,2.24,C,0,-.045,-6.51,.09);for(let e=-9.75;e<10;e+=1.3)s(t,.018,.009,2.06,a.cream,e,-.011,-8.45,.002);s(t,21,.009,.018,a.cream,0,-.011,-8.45,.002);for(let e of[-6.15,-6.9])s(t,2.19,.009,.018,a.cream,0,-.011,e,.002);for(let e of[-5.85,5.85])s(t,9.4,.075,.1,a.white,e,-.035,-7.38,.025);s(t,21.1,.075,.1,a.white,0,-.035,-9.52,.025);for(let e of[.3,.64])s(t,20.9,.085,.075,a.white,0,e,-13.35,.018);for(let e=-10.35;e<10.5;e+=1.45)s(t,.1,.85,.11,a.white,e,.365,-13.35,.025),l(t,.085,a.white,e,.815,-13.35,[1,.75,1]);for(let[e,n,r]of[[-6.1,-11.55,1],[6.2,-11.7,1.08]]){c(t,.11*r,.18*r,2.4*r,a.wood,e,1.1*r,n,9);for(let i=0;i<5;i++){let s=i*2.4;o(t,new Ba(.95,1),i%2?a.leaf:w,e+Math.cos(s)*.65*r,(2.45+Math.sin(i)*.35)*r,n+Math.sin(s)*.6*r).scale.set(1.15*r,1.08*r,r)}}for(let[e,n]of[[-3.05,-10.6],[3.15,-10.65],[-8.25,-11.55],[8.35,-11.4]]){let r=c(t,.74,.78,.08,a.green,e,-.055,n,10);r.scale.z=.68;for(let r=0;r<5;r++){let i=r*2.4,s=e+Math.cos(i)*.42,u=n+Math.sin(i)*.32,d=.24+r%3*.075;c(t,.013,.018,d,a.green,s,d/2,u,5);for(let e=0;e<4;e++){let n=e*Math.PI/2;o(t,new Ba(.078,0),r%2?a.peach:a.white,s+Math.cos(n)*.065,d,u+Math.sin(n)*.065)}l(t,.039,a.gold,s,d+.025,u)}}for(let e=0;e<4;e++)c(h,.13,.12,.045,a.white,-5.83,1.23+e*.047,-3.02),c(h,.085,.07,.16,a.white,-4.17,1.28+e*.115,-3.67);for(let e of[-5.22,-4.66]){let t=c(h,.1,.1,.025,a.gold,e,1.87,-3.068);t.rotation.x=Math.PI/2;let n=c(h,.071,.071,.03,a.white,e,1.87,-3.047);n.rotation.x=Math.PI/2,s(h,.01,.058,.015,a.dark,e+.015,1.88,-3.02,.002)}s(h,.74,.022,.35,a.dark,-4.9,1.21,-2.99,.018);for(let e=0;e<7;e++)s(h,.013,.025,.3,a.gold,-5.18+e*.09,1.225,-2.99,.003);c(h,.18,.2,.31,a.gold,-6.03,1.37,-3.58),l(h,.16,a.gold,-6.03,1.535,-3.58,[1,.32,1]),l(h,.038,a.dark,-6.03,1.6,-3.58),s(g,.61,.02,.45,a.cream,-3.18,1.21,-3.03,.03),c(g,.25,.25,.035,a.white,-3.18,1.24,-3.03);for(let e=0;e<5;e++){let t=(e-2)*.42,n=l(g,.105,a.oak,-3.18+Math.sin(t)*.24,1.32,-3.03+Math.cos(t)*.09,[.65,1,1.25]);n.rotation.y=-t}for(let e=0;e<9;e++){let t=e*Math.PI*2/9;l(g,.06,a.white,-2.1+Math.cos(t)*.37,1.72,-3.38+Math.sin(t)*.37,[1,.8,1])}s(v,1.95,.025,1.02,a.cream,4,1.206,-3.43,.08);let E=c(v,.88,.82,.06,a.white,4,1.26,-3.42);E.scale.z=.59;let D=o(v,new Ka(.78,.016,8,40),a.gold,4,1.296,-3.42);D.rotation.x=Math.PI/2,D.scale.y=.59;for(let e=0;e<3;e++){let t=new Tn;t.name=`ready-toast-${e+1}`,t.userData.dynamic=!0,t.userData.food=`toast`,t.visible=!1,t.position.set(4+(e-1)*.46,1.31,-3.42+(e===1?-.1:.08)),t.rotation.y=(e-1)*.11,b.add(t),x.push(t),s(t,.44,.065,.49,a.wood,0,0,0,.07),s(t,.375,.022,.42,a.oak,0,.043,0,.055);for(let e=0;e<3;e++){let n=s(t,.105,.035,.315,a.leaf,(e-1)*.095,.072,0,.042);n.rotation.y=-.22}for(let[e,n]of[[-.1,-.06],[.075,.1],[.11,-.12]])l(t,.013,a.dark,e,.098,n,[1,.45,.6])}for(let e=0;e<3;e++)c(_,.11,.11,.28,[a.glass,a.peach,a.glass][e],-.25+e*.27,1.35,-3.94),c(_,.115,.115,.045,a.oak,-.25+e*.27,1.515,-3.94);let O=l(S,.155,m,5.75,.185,3.05);O.rotation.z=.3;let k=o(S,new Ka(.17,.038,9,24),a.gold,5.02,.1,4.62);k.rotation.x=Math.PI/2;for(let e=0;e<3;e++){let t=s(S,.22,.21,.22,[a.oak,a.peach,a.sage][e],5.69,.13+e*.205,4.53,.035);t.rotation.y=.1+e*.2}l(S,.135,a.oak,4.06,.2,3.6,[1.2,.85,.9]),l(S,.085,a.oak,4.14,.33,3.6),l(S,.046,a.peach,4.215,.32,3.6,[1.1,.45,.6]),l(S,.011,a.dark,4.15,.351,3.668);for(let e=0;e<4;e++){let t=l(h,.045,i(`#fff9e9`,{transparent:!0,opacity:.27,depthWrite:!1}),-4.62,2.1+e*.16,-3.45,[.8,1.9,.8]);t.castShadow=!1,r.push(n=>{t.position.y=2.1+(n*.22+e*.16)%.72,t.position.x=-4.62+Math.sin(n+e)*.035,t.material.opacity=.19*(1-(t.position.y-2.1)/.72)})}}E();for(let[e,t,n]of[[`coffee`,h,-4.9],[`cake`,g,-2.1],[`toast`,_,.7],[`toast-pickup`,v,4]]){let r=Iu[e];t.position.set(r.x-n,0,r.z+3.5)}S.position.set(Ru.x-5,0,Ru.z-3.7);let D=-.15,O=Iu.cake.z;s(t,12.399999999999999,1.02,1.32,a.sage,D,.52,O,.09),s(t,12.7,.17,1.6,a.white,D,1.1,O,.1),s(t,12.37,.05,.055,a.gold,D,1.005,O+.685,.015),s(t,12.319999999999999,.09,.04,a.dark,D,.085,O+.672,.01);for(let e of Object.keys(Iu)){let n=Iu[e].x;s(t,2.78,.76,.045,a.dark,n,.52,O+.673,.055),s(t,2.65,.63,.035,a.sage,n,.52,O+.7,.04),s(t,.36,.035,.07,a.gold,n,.79,O+.736,.018)}function k(e,t=!1){e.updateWorldMatrix(!0,!0);let n=new Xt().copy(e.matrixWorld).invert(),r=new Map,i=[];function a(o){if(!(o!==e&&(o.userData.dynamic||t&&o.userData.target))){if(o.isMesh&&!o.isInstancedMesh&&!o.material.transparent){let e=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();e.applyMatrix4(new Xt().multiplyMatrices(n,o.matrixWorld));let t=o.material.uuid;r.has(t)||r.set(t,{material:o.material,geometries:[]}),r.get(t).geometries.push(e),i.push(o)}for(let e of o.children)a(e)}}a(e);for(let e of i)e.removeFromParent();for(let t of r.values()){let n=Pu(t.geometries,!1);if(n){let r=new K(n,t.material);r.castShadow=!0,r.receiveShadow=!0,e.add(r)}for(let e of t.geometries)e.dispose()}}for(let e of x)k(e);for(let e of t.children.filter(e=>e.userData.target))k(e);return k(t,!0),{group:t,targets:n,update(e,t){for(let n of r)n(e,t)},setStation(e,t){if(e!==`toast`&&e!==`toast-pickup`)return;let n=typeof t==`string`?t:t?.state,r=typeof t==`string`?+(t===`ready`):t?.ready,i=Number.isFinite(r)?Math.max(0,Math.min(3,Math.trunc(r))):0;b.visible=i>0,b.userData.readyCount=i,x.forEach((e,t)=>{e.visible=t<i});let a=n===`cooking`;y.material.emissiveIntensity=a?.6:i?1.2:0,y.material.color.set(a?`#d57e63`:i?`#f8c66c`:`#9ca687`)}}}var Ku=new Ga(1,24,16),qu=new Ga(1,12,8),Ju=new Map;function Yu(e,t=.79){let n=`${e}/${t}`;return Ju.has(n)||Ju.set(n,new io({color:e,roughness:t})),Ju.get(n)}var Y={skin:Yu(`#edb593`),blush:Yu(`#df947f`),ear:Yu(`#d4937c`),lip:Yu(`#b96c58`),hair:Yu(`#593729`,.65),hairLight:Yu(`#82543a`,.69),hairDark:Yu(`#3d2a23`),green:Yu(`#84987a`),greenDark:Yu(`#687e66`),cream:Yu(`#fff0d5`),seam:Yu(`#dcccb0`),peach:Yu(`#e9a083`),white:Yu(`#fffdf1`,.42),iris:Yu(`#916133`,.43),black:Yu(`#292522`,.48),shoe:Yu(`#9f7451`),sole:Yu(`#735039`),gold:Yu(`#c6a267`,.4),mouth:Yu(`#873f39`)};function X(e,t,n,r,i,a,o,s,c=0){let l=new K(Math.max(a,o,s)<.04?qu:Ku,t);return l.position.set(n,r,i),l.scale.set(a,o,s),l.rotation.z=c,l.castShadow=!0,l.receiveShadow=!0,e.add(l),l}function Xu(e,t,n,r,i=!1){let a=new K(new qa(new Fi(t.map(e=>new U(...e)),i),Math.max(12,t.length*5),n,6,i),r);return a.castShadow=!0,a.receiveShadow=!0,e.add(a),a}function Zu(e,t,n,r,i,a,o){let s=new K(new Si(a,Math.max(.001,o-a*2),5,12),t);return s.position.set(n,r,i),s.castShadow=!0,s.receiveShadow=!0,e.add(s),s}function Qu(e,t,n,r=48){let i=[],a=[],o=new Fi(t.map(e=>new U(...e)));for(let e=0;e<=28;e++){let t=o.getPoint(e/28);for(let n=0;n<=r;n++){let o=n/r*Math.PI*2,s=1+.018*Math.cos(o*12)*(1-e/28);if(i.push(Math.sin(o)*t.x*s,t.y,Math.cos(o)*t.z*s),e<28&&n<r){let t=e*(r+1)+n;a.push(t,t+1,t+r+1,t+1,t+r+2,t+r+1)}}}let s=new Dr;s.setAttribute(`position`,new G(i,3)),s.setIndex(a),s.computeVertexNormals();let c=new K(s,n);return c.castShadow=!0,c.receiveShadow=!0,e.add(c),c}function $u(e,t,n,r){let i=new na;t.forEach((e,t)=>t?i.lineTo(e[0],e[1]):i.moveTo(e[0],e[1])),i.closePath();let a=new K(new Ua(i),n);return a.position.z=r,a.castShadow=!0,e.add(a),a}function ed(e){let t=new Map;for(let n of[...e.children])if(n.isMesh){n.updateMatrix();let r=n.geometry.clone().applyMatrix4(n.matrix);if(r.deleteAttribute(`uv`),r.index){let e=r.toNonIndexed();r.dispose(),t.has(n.material)||t.set(n.material,[]),t.get(n.material).push(e)}else t.has(n.material)||t.set(n.material,[]),t.get(n.material).push(r);e.remove(n)}for(let[n,r]of t){let t=new K(Pu(r),n);t.castShadow=!0,t.receiveShadow=!0,e.add(t),r.forEach(e=>e.dispose())}}function td(e,t=Y.skin,n=Y.hair,r=!1){let i=new Tn;e.add(i);let a=r?new Tn:i;r&&(a.name=`customer-face`,i.add(a));let o=[],s=[];X(i,t,0,0,0,.177,.218,.164),X(i,t,-.081,-.078,.075,.089,.083,.083),X(i,t,.081,-.078,.075,.089,.083,.083);for(let e of[-1,1]){X(i,t,e*.175,-.014,-.004,.033,.053,.025),X(i,Y.ear,e*.19,-.013,.012,.012,.027,.01);let n=X(a,r?Yu(t===Y.skin?`#d9a18b`:`#b88063`):Y.blush,e*.102,-.065,.157,.03,.012,.0035);n.name=e<0?`cheek-left`:`cheek-right`,s.push(n)}let c=[];for(let e of[-1,1]){let t=new Tn;t.position.set(e*.069,.025,.15),a.add(t),c.push(t),t.name=e<0?`eye-left`:`eye-right`,X(t,Y.white,0,0,0,.043,.026,.015),X(t,Y.iris,e*-.002,.001,.013,.018,.02,.005),X(t,Y.black,e*-.002,.002,.018,.009,.012,.003),X(t,Y.white,-.006,.009,.021,.0042,.0042,.002),Xu(t,[[-.041,.002,.006],[-.023,.025,.008],[0,.029,.008],[.025,.021,.008],[.042,.002,.005]],.0025,n);for(let r=0;r<3;r++){let i=e*(.025+r*.006),a=.021-r*.006;Xu(t,[[i,a,.009],[i+e*.005,a+.005,.013],[i+e*.009,a+.008,.013]],.0017,n)}if(r){let t=new Tn;t.name=e<0?`eyebrow-left`:`eyebrow-right`,t.position.set(e*.08,.083,.149),a.add(t),o.push(t),Xu(t,[[e*.031,-.006,-.014],[e*.001,.005,.002],[e*-.035,-.004,.006]],.007,n)}else Xu(i,[[e*.111,.077,.135],[e*.081,.088,.151],[e*.045,.079,.155]],.008,n);ed(t)}X(i,t,0,-.01,.156,.018,.04,.019),X(i,t,0,-.035,.177,.027,.019,.025);let l;if(r){let e=new Tn;e.name=`mouth`,e.position.set(0,-.096,.1545),a.add(e);let n=Yu(t===Y.skin?`#af7060`:`#915442`,.9),r=Xu(e,[[-.034,.003,-.005],[0,-.0035,.004],[.034,.003,-.005]],.0035,n);r.name=`mouth-curve`;let i=new qa(new Fi([new U(-.034,-.006,-.005),new U(0,.0035,.004),new U(.034,-.006,-.005)]),15,.0035,6,!1);r.geometry.morphAttributes.position=[i.getAttribute(`position`).clone()],r.geometry.morphAttributes.normal=[i.getAttribute(`normal`).clone()],i.dispose(),r.updateMorphTargets();let c=X(e,n,0,-.001,-.002,.023,.004,.002),u=X(e,Y.white,0,.001,.002,.026,.003,.002);c.name=`mouth-interior`,u.name=`mouth-teeth`,c.visible=!1,u.visible=!1,l={root:a,brows:o,cheeks:s,mouth:e,lip:r,opening:c,teeth:u}}else Xu(i,[[-.04,-.091,.151],[0,-.103,.164],[.04,-.091,.151]],.007,Y.lip),Xu(i,[[-.03,-.092,.158],[0,-.098,.169],[.031,-.092,.157]],.0035,Y.white);return{head:i,eyes:c,expression:l}}var nd=[`browHeight`,`browTilt`,`asymmetry`,`eyeOpen`,`eyeTilt`,`curve`,`width`,`open`,`cheek`,`headTilt`,`headPitch`,`mouthSkew`,`mouthShift`],rd=[{relaxed:[0,-.025,0,1,0,.04,.95,0,0,.012,0],curious:[.006,-.085,.003,1.025,-.016,.25,.92,0,.03,.034,-.009],impatient:[.003,-.2,.002,.91,-.03,.61,.86,0,.07,.046,.01],urgent:[.005,-.3,.002,.84,-.04,.89,.8,0,.12,.056,.02],pleased:[.006,-.085,0,.94,-.016,0,1.01,0,.16,.021,-.014]},{relaxed:[.002,.025,.002,.97,.01,.16,.91,0,0,-.01,0],curious:[.007,.045,.008,1.02,.012,.4,.95,0,.01,-.026,-.011],impatient:[-.004,.21,.004,.84,.065,.77,.89,0,.03,-.013,.012],urgent:[-.009,.33,.002,.73,.1,1,.84,0,.05,-.006,.028],pleased:[.007,-.055,.003,.95,-.012,.02,.98,0,.09,-.016,-.013]},{relaxed:[.003,-.06,.004,1.03,-.021,0,1.03,0,.07,.025,-.007],curious:[.009,-.1,.011,1.07,-.026,.22,.8,0,.1,.057,-.016],impatient:[.002,.075,.008,.94,.026,.53,.72,0,.35,.048,.008],urgent:[-.002,.17,.006,.85,.048,.69,.65,0,.58,.034,.02],pleased:[.009,-.11,.003,.91,-.029,0,1.08,0,.24,.039,-.02]},{relaxed:[-.001,.005,0,.94,0,.18,.95,0,0,-.004,.004],curious:[.005,-.022,.004,.98,-.008,.33,.95,0,.01,-.014,-.004],impatient:[-.002,.085,.001,.83,.021,.5,1,0,.02,-.007,.025],urgent:[-.004,.15,0,.76,.037,.68,1.04,0,.04,0,.038],pleased:[.004,-.05,.001,.94,-.013,.04,.98,0,.08,-.009,-.01]}],id=[[0,0,0,0,0],[.0015,.009,-.003,.025,8e-4],[-.0015,-.009,.003,-.025,-8e-4]];function ad(e){return[...rd[e].relaxed,0,0]}function od(e,t,n,r=1,i=0){let[a,o,s,c,l,u,d,f,p]=n;e.brows.forEach((e,t)=>{let n=t?1:-1;e.position.y=.083+a+n*s,e.rotation.z=n*o}),t.forEach((e,t)=>{e.scale.y=c*r,e.rotation.z=(t?1:-1)*l}),e.lip.morphTargetInfluences[0]=u,e.mouth.scale.x=d,e.mouth.scale.y=1-.035*Math.abs(i),e.mouth.rotation.z=n[11],e.mouth.position.x=n[12]+.0011*i,e.mouth.position.y=-.096-8e-4*Math.abs(i),e.opening.scale.y=.004*f,e.opening.visible=!1,e.teeth.visible=!1,e.cheeks.forEach((e,t)=>{e.position.x=(t?1:-1)*(.102+.006*p);let n=Math.max(0,i*(t?1:-1));e.scale.y=.012*(1+.4*p+.04*n),e.scale.z=.0035*(1+p+.08*n)})}function sd(e,t,n){let r=[],i=[];for(let e=0;e<=16;e++)for(let t=0;t<=40;t++){let n=t/40*Math.PI*2,a=1.07+.99*((1-Math.cos(n))/2)**.6,o=.005+e/16*a;if(r.push(Math.sin(n)*Math.sin(o)*.183,Math.cos(o)*.226,Math.cos(n)*Math.sin(o)*.171),e<16&&t<40){let n=e*41+t;i.push(n,n+40+1,n+1,n+1,n+40+1,n+40+2)}}let a=new Dr;a.setAttribute(`position`,new G(r,3)),a.setIndex(i),a.computeVertexNormals();let o=new K(a,n);o.castShadow=!0,e.add(o);for(let t=0;t<7;t++){let r=t*.013;Xu(e,[[.115+r*.3,.158-r*.4,.061],[.05+r*.1,.213-r*.65,.096+r*.45],[-.065,.18-r*.7,.132+r*.3],[-.159,.065-r*.5,.089]],.017-t*7e-4,n),t%2==0&&Xu(e,[[.111+r*.3,.17-r*.4,.07],[.048,.224-r*.65,.102+r*.45],[-.061,.194-r*.7,.14+r*.3],[-.158,.078-r*.5,.1]],.0028,Y.hairLight)}if(t===`bun`){X(e,n,.022,.178,-.134,.099,.089,.086);for(let t=0;t<6;t++){let r=t*Math.PI/3;X(e,n,.022+Math.sin(r)*.064,.178+Math.cos(r)*.062,-.164,.033,.043,.044,-r)}Xu(e,[[-.178,-.007,-.032],[-.177,.103,-.019],[-.1,.205,-.014],[0,.236,-.008],[.109,.203,-.014],[.179,.074,-.031]],.016,Y.cream),Xu(e,[[-.16,.084,.045],[-.173,-.023,.051],[-.151,-.127,.058],[-.175,-.165,.077]],.013,n),Xu(e,[[.164,.041,.04],[.176,-.066,.064],[.153,-.123,.078]],.012,n)}else if(t===`bob`)for(let t of[-1,1])X(e,n,t*.16,-.054,-.046,.053,.157,.09,t*-.1);else if(t===`curls`)for(let t=0;t<15;t++){let r=t/15*Math.PI*2;X(e,n,Math.sin(r)*.154,.116+Math.cos(r)*.095,-.06,.062,.058,.065)}}function cd(e,t,n,r){let i=new Tn;i.position.set(t*.203,1.151,0),e.add(i),X(i,n,t*.015,-.05,0,.072,.098,.078,t*-.15),Zu(i,r,0,-.148,0,.034,.172);let a=new Tn;a.position.y=-.218,i.add(a),Zu(a,r,0,-.071,.005,.028,.173),X(a,r,0,-.171,.008,.033,.043,.021);for(let e=0;e<4;e++)Zu(a,r,-.021+e*.014,-.204-Math.sin(e/3*Math.PI)*.007,.011,.007,.034);return X(a,r,t*.035,-.175,.015,.012,.027,.012,t*-.48),ed(a),ed(i),{joint:i,elbow:a,side:t}}function ld(e,t,n,r){let i=new Tn;i.position.set(t*.094,.712,0),e.add(i),Zu(i,n,0,-.146,0,r?.047:.066,.345);let a=new Tn;a.position.y=-.309,i.add(a);let o=new Tn,s=new Tn;return a.add(o,s),Zu(o,n,0,-.142,.003,r?.039:.049,.31),X(s,Y.shoe,0,-.357,.049,.066,.044,.107),X(s,Y.sole,0,-.389,.052,.067,.014,.107),Xu(s,[[-.031,-.339,.085],[0,-.333,.102],[.031,-.339,.085]],.004,Y.cream),ed(o),ed(s),ed(i),{joint:i,knee:a,calf:o,foot:s}}function ud(e){let t=[],n=[];for(let e=0;e<=16;e++)for(let r=0;r<=18;r++){let i=e/16,a=.568+i*.363,o=.236-.096*i,s=(r/18*2-1)*o,c=.298-.129*i,l=.18-.068*i;if(t.push(s,a,Math.sqrt(Math.max(.05,1-(s/c)**2))*l+.012+Math.cos(r/18*Math.PI*12)*.002*(1-i)),e<16&&r<18){let t=e*19+r;n.push(t,t+1,t+18+1,t+1,t+18+2,t+18+1)}}let r=new Dr;r.setAttribute(`position`,new G(t,3)),r.setIndex(n),r.computeVertexNormals();let i=new K(r,Y.cream);i.castShadow=!0,e.add(i),$u(e,[[-.137,.923],[-.094,1.17],[.094,1.17],[.137,.923]],Y.cream,.127);for(let t of[-1,1])Xu(e,[[t*.091,1.163,.135],[t*.116,1.197,.085],[t*.127,1.192,-.071],[t*.094,.955,-.111]],.017,Y.cream),X(e,Y.shoe,t*.085,1.137,.136,.012,.012,.003);$u(e,[[-.062,.773],[.062,.773],[.062,.72],[.049,.698],[0,.688],[-.049,.698],[-.062,.72]],Y.cream,.172),Xu(e,[[-.06,.773,.176],[0,.767,.183],[.06,.773,.176]],.003,Y.seam),Xu(e,[[-.057,.757,.177],[-.055,.713,.177],[0,.695,.183],[.055,.713,.177],[.057,.757,.177]],.0016,Y.seam),Xu(e,[[-.157,.934,0],[-.118,.934,.079],[0,.934,.124],[.118,.934,.079],[.157,.934,0],[0,.934,-.111],[-.157,.934,0]],.017,Y.cream),X(e,Y.cream,-.045,.928,-.135,.061,.027,.015,-.45),X(e,Y.cream,.045,.928,-.135,.061,.027,.015,.45)}function dd({kind:e=`mother`,variant:t=0}={}){return e===`mouse`?md():e===`baby`?pd():fd(e,t%4)}function fd(e,t){let n=e===`mother`,r=!n&&t%2==1,i=n?Y.green:Yu([`#b28477`,`#c99552`,`#a07591`,`#7d9ea6`][t]),a=!n&&t===2?Yu(`#bd8765`):Y.skin,o=!n&&t===3?Yu(`#ada79d`):!n&&t===2?Y.hairDark:Y.hair,s=new Tn;s.name=e;let c=new Tn;s.add(c);let l;if(n)Qu(c,[[.29,.548,.173],[.285,.61,.17],[.232,.735,.142],[.174,.864,.115],[.16,.94,.108],[.191,1.097,.12],[.201,1.163,.113],[.098,1.212,.068],[.066,1.222,.055]],i),ud(c),Xu(c,[[-.283,.564,0],[-.204,.564,.124],[0,.564,.178],[.204,.564,.124],[.283,.564,0]],.004,Y.greenDark);else{Qu(c,[[.157,.697,.111],[.166,.87,.113],[.186,1.064,.119],[.208,1.153,.11],[.096,1.209,.064],[.064,1.219,.055]],i),r||(l=new Tn,c.add(l),Qu(l,[[.219,.535,.142],[.212,.616,.14],[.165,.757,.109],[.161,.852,.109]],Yu(t===0?`#384f68`:`#e7dbc0`)),ed(l)),Xu(c,[[0,.73,.114],[0,1.005,.123],[0,1.193,.078]],.004,Y.cream);for(let e=0;e<4;e++)X(c,Y.cream,.015,1.11-e*.083,.124,.008,.008,.003);$u(c,[[-.035,1.205],[-.1,1.192],[-.06,1.122],[0,1.17]],Y.cream,.1),$u(c,[[.035,1.205],[.1,1.192],[.06,1.122],[0,1.17]],Y.cream,.1)}Zu(c,a,0,1.225,0,.063,.152),n&&(Xu(c,[[-.063,1.233,.004],[-.04,1.212,.077],[.034,1.206,.083],[.067,1.226,0]],.017,Y.peach),X(c,Y.peach,.037,1.207,.095,.023,.023,.017),$u(c,[[.035,1.202],[.09,1.128],[.042,1.142],[.015,1.19]],Y.peach,.133),$u(c,[[.027,1.2],[-.026,1.144],[-.035,1.182],[.01,1.206]],Y.peach,.133));let{head:u,eyes:d,expression:f}=td(c,a,o,!n);if(u.position.y=1.452,sd(u,n?`bun`:[`bob`,`short`,`curls`,`short`][t],o),r)for(let e of[-1,1])Xu(u,[[e*.03,.043,.179],[e*.047,.061,.18],[e*.095,.061,.175],[e*.116,.039,.163],[e*.101,-.003,.171],[e*.046,-.004,.18],[e*.03,.043,.179]],.0035,Y.gold),Xu(u,[[e*.031,.032,.182],[0,.038,.184]],.003,Y.gold),Xu(u,[[e*.116,.039,.163],[e*.179,.038,-.005]],.003,Y.gold);if(!n&&t===2)for(let e of[-1,1])X(u,Y.gold,e*.188,-.061,.011,.012,.017,.01);let p=[-1,1].map(e=>cd(c,e,i,a)),m=n||!r?a:Yu(t===1?`#465367`:`#68666b`),h=[-1,1].map(e=>ld(c,e,m,n||!r)),g=new Tn;g.position.set(0,.96,.285),c.add(g),ed(u),ed(c);let _=n?1:[.93,1,.94,.96][t];s.scale.setScalar(_),s.userData.kind=e,s.userData.height=(n?1.74:1.7)*_;let v=0,y=0,b=0,x=0,S=0,C=0,w=ad(t);return f&&(f.root.userData.stage=`relaxed`,f.root.userData.personality=t,f.root.userData.expressionVariant=0,f.root.userData.dining=!1,f.root.userData.values=Object.fromEntries(nd.map((e,t)=>[e,w[t]])),od(f,d,w)),{group:s,anchors:{tray:g,head:u,face:f?.root},resetPose(){v=0,y=0,b=0,x=0,S=0,C=0,c.position.set(0,0,0),c.rotation.set(0,0,0),u.rotation.set(0,0,0),l&&(l.position.y=0,l.scale.set(1,1,1)),p.forEach(e=>{e.joint.rotation.set(-.065,0,e.side*.12),e.elbow.rotation.set(-.12,0,0)}),h.forEach(e=>{e.joint.rotation.x=0,e.knee.rotation.x=0,e.foot.position.y=0,e.calf.scale.y=1}),d.forEach(e=>{e.scale.y=1,e.rotation.z=0}),f&&(w.splice(0,w.length,...ad(t)),f.root.userData.stage=`relaxed`,f.root.userData.personality=t,f.root.userData.expressionVariant=0,f.root.userData.dining=!1,nd.forEach((e,t)=>{f.root.userData.values[e]=w[t]}),od(f,d,w))},animate(e,{walking:r=!1,speed:i=2.3,happy:a=1,carrying:o=!1,sitting:s=!1,seatProgress:m,time:g=0,emotion:T}={}){if(!(e>0))return;v+=e;let E=g||v,D=Math.sin(E*1.6+t),O=Number.isFinite(i)?Math.max(0,i):2.3;b+=((r&&O>.001?1:0)-b)*(1-Math.exp(-e*14)),r&&(y+=e*O/(1.14*_)*Math.PI*2);let k=Math.sin(y);if(Number.isFinite(m))x=Et.clamp(m,0,1);else{let t=s&&!r?1:0;x+=Et.clamp(t-x,-e/.62,e/.62)}n&&(x=0);let A=Number.isFinite(m)?x:x*x*(3-2*x),ee=b*(1-A),j=Math.sin(A*Math.PI),M=Et.lerp(.712,.654/_,A);c.position.set(k*.006*ee,M-.712+Math.abs(k)*.015*ee+Math.max(0,D)*.003*(1-ee)*(1-A),-.025*j),c.rotation.z=k*.012*ee,c.rotation.y=k*.018*ee,u.rotation.z=(k*.02*ee+D*.027*(1-ee))*Math.max(.3,a),u.rotation.x=-.035*ee+Math.sin(E*.8)*.018*(1-ee)+j*.09,u.rotation.y=0,p.forEach((e,t)=>{e.joint.rotation.z=e.side*(.12+.045*j),e.joint.rotation.y=0;let n=-.065+D*.025+k*(t?.48:-.48)*ee;e.joint.rotation.x=o?-.87:Et.lerp(n,-.24,A),e.elbow.rotation.x=o?-.66:Et.lerp(-.12-Math.abs(k)*.13*ee,-.95,A)});let te=1.12*A,ne=M-.309*Math.cos(te)-.403;h.forEach((e,t)=>{let n=k*(t?-1:1);e.joint.rotation.x=-te+n*.42*ee,e.knee.rotation.x=te+Math.max(0,-n)*.44*ee,e.foot.position.y=-ne,e.calf.scale.y=1+ne/.297}),l&&(l.scale.y=1-.65*A,l.scale.z=1+.65*A,l.position.y=.712*(1-l.scale.y));let N=Math.sin(E*1.69+t*.9)>.991?.1:1;if(!f)d.forEach(e=>{e.scale.y=N});else{let n=Number.isFinite(T?.personality)?(Math.trunc(T.personality)%4+4)%4:t,i=rd[n],a=Object.hasOwn(i,T?.stage)?T.stage:`relaxed`,l=Number.isFinite(T?.expressionVariant)?(Math.trunc(T.expressionVariant)%3+3)%3:0,m=id[l],h=i[a],g=1-Math.exp(-e*7);w.forEach((e,t)=>{let n=t===2?m[0]:t===9?m[1]:t===10?m[2]:t===11?m[3]:t===12?m[4]:0;w[t]=e+((h[t]??0)+n-e)*g}),f.root.userData.stage=a,f.root.userData.personality=n;let _=!!T?.dining&&s&&A>.98&&!r&&!o;C+=(+!!_-C)*(1-Math.exp(-e*5)),f.root.userData.expressionVariant=l,f.root.userData.dining=_,nd.forEach((e,t)=>{f.root.userData.values[e]=w[t]});let v=_?Math.sin(E*5.6+n*1.73+l*.4)*C:0;od(f,d,w,N,v),u.rotation.z+=w[9]*(1-ee),u.rotation.x+=w[10]*(1-ee);let y=(a===`curious`||a===`impatient`||a===`urgent`)&&s&&A>.98&&!r&&!o&&!_,b=Number.isFinite(T?.severity)?Et.clamp(T.severity,0,1):a===`urgent`?1:a===`impatient`?.65:.3;S+=((y?.22+b*.78:0)-S)*(1-Math.exp(-e*5));let x=y?S:0,D=Number.isFinite(T?.gesturePhase)?T.gesturePhase:n*1.73,O=Math.max(0,Math.sin(E*.85+D))**4*x;n===0?(p.forEach(e=>{e.joint.rotation.z-=e.side*.17*O,e.elbow.rotation.x-=.14*O}),u.rotation.y+=.12*O):n===1?(p[0].joint.rotation.x-=.48*O,p[0].joint.rotation.z+=.25*O,p[0].elbow.rotation.x-=.54*O,u.rotation.x+=.14*O,u.rotation.y-=.08*O):n===2?(p.forEach(e=>{e.joint.rotation.z+=e.side*.12*O,e.elbow.rotation.x-=.13*O}),c.position.y+=.012*O,u.rotation.z+=.045*O):(c.position.y-=.008*O,u.rotation.x+=.075*O,p[1].elbow.rotation.x+=.1*O)}}}}function pd(){let e=new Tn;e.name=`baby`;let t=new Tn;e.add(t),X(t,Y.peach,0,.192,0,.124,.153,.099),X(t,Y.peach,0,.107,.012,.136,.087,.11);let{head:n,eyes:r}=td(t);n.position.set(0,.413,.014),n.scale.setScalar(.72),X(n,Y.hairLight,0,.157,-.041,.147,.076,.124);for(let e=0;e<5;e++)Xu(n,[[.088-e*.026,.2,.024],[.033-e*.021,.217,.085],[-.047-e*.012,.158,.128]],.017,Y.hairLight);Xu(n,[[-.025,.207,.011],[0,.258,.009],[.04,.247,.027],[.026,.226,.049]],.011,Y.hairLight),X(t,Y.cream,0,.262,.088,.087,.078,.01),Xu(t,[[-.08,.282,.094],[-.062,.226,.103],[0,.189,.107],[.062,.226,.103],[.08,.282,.094]],.004,Y.seam);for(let[e,n]of[[-.028,.258],[.024,.235],[.005,.28]]){for(let r=0;r<5;r++){let i=r/5*Math.PI*2;X(t,Y.peach,e+Math.cos(i)*.01,n+Math.sin(i)*.01,.102,.006,.006,.002)}X(t,Y.gold,e,n,.106,.0035,.0035,.002)}let i=[];for(let e of[-1,1]){let n=new Tn;n.position.set(e*.101,.267,0),t.add(n),i.push(n),X(n,Y.peach,e*.027,-.014,0,.054,.062,.055,e*.4),Zu(n,Y.skin,e*.035,-.078,.024,.03,.101),X(n,Y.skin,e*.033,-.133,.048,.031,.032,.026);for(let t=0;t<4;t++)X(n,Y.skin,e*.033-.018+t*.012,-.153,.051,.006,.012,.009);X(t,Y.peach,e*.09,.073,.054,.074,.069,.085,e*.2),X(t,Y.skin,e*.103,.048,.122,.047,.043,.061),X(t,Y.skin,e*.109,.034,.171,.044,.031,.047);for(let n=0;n<4;n++)X(t,Y.skin,e*.11-.026+n*.016,.028,.201,.01,.012,.016);ed(n)}ed(n),ed(t),e.userData.kind=`baby`,e.userData.height=.599;let a=0;return{group:e,animate(e,{happy:o=1,time:s=0}={}){a+=Math.max(0,e);let c=s||a;t.rotation.z=Math.sin(c*2.2)*.022,n.rotation.z=Math.sin(c*1.7)*.068,n.rotation.y=Math.sin(c*.67)*.13,i.forEach((e,t)=>{e.rotation.x=-.25+Math.sin(c*3.3+t*2)*.18*o,e.rotation.z=(t?1:-1)*(.2+Math.sin(c*2.5)*.09)}),r.forEach(e=>{e.scale.y=Math.sin(c*1.45)>.996?.1:1})}}}function md(){let e=new Tn;e.name=`mouse`;let t=new Tn;e.add(t);let n=Yu(`#8f8174`),r=Yu(`#c6b3a0`),i=Yu(`#c98f87`);X(t,n,0,.065,-.016,.063,.065,.092),X(t,r,0,.046,.041,.043,.04,.032);let a=new Tn;a.position.set(0,.105,.05),t.add(a),X(a,n,0,0,0,.054,.05,.054),X(a,r,0,-.012,.047,.032,.022,.027);let o=[];for(let e of[-1,1]){let r=new Tn;r.position.set(e*.044,.042,-.006),a.add(r),o.push(r),X(r,n,0,0,0,.032,.04,.014),X(r,i,0,0,.011,.023,.03,.004),X(a,Y.black,e*.03,.008,.039,.01,.012,.007),X(a,Y.white,e*.032-.002,.013,.044,.003,.003,.0015),X(t,i,e*.04,.012,.048,.016,.012,.025);for(let t=0;t<3;t++)Xu(a,[[e*.025,-.014,.066],[e*.052,-.011+(t-1)*.008,.072],[e*.081,-.009+(t-1)*.016,.069]],8e-4,Y.cream);ed(r)}let s=X(a,i,0,-.007,.073,.011,.008,.007);Xu(t,[[0,.04,-.09],[.042,.021,-.121],[.094,.013,-.123],[.115,.011,-.092],[.091,.01,-.083]],.005,i),a.remove(s),ed(a),a.add(s),ed(t),e.userData.kind=`mouse`,e.userData.height=.198;let c=0;return{group:e,animate(e,{time:t=0}={}){c+=Math.max(0,e);let n=t||c;a.rotation.y=Math.sin(n*2.5)*.1,s.position.y=-.007+Math.sin(n*12)*.0018,o.forEach((e,t)=>{e.rotation.z=Math.sin(n*3.1+t)*.045})}}}var hd={sun:`<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`,heart:`<path d="M20.7 5.8c-2.3-2.7-5.7-2.1-8.7.7-3-2.8-6.4-3.4-8.7-.7-3.8 4.6 2.2 10 8.7 14.7 6.5-4.7 12.5-10.1 8.7-14.7Z"/>`,coffee:`<path d="M5 8h12v7a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8ZM17 9h2a3 3 0 1 1 0 6h-2M8 2v3m4-3v3M3 22h16"/>`,cake:`<path d="M4 11h16v9H4zm0 3c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2M12 4v7M10 4a2 2 0 0 1 2-3 2 2 0 0 1 2 3"/>`,toast:`<path d="M5 11a5 5 0 0 1-1-9h16a5 5 0 0 1-1 9v10H5V11Z"/><path d="M8 12h8m-8 4h8"/>`,tray:`<path d="M3 18h18M5 15a7 7 0 0 1 14 0H5Zm7-10V3M10 3h4"/>`,clock:`<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>`,pause:`<path d="M8 5v14M16 5v14"/>`,play:`<path d="m8 4 12 8-12 8V4Z"/>`,help:`<circle cx="12" cy="12" r="9"/><path d="M9.5 8a2.5 2.5 0 0 1 5 .5c0 2-2.5 2-2.5 4M12 16.5v.5"/>`,sound:`<path d="m11 4-5 4H2v8h4l5 4V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>`,muted:`<path d="m11 4-5 4H2v8h4l5 4V4Zm5 5 6 6m0-6-6 6"/>`,star:`<path d="m12 2 3.1 6.4 7.1 1-5.1 5 1.2 7.1-6.3-3.3-6.3 3.3 1.2-7.1-5.1-5 7.1-1L12 2Z"/>`,arrow:`<path d="M4 12h15m-6-6 6 6-6 6"/>`,close:`<path d="m6 6 12 12M6 18 18 6"/>`,check:`<path d="m5 12 4 4L19 6"/>`,mouse:`<circle cx="6" cy="7" r="4"/><circle cx="18" cy="7" r="4"/><path d="M4 12c0-7 16-7 16 0 0 5-8 10-8 10S4 17 4 12Z"/><path d="M8 12h.1M16 12h.1M11 17h2"/>`,baby:`<path d="M8 4c1-3 6-3 6 0 0 2-3 2-3 0"/><circle cx="12" cy="13" r="8"/><path d="M8 12h.1M16 12h.1M9 16q3 3 6 0"/>`,sparkle:`<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>`,clean:`<path d="m10 4 10 10-7 7L3 11l7-7Zm5-3v3m4 1h3M3 18v4M1 20h4"/>`,cash:`<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M8 9V3h8v6M7 13h3m4 0h3M7 17h10"/>`,home:`<path d="m3 10 9-8 9 8v11H3V10Zm6 11v-8h6v8"/>`,reset:`<path d="M3 3v6h6M3 9a9 9 0 1 1-.5 7"/>`};function Z(e,t=``){return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${hd[e]||hd.sparkle}</svg>`}var gd=e=>`<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">${e}</svg>`,_d={coffee:gd(`<path d="M33 20h5c8 0 8 12 0 12h-5" fill="none" stroke="#b28661" stroke-width="3"/><ellipse cx="23" cy="38" rx="17" ry="4" fill="#decdb3"/><path d="M9 17h26v13c0 11-26 11-26 0Z" fill="#fff7e9" stroke="#b99b79" stroke-width="1.5"/><ellipse cx="22" cy="18" rx="13" ry="5" fill="#b98762"/><path d="M16 17c0-4 5-3 6 0 2-4 7-3 6 0-1 3-6 5-6 5s-6-2-6-5" fill="#fff3d6"/><path d="M18 10c-4-5 4-4 0-9M27 10c-4-5 4-4 0-9" fill="none" stroke="#d4bca0" stroke-width="1.5" stroke-linecap="round"/>`),cake:gd(`<ellipse cx="24" cy="39" rx="21" ry="5" fill="#dfd3bb"/><path d="M8 20l24-7 9 13v12L8 36Z" fill="#efc993" stroke="#c8a579" stroke-width="1"/><path d="M8 26l33 2v5L8 31Z" fill="#c66d70"/><path d="M8 20l24-7 9 13L8 25Z" fill="#fff6e5"/><path d="M8 23v5c2 3 4 1 4-2 3 4 5 1 5-2l24 2" fill="#fff6e5"/><path d="M24 10c-7 1-5 7 0 12 5-5 7-11 0-12" fill="#d96865"/><path d="M20 9l5 3 4-4-4 1-1-4-1 4Z" fill="#718d59"/><path d="M22 14l1 1m2 2l1 1m-3-1l1 1" stroke="#ffeac2" stroke-linecap="round"/>`),toast:gd(`<ellipse cx="24" cy="40" rx="21" ry="4" fill="#dfd3bb"/><path d="M8 17c-5-13 35-13 32 0l-3 21H10Z" fill="#c9965d" stroke="#aa7548" stroke-width="1.5"/><path d="M12 18c-5-9 29-9 24 0l-2 16H13Z" fill="#f4db9c"/><path d="M14 28c-4-13 17-20 18-4l-3 7Z" fill="#73905b"/><path d="M15 26c-1-8 10-12 12-2l-2 4Z" fill="#b7ca80"/><ellipse cx="22" cy="23" rx="4" ry="4.5" fill="#d3ab68"/><path d="M17 16l8-2m-10 7l13-4m-12 9l12-4" stroke="#e3e5ae" stroke-width="1.3"/>`)},vd={coin:gd(`<circle cx="24" cy="24" r="18" fill="#e7c279" stroke="#b38b46" stroke-width="2"/><circle cx="24" cy="24" r="13" fill="none" stroke="#fff0bf" stroke-width="2"/><path d="M24 14l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="#fff0c1"/>`),register:gd(`<path d="M10 24h28l4 16H6Z" fill="#88a18a" stroke="#57755f" stroke-width="2"/><path d="M12 10h24v15H12Z" fill="#aabea1" stroke="#57755f" stroke-width="2"/><path d="M17 14h14v6H17Z" fill="#ecedd9"/><path d="M12 31h17m-17 5h24" stroke="#f5eddd" stroke-width="2" stroke-linecap="round"/><circle cx="35" cy="30" r="2" fill="#f2d498"/>`),clean:gd(`<path d="M11 16h25l-3 23H14Z" fill="#99b5bc"/><path d="M8 15h31M17 7h13v8H17" stroke="#6d929c" stroke-width="3" fill="none"/><path d="M13 29l15-12 10 12-15 11Z" fill="#f5d899"/><path d="M8 7l2-4 2 4 4 2-4 2-2 4-2-4-4-2Z" fill="#e8c477"/>`),heart:gd(`<path d="M24 39C-9 19 11-1 24 14 37-1 57 19 24 39" fill="#d89583"/>`),mouse:gd(`<ellipse cx="23" cy="29" rx="14" ry="11" fill="#a99a84"/><circle cx="15" cy="14" r="9" fill="#b6a893"/><circle cx="30" cy="13" r="9" fill="#b6a893"/><circle cx="15" cy="14" r="5" fill="#e0b5a5"/><circle cx="30" cy="13" r="5" fill="#e0b5a5"/><circle cx="20" cy="27" r="2" fill="#453d36"/><circle cx="31" cy="26" r="2" fill="#453d36"/><circle cx="26" cy="33" r="2.5" fill="#dfaa9e"/><path d="M10 34Q1 39 5 44" fill="none" stroke="#d4aaa0" stroke-width="3"/>`)},yd=(e=``)=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),bd=e=>/coffee|latte|drink/.test(e)?`coffee`:/cake|pie|tart/.test(e)?`cake`:`toast`,xd=e=>_d[e]||_d[bd(e||``)];function Sd(e){e.classList.add(`game-ui`),e.innerHTML=`
    <div class="scene-vignette"></div>
    <header class="topbar">
      <a class="brand" href="#" aria-label="晴日小馆首页"><span class="brand-sun">${Z(`sun`)}</span><span><strong>晴日小馆</strong><small>LITTLE SUN CAFÉ</small></span></a>
      <div class="day-header"><span class="day-number">第一天</span><span class="day-divider"></span><span class="day-title">重新开门的早晨</span></div>
      <nav class="top-actions" aria-label="游戏控制"><button class="icon-button sound-button" data-action="sound" aria-label="关闭声音" title="声音" hidden>${Z(`sound`)}</button><button class="icon-button" data-action="help" aria-label="游戏帮助" title="怎么玩" hidden>${Z(`help`)}</button><button class="icon-button pause-button" data-action="pause" aria-label="暂停游戏" title="暂停 [空格]">${Z(`pause`)}</button></nav>
    </header>
    <div class="game-hud">
      <section class="score-panel" aria-label="关卡进度"><div class="score-heading"><span>今日的小目标</span><span class="goal-stars">${Z(`star`)}${Z(`star`)}${Z(`star`)}</span></div><div class="score-value"><strong data-ui="score">0</strong><span>/ <span data-ui="goal">360</span></span><span class="score-unit">暖心分</span></div><div class="score-track"><span></span><i style="left:68.9655%"></i><i style="left:82.7586%"></i></div><div class="score-caption"><span>已招待 <b data-ui="served">0</b> / <span data-ui="total">9</span> 位客人</span><span class="combo-text"></span></div></section>
      <div class="day-clock" aria-label="营业时间"><span class="time-sun">${Z(`sun`)}</span><div class="time-track"><span></span></div><span class="time-value">1:50</span></div>
      <div class="mouse-chip"><span class="mouse-symbol">${Z(`mouse`)}</span><span><b>小小捉迷藏</b><small>今天的老朋友, 藏在哪里呢</small></span><span class="mouse-check"></span></div>
      <div class="bottom-center">
        <div class="action-feedback" data-kind="idle" role="status" aria-live="polite" aria-atomic="true"><span class="feedback-state">准备营业</span><span class="feedback-message">点击餐台取餐, 食物会装进下方托盘</span></div>
        <div class="queue-note"><div class="queue-overview"><span class="queue-dot"></span><span class="queue-current">暂时没有待办</span><span class="queue-count"></span></div><div class="queue-items"></div></div>
        <div class="pending-foods" aria-label="待取食物, 尚未装盘"></div>
        <section class="tray-panel" aria-label="托盘, 0 / 3 份已装盘">
          <div class="tray-title">${Z(`tray`)}<span>已装盘</span><b class="tray-capacity"><strong>0</strong><span>/ 3</span></b></div>
          <div class="tray-slots">${[0,1,2].map(e=>`<button class="tray-slot" data-slot="${e}" aria-label="第 ${e+1} 个托盘位置, 空" disabled><span class="slot-number">${e+1}</span><span class="tray-empty-word">空位</span></button>`).join(``)}</div>
          <span class="tray-hint">点客人<br>送餐</span>
          <div class="tray-selection" hidden><span class="tray-selected-name"></span><button class="tray-remove-button">移除</button><button class="tray-selection-close" aria-label="取消选择">${Z(`close`)}</button></div>
        </section>
      </div>
      <section class="baby-panel" aria-label="米粒的心情"><div class="baby-symbol">${Z(`baby`)}</div><div class="baby-info"><div><b>小米粒</b><span class="baby-mood">安心玩耍中</span></div><div class="baby-track"><span></span></div></div>${Z(`heart`,`baby-heart`)}</section>
      <div class="keyboard-hint"><kbd>Space</kbd> 暂停 <span>·</span> <kbd>Esc</kbd> 清空排队</div>
    </div>
    <div class="world-labels"></div>
    <div class="overlay-layer" aria-live="polite"></div>
    <div class="story-layer" aria-live="polite"></div>
    <div class="toast-stack" role="status" aria-live="polite"></div>
    <div class="pause-veil"><span>让时光歇一歇</span><button class="primary-button" data-action="pause">${Z(`play`)} 继续营业</button></div>
  `;let t=t=>e.querySelector(t),n=t(`.overlay-layer`),r=t(`.story-layer`),i=t(`.world-labels`),a=()=>{},o=``,s=``,c=``,l=!1,u=null,d=``,f=[],p=-1,m=null,h=null,g=0,_=null,v=null,y=null,b=new Map,x=(e,n)=>{let r=t(e);r.textContent!==String(n)&&(r.textContent=n)},S=e=>a(e);e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-action]`);t&&S(t.dataset.action)});let C=()=>{p=-1,m=null,t(`.tray-selection`).hidden=!0,e.querySelectorAll(`.tray-slot`).forEach(e=>{e.classList.remove(`selected`),e.setAttribute(`aria-pressed`,`false`)})};t(`.tray-slots`).addEventListener(`click`,e=>{let n=e.target.closest(`[data-slot]`);if(!n||n.disabled)return;let r=Number(n.dataset.slot);if(p===r){C();return}C(),p=r,m=f[r],n.classList.add(`selected`),n.setAttribute(`aria-pressed`,`true`),t(`.tray-selected-name`).textContent=m.label||m.id,t(`.tray-selection`).hidden=!1}),t(`.tray-selection-close`).addEventListener(`click`,C),t(`.tray-remove-button`).addEventListener(`click`,()=>{if(p<0||!f[p])return;let e=p;C(),S(`discard:${e}`)}),document.addEventListener(`pointerdown`,e=>{e.target.closest(`.tray-panel`)||C()});let w=t=>{let n=e.querySelector(`[data-slot="${t}"]`);!n||t<0||t>2||(clearTimeout(b.get(t)),n.classList.remove(`just-loaded`),n.offsetWidth,n.classList.add(`just-loaded`),b.set(t,setTimeout(()=>n.classList.remove(`just-loaded`),1200)))},T=e=>{let{kind:n=`idle`,label:r=``,message:i}=e,a={idle:`点击餐台取餐, 食物会装进下方托盘`,queued:`已安排取${r}`,working:`正在取${r}`,loaded:`${r}已装入托盘 ✓`,full:`托盘已满, 先送餐`,duplicate:`${r||`这个动作`}已安排, 不用重复点击`,cancelled:`已取消待办动作`},o={idle:`准备好了`,queued:`已安排`,working:`正在执行`,ready:`烤好了`,"stock-full":`备餐已满`,loaded:`已装盘 ✓`,full:`托盘已满`,duplicate:`已经安排`,cancelled:`已取消`},s=t(`.action-feedback`);s.dataset.kind=n,x(`.feedback-state`,o[n]||`小馆提示`),x(`.feedback-message`,i||a[n]||r),s.classList.remove(`feedback-flash`),s.offsetWidth,s.classList.add(`feedback-flash`)},E=e=>{let t=e||{};if(t.kind===`loaded`)g=performance.now()+1600,_=null,v=Number.isInteger(t.slot)?t.slot:-1,y=t.id||null,v>=0&&w(v);else if([`queued`,`working`,`ready`].includes(t.kind)&&performance.now()<g){_=t;return}else g=0,_=null;T(t)};t(`.brand`).addEventListener(`click`,e=>{e.preventDefault(),S(`menu`)});let D=()=>{u=document.activeElement},O=e=>requestAnimationFrame(()=>e.querySelector(`button`)?.focus({preventScroll:!0})),k=t=>{D(),n.innerHTML=t,n.classList.add(`is-open`),e.classList.add(`has-overlay`),O(n)},A=()=>{n.classList.remove(`is-open`),n.innerHTML=``,e.classList.remove(`has-overlay`),u?.isConnected&&u.focus({preventScroll:!0})};return e.addEventListener(`keydown`,e=>{let t=n.querySelector(`[role="dialog"]`)||r.querySelector(`[role="dialog"]`);if(e.key!==`Tab`||!t)return;let i=[...t.querySelectorAll(`button, a[href], [tabindex="0"]`)].filter(e=>!e.disabled),a=i[0],o=i.at(-1);e.shiftKey&&document.activeElement===a?(e.preventDefault(),o?.focus()):!e.shiftKey&&document.activeElement===o&&(e.preventDefault(),a?.focus())}),{get labels(){return i},onAction(e){a=e||(()=>{})},feedback:E,update(r){let i=r.phase||`playing`;if((h!==r.day||d!==`playing`&&i===`playing`)&&(h=r.day,g=0,_=null,v=null,y=null,C(),T({kind:`idle`})),_&&performance.now()>=g){let e=_;_=null,T(e)}i!==d&&(e.dataset.phase=i,d=i,t(`.game-hud`).inert=i!==`playing`,t(`.game-hud`).setAttribute(`aria-hidden`,String(i!==`playing`)),t(`.pause-button`).hidden=i!==`playing`,t(`.day-header`).setAttribute(`aria-hidden`,String(i===`welcome`))),e.classList.toggle(`is-paused`,!!r.paused&&i===`playing`&&!n.classList.contains(`is-open`)),x(`.day-number`,`第${[``,`一`,`二`,`三`,`四`,`五`,`六`,`七`][r.day]||r.day}天`),x(`.day-title`,r.title||`重新开门的早晨`);for(let e of[`score`,`goal`,`served`,`total`])x(`[data-ui="${e}"]`,r[e]??0);let a=(r.score||0)/Math.max(1,r.goal||1),l=Math.min(1,a/1.45);t(`.score-track > span`).style.width=`${l*100}%`,t(`.goal-stars`).querySelectorAll(`svg`).forEach((e,t)=>e.classList.toggle(`earned`,a>=[1,1.2,1.45][t]));let u=Math.max(0,Math.ceil(r.time||0));x(`.time-value`,`${Math.floor(u/60)}:${String(u%60).padStart(2,`0`)}`),t(`.time-track > span`).style.width=`${Math.max(0,Math.min(1,u/(r.duration||110)))*100}%`,t(`.day-clock`).classList.toggle(`time-low`,u<20),x(`.combo-text`,r.combo>1?`${r.combo} 连续送餐`:``);let p=JSON.stringify(r.tray||[]);if(p!==o){o=p,f=(r.tray||[]).map(e=>({...e})),C();let e=Math.min(3,f.length);if(x(`.tray-capacity strong`,e),t(`.tray-capacity`).classList.toggle(`is-full`,e===3),t(`.tray-panel`).setAttribute(`aria-label`,`托盘, ${e} / 3 份已装盘`),[...t(`.tray-slots`).children].forEach((e,t)=>{let n=f[t];e.classList.toggle(`filled`,!!n),e.disabled=!n,e.setAttribute(`aria-label`,n?`${n.label||n.id}, 已装盘, 点击选择`:`第 ${t+1} 个托盘位置, 空`),e.title=n?`${n.label||n.id}已装盘, 点击选择后可移除`:`空托盘`,e.innerHTML=n?`${xd(n.id)}<span class="tray-food-name">${yd(n.label||n.id)}</span><span class="tray-loaded-mark" aria-hidden="true">✓</span>`:`<span class="slot-number">${t+1}</span><span class="tray-empty-word">空位</span>`}),v!==null){let e=v<0?y?f.map(e=>e.id).lastIndexOf(y):f.length-1:v;e>=0&&f[e]&&(w(e),v=null,y=null)}}let m=JSON.stringify(r.queue||[]);if(m!==s){s=m;let e=r.queue||[];x(`.queue-current`,e.length?`${e.length} 项动作已安排`:`暂时没有待办`),x(`.queue-count`,``),t(`.queue-note`).classList.toggle(`is-busy`,e.length>0),t(`.queue-items`).innerHTML=e.slice(0,3).map((e,t)=>`<span class="queue-task ${t===0?`is-current`:``}"><b>${t+1}</b><span>${yd(e.label||`下一步`)}</span></span>`).join(``)+(e.length>3?`<span class="queue-more">+${e.length-3} 项</span>`:``),t(`.queue-items`).hidden=e.length===0}let b=JSON.stringify(r.pendingFoods||[]);if(b!==c){c=b;let e=r.pendingFoods||[];t(`.pending-foods`).innerHTML=e.length?`<span class="pending-caption">待取, 未装盘</span>${e.slice(0,3).map(e=>`<span class="pending-food ${e.status===`working`?`is-working`:``}"><span>${yd(e.label||e.id)}</span><small>${e.status===`working`?`取餐中`:`排队中`}</small></span>`).join(``)}${e.length>3?`<span class="queue-more">+${e.length-3}</span>`:``}`:``}let S=Math.max(0,Math.min(1,r.babyHappiness??1));t(`.baby-track > span`).style.width=`${S*100}%`,t(`.baby-panel`).classList.toggle(`needs-care`,S<.38),x(`.baby-mood`,S<.38?`想要一个抱抱`:S<.7?`有一点想妈妈`:`安心玩耍中`),t(`.mouse-chip`).classList.toggle(`is-caught`,!!r.mouseCaught),x(`.mouse-chip b`,r.mouseCaught?`找到老朋友啦`:`小小捉迷藏`),x(`.mouse-chip small`,r.mouseCaught?`今天的捉迷藏, 完成`:`今天的老朋友, 藏在哪里呢`),t(`.mouse-check`).innerHTML=r.mouseCaught?Z(`check`):``,t(`.pause-button`).setAttribute(`aria-label`,r.paused?`继续游戏`:`暂停游戏`)},showWelcome({onStart:n,onContinue:r,hasSave:i}={}){e.dataset.phase=`welcome`,d=`welcome`,t(`.game-hud`).inert=!0,t(`.game-hud`).setAttribute(`aria-hidden`,`true`),t(`.pause-button`).hidden=!0,t(`.day-header`).setAttribute(`aria-hidden`,`true`),k(`<img class="welcome-character" src="${Du}" alt="林暖温柔地抱着小米粒"><section class="welcome-card" role="dialog" aria-modal="true" aria-labelledby="welcome-title"><div class="chapter-eyebrow"><span></span> 林暖和米粒的小馆</div><h1 id="welcome-title">小馆暖暖,<br>有你有我<span class="title-spark">${Z(`sparkle`)}</span></h1><p class="welcome-copy">阳光刚好, 咖啡正香<br>和林暖一起, 重新打开小馆的门<br>也别忘了, 给小米粒一个拥抱</p><div class="welcome-actions">${i?`<button class="primary-button continue-button">继续我们的故事 ${Z(`arrow`)}</button><button class="text-button start-button">从第一天开始</button>`:`<button class="primary-button start-button">打开小馆 ${Z(`arrow`)}</button>`}<button class="secondary-button how-button">${Z(`help`)} 怎么玩</button></div><div class="welcome-footnote"><span>三天的温柔时光</span><span>每一天约 2 分钟</span></div><div class="welcome-flourish">${Z(`heart`)} 用心款待, 慢慢长大</div></section><div class="scene-caption"><span>CHAPTER 01</span><b>新的早晨</b><small>有爱的小地方, 每一天都在生长</small></div>`),t(`.start-button`)?.addEventListener(`click`,()=>{A(),n?.()}),t(`.continue-button`)?.addEventListener(`click`,()=>{A(),r?.()}),t(`.how-button`).addEventListener(`click`,()=>{this.showHelp(()=>this.showWelcome({onStart:n,onContinue:r,hasSave:i}))})},showStory({speaker:n=`林暖`,text:i=``,title:a=``,portrait:o,button:s=`继续`,onNext:c}={}){r.classList.add(`is-open`),e.classList.add(`has-story`),r.innerHTML=`<section class="story-card" role="dialog" aria-modal="true" aria-labelledby="story-speaker">${o?`<div class="story-portrait"><img src="${yd(o)}" alt="${yd(n)}"></div>`:`<div class="story-avatar">${Z(n===`米粒`?`baby`:`heart`)}</div>`}<div class="story-body">${a?`<div class="story-chapter">${yd(a)}</div>`:``}<h2 id="story-speaker">${yd(n)}</h2><p>${yd(i).replaceAll(`
`,`<br>`)}</p></div><button class="story-next">${yd(s)} ${Z(`arrow`)}</button></section>`,t(`.story-next`).addEventListener(`click`,()=>c?.()),O(r)},hideStory(){r.innerHTML=``,r.classList.remove(`is-open`),e.classList.remove(`has-story`)},showResult({stars:e=0,score:n=0,goal:r=0,served:i=0,mouse:a=!1,cared:o=0,day:s=1,final:c=!1,onNext:l,onRetry:u}={}){let d=e>0;k(`<section class="result-card" role="dialog" aria-modal="true" aria-labelledby="result-title"><div class="chapter-eyebrow">第 ${s} 天 · 今日打烊</div><div class="result-stars">${[0,1,2].map(t=>Z(`star`,t<e?`earned`:``)).join(``)}</div><h1 id="result-title">${d?c?`小馆里, 都是好时光`:`今天也被温柔填满`:`我们再试一次`}</h1><p class="result-copy">${d?c?`三天的故事暂时告一段落<br>每一次用心, 都让这里更像家`:`送出的每一份美味<br>都成了这个小小家的幸福`:`不用着急, 林暖也在慢慢学<br>再给今天一次机会吧`}</p><div class="result-score"><strong>${n}</strong><span>暖心分 <small>/ 目标 ${r}</small></span></div><div class="result-stats"><div>${Z(`coffee`)}<strong>${i}</strong><span>位客人</span></div><div>${Z(`heart`)}<strong>${o}</strong><span>次温柔抱抱</span></div><div>${Z(`mouse`)}<strong>${a?`找到啦`:`下次再找`}</strong><span>捉迷藏</span></div></div><div class="result-actions">${d?`<button class="primary-button next-button">${c?`看看打烊后的故事`:`看看今日故事`} ${Z(`arrow`)}</button>`:``}<button class="${d?`text-button`:`primary-button`} retry-button">${Z(`reset`)} 重新过这一天</button></div>${c?`<p class="result-note">故事会继续, 小馆也会一直等你</p>`:``}</section>`),t(`.next-button`)?.addEventListener(`click`,()=>{A(),l?.()}),t(`.retry-button`).addEventListener(`click`,()=>{A(),u?.()})},toast(e){let n=document.createElement(`div`);for(n.className=`toast`,n.innerHTML=`${Z(`sparkle`)}<span>${yd(e)}</span>`,t(`.toast-stack`).append(n);t(`.toast-stack`).children.length>3;)t(`.toast-stack`).firstChild.remove();setTimeout(()=>{n.classList.add(`leaving`),setTimeout(()=>n.remove(),260)},2500)},showHelp(e){let n=document.documentElement.hasAttribute(`data-mobile-landscape`)?`看客人的点单, 点击机器或食物取餐`:`看客人的点单, 点击餐台安排取餐`;k(`<section class="help-card" role="dialog" aria-modal="true" aria-labelledby="help-title"><button class="icon-button help-close" aria-label="关闭帮助">${Z(`close`)}</button><div class="chapter-eyebrow">一点点默契, 一天好心情</div><h1 id="help-title">小馆的日常</h1><p class="help-intro">点击安排动作, 林暖会按顺序完成</p><div class="help-steps"><div><span class="help-step-icon">${Z(`coffee`)}</span><b>01 · 准备美味</b><p>${n}<br>面包机最多连点 3 次备餐, 烤好点旁边的面包取走</p></div><div><span class="help-step-icon">${Z(`tray`)}</span><b>02 · 趁热送达</b><p>食物出现彩色图标和勾号才算装盘<br>点击客人送餐, 托盘最多放 3 份</p></div><div><span class="help-step-icon">${Z(`cash`)}</span><b>03 · 收下心意</b><p>客人吃好后, 点头顶的收款气泡<br>林暖会到桌旁收钱, 小费另外入账</p></div><div><span class="help-step-icon">${Z(`clean`)}</span><b>04 · 整理小桌</b><p>点击留下餐盘的桌子<br>干净的小桌才能迎接新客人</p></div></div><div class="help-extras"><div>${Z(`baby`)}<p><b>也给米粒一点爱</b><span>她跑开或想妈妈时, 点她抱回去</span></p></div><div>${Z(`mouse`)}<p><b>别忘了捉迷藏</b><span>每一天都有一只小老鼠, 发现就点它</span></p></div></div><div class="help-footer"><span><kbd>Space</kbd> 暂停 <i>·</i> <kbd>Esc</kbd> 清空待办动作</span><button class="primary-button help-done">记住啦 ${Z(`check`)}</button></div></section>`);let r=()=>{A(),e?e():S(`close`)};t(`.help-close`).addEventListener(`click`,r),t(`.help-done`).addEventListener(`click`,r)},hideOverlay:A,setSound(e){l=!!e;let n=t(`.sound-button`);n.innerHTML=Z(l?`muted`:`sound`),n.setAttribute(`aria-label`,l?`打开声音`:`关闭声音`),n.classList.toggle(`is-muted`,l)}}}var Cd={entranceX:-.5,exitX:.5,outsideZ:Hu.nearZ,doorZ:-5.6,entryAisleZ:-1.3,exitAisleZ:-2.2,chairSide:.95,seatZ:.05,speed:2.4,turnSpeed:6,seatDuration:.7,spacing:.72},wd=(e,t)=>Math.atan2(Math.sin(t-e),Math.cos(t-e)),Td=e=>e*e*(3-2*e);function Ed(e,{delay:t=0,from:n}={}){let r=Cd;return{tableX:e,x:n?.x??r.entranceX,z:n?.z??r.outsideZ,rotation:n?.rotation??0,phase:t>0?`queued`:`entering`,delay:t,seatProgress:0,transition:0,walking:!1,speed:0,points:[{x:r.entranceX,z:r.doorZ},{x:r.entranceX,z:r.entryAisleZ},{x:e+r.chairSide,z:r.entryAisleZ},{x:e+r.chairSide,z:r.seatZ}]}}function Dd(e){e.phase===`seated`&&(e.phase=`standing`,e.transition=0,e.walking=!1,e.speed=0)}function Od(e,t,n=()=>!0){if(t<=0)return;let r=Cd;if(e.walking=!1,e.speed=0,e.phase===`queued`){e.delay-=t,e.delay<=0&&n(e.x,e.z)&&(e.phase=`entering`);return}if(e.phase===`seated`||e.phase===`exited`)return;if(e.phase===`turning`){let n=wd(e.rotation,0);e.rotation+=Math.sign(n)*Math.min(Math.abs(n),r.turnSpeed*t),Math.abs(n)<=r.turnSpeed*t&&(e.rotation=0,e.phase=`seating`,e.transition=0);return}if(e.phase===`seating`||e.phase===`standing`){let i=e.phase===`seating`,a=Math.min(1,e.transition+t/r.seatDuration),o=i?Td(a):1-Td(a),s=e.tableX+r.chairSide*(1-o);if(!n(s,r.seatZ))return;e.transition=a,e.seatProgress=o,e.x=s,e.z=r.seatZ,e.rotation=0,a>=1&&(i?e.phase=`seated`:(e.phase=`leaving`,e.points=[{x:e.tableX+r.chairSide,z:r.exitAisleZ},{x:r.exitX,z:r.exitAisleZ},{x:r.exitX,z:r.doorZ},{x:r.exitX,z:r.outsideZ}]));return}let i=e.points[0];if(!i){e.phase=e.phase===`entering`?`turning`:`exited`;return}let a=i.x-e.x,o=i.z-e.z,s=Math.hypot(a,o);if(s<1e-4){e.points.shift();return}let c=Math.atan2(a,o),l=wd(e.rotation,c);if(e.rotation+=Math.sign(l)*Math.min(Math.abs(l),r.turnSpeed*t),Math.abs(l)>r.turnSpeed*t)return;e.rotation=c;let u=Math.min(s,r.speed*t),d=e.x+a/s*u,f=e.z+o/s*u;n(d,f)&&(e.x=d,e.z=f,e.walking=!0,e.speed=u/t,u>=s&&e.points.shift())}var kd=(e,t)=>e>=-1.4&&e<=1.4&&t>=-9.5&&t<=-7.1,Ad=e=>[`queued`,`exited`,`gone`].includes(e.motion.phase),jd=class{constructor(e=Math.random){this.random=e,this.people=[],this.serial=0,this.elapsed=0,this.nextPerson=2.2,this.junctionOwner=null,this.addPerson([],{direction:1,x:-7.8}),this.addPerson([],{direction:-1,x:5.8})}addPerson(e=[],t={}){if(this.people.length>=Hu.maxPassers)return!1;let n=[0,0,0,0];for(let t of[...this.people,...e])Ad(t)||n[t.variant]++;let r=n.map((e,t)=>e<3?t:-1).filter(e=>e>=0);if(!r.length)return!1;let i=t.direction??(this.random()<.5?1:-1),a=r[Math.min(r.length-1,Math.floor(this.random()*r.length))],o=2.15+this.random()*.45,s=t.x??(i>0?Hu.left:Hu.right),c=i>0?Hu.nearZ:Hu.farZ,l={id:`street-${this.serial++}`,variant:a,isStreet:!0,direction:i,pace:o,passedDoor:!1,motion:{x:s,z:c,rotation:i*Math.PI/2,phase:`street`,seatProgress:0,walking:!0,speed:o}};return![...this.people,...e].some(e=>!Ad(e)&&Math.hypot(e.motion.x-s,e.motion.z-c)<1)&&(this.people.push(l),!0)}canMove(e,t,n,r=[]){return kd(t,n)&&this.junctionOwner!==null&&this.junctionOwner!==e.id||[...this.people,...r].some(r=>{if(r.id===e.id||Ad(r))return!1;let i=Math.hypot(t-r.motion.x,n-r.motion.z),a=Math.hypot(e.motion.x-r.motion.x,e.motion.z-r.motion.z);return i<.72&&i<a+1e-5})?!1:(kd(t,n)&&(this.junctionOwner=e.id),!0)}release(e){this.junctionOwner===e.id&&!kd(e.motion.x,e.motion.z)&&(this.junctionOwner=null)}receive(e){let t=2.15+this.random()*.45;this.people.push({...e,isStreet:!0,direction:1,passedDoor:!0,pace:t,motion:{x:e.motion.x,z:e.motion.z,rotation:e.motion.rotation,phase:`street`,seatProgress:0,walking:!1,speed:0}})}tick(e,{guests:t=[],admit:n=()=>!1}={}){if(!(e<=0)){this.elapsed+=e,this.elapsed>=this.nextPerson&&this.addPerson(t)&&(this.nextPerson=this.elapsed+2.1+this.random()*1.4);for(let r of[...this.people]){let i=r.motion;i.walking=!1,i.speed=0;let a=(r.passedDoor?r.direction>0?Hu.right:Hu.left:-.5)-i.x;if(Math.abs(a)<1e-4){if(r.passedDoor)i.phase=`gone`,this.release(r),this.people.splice(this.people.indexOf(r),1);else if(r.passedDoor=!0,n(r)){this.people.splice(this.people.indexOf(r),1);continue}continue}let o=r.direction*Math.PI/2,s=Math.atan2(Math.sin(o-i.rotation),Math.cos(o-i.rotation));if(i.rotation+=Math.sign(s)*Math.min(Math.abs(s),6*e),Math.abs(s)>6*e)continue;i.rotation=o;let c=Math.min(Math.abs(a),r.pace*e),l=i.x+Math.sign(a)*c;this.canMove(r,l,i.z,t)&&(i.x=l,i.walking=!0,i.speed=c/e),this.release(r)}}}},Md=Object.freeze({courseSeconds:5,excellentWait:4,excellentGap:1,excellentCheckout:2,goodWait:7,goodGap:2,goodCheckout:4,uneasyFirst:12,uneasyGap:4,uneasyTotal:16,uneasyCheckout:6,angryFirst:20,angryGap:8,angryTotal:26,angryCheckout:10,furiousFirst:34,furiousGap:14,furiousTotal:42,furiousCheckout:18});function Nd(){return{initialWait:0,totalWait:0,gapWait:0,maxGap:0,checkoutWait:0,courses:[],complete:!1}}function Pd(e,t){let n=e.service;if(n&&Number.isFinite(t)&&t>0){if(e.status===`waiting`)n.totalWait+=t,n.courses.length?(n.gapWait+=t,n.maxGap=Math.max(n.maxGap,n.gapWait)):n.initialWait+=t;else if(e.status===`eating`){for(let e of n.courses)e.left=Math.max(0,e.left-t);e.timer=Math.max(0,...n.courses.map(e=>e.left))}else e.status===`pay`&&(n.checkoutWait+=t)}}function Fd(e,t){if(t.length){e.service??=Nd();for(let n of t)e.service.courses.push({food:n,left:Md.courseSeconds});e.service.gapWait=0,e.service.complete=e.remaining.length===0,e.status=`eating`,e.timer=Md.courseSeconds}}var Id=1e-7,Ld=(e,t)=>e<=t+Id;function Rd(e,t){return e.checkoutWait>=Md[`${t}Checkout`]-Id?`checkout-wait`:e.maxGap>=Md[`${t}Gap`]-Id?`course-gap`:e.initialWait>=Md[`${t}First`]-Id?`initial-wait`:e.totalWait>=Md[`${t}Total`]-Id?`total-wait`:null}function zd(e){let t=e.service;if(!t)return{tier:`normal`,stage:`relaxed`,percent:100,shouldLeave:!1,reason:`normal`};let n=Rd(t,`furious`);if(n)return{tier:`furious`,stage:`urgent`,percent:0,shouldLeave:!0,reason:n};let r=Rd(t,`angry`);if(r)return{tier:`angry`,stage:`urgent`,percent:50,shouldLeave:!1,reason:r};if(t.complete&&Ld(t.checkoutWait,Md.goodCheckout)&&Ld(t.totalWait,Md.goodWait)&&Ld(t.maxGap,Md.goodGap)){let e=Ld(t.totalWait,Md.excellentWait)&&Ld(t.maxGap,Md.excellentGap)&&Ld(t.checkoutWait,Md.excellentCheckout);return{tier:e?`delighted`:`happy`,stage:`pleased`,percent:e?120:110,shouldLeave:!1,reason:e?`excellent-service`:`good-service`}}let i=e.status===`waiting`||e.status===`pay`,a=Rd(t,`uneasy`),o=t.initialWait>4||t.gapWait>2||t.checkoutWait>3;return{tier:`normal`,stage:a?`impatient`:i&&o?`curious`:`relaxed`,percent:100,shouldLeave:!1,reason:a||`normal`}}function Bd(e,t){let n=zd(e),r=e.order.reduce((e,n)=>e+t[n].value,0),i=Math.round(r*Math.min(100,n.percent)/100),a=n.percent>100?Math.round(r*(n.percent-100)/100):0,o=i+a;return{table:e.id,base:r,mealAmount:i,tip:a,amount:o,adjustment:o-r,...n}}var Vd={coffee:{id:`coffee`,label:`云朵拿铁`,short:`拿铁`,value:24,time:.65},cake:{id:`cake`,label:`草莓小蛋糕`,short:`蛋糕`,value:28,time:.45},toast:{id:`toast`,label:`牛油果吐司`,short:`吐司`,value:32,time:.5}},Hd=[{title:`重新开门的早晨`,duration:110,total:10,goal:240,interval:9,patience:40,intro:[`窗台上的薄荷又长高了, 小馆也该重新开门了`,`米粒, 今天你当小小店长, 妈妈负责把每一杯拿铁做好`],outro:[`隔壁的阿婆说, 她终于又闻到熟悉的咖啡香了`,`今天的第一笔收入, 刚好给你添一本小小的故事书`]},{title:`一片吐司的心意`,duration:125,total:13,goal:370,interval:8,patience:38,intro:[`今早收到一篮邻居送来的牛油果, 来试试新的吐司吧`,`面包机最多可以备 3 片吐司, 烤好后点旁边的成品盘装盘`],outro:[`那位总是很匆忙的客人, 今天坐下来吃完了一整片吐司`,`他说, 这里让人想起小时候的家, 我想这就是开店的意义`]},{title:`阳光坐满了小馆`,duration:140,total:16,goal:540,interval:7.5,patience:36,intro:[`周末的邻居们约好一起来, 桌上的花也刚刚开了`,`今天会有一点忙, 米粒, 等打烊了我们一起去晒太阳`],outro:[`小馆安静下来了, 米粒在怀里睡得很香`,`我们不需要把每一天过得完美, 有热饭, 有拥抱, 就已经很好了`]}],Ud=Object.fromEntries(Object.entries(Iu).map(([e,t])=>[e,[t.x,t.serviceZ]])),Wd={coffee:`制作拿铁`,cake:`取小蛋糕`,toast:`烤一片吐司`,"toast-pickup":`取烤好的吐司`,baby:`抱抱米粒`},Gd=(e,t,n)=>Math.max(t,Math.min(n,e)),Kd=e=>e===`baby`||e===`baby-return`,qd=e=>e===`toast-pickup`?`toast`:e===`coffee`||e===`cake`?e:null,Jd=class{constructor(e=1,t=()=>{},{random:n=Math.random}={}){this.day=Gd(e,1,3),this.config=Hd[this.day-1],this.onEvent=t,this.elapsed=0,this.phase=`story`,this.paused=!1,this.score=0,this.served=0,this.spawned=0,this.lost=0,this.combo=0,this.tray=[],this.queue=[],this.current=null,this.capacity=3,this.position={x:Iu.cake.x,z:Iu.cake.serviceZ},this.rotation=0,this.walking=!1,this.carrying=!1,this.tables=Lu.map((e,t)=>({id:`table${t}`,x:e,status:`empty`,order:[],remaining:[],patience:1,timer:0,customer:null})),this.customers=[],this.nextEntrance=0,this.junctionGuest=null,this.street=new jd(n),this.babyHappiness=1,this.baby={...Ru},this.cared=0,this.mouseCaught=!1,this.mouseActive=!1,this.mouseRemaining=0,this.nextMouse=22,this.mousePosition={x:-6.3,z:2.6},this.oven={state:`idle`,timer:0,ready:0,queued:0},this.ovenCapacity=3,this.nextSpawn=2.5,this.lastService=-100,this.serviceStreak=0,this.started=!1,this.lastInput={id:null,time:-100}}emit(e,t={}){this.onEvent({type:e,...t})}start(){this.phase=`playing`,this.started=!0,this.emit(`start`)}togglePause(e){this.phase===`playing`&&(this.paused=e??!this.paused,this.emit(`pause`,{paused:this.paused}))}feedback(e,t,n){this.emit(`action-feedback`,{kind:e,id:t,label:Vd[t]?.short||Wd[t]||``,message:n})}cancelQueue(){this.queue=[],this.feedback(`cancelled`,null,`后续安排已取消, 手上的工作会完成`)}discard(e){this.phase!==`playing`||this.paused||!Number.isInteger(e)||e<0||e>=this.tray.length||(this.tray.splice(e,1),this.feedback(`cancelled`,null,`已移除一份食物, 托盘腾出了位置`))}pendingFoods(){return[...this.current?[{...this.current,status:`working`}]:[],...this.queue.map(e=>({...e,status:`queued`}))].filter(e=>qd(e.id)).map(e=>({id:qd(e.id),sourceId:e.id,label:Vd[qd(e.id)].short,status:e.status}))}toastReserved(){return this.oven.ready+this.oven.queued+Number(this.oven.state===`cooking`)+[...this.current?[this.current]:[],...this.queue].filter(e=>e.id===`toast`).length}availableToast(){return this.oven.ready-[...this.current?[this.current]:[],...this.queue].filter(e=>e.id===`toast-pickup`).length}startNextToast(){this.oven.state===`idle`&&this.oven.queued>0&&(this.oven.queued--,this.oven.state=`cooking`,this.oven.timer=4)}advanceOven(e){let t=e;for(;this.oven.state===`cooking`&&t>0;){if(this.oven.timer>t+1e-8){this.oven.timer-=t;break}t=Math.max(0,t-this.oven.timer),this.oven.ready++,this.oven.state=`idle`,this.oven.timer=0,this.emit(`ready`,{ready:this.oven.ready}),this.startNextToast()}}hasRoomFor(e){let t=[...this.tray];for(let n of[...this.current?[this.current]:[],...this.queue,e]){let e=qd(n.id);if(e){if(t.length>=this.capacity)return!1;t.push(e)}else if(n.id.startsWith(`table`)&&n.mode!==`pay`&&n.mode!==`clean`){let e=this.tables.find(e=>e.id===n.id);if(e&&(!n.customerId||n.customerId===e.customer?.id)&&[`waiting`,`eating`].includes(e.status))for(let n of e.remaining){let e=t.indexOf(n);e>=0&&t.splice(e,1)}}}return!0}enqueue(e){if(this.phase!==`playing`||this.paused)return!1;if(e===`mouse`)return this.catchMouse();if((e===`toast`||e===`toast-pickup`)&&this.day===1)return this.emit(`toast`,{message:`吐司会在第 2 天加入菜单`}),!1;if(this.queue.length>=8)return this.emit(`toast`,{message:`已经安排好很多事啦, 先让林暖忙完手上的`}),!1;let t=this.tables.find(t=>t.id===e);if(t?.status===`arriving`)return this.emit(`toast`,{message:`客人正在入座, 坐好后就会点餐`}),!1;if(!t&&!Wd[e])return!1;if((e===`coffee`||e===`cake`)&&this.lastInput.id===e&&this.elapsed-this.lastInput.time<.4)return this.feedback(`duplicate`,e,`已收到${Vd[e].short}, 不用连点`),!1;let n=t?t.status===`pay`?`pay`:t.status===`dirty`?`clean`:`serve`:void 0;if(e===`toast`){if(this.toastReserved()>=this.ovenCapacity)return this.feedback(`stock-full`,e,`已备餐 3 / 3 份, 取走成品后可以继续烤`),!1;n=`bake`}if(e===`toast-pickup`){if(this.availableToast()<=0)return this.feedback(`stock-empty`,e,this.oven.ready?`成品已安排取走`:`还没有烤好的吐司`),!1;n=`pickup`}let r={id:e,mode:n,customerId:t?.customer?.id,label:t?n===`pay`?`为这桌客人收款`:n===`clean`?`收拾餐桌`:`为客人送餐`:Wd[e]};return t&&[...this.current?[this.current]:[],...this.queue].some(t=>t.id===e&&t.mode===n&&t.customerId===r.customerId)?(this.feedback(`duplicate`,e,`这桌已经安排好了`),!1):qd(e)&&!this.hasRoomFor(r)?(this.feedback(`full`,e,`托盘和待取食物已占满 3 格, 请先安排送餐`),!1):t?.status===`empty`?(this.emit(`toast`,{message:`这张桌子正等着下一位客人`}),!1):(this.queue.push(r),this.lastInput={id:e,time:this.elapsed},this.feedback(`queued`,e,e===`toast`?`已安排烤第 ${this.toastReserved()} / 3 份`:`已安排: ${r.label}`),this.emit(`queue`),!0)}catchMouse(){return!this.mouseActive||this.mouseCaught?!1:(this.mouseCaught=!0,this.mouseActive=!1,this.score+=35,this.emit(`mouse`,{points:35,message:`找到小访客了 +35`}),!0)}makeOrder(e){if(this.day===1)return e%4==3?[`coffee`,`cake`]:[e%2?`cake`:`coffee`];let t=[[`coffee`],[`toast`],[`cake`,`coffee`],[`toast`,`coffee`],[`cake`],[`coffee`,`toast`]];return this.day===3&&e%3==0?[`coffee`,`cake`,`toast`]:[...t[e%t.length]]}spawn(e){let t=this.tables.find(e=>e.status===`empty`&&!this.customers.some(t=>t.tableId===e.id&&[`standing`,`leaving`].includes(t.motion.phase)&&t.motion.z>-1.4&&Math.abs(t.motion.x-e.x)<1.6));if(!t||this.spawned>=this.config.total||this.elapsed>this.config.duration-10)return!1;let n=this.spawned++,r=Math.max(0,this.nextEntrance-this.elapsed);this.nextEntrance=this.elapsed+r+1.2;let i=Object.assign(e||{id:`guest-${n}`,variant:n%4},{tableId:t.id,orderNumber:n,isStreet:!1,friendly:n%3!=1,name:[`花店阿姨`,`附近的上班族`,`戴帽子的爷爷`,`周末的邻居`][n%4],checkout:null,receipt:null,motion:Ed(t.x,{delay:e?0:r,from:e?.motion})});return e||(i.motion.phase=`queued`),this.customers.push(i),Object.assign(t,{status:`arriving`,order:this.makeOrder(n),remaining:this.makeOrder(n),patience:1,timer:0,customer:i,quick:!0,service:Nd(),receipt:null}),!0}startTableCheckout(e){if(!e.customer||e.status===`pay`)return;let t=e.customer;t.checkout={id:t.id,tableId:e.id,customer:t,order:[...e.order],service:e.service,patience:e.patience,status:`pay`},e.status=`pay`,e.timer=0,this.emit(`checkout`,{table:e.id,customer:t.id})}leaveTable(e){if(![`waiting`,`eating`,`pay`].includes(e.status))return;let t=e.customer;t&&(t.checkout??={id:t.id,tableId:e.id,customer:t,order:[...e.order],service:e.service,patience:e.patience},t.checkout.status=`unpaid`,t.checkout.patience=e.patience,Dd(t.motion)),e.status=`dirty`,e.timer=0,this.lost++,this.serviceStreak=0,this.combo=0,this.emit(`lost`,{table:e.id,customer:t?.id,message:`客人等了太久, 先离开了`})}inRearPassage(e,t){return e>=-6.7&&e<=6&&t>=-3.2&&t<=-.4&&(t<=-1.4||Math.abs(e)<=1.4||Math.abs(e-2.7)<=.9)}moveCustomers(e){let t=e=>+![`standing`,`leaving`].includes(e.motion.phase),n=(e,t)=>this.inRearPassage(e,t),r=[...this.customers].sort((e,n)=>t(e)-t(n)||e.orderNumber-n.orderNumber);for(let t of r){let r=t.motion;Od(r,e,(e,i)=>n(e,i)&&this.junctionGuest!==null&&this.junctionGuest!==t.id||this.customers.some(n=>{if(n===t||[`queued`,`exited`].includes(n.motion.phase))return!1;let a=Math.hypot(e-n.motion.x,i-n.motion.z),o=Math.hypot(r.x-n.motion.x,r.z-n.motion.z);return a<Cd.spacing&&a<o+1e-5})||!this.street.canMove(t,e,i,this.customers)?!1:(n(e,i)&&(this.junctionGuest=t.id),!0)),this.junctionGuest===t.id&&!n(r.x,r.z)&&(this.junctionGuest=null),this.street.release(t);let i=this.tables.find(e=>e.id===t.tableId);r.phase===`seated`&&i?.customer===t&&i.status===`arriving`&&(i.status=`waiting`,this.emit(`arrival`,{table:i.id}))}for(let e of this.customers)e.motion.phase===`exited`&&this.street.receive(e);this.customers=this.customers.filter(e=>e.motion.phase!==`exited`)}target(e){return Ud[e]?{x:Ud[e][0],z:Ud[e][1]}:e.startsWith(`table`)?{x:this.tables[Number(e.slice(5))]?.x||0,z:2.35}:e===`baby`||e===`baby-return`?{...Bu}:{x:this.baby.x,z:this.baby.z+.35}}beginAction(e){let t=this.target(e.id),n=[],r=this.position.z>1.8,i=t.z>1.8,a=r?2.7:-.65,o=i?2.7:-.65,s=this.position.z<-2.65,c=Kd(e.id);if(c&&!s)r?n.push({x:this.position.x,z:2.7},{x:1.8,z:2.7},{x:1.8,z:0}):n.push({x:this.position.x,z:0}),n.push({x:Vu,z:0},{x:Vu,z:Cd.exitAisleZ},{x:Bu.x,z:Cd.exitAisleZ});else if(s&&!c)n.push({x:Bu.x,z:Cd.exitAisleZ},{x:Vu,z:Cd.exitAisleZ},{x:Vu,z:0},{x:1.8,z:0}),i&&n.push({x:1.8,z:2.7},{x:t.x,z:2.7});else if(r!==i){let e=[Lu[0]-1.6,...Lu.slice(1).map((e,t)=>(e+Lu[t])/2),Lu.at(-1)+1.6].sort((e,n)=>Math.abs(this.position.x-e)+Math.abs(t.x-e)-Math.abs(this.position.x-n)-Math.abs(t.x-n))[0];n.push({x:this.position.x,z:a},{x:e,z:a},{x:e,z:o},{x:t.x,z:o})}else Math.abs(this.position.z-t.z)>.15&&Math.abs(this.position.x-t.x)>.7&&n.push({x:this.position.x,z:a},{x:t.x,z:o});n.push(t),this.current={...e,points:n,work:null},this.feedback(`working`,e.id,`正在${e.label}`)}processAction(e){if(!this.current&&this.queue.length&&this.beginAction(this.queue.shift()),!this.current){this.walking=!1;return}let t=this.current;if(t.points.length){let n=e*5.6;for(this.walking=!0;t.points.length&&n>0;){let e=t.points[0],r=e.x-this.position.x,i=e.z-this.position.z,a=Math.hypot(r,i);a>.01&&(this.rotation=Math.atan2(r,i));let o=Math.min(a,n),s=a>.001?this.position.x+r/a*o:e.x,c=a>.001?this.position.z+i/a*o:e.z;if(this.inRearPassage(s,c)){if(this.junctionGuest!==null&&this.junctionGuest!==`mother`){this.walking=!1;return}this.junctionGuest=`mother`}this.position.x=s,this.position.z=c,this.junctionGuest===`mother`&&!this.inRearPassage(s,c)&&(this.junctionGuest=null),a<=n?(t.points.shift(),n-=a):n=0}if(t.points.length)return}this.walking=!1,t.work===null&&(t.work=t.id===`baby`?1:t.id.startsWith(`table`)?.45:Vd[t.id]?.time||.5),t.work-=e,t.work<=0&&(this.current=null,this.completeAction(t.id,t.mode,t.customerId))}completeAction(e,t,n){if(e===`coffee`||e===`cake`)return this.takeFood(e);if(e===`toast`){if(this.toastReserved()>=this.ovenCapacity){this.feedback(`stock-full`,e,`已经备好 3 份吐司了`);return}this.oven.queued++,this.startNextToast(),this.feedback(`working`,e,`吐司开始制作, 烤好后在成品盘取餐`);return}if(e===`toast-pickup`){if(this.oven.ready<=0){this.feedback(`stock-empty`,e,`成品盘上还没有吐司`);return}this.takeFood(`toast`,`toast-pickup`)&&this.oven.ready--;return}if(e===`baby`){if(this.babyHappiness>.9){this.emit(`toast`,{message:`米粒正玩得开心呢`});return}this.carrying=!0,this.babyHappiness=1,this.beginAction({id:`baby-return`,label:`送米粒回小毯子`});return}if(e===`baby-return`){this.carrying=!1,this.babyHappiness=1,this.baby={...Ru},this.cared++,this.score+=15,this.emit(`care`,{points:15,message:`一个暖暖的拥抱 +15`});return}let r=this.tables.find(t=>t.id===e);if(!r)return;if(n!==void 0&&r.customer?.id!==n){this.feedback(`cancelled`,e,`这位客人已经离开, 原安排已取消`);return}if(t===`pay`){let t=this.target(e);if(r.status!==`pay`||!r.customer||Math.hypot(this.position.x-t.x,this.position.z-t.z)>.12)return;let n=r.customer.checkout;if(!n||n.customer!==r.customer||n.status!==`pay`)return;let i={...Bd(r,Vd),table:e,customer:r.customer.id};if(i.amount<=0){this.leaveTable(r);return}r.receipt=i,n.receipt=i,r.customer.receipt=i,n.status=`paid`,this.served++,this.score+=i.amount,r.status=`dirty`,r.timer=0,Dd(r.customer.motion),this.emit(`payment`,{points:i.amount,count:1,receipts:[i],table:e,customer:n.id,message:`谢谢光临`});return}if(t===`serve`&&![`waiting`,`eating`].includes(r.status)||t===`clean`&&r.status!==`dirty`)return;if(r.status===`dirty`){r.status=`empty`,r.customer=null,r.service=null,r.receipt=null,this.emit(`clean`,{table:e});return}if(r.status===`arriving`){this.emit(`toast`,{message:`客人正在入座, 坐好后就会点餐`});return}if(![`waiting`,`eating`].includes(r.status)||!r.remaining.length){this.emit(`toast`,{message:r.status===`pay`?`客人准备结账了, 点击这桌的收款气泡`:`客人正在享用美食`});return}let i=[];for(let e=r.remaining.length-1;e>=0;e--){let t=this.tray.indexOf(r.remaining[e]);t!==-1&&(this.tray.splice(t,1),i.push(...r.remaining.splice(e,1)))}if(!i.length){this.emit(`toast`,{message:`先按订单取好餐, 再送给这位客人`});return}if(Fd(r,i),r.remaining.length){r.quick=!1,this.emit(`serve`,{table:e,points:0,message:`已上桌, 还差${r.remaining.map(e=>Vd[e].short).join(`和`)}`});return}this.serviceStreak=this.elapsed-this.lastService<10?this.serviceStreak+1:1,this.lastService=this.elapsed,this.combo=this.serviceStreak;let a=(r.quick?8:0)+(r.patience>.75?6:0)+Math.min(12,(this.serviceStreak-1)*4);this.score+=a,r.status=`eating`,r.timer=5,this.emit(`serve`,{table:e,points:a,message:zd(r).tier===`angry`?`餐点上齐了, 客人已经等了很久`:this.serviceStreak>1?`顺手又一单 ×${this.serviceStreak} +${a}`:`热乎乎, 刚刚好 +${a}`})}takeFood(e,t=e){return this.tray.length>=this.capacity?(this.feedback(`full`,e,`托盘已满, 请先送餐`),!1):(this.tray.push(e),this.emit(`food`,{food:e,sourceId:t,slot:this.tray.length-1,label:Vd[e].short}),!0)}tick(e){if(this.phase!==`playing`||this.paused)return;if(e=Math.min(.1,Math.max(0,e)),this.elapsed+=e,this.street.tick(e,{guests:this.customers,admit:e=>this.elapsed<this.nextSpawn||!this.spawn(e)?!1:(this.nextSpawn=this.elapsed+this.config.interval,!0)}),this.moveCustomers(e),this.advanceOven(e),!this.carrying){this.babyHappiness=Math.max(0,this.babyHappiness-e*(.011+this.day*7e-4));let t=Gd((.72-this.babyHappiness)/.72,0,1);this.baby={x:Ru.x+(zu.minX-Ru.x)*t,z:Ru.z+(zu.maxZ-Ru.z)*t}}!this.mouseCaught&&!this.mouseActive&&this.elapsed>=this.nextMouse&&(this.mouseActive=!0,this.mouseRemaining=10,this.mousePosition=this.nextMouse>30?{x:6.1,z:.5}:{x:-6.3,z:2.6},this.emit(`squeak`)),this.mouseActive&&(this.mouseRemaining-=e,this.mouseRemaining<=0&&(this.mouseActive=!1,this.nextMouse=this.elapsed+22));for(let t of this.tables)if(t.status===`eating`&&!t.service?.courses.length?t.timer-=e:Pd(t,e),t.status===`eating`&&t.timer<=0&&(t.remaining.length?t.status=`waiting`:this.startTableCheckout(t)),t.status===`waiting`||t.status===`pay`){let n=1/this.config.patience*(t.status===`pay`?.55:1);t.status===`waiting`&&this.babyHappiness<.18?n*=1.35:t.status===`waiting`&&t.customer?.friendly&&this.babyHappiness>.8&&(n*=.88),t.patience=Math.max(0,t.patience-e*n),t.customer?.checkout?.status===`pay`&&(t.customer.checkout.patience=t.patience),(t.patience<=0||t.status===`pay`&&zd(t).shouldLeave)&&this.leaveTable(t)}this.processAction(e);let t=this.customers.length>0||this.tables.some(e=>[`arriving`,`waiting`,`eating`,`pay`].includes(e.status));(this.elapsed>=this.config.duration&&!t||this.elapsed>=this.config.duration+40)&&this.finish()}finish(){this.phase!==`result`&&(this.phase=`result`,this.queue=[],this.current=null,this.walking=!1,this.emit(`end`,this.result()))}result(){let e=this.score/this.config.goal;return{day:this.day,stars:e>=1.45?3:e>=1.2?2:+(e>=1),score:this.score,goal:this.config.goal,served:this.served,total:this.config.total,mouse:this.mouseCaught,cared:this.cared,final:this.day===3}}snapshot(){return{day:this.day,title:this.config.title,time:Math.max(0,this.config.duration-this.elapsed),duration:this.config.duration,score:this.score,goal:this.config.goal,served:this.served,total:this.config.total,combo:this.combo,tray:this.tray.map(e=>Vd[e]),pendingFoods:this.pendingFoods(),queue:[...this.current?[{id:this.current.id,label:this.current.label,status:`working`}]:[],...this.queue.map(e=>({...e,status:`queued`}))],toastReady:this.oven.ready,toastReserved:this.toastReserved(),toastCooking:this.oven.state===`cooking`,ovenCapacity:this.ovenCapacity,babyHappiness:this.babyHappiness,mouseCaught:this.mouseCaught,paused:this.paused,phase:this.phase,toastProgress:this.oven.state===`cooking`?1-this.oven.timer/4:+(this.oven.ready>0)}}};function Yd(){let e,t=!0,n,r=0;function i(n,r=.18,i=`sine`,a=.05){if(t||!e)return;let o=e.createOscillator(),s=e.createGain();o.type=i,o.frequency.value=n,s.gain.setValueAtTime(0,e.currentTime),s.gain.linearRampToValueAtTime(a,e.currentTime+.018),s.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+r),o.connect(s).connect(e.destination),o.start(),o.stop(e.currentTime+r+.04)}function a(){e||=new(window.AudioContext||window.webkitAudioContext),e.resume().catch(()=>{})}function o(e){t=e,t||(a(),n||=setInterval(()=>{if(document.hidden||t)return;let e=[261.63,329.63,392,523.25,440,392,329.63,293.66,220,329.63,440,523.25,392,349.23,329.63,293.66];i(e[r++%e.length],.8,`sine`,.014),r%4==0&&i(e[(r+2)%e.length]/2,1.8,`sine`,.011)},540))}function s(e){({food:[440,660],payment:[523,659,784],care:[392,523,659],mouse:[784,988,1175],ready:[880,660],squeak:[1500,1800],clean:[330,440],serve:[523,659],lost:[220,196]}[e]||[]).forEach((t,n)=>setTimeout(()=>i(t,.15,e===`squeak`?`sine`:`triangle`,.035),n*90))}return{unlock:a,setMuted:o,play:s,get muted(){return t}}}function Xd(e,t,{resolve:n=()=>!0,enabled:r=()=>!0}={}){let i=null;function a(){i=null,e.classList.remove(`is-pressed`)}e.addEventListener(`pointerdown`,t=>{if(!t.isPrimary||t.button!==0||!r())return;let a=n(t);a&&(i={id:t.pointerId,x:t.clientX,y:t.clientY,target:a},e.setPointerCapture?.(t.pointerId),e.classList.add(`is-pressed`))}),e.addEventListener(`pointerup`,e=>{if(!i||i.id!==e.pointerId)return;let n=i;a(),!(!r()||Math.hypot(e.clientX-n.x,e.clientY-n.y)>16)&&(e.preventDefault(),e.stopPropagation(),t(n.target,e))}),e.addEventListener(`pointercancel`,a),e.addEventListener(`lostpointercapture`,a),e.addEventListener(`click`,e=>{e.detail===0&&r()?t(n(e),e):e.preventDefault()})}function Zd({width:e,height:t,left:n=0,top:r=0,touch:i=!1}){let a=i||e<=600||e>t&&e<=1200&&t<=560,o=a&&t>e;return{width:o?t:e,height:o?e:t,viewportWidth:e,viewportHeight:t,left:n,top:r,rotated:o,mobile:a,compact:a&&Math.min(e,t)<=560}}function Qd({x:e,y:t},n){return n.rotated?{x:t-n.top,y:n.viewportWidth-(e-n.left)}:{x:e-n.left,y:t-n.top}}function $d(e,t){let n=Qd({x:e.left,y:e.top},t),r=Qd({x:e.right,y:e.bottom},t),i=Math.min(n.x,r.x),a=Math.min(n.y,r.y),o=Math.max(n.x,r.x),s=Math.max(n.y,r.y);return{x:i,y:a,left:i,top:a,right:o,bottom:s,width:o-i,height:s-a}}function ef({onResize:e=()=>{},onHelpChange:t=()=>{}}={}){let n=document.documentElement,r=matchMedia(`(pointer: coarse)`),i=matchMedia(`(display-mode: standalone)`),a=matchMedia(`(display-mode: fullscreen)`),o=document.createElement(`div`);o.id=`game-shell`;for(let e of[`game-canvas`,`ui-root`,`loading`]){let t=document.getElementById(e);t&&o.appendChild(t)}document.body.appendChild(o);let s=[],c,l=0,u=!1,d=0,f=!1,p=!1,m,h=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1,g=document.createElement(`button`);g.type=`button`,g.className=`mobile-fullscreen-button`,g.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;let _=document.createElement(`div`);_.className=`mobile-screen-status`,_.setAttribute(`role`,`status`);let v=document.createElement(`section`);v.className=`mobile-install-guide`,v.hidden=!0,v.setAttribute(`role`,`dialog`),v.setAttribute(`aria-modal`,`true`),v.setAttribute(`aria-labelledby`,`install-title`),v.innerHTML=`<div class="mobile-install-card"><span class="mobile-install-sun" aria-hidden="true">☀</span><h1 id="install-title">让小馆铺满屏幕</h1><p>${h?`在 Safari 中点分享, 选择添加到主屏幕<br>如果出现作为网页 App 打开, 请保持开启`:`在浏览器菜单中选择安装应用或添加到主屏幕`}</p><p>以后点主屏幕上的小馆图标进入<br>就没有地址栏和标签页了</p><small>屏幕方向锁定可以保持开启, 小馆会自己横过来</small><button type="button" class="primary-button">先在这里玩</button></div>`;let y=v.querySelector(`button`);o.append(g,_,v);function b(e,t,n,r){e.addEventListener(t,n,r),s.push(()=>e.removeEventListener(t,n,r))}function x(){return i.matches||navigator.standalone===!0||a.matches&&!S()}function S(){return document.fullscreenElement||document.webkitFullscreenElement}function C(e){_.textContent=e,_.classList.add(`is-visible`),clearTimeout(d),d=setTimeout(()=>_.classList.remove(`is-visible`),4e3)}function w(){v.hidden&&(m=document.activeElement,v.hidden=!1,document.getElementById(`ui-root`).inert=!0,g.inert=!0,t(!0),y.focus({preventScroll:!0}))}function T(){v.hidden||(v.hidden=!0,document.getElementById(`ui-root`).inert=!1,g.inert=!1,t(!1),m?.isConnected&&m.focus({preventScroll:!0}))}function E(){let e=!!S();if(g.setAttribute(`aria-label`,e?`退出全屏`:`全屏游玩`),g.setAttribute(`aria-pressed`,String(e)),g.title=e?`退出全屏`:`全屏游玩`,n.toggleAttribute(`data-installed`,x()),!e&&f){try{screen.orientation?.unlock?.()}catch{}f=!1}A()}async function D({showHelp:e=!0}={}){if(!c.mobile||x()||S()||p)return;let t=n.requestFullscreen||n.webkitRequestFullscreen;if(!t){e&&w();return}p=!0;try{await t.call(n,{navigationUI:`hide`});try{screen.orientation?.lock&&(await screen.orientation.lock(`landscape`),f=!0)}catch{}}catch{e&&w()}finally{p=!1,E()}}async function O(){if(S())try{await(document.exitFullscreen||document.webkitExitFullscreen)?.call(document)}catch{C(`可使用浏览器的退出全屏按钮`)}else await D()}function k(){if(l=0,u)return;let t=window.visualViewport;c=Zd({width:t?.width||innerWidth,height:t?.height||innerHeight,left:t?.offsetLeft||0,top:t?.offsetTop||0,touch:r.matches||navigator.maxTouchPoints>0}),n.toggleAttribute(`data-mobile`,c.mobile),n.toggleAttribute(`data-mobile-landscape`,c.compact),n.toggleAttribute(`data-mobile-rotated`,c.rotated),n.toggleAttribute(`data-mobile-narrow`,c.width<=700),n.toggleAttribute(`data-installed`,x()),n.style.setProperty(`--game-width`,`${c.width}px`),n.style.setProperty(`--game-height`,`${c.height}px`),n.style.setProperty(`--game-vw`,`${c.width/100}px`),n.style.setProperty(`--game-vh`,`${c.height/100}px`),o.style.left=`${c.left}px`,o.style.top=`${c.top}px`,o.style.transform=c.rotated?`translateX(${c.viewportWidth}px) rotate(90deg)`:`translateZ(0)`,e(c)}function A(){!l&&!u&&(l=requestAnimationFrame(k))}return b(g,`click`,O),b(y,`click`,T),b(window,`resize`,A,{passive:!0}),b(window,`orientationchange`,A,{passive:!0}),b(document,`fullscreenchange`,E),b(document,`webkitfullscreenchange`,E),window.visualViewport&&(b(window.visualViewport,`resize`,A,{passive:!0}),b(window.visualViewport,`scroll`,A,{passive:!0})),r.addEventListener&&b(r,`change`,A),i.addEventListener&&b(i,`change`,E),a.addEventListener&&b(a,`change`,E),b(window,`keydown`,e=>{v.hidden||(e.key===`Tab`&&(e.preventDefault(),y.focus({preventScroll:!0})),e.code===`Escape`&&(e.preventDefault(),e.stopPropagation(),T()),e.code===`Space`&&(e.stopPropagation(),document.activeElement!==y&&e.preventDefault()))},!0),E(),k(),{get layout(){return c},get mobile(){return c.mobile},get helpOpen(){return!v.hidden},enterFullscreen:D,hideGuide:T,toGamePoint:e=>Qd(e,c),toGameRect:e=>$d(e,c),destroy(){if(u=!0,cancelAnimationFrame(l),clearTimeout(d),T(),s.forEach(e=>e()),f)try{screen.orientation?.unlock?.()}catch{}for(g.remove(),_.remove(),v.remove();o.firstChild;)document.body.appendChild(o.firstChild);o.remove(),[`data-mobile`,`data-mobile-landscape`,`data-mobile-rotated`,`data-mobile-narrow`,`data-installed`].forEach(e=>n.removeAttribute(e)),[`--game-width`,`--game-height`,`--game-vw`,`--game-vh`].forEach(e=>n.style.removeProperty(e))}}}var tf=[{relaxed:`安心等候`,curious:`轻轻张望`,impatient:`有些失望`,urgent:`等得太久, 有些生气`,pleased:`暖暖地微笑`},{relaxed:`平静等候`,curious:`抬眼看看`,impatient:`抿嘴等候`,urgent:`等得太久, 皱起眉头`,pleased:`满意地微笑`},{relaxed:`轻松等候`,curious:`好奇地探望`,impatient:`轻轻噘嘴`,urgent:`等得太久, 不太开心`,pleased:`开心地微笑`},{relaxed:`悠闲等候`,curious:`望向餐台`,impatient:`有些无奈`,urgent:`等得太久, 轻叹一口气`,pleased:`舒心地微笑`}],nf=new Set([`relaxed`,`curious`,`impatient`,`urgent`,`pleased`]),rf=e=>{let t=2166136261;for(let n of String(e))t^=n.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0};function af({patience:e=1,status:t=`street`,variant:n=0,stage:r,expressionVariant:i=0,tier:a=`normal`}={}){let o=Number.isFinite(n)?(Math.trunc(n)%4+4)%4:0,s=Number.isFinite(e)?Math.max(0,Math.min(1,e)):1,c=[`waiting`,`pay`,`checkout`].includes(t),l=t===`eating`;r=nf.has(r)?r:!c||s>.72?`relaxed`:s>.42?`curious`:s>.18?`impatient`:`urgent`;let u=((Math.trunc(i)||0)%3+3)%3,d=r===`urgent`?[6,7,7]:r===`impatient`?[5,6,5]:r===`pleased`?a===`delighted`?[4,3,4]:[3,2,3]:l?[2,2,3]:r===`curious`?[1,0,1]:[0,1,0];return{stage:r,severity:r===`urgent`?1:c?1-s:0,personality:o,expressionVariant:u,dining:l,tier:a,portraitColumn:d[u],label:l&&r===`relaxed`?`平静地享用餐点`:tf[o][r]}}function of(e,t,n=0){let r=e?.checkout,i=r?.customer===e&&[`pay`,`checkout`,`paid`,`unpaid`].includes(r.status)?{...r,status:`pay`}:t,a=e&&!e.isStreet&&i?.customer===e&&[`waiting`,`eating`,`pay`,`checkout`].includes(i.status),o=rf(e?.id??`street`),s=Math.floor((n+o%67/10)/7),c=a&&i.service?zd(i):null;return af({variant:e?.variant,patience:a?i.patience:1,status:a?i.status:`street`,stage:c?.stage,tier:c?.tier,expressionVariant:rf(`${o}:${c?.stage??`idle`}:${s}`)%3})}var sf=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),cf=[`#f0d9cf`,`#efdfb9`,`#e9d4dd`,`#dae4de`],lf=[`#f4d3b7`,`#f0cba5`,`#c9906f`,`#ead1b8`],uf=new Set([`relaxed`,`curious`,`impatient`,`urgent`,`pleased`]),df={relaxed:0,curious:1,impatient:5,urgent:7,pleased:3},ff=e=>`${Number(e.toFixed(6))}%`,pf=`idle`,mf,hf,gf=0,_f=new Set;function vf({ImageCtor:e=globalThis.Image,timeoutMs:t=2e3}={}){return pf===`loaded`?Promise.resolve(!0):pf===`loading`?mf:e?(pf=`loading`,mf=new Promise(n=>{let r=new e;hf=r;let i=!1,a=!1,o=e=>{if(!i){if(i=!0,clearTimeout(s),r.onload=null,r.onerror=null,pf=e?`loaded`:`failed`,!e&&hf===r&&(hf=null),e){gf++;for(let e of _f)for(let t of e.querySelectorAll?.(`img.mood-atlas`)??[])Cf(t)}n(e)}},s=setTimeout(()=>o(!1),t),c=()=>{if(!(i||a)){if(a=!0,!r.naturalWidth){o(!1);return}typeof r.decode==`function`?Promise.resolve().then(()=>r.decode()).then(()=>o(!0),()=>o(!1)):o(!0)}};r.onload=c,r.onerror=()=>o(!1),r.decoding=`async`,r.src=Ou,r.complete&&r.naturalWidth>0&&c()}),mf):Promise.resolve(!1)}function yf(e,t){let n=`<ellipse cx="10.5" cy="15" rx="1.5" ry="2"/><ellipse cx="21.5" cy="15" rx="1.5" ry="2"/>`,r=`M7.5 10Q10.5 8.6 13 10M19 10Q21.5 8.6 24.5 10`,i=`M10.5 21Q16 25.5 21.5 21`;if(e===`curious`)r=`M7.5 8.5Q10.5 6.5 13 8.5M19 10Q21.5 8.5 24.5 10`,i=t===2?`M14 21Q16 19 18 21Q19 25 16 25Q13 25 14 21`:`M12 22Q16 23 20 21`;else if(e===`impatient`||e===`urgent`){let a=e===`urgent`;r=t===0?`M7.5 11L13 8.5M19 8.5L24.5 11`:t===3?`M7.5 10.5L13 10.5M19 10.5L24.5 10.5`:a?`M7.5 8.5L13 11.5M19 11.5L24.5 8.5`:`M7.5 10L13 11M19 11L24.5 10`,i=[a?`M10 24Q16 19 22 24`:`M11 23Q16 21 21 23`,`M11 23L21 23`,a?`M13 22Q16 19 19 22Q16 25 13 22`:`M13 22Q16 20 19 22`,a?`M14 22Q16 20 18 22Q19 26 16 26Q13 26 14 22`:`M13 23L19 23`][t],(t===1||t===3)&&(n=`<path d="M8.5 15Q10.5 17 12.5 15M19.5 15Q21.5 17 23.5 15" fill="none" stroke-width="2.1"/>`)}else e===`pleased`&&(n=`<path d="M8 16Q10.5 12 13 16M19 16Q21.5 12 24 16" fill="none" stroke-width="2.1"/>`,i=`M10 21Q16 29 22 21Q16 23 10 21Z`);return`<svg class="mood-fallback" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="14.5" fill="${lf[t]}"/><path d="M4 12Q5 2 16 2Q27 2 28 12Q22 6 16 7Q10 6 4 12Z" fill="${t===3?`#aaa99f`:`#795848`}"/><g fill="#654d43" stroke="#654d43" stroke-linecap="round" stroke-linejoin="round">${n}<path d="${r}" fill="none" stroke-width="1.7"/><path d="${i}" fill="${e===`pleased`?`#654d43`:`none`}" stroke-width="1.9"/></g></svg>`}function bf(e){let t=Number.isFinite(e.personality)?(Math.trunc(e.personality)%4+4)%4:0,n=uf.has(e.stage)?e.stage:`relaxed`,r=Number.isInteger(e.portraitColumn)?Math.max(0,Math.min(7,e.portraitColumn)):df[n],i=.74;return{personality:t,stage:n,column:r,crop:i,left:-(r+.13)/i*100,top:-(t+.09)/i*100,label:e.label||`客人的心情`}}function xf(e={}){let{personality:t,stage:n,column:r,crop:i,left:a,top:o,label:s}=bf(e);return`<span class="mood-icon mood-${n} mood-personality-${t}" role="img" aria-label="${sf(s)}" data-mood="${n}" data-personality="${t}" data-portrait="${r}" data-image-state="${pf===`loaded`?`loaded`:`pending`}" style="--mood-colour:${cf[t]}">${yf(n,t)}<img class="mood-atlas" src="${sf(Ou)}" alt="" aria-hidden="true" draggable="false" loading="eager" decoding="sync" style="width:${ff(8/i*100)};height:${ff(4/i*100)};left:${ff(a)};top:${ff(o)}"></span>`}function Sf(e){if(!e?.classList?.contains(`mood-atlas`))return;let t=e.parentElement;t?.classList?.contains(`mood-icon`)&&(t.dataset.imageState=e.complete&&e.naturalWidth>0?`loaded`:`failed`)}function Cf(e){let t=e?.parentElement;pf!==`loaded`||!e?.classList?.contains(`mood-atlas`)||!t?.classList?.contains(`mood-icon`)||!e.complete||e.naturalWidth>0||t.dataset.retryVersion===String(gf)||(t.dataset.retryVersion=String(gf),t.dataset.imageState=`pending`,e.src=Ou,e.complete&&Sf(e))}function wf(e,t={}){let n=e.querySelector(`.mood-icon`);if(!n){e.innerHTML=xf(t),n=e.querySelector(`.mood-icon`);let r=n?.querySelector(`img.mood-atlas`);r?.complete&&(Sf(r),Cf(r));return}let{personality:r,stage:i,column:a,left:o,top:s,label:c}=bf(t);if(n.dataset.mood!==i||n.dataset.personality!==String(r)){let e=n.querySelector(`.mood-fallback`);e&&(e.outerHTML=yf(i,r))}n.className=`mood-icon mood-${i} mood-personality-${r}`,n.setAttribute(`aria-label`,c),n.dataset.mood=i,n.dataset.personality=String(r),n.dataset.portrait=String(a),n.style.setProperty(`--mood-colour`,cf[r]);let l=n.querySelector(`img.mood-atlas`);l&&(l.style.left=ff(o),l.style.top=ff(s),l.complete&&(Sf(l),Cf(l)))}function Tf(e=globalThis.document){if(!e?.addEventListener)return()=>{};_f.add(e),vf();let t=e=>{Sf(e.target),e.type===`error`&&Cf(e.target)};e.addEventListener(`load`,t,!0),e.addEventListener(`error`,t,!0);for(let t of e.querySelectorAll?.(`img.mood-atlas`)??[])t.complete&&(Sf(t),Cf(t));return()=>{_f.delete(e),e.removeEventListener(`load`,t,!0),e.removeEventListener(`error`,t,!0)}}function Ef(e){let t=Math.max(0,Math.round(Number(e.tip)||0)),n=Math.max(0,Math.round(Number(e.mealAmount??(Number(e.amount)||0)-t)||0));return[...n?[{amount:n,tip:!1}]:[],...t?[{amount:t,tip:!0}]:[]]}function Df({root:e,origin:t,destination:n}){let r=[],i=null;function a(){r.length=0,i?.element.remove(),i=null}function o(t){let n=document.createElement(`div`);return n.className=`money-collection${t.tip?` is-tip`:``}`,n.setAttribute(`role`,`status`),n.setAttribute(`aria-label`,`${t.tip?`小费`:`收款`} ${t.amount}`),n.innerHTML=`<span class="money-amount"></span><i class="collected-coin"></i><i class="collected-coin"></i><i class="collected-coin"></i>`,n.querySelector(`.money-amount`).textContent=`${t.tip?`小费 `:``}+${t.amount}`,e.appendChild(n),{element:n,receipt:t.receipt,time:0,coins:[...n.querySelectorAll(`.collected-coin`)],label:n.firstElementChild}}return{collect(e){for(let t of e)r.push(...Ef(t).map(e=>({...e,receipt:{...t}})))},clear:a,update(e,{paused:s=!1,visible:c=!0}={}){if(!c){a();return}if(s||(!i&&r.length&&(i=o(r.shift())),!i))return;i.time+=Math.max(0,e);let l=matchMedia(`(prefers-reduced-motion: reduce)`).matches,u=t(i.receipt),d=n(),f=Math.min(1,i.time/1.05);i.label.style.left=`${u.x}px`,i.label.style.top=`${u.y-(l?0:Math.sin(f*Math.PI/2)*20)}px`,i.label.style.opacity=String(Math.min(1,f*10,(1-f)*7)),i.coins.forEach((e,t)=>{let n=Math.max(0,Math.min(1,(f-.16-t*.07)/.57)),r=n*n*(3-2*n);e.style.display=l?`none`:``,e.style.left=`${u.x+(d.x-u.x)*r+(t-1)*9*(1-r)}px`,e.style.top=`${u.y+(d.y-u.y)*r-Math.sin(n*Math.PI)*30}px`,e.style.transform=`translate(-50%,-50%) rotate(${n*300}deg) scale(${1-n*.3})`,e.style.opacity=String(n>=1?0:Math.min(1,f*9))}),f>=1&&(i.element.remove(),i=null)}}}var Of=document.getElementById(`game-canvas`),Q=Sd(document.getElementById(`ui-root`));Tf(document);var kf=Yd(),Af=`little-sun-cafe:v1`,jf={unlocked:1,best:{},muted:!0};try{let e=JSON.parse(localStorage.getItem(Af));e&&Number.isInteger(e.unlocked)&&(jf={...jf,unlocked:Math.max(1,Math.min(3,e.unlocked)),best:e.best&&typeof e.best==`object`?e.best:{},muted:e.muted!==!1})}catch{}function Mf(){try{localStorage.setItem(Af,JSON.stringify(jf))}catch{Q.toast(`浏览器暂时无法保存进度, 这一局仍可以继续玩`)}}var Nf;try{Nf=new Tu({canvas:Of,antialias:!0,alpha:!1,powerPreference:`high-performance`})}catch{throw document.getElementById(`loading`).innerHTML=`<p>浏览器暂时无法开启 3D 画面</p><p>请开启硬件加速, 或使用新版 Chrome / Edge / Safari</p>`,Error(`WebGL unavailable`)}Nf.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),Nf.shadowMap.enabled=!0,Nf.shadowMap.type=1,Nf.outputColorSpace=Re,Nf.toneMapping=4,Nf.toneMappingExposure=1;var Pf=new Pn;Pf.background=new Mn(`#f3eddf`);var Ff=new zo(-12,12,8,-8,.1,120),If=new Ms(Nf),Lf=new ku;Pf.environment=If.fromScene(Lf,.02).texture,Pf.environmentIntensity=.3,Lf.dispose(),If.dispose(),Pf.add(new wo(16774620,11908513,1.3));var Rf=new Vo(16772819,3.2);Rf.position.set(-6,15,9),Rf.castShadow=!0,Rf.shadow.mapSize.set(2048,2048),Object.assign(Rf.shadow.camera,{left:-13,right:13,top:12,bottom:-12,near:.5,far:50}),Rf.shadow.bias=-35e-5,Rf.shadow.normalBias=.025,Rf.shadow.radius=3.5,Pf.add(Rf);var zf=new Vo(14937328,.8);zf.position.set(8,7,-4),Pf.add(zf);var Bf=new K(new Va(200,200),new io({color:15788764,roughness:1}));Bf.rotation.x=-Math.PI/2,Bf.position.y=-.3,Bf.receiveShadow=!0,Pf.add(Bf);var Vf=Gu();Pf.add(Vf.group);var Hf=dd({kind:`mother`}),Uf=dd({kind:`baby`}),Wf=dd({kind:`mouse`});Pf.add(Hf.group,Uf.group,Wf.group),Hf.group.position.set(-2.1,0,-1.65),Uf.group.position.set(5,0,3.7),Wf.group.visible=!1,Uf.group.userData.target=`baby`,Wf.group.userData.target=`mouse`;var Gf=[];function Kf(e){let t=Gf.find(t=>t.group.userData.customer===e.id);return t||(t=Gf.find(t=>t.group.userData.customer===null&&t.group.userData.variant===e.variant),t||(t=dd({kind:`customer`,variant:e.variant}),t.group.userData.variant=e.variant,Pf.add(t.group),Gf.push(t)),t.resetPose?.(),t.group.userData.customer=e.id,t)}var qf=new K(new Ha(.46,.51,48),new Rr({color:12753760,transparent:!0,opacity:0,side:2,depthWrite:!1}));qf.rotation.x=-Math.PI/2,qf.position.y=.02,Pf.add(qf);var Jf=0,Yf=new Tn;Hf.group.add(Yf),Yf.position.set(-.24,1,.44);var Xf=new K(new wi(.38,.35,.045,32),new io({color:14003569,roughness:.6}));Yf.add(Xf);var Zf=[];for(let e=0;e<3;e++){let t=new Tn;t.position.set((e-1)*.2,.025,0),Yf.add(t),Zf.push(t)}function Qf(e){Yf.visible=e.length>0&&!$.carrying,Zf.forEach((t,n)=>{if(t.userData.food===e[n])return;for(;t.children.length;){let e=t.children.pop();e.geometry?.dispose(),e.material?.dispose()}if(t.userData.food=e[n],!e[n])return;let r=e[n]===`coffee`?16446175:e[n]===`cake`?13994882:10728816,i=new K(e[n]===`coffee`?new wi(.07,.06,.15,16):new xi(.14,.08,.15),new io({color:r,roughness:.8}));i.position.y=.07,t.add(i)})}var $f=Array.from({length:3},()=>{let e=new Tn;return Pf.add(e),e}),ep=new io({color:16314075,roughness:.65}),tp={coffee:new io({color:10184773,roughness:.7}),cake:new io({color:14127242,roughness:.85}),toast:new io({color:10530932,roughness:.8})};function np(){$.tables.forEach((e,t)=>{let n=e.service?.courses||[],r=$f[t];r.position.set(e.x,.94,1.1),r.visible=n.length>0&&[`waiting`,`eating`,`pay`,`dirty`].includes(e.status);let i=r.visible?`${e.status}:${n.map(e=>`${e.food}:${e.left>0}`).join(`,`)}`:`hidden`;if(r.userData.state===i)return;for(r.userData.state=i;r.children.length;){let e=r.children.at(-1);r.remove(e),e.geometry?.dispose()}if(!r.visible)return;let a=n.length;n.forEach(({food:t,left:n},i)=>{let o=(i-(a-1)/2)*.36,s=new K(new wi(.19,.16,.026,24),ep);if(s.position.set(o,.012,0),s.receiveShadow=!0,r.add(s),n<=0||e.status===`dirty`)return;let c=new K(t===`coffee`?new wi(.092,.077,.2,20):new xi(.22,t===`cake`?.13:.06,.2),t===`coffee`?ep:tp[t]);if(c.position.set(o,t===`coffee`?.12:t===`cake`?.09:.055,0),c.castShadow=!0,r.add(c),t===`coffee`){let e=new K(new Ci(.081,20),tp.coffee);e.rotation.x=-Math.PI/2,e.position.set(o,.221,0),r.add(e);let t=new K(new Ka(.049,.014,6,14),ep);t.position.set(o+.105,.13,0),r.add(t)}else if(t===`cake`){let e=new K(new Ga(.054,12,8),ep);e.position.set(o,.178,0),e.scale.y=.55,r.add(e)}})})}var rp=new Map;function ip(e,t,n){let r=document.createElement(`button`);return r.type=`button`,r.className=`world-label ${t}`,r.setAttribute(`aria-label`,n),r.dataset.target=e,Xd(r,()=>wp(e),{enabled:()=>$?.phase===`playing`&&!$.paused}),Q.labels.appendChild(r),rp.set(e,r),r}for(let e of[`coffee`,`cake`,`toast`,`toast-pickup`])ip(e,`station-label machine-control`,e===`toast-pickup`?`取烤好的吐司`:e===`toast`?`面包机, 烤一份吐司`:Vd[e].label);for(let e=0;e<3;e++)ip(`table${e}`,`table-label`,`餐桌 ${e+1}`);ip(`baby`,`baby-label`,`照顾宝宝米粒`),ip(`mouse`,`mouse-label`,`抓住小老鼠`);var ap=new U,op=innerWidth,sp=innerHeight,cp,lp=!1,$,up=0,dp=0,fp=0,pp=-2.8,mp=-2.8,hp=!1,gp=performance.now(),_p=Df({root:Q.labels,origin:e=>{let t=$.tables.find(t=>t.id===e?.table);return ap.set(t?.x??$.position.x,1.45,t?1.1:$.position.z).project(Ff),{x:Math.max(65,Math.min(op-65,(ap.x*.5+.5)*op)),y:Math.max(100,Math.min(sp-75,(-ap.y*.5+.5)*sp))}},destination:()=>{let e=Fp(document.querySelector(`[data-ui="score"]`));return{x:e.left+e.width/2,y:e.top+e.height/2}}});function vp(e){e.type===`ready`&&Q.feedback({kind:`ready`,label:`吐司`,message:`吐司烤好了, 点旁边的面包装盘`}),e.type===`action-feedback`&&(Q.update({...$.snapshot(),best:jf.best[$.day]||0}),Q.feedback(e),Ip()),e.type===`food`&&(Q.update({...$.snapshot(),best:jf.best[$.day]||0}),Q.feedback({kind:`loaded`,id:e.food,label:e.label,slot:e.slot}),Np(e.food,e.slot)),[`care`,`mouse`,`serve`,`lost`,`toast`].includes(e.type)&&e.message&&Q.toast(e.message),e.type===`payment`&&(_p.collect(e.receipts||[]),Q.update({...$.snapshot(),best:jf.best[$.day]||0})),kf.play(e.type),e.points>0&&e.type!==`payment`&&Pp(`+${e.points}`,e.type===`care`?Uf.group.position:Hf.group.position,e.type===`care`?`rose`:`gold`),e.type===`squeak`&&Q.toast(`吱吱, 小馆里来了一个小访客`),e.type===`end`&&Cp(e)}function yp(e){_p.clear(),$=new Jd(e,vp),$.phase=`welcome`,Gf.forEach(e=>{e.group.visible=!1,e.group.userData.customer=null}),pp=-2.8,Q.update({...$.snapshot(),best:jf.best[e]||0})}function bp(){Q.hideStory(),$.phase=`welcome`,$.paused=!1,pp=-2.8,Q.showWelcome({hasSave:Object.keys(jf.best).length>0,onStart:()=>xp(1),onContinue:()=>xp(jf.unlocked)})}function xp(e){vf(),navigator.maxTouchPoints>0&&matchMedia(`(pointer: coarse)`).matches&&cp?.enterFullscreen({showHelp:!1}),Q.hideStory(),Q.hideOverlay(),kf.unlock(),kf.setMuted(jf.muted),Q.setSound(jf.muted),yp(e),$.phase=`story`,pp=0,up=0,Sp()}function Sp(){let e=Hd[$.day-1].intro;Q.showStory({speaker:`林暖`,title:`第 ${$.day} 天 · ${$.config.title}`,text:e[up],portrait:Du,button:up===e.length-1?`开始营业`:`然后呢`,onNext:()=>{up++,up<e.length?Sp():(Q.hideStory(),Q.hideOverlay(),$.start(),Q.toast($.day===1?`点拿铁或蛋糕取餐, 再点订单气泡送给客人`:`提前安排动作, 一趟可以送好几份餐`))}})}function Cp(e){e.stars>0&&(jf.unlocked=Math.max(jf.unlocked,Math.min(3,$.day+1)),jf.best[$.day]=Math.max(jf.best[$.day]||0,e.score),Mf());let t=()=>{if(e.stars===0){xp($.day);return}let t=0,n=Hd[$.day-1].outro,r=()=>Q.showStory({speaker:`林暖`,title:`小馆打烊以后`,text:n[t],portrait:Du,button:t===n.length-1?$.day===3?`把今天珍藏起来`:`迎接新的一天`:`继续`,onNext:()=>{t++,t<n.length?r():$.day===3?(Q.hideStory(),bp()):(Q.hideStory(),xp($.day+1))}});r()};Q.showResult({...e,onNext:t,onRetry:()=>xp($.day)})}function wp(e){if(!$.enqueue(e))return;let t=rp.get(e);if(t&&(t.classList.remove(`tap-accepted`),t.offsetWidth,t.classList.add(`tap-accepted`)),Q.update({...$.snapshot(),best:jf.best[$.day]||0}),Ip(),e!==`mouse`){let t=$.target(e);qf.position.set(t.x,.025,t.z),Jf=1}}Q.onAction(e=>{e===`sound`?(jf.muted=!jf.muted,kf.setMuted(jf.muted),Q.setSound(jf.muted),Mf()):e===`pause`?$.togglePause():e===`help`?($.phase===`playing`&&$.togglePause(!0),Q.showHelp()):e===`close`?(Q.hideOverlay(),$.phase===`playing`&&$.togglePause(!1)):e===`restart`?xp($.day):e===`menu`?bp():e.startsWith?.(`discard:`)&&$.discard(Number(e.split(`:`)[1]))}),document.addEventListener(`keydown`,e=>{cp?.helpOpen||(e.code===`Space`&&$.phase===`playing`&&![`INPUT`,`TEXTAREA`].includes(document.activeElement.tagName)&&!document.querySelector(`.overlay-layer.is-open`)&&(e.preventDefault(),$.togglePause()),e.code===`Escape`&&$.phase===`playing`&&($.paused?(Q.hideOverlay(),$.togglePause(!1)):$.cancelQueue()))}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&$.phase===`playing`&&!$.paused&&$.togglePause(!0)}),Of.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),$.phase===`playing`&&$.togglePause(!0),Q.toast(`画面暂时休息了一下, 刷新页面可重新进入今天`)});var Tp=new as,Ep=new H,Dp=new Rr({visible:!1}),Op=[];function kp(e,t,n,r,i,a,o){let s=new K(new xi(t,n,r),Dp);return s.position.set(i,a,o),s.userData.target=e,Pf.add(s),Op.push(s),s}for(let[e,t]of Object.entries(Iu))kp(e,2.5,1.6,1.8,t.x,1.6,t.z);for(let e=0;e<3;e++)kp(`table${e}`,2,1.8,2.2,Lu[e],.9,.9);var Ap=kp(`baby`,1.35,1.4,1.3,5,.55,3.7),jp=kp(`mouse`,.8,.65,.8,0,.3,0);function Mp(e){let t=cp.toGamePoint({x:e.clientX,y:e.clientY});Ep.set(t.x/op*2-1,-t.y/sp*2+1),Tp.setFromCamera(Ep,Ff),Ap.position.copy(Uf.group.position).add(new U(0,.55,0)),jp.position.copy(Wf.group.position).add(new U(0,.3,0)),Pf.updateMatrixWorld(!0);let n=Op.filter(e=>e.userData.target===`mouse`?$.mouseActive:[`toast`,`toast-pickup`].includes(e.userData.target)?$.day>=2&&(e.userData.target!==`toast-pickup`||$.oven.ready>0):!e.userData.target.startsWith(`table`)||![`empty`,`arriving`].includes($.tables[Number(e.userData.target.slice(5))].status));return Tp.intersectObjects(n,!1)[0]?.object.userData.target}Xd(Of,e=>{e&&wp(e)},{resolve:Mp,enabled:()=>$?.phase===`playing`&&!$.paused});function Np(e,t){let n=document.querySelector(`[data-slot="${t}"]`)?.getBoundingClientRect(),r=Vf.targets[e===`toast`?`toast-pickup`:e];if(!r||!n)return;ap.copy(r.position).project(Ff);let i={x:(ap.x*.5+.5)*op-18,y:(-ap.y*.5+.5)*sp-18,width:36,height:36},a=cp.toGameRect(n);if(matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let o=document.createElement(`div`);o.className=`food-transfer`,o.innerHTML=_d[e],document.getElementById(`ui-root`).appendChild(o);let s={x:i.x+i.width/2-18,y:i.y+i.height/2-18},c={x:a.x+a.width/2-18,y:a.y+a.height/2-18};o.style.left=`${s.x}px`,o.style.top=`${s.y}px`,o.animate([{transform:`translate(0,0) scale(1)`,opacity:1},{transform:`translate(${(c.x-s.x)*.5}px,${(c.y-s.y)*.5-45}px) scale(1.2)`,opacity:1},{transform:`translate(${c.x-s.x}px,${c.y-s.y}px) scale(.85)`,opacity:.6}],{duration:520,easing:`cubic-bezier(.2,.65,.35,1)`}).finished.then(()=>o.remove()).catch(()=>o.remove())}function Pp(e,t,n=`gold`){let r=document.createElement(`span`);r.className=`reward-text ${n}`,r.textContent=e,ap.copy(t),ap.y+=2,ap.project(Ff),r.style.left=`${(ap.x*.5+.5)*op}px`,r.style.top=`${(-ap.y*.5+.5)*sp}px`,Q.labels.appendChild(r),setTimeout(()=>r.remove(),1400)}function Fp(e){let t=e.getBoundingClientRect();return cp?cp.toGameRect(t):t}function Ip(){let e=$.phase===`playing`&&!$.paused,t=document.documentElement.hasAttribute(`data-mobile-landscape`),n=t?Fp(document.querySelector(`.score-panel`)).bottom:0,r=$.pendingFoods(),i=$.snapshot();for(let[a,o]of rp){let s=Vf.targets[a]?.position;a===`baby`&&(s=Uf.group.position.clone().add(new U(0,1.1,0))),a===`mouse`&&(s=Wf.group.position.clone().add(new U(0,.4,0)));let c=e;a===`mouse`&&(c&&=$.mouseActive),(a===`toast`||a===`toast-pickup`)&&(c&&=$.day>=2),a===`toast-pickup`&&(c&&=$.oven.ready>0),Iu[a]&&(s={x:Iu[a].x,y:1.6,z:Iu[a].z});let l=``,u;if((a===`coffee`||a===`cake`)&&(l=`${_d[a]}<span>${Vd[a].short}</span>`),a===`toast`&&(l=``,o.setAttribute(`aria-description`,`已安排 ${i.toastReserved} / 3 份, 已烤好 ${$.oven.ready} 份${$.oven.state===`cooking`?`, 下一份约 ${Math.ceil($.oven.timer)} 秒烤好`:``}`)),a===`toast-pickup`&&(l=`<span class="stock-count" aria-hidden="true">${$.oven.ready}</span>`,o.setAttribute(`aria-description`,`已烤好 ${$.oven.ready} 份, 点击取 1 份装盘`)),a.startsWith(`table`)){let e=$.tables[Number(a.slice(5))];c&&=![`empty`,`arriving`].includes(e.status),u=of(e.customer,e,$.elapsed);let t=[`waiting`,`eating`].includes(e.status)&&e.remaining.length>0;o.classList.toggle(`has-mood`,t||e.status===`pay`),o.classList.toggle(`awaiting-payment`,e.status===`pay`),[`waiting`,`eating`,`pay`].includes(e.status)&&(s=new U(e.x,2.3,.05)),t&&(l=`<div class="order-food">${e.remaining.map(e=>_d[e]).join(``)}</div><div class="order-emotion"><span class="customer-mood" aria-hidden="true"></span><span class="order-patience"><i></i></span></div>`),e.status===`eating`&&!t&&(l=`<span class="dining-label"><span class="customer-mood" aria-hidden="true"></span>用餐</span>`),e.status===`pay`&&(l=`<span class="table-payment">${vd.coin}<span>收款</span></span><div class="order-emotion"><span class="customer-mood" aria-hidden="true"></span><span class="order-patience"><i></i></span></div>`),e.status===`dirty`&&(l=`${vd.clean}<span>收拾一下</span>`),[`waiting`,`eating`,`pay`].includes(e.status)?o.setAttribute(`aria-description`,u.label):o.removeAttribute(`aria-description`),o.setAttribute(`aria-label`,t?`餐桌 ${Number(a.slice(5))+1}, 送${e.remaining.map(e=>Vd[e].short).join(`和`)}`:e.status===`dirty`?`清理餐桌 ${Number(a.slice(5))+1}`:`餐桌 ${Number(a.slice(5))+1}, ${e.status===`pay`?`收款`:`正在享用`}`)}a===`baby`&&(l=`${vd.heart}<span>${$.carrying?`在妈妈怀里`:$.babyHappiness<.28?`妈妈, 抱抱`:`米粒`}</span>`,o.classList.toggle(`needs-care`,$.babyHappiness<.3)),a===`mouse`&&(l=`${vd.mouse}<span>吱吱</span>`),o.style.display=c?``:`none`;let d=a.startsWith(`table`)?`${t}:${$.tables[Number(a.slice(5))].status}:${$.tables[Number(a.slice(5))].remaining.join(`,`)}:${$.tables[Number(a.slice(5))].status===`pay`?l:``}`:l;if(o.dataset.content!==d&&(o.innerHTML=l,o.dataset.content=d),u){let e=o.querySelector(`.customer-mood`),t=`${u.personality}:${u.stage}:${u.portraitColumn}`;e&&e.dataset.expression!==t&&(wf(e,u),e.dataset.expression=t);let n=o.querySelector(`.order-patience i`),r=$.tables[Number(a.slice(5))];if(n){let e=r.status===`pay`?Math.max(0,1-(r.service?.checkoutWait||0)/Md.furiousCheckout):r.patience;n.style.width=`${Math.round(e*100)}%`,n.style.background=u.stage===`urgent`?`#c77968`:u.stage===`impatient`?`#c29b60`:`#93a980`}}let f=r.filter(e=>e.id===(a===`toast-pickup`?`toast`:a)&&a!==`toast`);if(o.classList.toggle(`has-pending`,f.length>0),o.dataset.pending=f.length?`${f.some(e=>e.status===`working`)?`取餐中`:`已安排`}${f.length>1?` ×${f.length}`:``}`:``,s){ap.copy(s).project(Ff);let e=(ap.x*.5+.5)*op,r=(-ap.y*.5+.5)*sp;if(t&&!Iu[a]&&(r=Math.max(n+8+o.offsetHeight,Math.min(sp-90,r))),t&&a===`baby`){let t=rp.get(`table2`),n=t.style.display===`none`?0:Fp(t).right;e=Math.min(op-o.offsetWidth/2-8,Math.max(e,n+8+o.offsetWidth/2))}if(t&&a===`mouse`){e<op/2?e=Math.max(o.offsetWidth/2+10,Math.min(e,Fp(rp.get(`coffee`)).left-o.offsetWidth/2-8)):(e=Math.min(op-o.offsetWidth/2-10,Math.max(e,Fp(rp.get(`toast-pickup`)).right+8+o.offsetWidth/2)),r=Math.min(r,sp-152));let t=Fp(rp.get(`baby`)),n=o.offsetWidth,i=o.offsetHeight,a=t=>e+n/2+8>t.left&&e-n/2-8<t.right&&r+8>t.top&&r-i-8<t.bottom;a(t)&&(e=op-n/2-10,a(t)&&(r=Math.min(sp-90,t.bottom+8+i)))}o.style.left=`${e}px`,o.style.top=`${r}px`}}}function Lp(e){Hf.group.position.set($.position.x,0,$.position.z);let t=Et.euclideanModulo($.rotation-Hf.group.rotation.y+Math.PI,Math.PI*2)-Math.PI;if(Hf.group.rotation.y+=t*Math.min(1,e*12),Hf.animate(e,{walking:$.walking&&!$.paused,happy:1,carrying:$.carrying,time:fp}),$.carrying){let e=new U(.14,.98,.35).applyAxisAngle(new U(0,1,0),Hf.group.rotation.y);Uf.group.position.copy(Hf.group.position).add(e),Uf.group.rotation.y=Hf.group.rotation.y+.3,Uf.group.scale.setScalar(.85)}else Uf.group.position.set($.baby.x,0,$.baby.z),Uf.group.scale.setScalar(1),Uf.group.rotation.y=$.babyHappiness<.72?-2.2:-.5;Uf.animate(e,{walking:$.babyHappiness<.72&&!$.carrying&&!$.paused,happy:$.babyHappiness,time:fp}),Wf.group.visible=$.mouseActive,Wf.group.position.set($.mousePosition.x,.02,$.mousePosition.z),Wf.group.rotation.y=1.1,Wf.animate(e,{time:fp});let n=[...$.customers,...$.street.people];for(let e of Gf)n.some(t=>t.id===e.group.userData.customer)||(e.group.visible=!1,e.group.userData.customer=null);for(let t of n){let n=Kf(t),r=t.motion,i=$.tables.find(e=>e.id===t.tableId);n.group.visible=r.phase!==`queued`,t.isStreet?delete n.group.userData.target:n.group.userData.target=t.tableId,n.group.position.set(r.x,0,r.z),n.group.rotation.y=r.rotation,n.animate(e,{walking:r.walking,speed:r.speed,seatProgress:r.seatProgress,sitting:r.phase===`seated`,happy:!t.isStreet&&t.checkout?t.checkout.patience:!t.isStreet&&i?.customer===t?i.patience:1,time:fp,emotion:of(t,i,$.elapsed)})}Qf($.tray),np(),Vf.setStation?.(`toast`,$.oven)}function Rp(e=cp?.layout){op=e?.width||innerWidth,sp=e?.height||innerHeight,Nf.setSize(op,sp);let t=e?.compact||!1;Nf.setPixelRatio(Math.min(window.devicePixelRatio,t?1.35:1.75));let n=op/sp,r=Math.max(t?13.2:15.4,20/n);Ff.left=-r*n/2,Ff.right=r*n/2,Ff.top=r/2,Ff.bottom=-r/2,Ff.updateProjectionMatrix(),Q.labels.style.setProperty(`--machine-target-width`,`${Math.max(44,2.5*sp/r)}px`),Q.labels.style.setProperty(`--machine-target-height`,`${Math.max(44,2.35*sp/r)}px`),Q.labels.style.setProperty(`--phone-order-icon`,`${op<600?22:27}px`)}Rp();function zp(e){let t=Math.min(.08,(e-gp)/1e3);gp=e,$.paused||(fp+=t),$.tick(t),_p.update(t,{paused:$.paused,visible:$.phase===`playing`}),$.phase!==`playing`&&!$.paused&&$.street.tick(t,{guests:$.customers}),mp+=(pp-mp)*Math.min(1,t*2.5),Ff.position.set(mp+Uu[0],Uu[1],Uu[2]),Ff.lookAt(mp+Wu[0],Wu[1],Wu[2]),Lp($.paused?0:t),Vf.update?.(fp,$.paused?0:t),Jf=Math.max(0,Jf-t),qf.material.opacity=Jf*.7,qf.scale.setScalar(1+(1-Jf)*.35),dp+=t,dp>.095&&(Q.update({...$.snapshot(),best:jf.best[$.day]||0}),Ip(),dp=0),Nf.render(Pf,Ff),hp||(hp=!0,document.getElementById(`loading`).remove()),requestAnimationFrame(zp)}yp(1),Q.setSound(jf.muted),bp(),cp=ef({onResize:e=>{Rp(e),cp&&Ip()},onHelpChange:e=>{e?(lp=$.phase===`playing`&&!$.paused,lp&&$.togglePause(!0)):lp&&$.phase===`playing`&&($.togglePause(!1),lp=!1)}}),requestAnimationFrame(zp),`serviceWorker`in navigator&&location.protocol!==`file:`&&!document.documentElement.dataset.standalone&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});