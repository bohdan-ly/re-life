import React from 'react';

export const Corner: React.FC<{
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
}> = ({ width, height, fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width || 24}
      height={height || 24}
      className={className}
    >
      <g transform="translate(0,0)">
        <path
          d="m22.4689,21.0001c-.08.4857-.0721.9818-.147,1.4687-.4374.0721-.8851.0749-1.3218.147 .4014.0649.7744.2227 1.175.294-.7481,5.0281-1.175,10.1148-1.175,15.275 0,60.971 52.7796,113.6334 129.6904,139.2372 4.7613,20.2186 7.7621,41.691 8.6656,64.0371-10.1196,1.2648-19.8887,2.6452-29.2281,3.9659-2.0653-52.6247-19.5277-93.7061-40.6843-93.7061-22.5465,0-40.6843,46.7283-40.6843,104.2811s18.1379,104.2811 40.6843,104.2811c21.1566,0 38.619-41.0812 40.6843-93.7061 9.3394,1.3207 19.1085,2.7025 29.2281,3.9659-.9036,22.348-3.9043,43.8072-8.6656,64.0374-76.9108,25.6022-129.6904,78.2643-129.6904,139.2373 0,5.2151.5585,10.3409 1.3218,15.4216-.4482.08-.8727.2234-1.3218.294 .4382.0721.8832.0807 1.3218.147 .0649.4367.075.8841.147,1.3216 .0742-.4511.214-.8747.294-1.3216 5.0808.7619 10.2064,1.3216 15.4219,1.3216 60.971,0 113.6334-52.7781 139.2372-129.6906 20.2284-4.7592 41.688-7.7621 64.0374-8.6654 1.2562,10.0646 2.6521,19.7865 3.9656,29.0812-52.6247,2.0651-93.7061,19.5294-93.7061,40.6841 0,22.5477 46.7283,40.8316 104.2811,40.8316s104.2811-18.2839 104.2811-40.8316c0-21.1547-41.0814-38.6189-93.7061-40.6841 1.3136-9.2947 2.7094-19.0166 3.9656-29.0812 22.3472.9033 43.8187,3.9062 64.0374,8.6654 25.6039,76.9121 78.2663,129.6906 139.2373,129.6906 5.1601,0 10.2469-.4274 15.2749-1.175 .0721.3992.227.7736.294,1.175 .0721-.4367.0778-.8855.147-1.3216 .4872-.0764.983-.0649 1.4687-.147-.449-.075-.8738-.214-1.3218-.294 .7865-5.076 1.3218-10.2126 1.3218-15.4216 0-60.973-52.7795-113.635-129.6904-139.2372-4.7613-20.2302-7.7621-41.6894-8.6656-64.0374 10.0647-1.2563 19.7865-2.6522 29.0812-3.9659 2.0654,52.6249 19.5277,93.7061 40.6843,93.7061 22.5465,0 40.8312-46.7282 40.8312-104.2811s-18.2847-104.2811-40.8312-104.2811c-21.1566,0-38.6189,41.0814-40.6843,93.7061-9.2946-1.3136-19.0165-2.7096-29.0812-3.9658 .9035-22.3462 3.9043-43.8186 8.6656-64.0372 76.9109-25.6039 129.6904-78.2662 129.6904-139.2373 0-5.1613-.547-10.2458-1.3218-15.275 .4482-.08.8727-.2198 1.3218-.294-.4843-.08-.9831-.0721-1.4687-.147-.0764-.4857-.0649-.9843-.147-1.4687-.0742.4497-.214.8738-.294,1.3218-5.0292-.7745-10.1137-1.3218-15.2749-1.3218-60.971,0-113.6334,52.7795-139.2373,129.6904-20.2187,4.7613-41.6902,7.7621-64.0374,8.6656-1.263-10.1196-2.645-19.8887-3.9656-29.2281 52.6247-2.0653 93.7061-19.5277 93.7061-40.6843 0-22.5465-46.7282-40.6843-104.2811-40.6843s-104.2811,18.1379-104.2811,40.6843c0,21.1566 41.0814,38.619 93.7061,40.6843-1.3206,9.3394-2.7026,19.1085-3.9656,29.2281-22.3494-.9036-43.809-3.9043-64.0374-8.6656-25.6039-76.9109-78.2662-129.6904-139.2372-129.6904-5.2105,0-10.3459.5354-15.4219,1.3218-.08-.4482-.2198-.8727-.294-1.3218zm.4403,2.0562c49.6726,9.1725 92.141,53.3863 116.031,115.8842-62.4808-23.8672-106.7984-66.273-116.031-115.8842zm466.0336,0c-9.2309,49.6112-53.4461,92.017-115.8842,115.8842 23.8672-62.438 66.273-106.6533 115.8842-115.8842zm-232.9434,30.9906c37.9729,0 68.7374,6.8215 68.7374,15.1281s-30.7645,14.9812-68.7374,14.9812-68.7374-6.6746-68.7374-14.9812 30.7645-15.1281 68.7374-15.1281zm-186.8247,133.2154c8.3068,0 14.9813,30.7643 14.9813,68.7374s-6.6744,68.7374-14.9813,68.7374-15.1281-30.7648-15.1281-68.7374 6.8213-68.7374 15.1281-68.7374zm373.7963,0c8.3066,0 15.1281,30.7643 15.1281,68.7374s-6.8215,68.7374-15.1281,68.7374-14.9812-30.7648-14.9812-68.7374 6.6747-68.7374 14.9812-68.7374zm-255.5621,1.7625c15.7473,4.0214 40.5734,6.6094 68.5906,6.6094s52.8433-2.588 68.5905-6.6094c-3.0795,15.5956-5.3093,31.8505-6.1688,48.6158-.0505-.005-.0973.004-.147,0v36.7182c.0504-.004.0973.005.147,0 .8591,16.7574 3.0915,33.0274 6.1688,48.6158-15.7483-4.0185-40.5854-6.6091-68.5905-6.6091s-52.8422,2.5907-68.5906,6.6091c3.0772-15.5884 5.3097-31.8584 6.1688-48.6158 .0505.005.0973-.004.147,0v-36.7182c-.0505.004-.0973-.005-.147,0-.8595-16.7654-3.0892-33.0202-6.1688-48.6158zm68.5906,23.9409c-23.7331,0-43.0343,19.301-43.0343,43.034s19.3012,43.0341 43.0343,43.0341 43.0343-19.301 43.0343-43.0341-19.3013-43.034-43.0343-43.034zm-117.0592,160.093c-23.8901,62.5423-66.3585,106.8571-116.031,116.0315 9.174-49.6742 53.4903-92.1396 116.031-116.0315zm234.1183,0c62.4979,23.8924 106.7117,66.3573 115.8842,116.0315-49.6112-9.2341-92.017-53.5494-115.8842-116.0315zm-117.0591,54.9316c37.9729,0 68.7374,6.6749 68.7374,14.9808s-30.7645,14.9817-68.7374,14.9817-68.7374-6.6744-68.7374-14.9817 30.7645-14.9808 68.7374-14.9808z"
          fill={fill || '#fff'}
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};
